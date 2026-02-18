import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import type { OpenClawConfig } from "../../config/config.js";
import type { ContractDocument } from "./types.js";
import { llmClauseExtractor } from "./llm-agents.js";

const mocks = vi.hoisted(() => ({
  runEmbeddedPiAgent: vi.fn(),
}));

vi.mock("../pi-embedded.js", async () => {
  const actual = await vi.importActual<typeof import("../pi-embedded.js")>("../pi-embedded.js");
  return {
    ...actual,
    runEmbeddedPiAgent: mocks.runEmbeddedPiAgent,
  };
});

beforeAll(() => {
  const globalWithFile = globalThis as typeof globalThis & {
    File?: new (...args: unknown[]) => unknown;
  };
  if (!globalWithFile.File) {
    globalWithFile.File = class FilePolyfill {};
  }
});

beforeEach(() => {
  mocks.runEmbeddedPiAgent.mockReset();
});

function buildDocument(sectionCount: number): ContractDocument {
  return {
    sourceDocumentId: "doc-1",
    contractText: "Sample",
    sections: new Array(sectionCount).fill(null).map((_, idx) => ({
      page: idx + 1,
      section: `Section ${idx + 1}`,
      text: `Clause text for section ${idx + 1}. Liability, payment, and governing law details.`,
    })),
    metadata: {
      governingLaw: "kenya",
      contractTypeHint: "services_agreement",
    },
  };
}

const cfg = { agents: { defaults: {} } } as OpenClawConfig;

describe("llmClauseExtractor", () => {
  it("covers the full document via chunking and de-duplicates overlap findings", async () => {
    const document = buildDocument(25);

    mocks.runEmbeddedPiAgent.mockImplementation(async ({ prompt }) => {
      const textPrompt = String(prompt);
      if (textPrompt.includes("Chunk: 1/3")) {
        return {
          payloads: [
            {
              text: JSON.stringify([
                {
                  findingId: "f-1",
                  title: "Liability cap unclear",
                  clauseType: "liability",
                  severity: "high",
                  whyItMatters: "Unclear cap increases risk.",
                  recommendedAction: "Set explicit cap.",
                  confidence: 0.7,
                  evidence: {
                    page: 11,
                    section: "Section 11",
                    quote: "Clause text for section 11.",
                  },
                },
              ]),
            },
          ],
        };
      }
      if (textPrompt.includes("Chunk: 2/3")) {
        return {
          payloads: [
            {
              text: JSON.stringify([
                {
                  findingId: "f-1-overlap",
                  title: "Liability cap unclear",
                  clauseType: "liability",
                  severity: "high",
                  whyItMatters: "Unclear cap increases risk.",
                  recommendedAction: "Set explicit cap.",
                  confidence: 0.9,
                  evidence: {
                    page: 11,
                    section: "Section 11",
                    quote: "Clause text for section 11.",
                  },
                },
              ]),
            },
          ],
        };
      }
      if (textPrompt.includes("Chunk: 3/3")) {
        return {
          payloads: [
            {
              text: JSON.stringify([
                {
                  findingId: "f-late",
                  title: "Governing law confirmed",
                  clauseType: "dispute_resolution",
                  severity: "medium",
                  whyItMatters: "Late section still captured.",
                  recommendedAction: "Validate forum wording.",
                  confidence: 0.85,
                  evidence: {
                    page: 25,
                    section: "Section 25",
                    quote: "Clause text for section 25.",
                  },
                },
              ]),
            },
          ],
        };
      }
      return { payloads: [{ text: "[]" }] };
    });

    const findings = await llmClauseExtractor({
      document,
      jurisdiction: { jurisdiction: "ke", confidence: 0.9, source: "metadata_hint" },
      contractType: { contractType: "services_agreement", confidence: 0.8 },
      runId: "run-1",
      cfg,
      timeoutMs: 5_000,
    });

    expect(mocks.runEmbeddedPiAgent).toHaveBeenCalledTimes(3);
    expect(findings).not.toBeNull();
    expect(findings?.some((finding) => finding.evidence?.page === 25)).toBe(true);
    const overlap = findings?.find((finding) => finding.evidence?.page === 11);
    expect(overlap?.confidence).toBe(0.9);
  });
});
