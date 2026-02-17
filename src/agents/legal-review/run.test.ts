import { beforeAll, describe, expect, it, vi } from "vitest";
import type { ContractDocument, LegalReviewDeps } from "./types.js";

let runLegalReview: typeof import("./run.js").runLegalReview;
let LegalReviewRetryableError: typeof import("./types.js").LegalReviewRetryableError;

beforeAll(async () => {
  const globalWithFile = globalThis as typeof globalThis & {
    File?: new (...args: unknown[]) => unknown;
  };
  if (!globalWithFile.File) {
    globalWithFile.File = class FilePolyfill {};
  }

  ({ runLegalReview } = await import("./run.js"));
  ({ LegalReviewRetryableError } = await import("./types.js"));
});

const baseDocument: ContractDocument = {
  sourceDocumentId: "doc-1",
  contractText: "Master Services Agreement",
  sections: [
    {
      page: 1,
      section: "8. Liability",
      text: "Liability is limited to fees paid in the prior 12 months.",
    },
  ],
  metadata: {
    governingLaw: "us",
    contractTypeHint: "msa",
  },
};

function createDeps(overrides?: Partial<LegalReviewDeps>): LegalReviewDeps {
  return {
    jurisdictionResolver: async () => ({
      jurisdiction: "us",
      confidence: 0.9,
      source: "metadata_hint",
    }),
    contractTypeClassifier: async () => ({
      contractType: "msa",
      confidence: 0.9,
    }),
    rulePackSelector: async () => ({
      id: "us-pack",
      version: "v1",
      jurisdiction: "us",
      effectiveFrom: "2026-01-01",
      contractTypes: ["msa"],
      rules: [
        {
          id: "US-LIAB-001",
          clauseType: "liability",
          title: "Liability cap",
          description: "Liability cap must be explicit.",
          defaultSeverity: "high",
        },
      ],
    }),
    clauseExtractor: async ({ document }) => [
      {
        findingId: "f1",
        title: "Liability cap broad",
        clauseType: "liability",
        severity: "high",
        whyItMatters: "Cap may be too broad.",
        recommendedAction: "Review cap carve-outs.",
        applicableJurisdiction: "us",
        confidence: 0.92,
        evidence: {
          sourceDocumentId: document.sourceDocumentId,
          page: 1,
          section: "8. Liability",
          quote: "Liability is limited to fees paid in the prior 12 months.",
          evidenceHash: "hash",
        },
      },
    ],
    ruleMatcher: async ({ proposedFindings }) => proposedFindings,
    riskScorer: async ({ findings }) => findings,
    evidenceVerifier: async ({ findings }) =>
      findings.map((finding) => ({ ...finding, verifierApproved: true })),
    synthesizer: async ({ validatedFindings }) =>
      validatedFindings.map((finding) => ({
        title: finding.title,
        severity: finding.severity,
        findingIds: [finding.findingId],
      })),
    ...overrides,
  };
}

describe("runLegalReview", () => {
  it("returns validated findings when all fail-closed gates pass", async () => {
    const result = await runLegalReview(
      {
        document: baseDocument,
        runId: "run-1",
      },
      createDeps(),
    );

    expect(result.validatedFindings).toHaveLength(1);
    expect(result.needsHumanReview).toHaveLength(0);
    expect(result.validatedFindings[0]?.status).toBe("validated");
    expect(result.trace).toHaveLength(1);
  });

  it("routes finding to needs_human_review when evidence is missing", async () => {
    const result = await runLegalReview(
      {
        document: baseDocument,
        runId: "run-2",
      },
      createDeps({
        clauseExtractor: async () => [
          {
            findingId: "f1",
            title: "Liability cap broad",
            clauseType: "liability",
            severity: "high",
            whyItMatters: "Cap may be too broad.",
            recommendedAction: "Review cap carve-outs.",
            applicableJurisdiction: "us",
            confidence: 0.92,
          },
        ],
      }),
    );

    expect(result.validatedFindings).toHaveLength(0);
    expect(result.needsHumanReview).toHaveLength(1);
    expect(result.needsHumanReview[0]?.reasons).toContain("missing_evidence");
  });

  it("routes finding to needs_human_review on jurisdiction mismatch", async () => {
    const result = await runLegalReview(
      {
        document: baseDocument,
        runId: "run-3",
      },
      createDeps({
        clauseExtractor: async ({ document }) => [
          {
            findingId: "f1",
            title: "Liability cap broad",
            clauseType: "liability",
            severity: "high",
            whyItMatters: "Cap may be too broad.",
            recommendedAction: "Review cap carve-outs.",
            applicableJurisdiction: "uk",
            confidence: 0.92,
            evidence: {
              sourceDocumentId: document.sourceDocumentId,
              page: 1,
              section: "8. Liability",
              quote: "Liability is limited to fees paid in the prior 12 months.",
              evidenceHash: "hash",
            },
          },
        ],
      }),
    );

    expect(result.validatedFindings).toHaveLength(0);
    expect(result.needsHumanReview).toHaveLength(1);
    expect(result.needsHumanReview[0]?.reasons).toContain("jurisdiction_mismatch");
  });

  it("retries retryable errors and succeeds", async () => {
    const clauseExtractor = vi
      .fn<LegalReviewDeps["clauseExtractor"]>()
      .mockRejectedValueOnce(new LegalReviewRetryableError("temporary parser failure"))
      .mockResolvedValue([
        {
          findingId: "f1",
          title: "Liability cap broad",
          clauseType: "liability",
          severity: "high",
          whyItMatters: "Cap may be too broad.",
          recommendedAction: "Review cap carve-outs.",
          applicableJurisdiction: "us",
          confidence: 0.95,
          evidence: {
            sourceDocumentId: baseDocument.sourceDocumentId,
            page: 1,
            section: "8. Liability",
            quote: "Liability is limited to fees paid in the prior 12 months.",
            evidenceHash: "hash",
          },
        },
      ]);

    const result = await runLegalReview(
      {
        document: baseDocument,
        runId: "run-4",
        maxAttempts: 2,
      },
      createDeps({ clauseExtractor }),
    );

    expect(clauseExtractor).toHaveBeenCalledTimes(2);
    expect(result.validatedFindings).toHaveLength(1);
    expect(result.trace).toHaveLength(2);
    expect(result.trace[0]?.retried).toBe(true);
  });
});
