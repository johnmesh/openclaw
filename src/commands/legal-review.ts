import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import type { ContractDocument, DocumentSection } from "../agents/legal-review.js";
import type { OpenClawConfig } from "../config/config.js";
import type { RuntimeEnv } from "../runtime.js";
import {
  resolveAgentDir,
  resolveAgentWorkspaceDir,
  resolveDefaultAgentId,
} from "../agents/agent-scope.js";
import { runLegalReview } from "../agents/legal-review.js";
import { runEmbeddedPiAgent } from "../agents/pi-embedded.js";
import { loadConfig } from "../config/config.js";
import {
  DEFAULT_INPUT_FILE_MAX_BYTES,
  DEFAULT_INPUT_FILE_MAX_CHARS,
  DEFAULT_INPUT_MAX_REDIRECTS,
  DEFAULT_INPUT_PDF_MAX_PAGES,
  DEFAULT_INPUT_PDF_MAX_PIXELS,
  DEFAULT_INPUT_PDF_MIN_TEXT_CHARS,
  DEFAULT_INPUT_TIMEOUT_MS,
  extractFileContentFromSource,
  type InputFileExtractResult,
  type InputImageContent,
} from "../media/input-files.js";

export type LegalReviewCommandOptions = {
  file?: string;
  format?: "txt" | "json" | "pdf";
  json?: boolean;
  jurisdiction?: string;
  contractType?: string;
  runId?: string;
  minConfidence?: number;
  highSeverityMinConfidence?: number;
  maxAttempts?: number;
  useLlm?: boolean;
  llmTimeoutMs?: number;
};

const LEGAL_PDF_MAX_PAGES = 40;
const LEGAL_PDF_MAX_BYTES = 25 * 1024 * 1024;

function bytesToMb(bytes: number): string {
  return (bytes / (1024 * 1024)).toFixed(1);
}

