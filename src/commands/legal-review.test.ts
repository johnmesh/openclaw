import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import type { OpenClawConfig } from "../config/config.js";

const mocks = vi.hoisted(() => ({
  extractFileContentFromSource: vi.fn(),
  runEmbeddedPiAgent: vi.fn(),
}));

vi.mock("../media/input-files.js", async () => {
  const actual =
    await vi.importActual<typeof import("../media/input-files.js")>("../media/input-files.js");
  return {
    ...actual,
    extractFileContentFromSource: mocks.extractFileContentFromSource,
  };
});

vi.mock("../agents/pi-embedded.js", async () => {
  const actual = await vi.importActual<typeof import("../agents/pi-embedded.js")>(
    "../agents/pi-embedded.js",
  );
  return {
    ...actual,
    runEmbeddedPiAgent: mocks.runEmbeddedPiAgent,
  };
});

let loadContractDocument: typeof import("./legal-review.js").loadContractDocument;
let tempDir = os.tmpdir();
const cfg = { agents: { defaults: {} } } as OpenClawConfig;

beforeAll(async () => {
  const globalWithFile = globalThis as typeof globalThis & {
    File?: new (...args: unknown[]) => unknown;
  };
  if (!globalWithFile.File) {
    globalWithFile.File = class FilePolyfill {};
  }
  tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "openclaw-legal-review-test-"));
  ({ loadContractDocument } = await import("./legal-review.js"));
});

afterAll(async () => {
  await fs.rm(tempDir, { recursive: true, force: true });
});

beforeEach(() => {
  mocks.extractFileContentFromSource.mockReset();
  mocks.runEmbeddedPiAgent.mockReset();
});

describe("loadContractDocument", () => {
  it("skips OCR when extracted legal text quality is already good", async () => {
    const pdfPath = path.join(tempDir, "good.pdf");
    await fs.writeFile(pdfPath, "fake-pdf");

    const seed = [
      "SECTION 1 DEFINITIONS",
      "The parties shall comply with payment obligations.",
      "SECTION 2 LIABILITY",
      "Liability cap and indemnity are defined under this agreement.",
      "SECTION 3 GOVERNING LAW",
      "This Agreement is governed by the laws of Kenya.",
    ].join("\n");
    const strongText = new Array(120).fill(seed).join("\n\n");

    mocks.extractFileContentFromSource.mockResolvedValue({
      filename: "good.pdf",
      text: strongText,
      images: [{ type: "image", data: "x", mimeType: "image/png" }],
    });

    const document = await loadContractDocument(
      { file: pdfPath, format: "pdf", useLlm: true },
      cfg,
    );

    expect(document.contractText).toContain("governed by the laws of Kenya");
    expect(mocks.runEmbeddedPiAgent).not.toHaveBeenCalled();
  });

  it("uses OCR when extracted text quality is weak", async () => {
    const pdfPath = path.join(tempDir, "weak.pdf");
    await fs.writeFile(pdfPath, "fake-pdf");

    mocks.extractFileContentFromSource.mockResolvedValue({
      filename: "weak.pdf",
      text: "scan",
      images: [{ type: "image", data: "x", mimeType: "image/png" }],
    });
    mocks.runEmbeddedPiAgent.mockResolvedValue({
      payloads: [
        {
          text: "SECTION 1 PAYMENT TERMS\nPayment due in 30 days.\nSECTION 2 GOVERNING LAW\nLaws of Kenya apply.",
        },
      ],
    });

    const document = await loadContractDocument(
      { file: pdfPath, format: "pdf", useLlm: true, llmTimeoutMs: 20_000 },
      cfg,
    );

    expect(mocks.runEmbeddedPiAgent).toHaveBeenCalled();
    expect(document.contractText).toContain("SECTION 1 PAYMENT TERMS");
    expect(document.contractText).toContain("Laws of Kenya apply.");
  });
});
