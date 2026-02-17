import { describe, expect, it, vi } from "vitest";
import { legalReviewHandlers } from "./legal-review.js";

const mocks = vi.hoisted(() => ({
  runLegalReview: vi.fn(),
}));

vi.mock("../../agents/legal-review.js", async () => {
  const actual = await vi.importActual<typeof import("../../agents/legal-review.js")>(
    "../../agents/legal-review.js",
  );
  return {
    ...actual,
    runLegalReview: mocks.runLegalReview,
  };
});

describe("legal.review", () => {
  it("returns invalid request when no content is provided", async () => {
    const respond = vi.fn();

    await legalReviewHandlers["legal.review"]({
      params: {},
      respond,
      client: null,
      context: {} as never,
      req: { id: "1", type: "req", method: "legal.review" },
      isWebchatConnect: () => false,
    });

    expect(respond).toHaveBeenCalledWith(
      false,
      undefined,
      expect.objectContaining({ message: expect.stringContaining("contractText or sections") }),
    );
  });

  it("runs review and returns payload", async () => {
    mocks.runLegalReview.mockResolvedValue({
      validatedFindings: [{ findingId: "f1", status: "validated" }],
      needsHumanReview: [],
      keyAreas: [{ title: "liability", severity: "high", findingIds: ["f1"] }],
      trace: [],
    });

    const respond = vi.fn();

    await legalReviewHandlers["legal.review"]({
      params: {
        sourceDocumentId: "doc-123",
        contractText: "This Agreement is governed by New York law.",
        jurisdiction: "us",
        contractType: "msa",
      },
      respond,
      client: null,
      context: {} as never,
      req: { id: "2", type: "req", method: "legal.review" },
      isWebchatConnect: () => false,
    });

    expect(mocks.runLegalReview).toHaveBeenCalledWith(
      expect.objectContaining({
        document: expect.objectContaining({
          sourceDocumentId: "doc-123",
          contractText: "This Agreement is governed by New York law.",
          metadata: expect.objectContaining({
            governingLaw: "us",
            contractTypeHint: "msa",
          }),
        }),
      }),
    );

    expect(respond).toHaveBeenCalledWith(
      true,
      expect.objectContaining({
        validatedFindings: expect.any(Array),
        needsHumanReview: expect.any(Array),
      }),
      undefined,
    );
  });

  it("passes hybrid LLM options when useLlm is enabled", async () => {
    mocks.runLegalReview.mockResolvedValue({
      validatedFindings: [],
      needsHumanReview: [],
      keyAreas: [],
      trace: [],
    });

    const respond = vi.fn();

    await legalReviewHandlers["legal.review"]({
      params: {
        contractText: "This Agreement is governed by the laws of Kenya.",
        jurisdiction: "ke",
        contractType: "msa",
        useLlm: true,
        llmTimeoutMs: 12000,
      },
      respond,
      client: null,
      context: {} as never,
      req: { id: "3", type: "req", method: "legal.review" },
      isWebchatConnect: () => false,
    });

    expect(mocks.runLegalReview).toHaveBeenCalledWith(
      expect.objectContaining({
        llm: expect.objectContaining({
          enabled: true,
          timeoutMs: 12000,
        }),
      }),
    );
    expect(respond).toHaveBeenCalledWith(true, expect.any(Object), undefined);
  });

  it("returns markdown payload for whatsapp channel", async () => {
    mocks.runLegalReview.mockResolvedValue({
      validatedFindings: [
        {
          findingId: "f1",
          title: "Liability cap ambiguity",
          severity: "high",
          whyItMatters: "Cap carve-outs are unclear.",
          reasons: [],
          status: "validated",
          evidence: {
            sourceDocumentId: "doc-1",
            page: 4,
            section: "Liability",
            quote: "Liability shall be limited...",
          },
        },
      ],
      needsHumanReview: [],
      keyAreas: [{ title: "liability", severity: "high", findingIds: ["f1"] }],
      trace: [],
    });

    const respond = vi.fn();
    await legalReviewHandlers["legal.review"]({
      params: {
        contractText: "This Agreement is governed by the laws of Kenya.",
        jurisdiction: "ke",
        channel: "whatsapp",
      },
      respond,
      client: null,
      context: {} as never,
      req: { id: "4", type: "req", method: "legal.review" },
      isWebchatConnect: () => false,
    });

    expect(respond).toHaveBeenCalledWith(
      true,
      expect.objectContaining({
        format: "markdown",
        markdown: expect.stringContaining("# Contract Review Summary"),
        result: expect.any(Object),
      }),
      undefined,
    );
  });
});
