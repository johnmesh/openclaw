import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import type { OpenClawConfig } from "../../config/config.js";
import { handleLegalReviewCommand } from "./commands-legal-review.js";

const mocks = vi.hoisted(() => ({
  runLegalReview: vi.fn(),
  buildPlainEnglishLegalReviewMarkdown: vi.fn(),
  loadContractDocument: vi.fn(),
}));

vi.mock("../../agents/legal-review.js", async () => {
  const actual = await vi.importActual<typeof import("../../agents/legal-review.js")>(
    "../../agents/legal-review.js",
  );
  return {
    ...actual,
    runLegalReview: mocks.runLegalReview,
    buildPlainEnglishLegalReviewMarkdown: mocks.buildPlainEnglishLegalReviewMarkdown,
  };
});

vi.mock("../../commands/legal-review.js", async () => {
  const actual = await vi.importActual<typeof import("../../commands/legal-review.js")>(
    "../../commands/legal-review.js",
  );
  return {
    ...actual,
    loadContractDocument: mocks.loadContractDocument,
  };
});

let workspaceDir = os.tmpdir();

beforeAll(async () => {
  workspaceDir = await fs.mkdtemp(path.join(os.tmpdir(), "openclaw-legal-review-command-"));
});

afterAll(async () => {
  await fs.rm(workspaceDir, { recursive: true, force: true });
});

function buildParams(overrides?: {
  commandBodyNormalized?: string;
  mediaPath?: string;
  mediaPaths?: string[];
  isAuthorizedSender?: boolean;
}) {
  const cfg = {
    commands: { text: true },
    channels: { whatsapp: { allowFrom: ["*"] } },
  } as OpenClawConfig;
  return {
    cfg,
    command: {
      commandBodyNormalized: overrides?.commandBodyNormalized ?? "/legal-review kenya",
      isAuthorizedSender: overrides?.isAuthorizedSender ?? true,
      senderId: "+254700000001",
    },
    ctx: {
      MediaPath: overrides?.mediaPath,
      MediaPaths: overrides?.mediaPaths,
    },
    workspaceDir,
  } as never;
}

describe("handleLegalReviewCommand", () => {
  it("asks for a PDF when attachment is missing", async () => {
    const result = await handleLegalReviewCommand(buildParams(), true);
    expect(result?.shouldContinue).toBe(false);
    expect(result?.reply?.text).toContain("Please attach a PDF contract");
  });

  it("runs review for attached PDFs", async () => {
    const pdfPath = path.join(workspaceDir, "lease.pdf");
    await fs.writeFile(pdfPath, "fake");

    mocks.loadContractDocument.mockResolvedValue({
      sourceDocumentId: "lease.pdf",
      contractText: "sample",
      sections: [{ page: 1, section: "Section 1", text: "sample" }],
      metadata: {},
    });
    mocks.runLegalReview.mockResolvedValue({
      validatedFindings: [],
      needsHumanReview: [],
      keyAreas: [],
      trace: [],
    });
    mocks.buildPlainEnglishLegalReviewMarkdown.mockReturnValue("# Contract Summary");

    const result = await handleLegalReviewCommand(
      buildParams({
        mediaPath: pdfPath,
        commandBodyNormalized: "/legal-review --jurisdiction kenya --llm-timeout-ms 120000",
      }),
      true,
    );

    expect(result?.shouldContinue).toBe(false);
    expect(result?.reply?.text).toBe("# Contract Summary");
    expect(mocks.loadContractDocument).toHaveBeenCalledWith(
      expect.objectContaining({
        file: pdfPath,
        format: "pdf",
        jurisdiction: "kenya",
        useLlm: true,
        llmTimeoutMs: 120000,
      }),
      expect.any(Object),
    );
    expect(mocks.runLegalReview).toHaveBeenCalled();
  });

  it("returns a friendly message when PDF is too large", async () => {
    const pdfPath = path.join(workspaceDir, "large.pdf");
    await fs.writeFile(pdfPath, "fake");

    mocks.loadContractDocument.mockRejectedValueOnce(
      new Error("PDF is too large. Maximum supported size is 25.0 MB."),
    );

    const result = await handleLegalReviewCommand(
      buildParams({
        mediaPath: pdfPath,
        commandBodyNormalized: "/legal-review kenya",
      }),
      true,
    );

    expect(result?.shouldContinue).toBe(false);
    expect(result?.reply?.isError).toBe(true);
    expect(result?.reply?.text).toContain("Current limit: 25 MB");
  });
});