function normalizeLegalTextContent(text: string): string {
  if (!text.trim()) {
    return "";
  }
  return text
    .replace(/\r\n/g, "\n")
    .replace(/([A-Za-z])-\n([A-Za-z])/g, "$1$2")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function scoreLegalTextQuality(text: string): number {
  if (!text.trim()) {
    return 0;
  }
  const compact = text.toLowerCase();
  const tokenCount = compact.split(/\s+/).filter(Boolean).length;
  const legalSignals = [
    /\bsection\b/g,
    /\bclause\b/g,
    /\barticle\b/g,
    /\bgoverning law\b/g,
    /\bjurisdiction\b/g,
    /\bliability\b/g,
    /\bindemn(?:ity|ify)\b/g,
    /\btermination\b/g,
    /\bpayment\b/g,
    /\bconfidential(?:ity)?\b/g,
    /\bshall\b/g,
    /\bhereby\b/g,
  ].reduce((count, pattern) => count + (compact.match(pattern)?.length ?? 0), 0);
  const lineCount = text.split("\n").filter((line) => line.trim().length > 0).length;
  const lengthScore = Math.min(300, tokenCount * 0.08);
  const structureScore = Math.min(80, lineCount * 0.4);
  const signalScore = legalSignals * 6;
  return lengthScore + structureScore + signalScore;
}

function chooseBestLegalText(params: { extractedText: string; ocrText: string }): string {
  const extracted = normalizeLegalTextContent(params.extractedText);
  const ocr = normalizeLegalTextContent(params.ocrText);
  if (!extracted) {
    return ocr;
  }
  if (!ocr) {
    return extracted;
  }
  const extractedScore = scoreLegalTextQuality(extracted);
  const ocrScore = scoreLegalTextQuality(ocr);
  return ocrScore > extractedScore * 1.1 ? ocr : extracted;
}

function toFriendlyPdfLimitError(error: unknown): Error {
  const text = String(error);
  if (text.includes("File too large:")) {
    return new Error(
      `PDF is too large. Maximum supported size is ${bytesToMb(LEGAL_PDF_MAX_BYTES)} MB.`,
    );
  }
  if (text.includes("PDF has") && text.includes("pages (limit:")) {
    return new Error(`PDF is too long. Maximum supported length is ${LEGAL_PDF_MAX_PAGES} pages.`);
  }
  return error instanceof Error ? error : new Error(text);
}

async function extractScannedPdfTextWithLlm(params: {
  images: InputImageContent[];
  cfg: OpenClawConfig;
  runId: string;
  timeoutMs?: number;
}): Promise<string> {
  if (params.images.length === 0) {
    return "";
  }

  const agentId = resolveDefaultAgentId(params.cfg);
  const workspaceDir = resolveAgentWorkspaceDir(params.cfg, agentId);
  const agentDir = resolveAgentDir(params.cfg, agentId);
  const timeoutMs = Math.max(10_000, params.timeoutMs ?? 45_000);
  const textParts: string[] = [];
  let failedPages = 0;

  for (let i = 0; i < params.images.length; i += 1) {
    const image = params.images[i];
    const sessionFile = path.join(
      os.tmpdir(),
      `openclaw-legal-ocr-${Date.now()}-${Math.random().toString(36).slice(2)}.jsonl`,
    );
    const prompt =
      "Transcribe this scanned legal contract page exactly as plain text. " +
      "Preserve section numbers, headings, line breaks, and clause ordering. " +
      "If there is a table, place each row on its own line. " +
      "Return only the transcribed text with no commentary.";

    try {
      const runOcr = async (attemptTimeoutMs: number) =>
        runEmbeddedPiAgent({
          sessionId: `legal-ocr-${Date.now()}-${i + 1}`,
          sessionKey: `temp:legal-ocr:${params.runId}:${i + 1}`,
          agentId,
          sessionFile,
          workspaceDir,
          agentDir,
          config: params.cfg,
          prompt,
          images: [image],
          disableTools: true,
          timeoutMs: attemptTimeoutMs,
          runId: `${params.runId}-ocr-${i + 1}`,
        });

      let result;
      try {
        result = await runOcr(timeoutMs);
      } catch {
        result = await runOcr(Math.max(timeoutMs, 120_000));
      }
      const text =
        result.payloads
          ?.map((payload) => payload.text ?? "")
          .join("\n")
          .trim() ?? "";
      if (text) {
        textParts.push(text);
      }
    } catch {
      failedPages += 1;
    } finally {
      await fs.rm(sessionFile, { force: true }).catch(() => undefined);
    }
  }

  if (textParts.length === 0 && failedPages > 0) {
    throw new Error(
      `Built-in OCR timed out or failed for ${failedPages} page(s). ` +
        "Try --llm-timeout-ms 120000 and rerun.",
    );
  }

  return normalizeLegalTextContent(textParts.join("\n\f\n"));
}

function parseSectionsFromText(text: string): DocumentSection[] {
  const headingRe =
    /^(?:(?:section|clause|article)\s+[a-z0-9]+[\s.:_-]+.+|\d+(?:\.\d+){0,3}[\s.)_-]+.+|[A-Z][A-Z0-9\s,&/()-]{8,})$/;
  const pages = text
    .split("\f")
    .map((page) => page.trim())
    .filter(Boolean);
  const sourcePages = pages.length > 0 ? pages : [text];
  const sections: DocumentSection[] = [];

  for (let pageIndex = 0; pageIndex < sourcePages.length; pageIndex += 1) {
    const pageNumber = pageIndex + 1;
    const lines = sourcePages[pageIndex]
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length === 0) {
      continue;
    }

    let currentHeading = "";
    let buffer: string[] = [];
    const flush = () => {
      if (buffer.length === 0) {
        return;
      }
      const body = buffer.join("\n").trim();
      if (!body) {
        buffer = [];
        return;
      }
      sections.push({
        page: pageNumber,
        section: currentHeading || `Section ${sections.length + 1}`,
        text: body,
      });
      buffer = [];
    };

    for (const line of lines) {
      const compact = line.replace(/\s+/g, " ").trim();
      const looksLikeHeading = headingRe.test(compact) && compact.length <= 160;
      if (looksLikeHeading) {
        flush();
        currentHeading = compact;
        continue;
      }
      buffer.push(compact);
    }
    flush();
  }

  if (sections.length > 0) {
    return sections;
  }

  return text
    .split(/\n\s*\n+/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk, index) => ({
      page: 1,
      section: `Section ${index + 1}`,
      text: chunk,
    }));
}

