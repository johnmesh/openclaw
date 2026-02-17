import type { ContractDocument, DocumentSection } from "../../agents/legal-review.js";
import type { GatewayRequestHandlers } from "./types.js";
import { buildPlainEnglishLegalReviewMarkdown, runLegalReview } from "../../agents/legal-review.js";
import { loadConfig } from "../../config/config.js";
import { ErrorCodes, errorShape } from "../protocol/index.js";

type LegalReviewRequestParams = {
  sourceDocumentId?: string;
  contractText?: string;
  sections?: Array<{ page?: number; section?: string; text?: string }>;
  jurisdiction?: string;
  contractType?: string;
  runId?: string;
  maxAttempts?: number;
  minConfidence?: number;
  highSeverityMinConfidence?: number;
  useLlm?: boolean;
  llmTimeoutMs?: number;
  channel?: string;
  messageChannel?: string;
  responseFormat?: "json" | "markdown";
};

function coerceSections(input: LegalReviewRequestParams["sections"]): DocumentSection[] {
  if (!Array.isArray(input)) {
    return [];
  }
  return input
    .map((section): DocumentSection | null => {
      if (!section || typeof section !== "object") {
        return null;
      }
      const text = typeof section.text === "string" ? section.text.trim() : "";
      if (!text) {
        return null;
      }
      const page =
        typeof section.page === "number" && Number.isFinite(section.page)
          ? Math.max(1, Math.floor(section.page))
          : 1;
      const sectionName =
        typeof section.section === "string" && section.section.trim().length > 0
          ? section.section.trim()
          : "Section";
      return {
        page,
        section: sectionName,
        text,
      };
    })
    .filter((entry): entry is DocumentSection => entry !== null);
}

function parseNumeric(params: Record<string, unknown>, key: string): number | undefined {
  const value = params[key];
  if (value === undefined || value === null || value === "") {
    return undefined;
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  throw new Error(`invalid ${key}`);
}

function shouldReturnMarkdown(request: LegalReviewRequestParams): boolean {
  if (request.responseFormat === "markdown") {
    return true;
  }
  const channel = (request.messageChannel ?? request.channel ?? "").trim().toLowerCase();
  return channel === "whatsapp";
}

export const legalReviewHandlers: GatewayRequestHandlers = {
  "legal.review": async ({ params, respond }) => {
    try {
      const request = params as unknown as LegalReviewRequestParams;
      const sections = coerceSections(request.sections);
      const contractTextRaw = typeof request.contractText === "string" ? request.contractText : "";
      const contractText = contractTextRaw.trim();
      const sourceDocumentId =
        typeof request.sourceDocumentId === "string" && request.sourceDocumentId.trim().length > 0
          ? request.sourceDocumentId.trim()
          : `gateway-legal-${Date.now()}`;

      if (!contractText && sections.length === 0) {
        respond(
          false,
          undefined,
          errorShape(
            ErrorCodes.INVALID_REQUEST,
            "invalid legal.review params: contractText or sections is required",
          ),
        );
        return;
      }

      const document: ContractDocument = {
        sourceDocumentId,
        contractText: contractText || sections.map((section) => section.text).join("\n\n"),
        sections:
          sections.length > 0 ? sections : [{ page: 1, section: "Section 1", text: contractText }],
        metadata: {
          governingLaw:
            typeof request.jurisdiction === "string" && request.jurisdiction.trim().length > 0
              ? request.jurisdiction.trim()
              : undefined,
          contractTypeHint:
            typeof request.contractType === "string" && request.contractType.trim().length > 0
              ? request.contractType.trim()
              : undefined,
        },
      };

      const result = await runLegalReview({
        document,
        runId:
          typeof request.runId === "string" && request.runId.trim().length > 0
            ? request.runId.trim()
            : `legal-review-${Date.now()}`,
        maxAttempts: parseNumeric(params, "maxAttempts"),
        minConfidence: parseNumeric(params, "minConfidence"),
        highSeverityMinConfidence: parseNumeric(params, "highSeverityMinConfidence"),
        llm:
          request.useLlm === true
            ? {
                enabled: true,
                timeoutMs: parseNumeric(params, "llmTimeoutMs"),
                config: loadConfig(),
              }
            : undefined,
      });

      if (shouldReturnMarkdown(request)) {
        respond(
          true,
          {
            format: "markdown",
            markdown: buildPlainEnglishLegalReviewMarkdown(result),
            result,
          },
          undefined,
        );
        return;
      }

      respond(true, result, undefined);
    } catch (error) {
      respond(false, undefined, errorShape(ErrorCodes.INVALID_REQUEST, String(error)));
    }
  },
};
