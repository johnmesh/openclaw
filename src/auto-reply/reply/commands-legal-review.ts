import fs from "node:fs/promises";
import path from "node:path";
import type { CommandHandler } from "./commands-types.js";
import { buildPlainEnglishLegalReviewMarkdown, runLegalReview } from "../../agents/legal-review.js";
import { loadContractDocument } from "../../commands/legal-review.js";
import { logVerbose } from "../../globals.js";

type LegalReviewOptions = {
  jurisdiction: string;
  useLlm: boolean;
  llmTimeoutMs?: number;
};

function formatLegalReviewError(error: unknown): string {
  const message = String(error);
  if (message.includes("too large")) {
    return (
      "This PDF is too large for legal review.\n" +
      "Current limit: 25 MB.\n" +
      "Please upload a smaller PDF."
    );
  }
  if (message.includes("too long") || message.includes("pages (limit:")) {
    return (
      "This PDF is too long for legal review.\n" +
      "Current limit: 40 pages.\n" +
      "Please split the document and send one part at a time."
    );
  }
  return `Legal review failed: ${message}`;
}

function parseLegalReviewOptions(commandBodyNormalized: string): LegalReviewOptions {
  const defaultOptions: LegalReviewOptions = {
    jurisdiction: "kenya",
    useLlm: true,
  };

  const argText = commandBodyNormalized.replace(/^\/legal-review\b/i, "").trim();
  if (!argText) {
    return defaultOptions;
  }

  const tokens = argText.split(/\s+/).filter(Boolean);
  let jurisdictionSet = false;
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    const lower = token.toLowerCase();

    if (lower === "--no-llm") {
      defaultOptions.useLlm = false;
      continue;
    }
    if (lower === "--use-llm") {
      defaultOptions.useLlm = true;
      continue;
    }
    if (lower === "--jurisdiction" || lower === "-j") {
      const value = tokens[i + 1]?.trim();
      if (value) {
        defaultOptions.jurisdiction = value;
        jurisdictionSet = true;
        i += 1;
      }
      continue;
    }
    if (lower.startsWith("--jurisdiction=")) {
      const value = token.slice(token.indexOf("=") + 1).trim();
      if (value) {
        defaultOptions.jurisdiction = value;
        jurisdictionSet = true;
      }
      continue;
    }
    if (lower === "--llm-timeout-ms") {
      const value = Number(tokens[i + 1]);
      if (Number.isFinite(value) && value > 0) {
        defaultOptions.llmTimeoutMs = Math.floor(value);
        i += 1;
      }
      continue;
    }
    if (lower.startsWith("--llm-timeout-ms=")) {
      const value = Number(token.slice(token.indexOf("=") + 1));
      if (Number.isFinite(value) && value > 0) {
        defaultOptions.llmTimeoutMs = Math.floor(value);
      }
      continue;
    }

    if (!jurisdictionSet && !token.startsWith("-")) {
      defaultOptions.jurisdiction = token;
      jurisdictionSet = true;
    }
  }

  return defaultOptions;
}

type MediaCandidate = {
  path: string;
  isPdfHint: boolean;
};

function toCandidatePaths(ctx: {
  MediaPath?: string;
  MediaPaths?: string[];
  MediaType?: string;
  MediaTypes?: string[];
}): MediaCandidate[] {
  const entries: MediaCandidate[] = [];
  const paths = Array.isArray(ctx.MediaPaths) ? ctx.MediaPaths : [];
  const types = Array.isArray(ctx.MediaTypes) ? ctx.MediaTypes : [];
  for (let i = 0; i < paths.length; i += 1) {
    const entry = paths[i];
    if (typeof entry !== "string") {
      continue;
    }
    const mediaType = types[i] ?? "";
    entries.push({
      path: entry,
      isPdfHint: mediaType.toLowerCase().includes("pdf"),
    });
  }
  if (ctx.MediaPath) {
    entries.push({
      path: ctx.MediaPath,
      isPdfHint: (ctx.MediaType ?? "").toLowerCase().includes("pdf"),
    });
  }

  const deduped: MediaCandidate[] = [];
  const seen = new Set<string>();
  for (const entry of entries) {
    const trimmed = entry.path.trim();
    if (!trimmed || seen.has(trimmed)) {
      continue;
    }
    seen.add(trimmed);
    deduped.push({ path: trimmed, isPdfHint: entry.isPdfHint });
  }
  return deduped;
}

async function resolvePdfPath(
  candidates: MediaCandidate[],
  workspaceDir: string,
): Promise<string | null> {
  for (const candidate of candidates) {
    const resolved = path.isAbsolute(candidate.path)
      ? candidate.path
      : path.resolve(workspaceDir, candidate.path);
    try {
      const stat = await fs.stat(resolved);
      if (!stat.isFile()) {
        continue;
      }
      if (path.extname(resolved).toLowerCase() === ".pdf" || candidate.isPdfHint) {
        return resolved;
      }
    } catch {
      continue;
    }
  }
  return null;
}

export const handleLegalReviewCommand: CommandHandler = async (params, allowTextCommands) => {
  if (!allowTextCommands) {
    return null;
  }
  const normalized = params.command.commandBodyNormalized;
  if (normalized !== "/legal-review" && !normalized.startsWith("/legal-review ")) {
    return null;
  }
  if (!params.command.isAuthorizedSender) {
    logVerbose(
      `Ignoring /legal-review from unauthorized sender: ${params.command.senderId || "<unknown>"}`,
    );
    return { shouldContinue: false };
  }

  const candidatePaths = toCandidatePaths({
    MediaPath: params.ctx.MediaPath,
    MediaPaths: params.ctx.MediaPaths,
    MediaType: params.ctx.MediaType,
    MediaTypes: params.ctx.MediaTypes,
  });
  const pdfPath = await resolvePdfPath(candidatePaths, params.workspaceDir);
  if (!pdfPath) {
    return {
      shouldContinue: false,
      reply: {
        text:
          "Please attach a PDF contract and send `/legal-review`.\n" +
          "Example: `/legal-review kenya`",
      },
    };
  }

  try {
    const options = parseLegalReviewOptions(normalized);
    const document = await loadContractDocument(
      {
        file: pdfPath,
        format: "pdf",
        jurisdiction: options.jurisdiction,
        useLlm: options.useLlm,
        llmTimeoutMs: options.llmTimeoutMs,
      },
      params.cfg,
    );
    const result = await runLegalReview({
      document,
      runId: `legal-review-${Date.now()}`,
      llm: options.useLlm
        ? {
            enabled: true,
            timeoutMs: options.llmTimeoutMs,
            config: params.cfg,
          }
        : undefined,
    });

    const summary = buildPlainEnglishLegalReviewMarkdown(result);
    return { shouldContinue: false, reply: { text: summary } };
  } catch (error) {
    return {
      shouldContinue: false,
      reply: {
        text: formatLegalReviewError(error),
        isError: true,
      },
    };
  }
};