function coerceDocumentFromUnknown(params: {
  input: unknown;
  fallbackSourceDocumentId: string;
  jurisdiction?: string;
  contractType?: string;
}): ContractDocument {
  const record =
    params.input && typeof params.input === "object"
      ? (params.input as Record<string, unknown>)
      : undefined;
  if (!record) {
    throw new Error("JSON input must be an object");
  }

  const sourceDocumentId =
    typeof record.sourceDocumentId === "string" && record.sourceDocumentId.trim().length > 0
      ? record.sourceDocumentId.trim()
      : params.fallbackSourceDocumentId;

  const contractTextRaw =
    typeof record.contractText === "string" ? record.contractText : JSON.stringify(record);
  const sectionsRaw = Array.isArray(record.sections) ? record.sections : [];
  const sections = sectionsRaw
    .map((entry): DocumentSection | null => {
      if (!entry || typeof entry !== "object") {
        return null;
      }
      const sectionRecord = entry as Record<string, unknown>;
      const page =
        typeof sectionRecord.page === "number" && Number.isFinite(sectionRecord.page)
          ? Math.max(1, Math.floor(sectionRecord.page))
          : 1;
      const section =
        typeof sectionRecord.section === "string" && sectionRecord.section.trim().length > 0
          ? sectionRecord.section.trim()
          : "Section";
      const text = typeof sectionRecord.text === "string" ? sectionRecord.text : "";
      if (!text.trim()) {
        return null;
      }
      return { page, section, text };
    })
    .filter((entry): entry is DocumentSection => entry !== null);

  const metadataRaw =
    record.metadata && typeof record.metadata === "object"
      ? (record.metadata as Record<string, unknown>)
      : undefined;

  return {
    sourceDocumentId,
    contractText: contractTextRaw,
    sections: sections.length > 0 ? sections : parseSectionsFromText(contractTextRaw),
    metadata: {
      governingLaw:
        params.jurisdiction ??
        (typeof metadataRaw?.governingLaw === "string" ? metadataRaw.governingLaw : undefined),
      contractTypeHint:
        params.contractType ??
        (typeof metadataRaw?.contractTypeHint === "string"
          ? metadataRaw.contractTypeHint
          : undefined),
    },
  };
}

export async function loadContractDocument(
  opts: LegalReviewCommandOptions,
  cfg: OpenClawConfig,
): Promise<ContractDocument> {
  const file = opts.file?.trim();
  if (!file) {
    throw new Error("--file is required");
  }
  const ext = path.extname(file).toLowerCase();
  const format = opts.format ?? (ext === ".json" ? "json" : ext === ".pdf" ? "pdf" : "txt");
  const sourceDocumentId = path.basename(file);

  if (format === "pdf") {
    const buffer = await fs.readFile(file);
    if (buffer.byteLength > LEGAL_PDF_MAX_BYTES) {
      throw new Error(
        `PDF is too large. Maximum supported size is ${bytesToMb(LEGAL_PDF_MAX_BYTES)} MB.`,
      );
    }
    let extracted: InputFileExtractResult;
    try {
      extracted = await extractFileContentFromSource({
        source: {
          type: "base64",
          data: buffer.toString("base64"),
          mediaType: "application/pdf",
          filename: sourceDocumentId,
        },
        limits: {
          allowUrl: false,
          allowedMimes: new Set(["application/pdf"]),
          maxBytes: Math.max(LEGAL_PDF_MAX_BYTES, DEFAULT_INPUT_FILE_MAX_BYTES),
          maxChars: DEFAULT_INPUT_FILE_MAX_CHARS,
          maxRedirects: DEFAULT_INPUT_MAX_REDIRECTS,
          timeoutMs: DEFAULT_INPUT_TIMEOUT_MS,
          pdf: {
            maxPages: Math.max(LEGAL_PDF_MAX_PAGES, DEFAULT_INPUT_PDF_MAX_PAGES),
            maxPixels: DEFAULT_INPUT_PDF_MAX_PIXELS,
            minTextChars: DEFAULT_INPUT_PDF_MIN_TEXT_CHARS,
            failOnPageOverflow: true,
          },
        },
      });
    } catch (error) {
      throw toFriendlyPdfLimitError(error);
    }

    let text = normalizeLegalTextContent(extracted.text?.trim() ?? "");
    if (opts.useLlm && extracted.images && extracted.images.length > 0) {
      const shouldRunOcr = !text || text.length < 4_000 || scoreLegalTextQuality(text) < 220;
      if (shouldRunOcr) {
        const ocrText = await extractScannedPdfTextWithLlm({
          images: extracted.images,
          cfg,
          runId: opts.runId?.trim() || `legal-review-${Date.now()}`,
          timeoutMs: opts.llmTimeoutMs ?? 90_000,
        });
        text = chooseBestLegalText({ extractedText: text, ocrText });
      }
    }
    if (!text) {
      throw new Error(
        "Could not extract readable text from PDF. This appears to be scanned/image-only. " +
          "Run with --use-llm (built-in OCR fallback) or OCR the PDF first.",
      );
    }

    return {
      sourceDocumentId,
      contractText: text,
      sections: parseSectionsFromText(text),
      metadata: {
        governingLaw: opts.jurisdiction,
        contractTypeHint: opts.contractType,
      },
    };
  }

  const content = await fs.readFile(file, "utf8");

  if (format === "json") {
    let parsed: unknown;
    try {
      parsed = JSON.parse(content);
    } catch {
      throw new Error("Invalid JSON input file");
    }
    return coerceDocumentFromUnknown({
      input: parsed,
      fallbackSourceDocumentId: sourceDocumentId,
      jurisdiction: opts.jurisdiction,
      contractType: opts.contractType,
    });
  }

  return {
    sourceDocumentId,
    contractText: content,
    sections: parseSectionsFromText(content),
    metadata: {
      governingLaw: opts.jurisdiction,
      contractTypeHint: opts.contractType,
    },
  };
}

function printTextSummary(result: Awaited<ReturnType<typeof runLegalReview>>, runtime: RuntimeEnv) {
  runtime.log(`Clear findings (with evidence): ${result.validatedFindings.length}`);
  runtime.log(`Items that need lawyer review: ${result.needsHumanReview.length}`);
  if (result.keyAreas.length > 0) {
    runtime.log("Main things to watch:");
    for (const area of result.keyAreas) {
      runtime.log(`- ${area.title} [${area.severity}] (${area.findingIds.length})`);
    }
  }
}

export async function legalReviewCommand(opts: LegalReviewCommandOptions, runtime: RuntimeEnv) {
  const cfg = loadConfig();
  const document = await loadContractDocument(opts, cfg);
  const result = await runLegalReview({
    document,
    runId: opts.runId?.trim() || `legal-review-${Date.now()}`,
    maxAttempts: opts.maxAttempts,
    minConfidence: opts.minConfidence,
    highSeverityMinConfidence: opts.highSeverityMinConfidence,
    llm: opts.useLlm
      ? {
          enabled: true,
          timeoutMs: opts.llmTimeoutMs,
          config: cfg,
        }
      : undefined,
  });

  if (opts.json) {
    runtime.log(JSON.stringify(result, null, 2));
    return;
  }
  printTextSummary(result, runtime);
}
