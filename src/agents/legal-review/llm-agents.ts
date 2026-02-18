import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import type { OpenClawConfig } from "../../config/config.js";
import type {
  ContractDocument,
  ContractTypeResolution,
  JurisdictionResolution,
  ProposedFinding,
} from "./types.js";
import {
  resolveAgentDir,
  resolveAgentWorkspaceDir,
  resolveDefaultAgentId,
} from "../agent-scope.js";
import { runEmbeddedPiAgent } from "../pi-embedded.js";

const CLAUSE_CHUNK_SIZE = 12;
const CLAUSE_CHUNK_OVERLAP = 2;
const CLAUSE_SECTION_MAX_CHARS = 900;
const ALLOWED_CLAUSE_TYPES = new Set<ProposedFinding["clauseType"]>([
  "payment",
  "termination",
  "liability",
  "indemnity",
  "ip",
  "confidentiality",
  "privacy",
  "dispute_resolution",
  "assignment",
  "warranty",
  "other",
]);
const ALLOWED_SEVERITIES = new Set<ProposedFinding["severity"]>([
  "critical",
  "high",
  "medium",
  "low",
]);

function extractJsonPayload(text: string): unknown {
  const trimmed = text.trim();
  if (!trimmed) {
    return null;
  }
  try {
    return JSON.parse(trimmed);
  } catch {
    const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    if (fenced?.[1]) {
      try {
        return JSON.parse(fenced[1]);
      } catch {
        // Continue to heuristic parsing below.
      }
    }

    const arrayMatch = trimmed.match(/\[[\s\S]*\]/);
    if (arrayMatch?.[0]) {
      try {
        return JSON.parse(arrayMatch[0]);
      } catch {
        // Continue to object heuristic.
      }
    }

    const objectMatch = trimmed.match(/\{[\s\S]*\}/);
    if (objectMatch?.[0]) {
      try {
        return JSON.parse(objectMatch[0]);
      } catch {
        return null;
      }
    }
  }
  return null;
}

function toBoundedConfidence(value: unknown): number | undefined {
  const numeric =
    typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  if (!Number.isFinite(numeric)) {
    return undefined;
  }
  return Math.max(0, Math.min(1, numeric));
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function stableFindingKey(finding: ProposedFinding): string {
  const page = finding.evidence?.page ?? 0;
  const section = normalizeWhitespace(finding.evidence?.section ?? "").toLowerCase();
  const quote = normalizeWhitespace(finding.evidence?.quote ?? "").toLowerCase();
  const title = normalizeWhitespace(finding.title).toLowerCase();
  const clauseType = finding.clauseType;
  return `${page}|${section}|${clauseType}|${title}|${quote}`;
}

function buildSectionChunks(
  sections: Array<{ page: number; section: string; text: string }>,
): Array<{
  start: number;
  end: number;
  sections: Array<{ page: number; section: string; text: string }>;
}> {
  if (sections.length === 0) {
    return [];
  }
  const chunks: Array<{
    start: number;
    end: number;
    sections: Array<{ page: number; section: string; text: string }>;
  }> = [];
  const step = Math.max(1, CLAUSE_CHUNK_SIZE - CLAUSE_CHUNK_OVERLAP);
  for (let start = 0; start < sections.length; start += step) {
    const end = Math.min(sections.length, start + CLAUSE_CHUNK_SIZE);
    chunks.push({
      start,
      end,
      sections: sections.slice(start, end),
    });
    if (end >= sections.length) {
      break;
    }
  }
  return chunks;
}

function parseProposedFindingFromRecord(params: {
  record: Record<string, unknown>;
  defaultJurisdiction: string;
  sourceDocumentId: string;
  fallbackFindingId: string;
}): ProposedFinding | null {
  const findingId =
    typeof params.record.findingId === "string" && params.record.findingId.trim().length > 0
      ? params.record.findingId.trim()
      : params.fallbackFindingId;
  const title = typeof params.record.title === "string" ? params.record.title.trim() : "";
  const clauseTypeRaw =
    typeof params.record.clauseType === "string" ? params.record.clauseType.trim() : "other";
  const severityRaw =
    typeof params.record.severity === "string" ? params.record.severity.trim() : "medium";
  const whyItMatters =
    typeof params.record.whyItMatters === "string"
      ? params.record.whyItMatters.trim()
      : "Clause may materially change obligations or enforceability.";
  const recommendedAction =
    typeof params.record.recommendedAction === "string"
      ? params.record.recommendedAction.trim()
      : "Review with local counsel.";
  const confidence = toBoundedConfidence(params.record.confidence) ?? 0.5;
  const evidenceRaw =
    params.record.evidence && typeof params.record.evidence === "object"
      ? (params.record.evidence as Record<string, unknown>)
      : undefined;
  const pageRaw = evidenceRaw?.page;
  const page =
    typeof pageRaw === "number" && Number.isFinite(pageRaw) ? Math.max(1, Math.floor(pageRaw)) : 1;
  const section =
    typeof evidenceRaw?.section === "string" && evidenceRaw.section.trim().length > 0
      ? evidenceRaw.section.trim()
      : "Section";
  const quote = typeof evidenceRaw?.quote === "string" ? evidenceRaw.quote.trim() : "";

  if (!title || !quote) {
    return null;
  }

  const clauseType = ALLOWED_CLAUSE_TYPES.has(clauseTypeRaw as ProposedFinding["clauseType"])
    ? (clauseTypeRaw as ProposedFinding["clauseType"])
    : "other";
  const severity = ALLOWED_SEVERITIES.has(severityRaw as ProposedFinding["severity"])
    ? (severityRaw as ProposedFinding["severity"])
    : "medium";

  return {
    findingId,
    title,
    clauseType,
    severity,
    whyItMatters,
    recommendedAction,
    applicableJurisdiction: params.defaultJurisdiction,
    confidence,
    evidence: {
      sourceDocumentId: params.sourceDocumentId,
      page,
      section,
      quote,
    },
  };
}

async function runLlmJsonTask(params: {
  cfg: OpenClawConfig;
  runId: string;
  prompt: string;
  timeoutMs: number;
}): Promise<unknown> {
  const agentId = resolveDefaultAgentId(params.cfg);
  const workspaceDir = resolveAgentWorkspaceDir(params.cfg, agentId);
  const agentDir = resolveAgentDir(params.cfg, agentId);
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "openclaw-legal-review-"));
  const sessionFile = path.join(tempDir, "session.jsonl");

  try {
    try {
      const result = await runEmbeddedPiAgent({
        sessionId: `legal-review-${Date.now()}`,
        sessionKey: `temp:legal-review:${params.runId}`,
        agentId,
        sessionFile,
        workspaceDir,
        agentDir,
        config: params.cfg,
        prompt: params.prompt,
        timeoutMs: params.timeoutMs,
        runId: `${params.runId}-${Date.now()}`,
        disableTools: true,
      });

      const text =
        result.payloads
          ?.map((payload) => payload.text ?? "")
          .join("\n")
          .trim() ?? "";
      if (!text) {
        return null;
      }
      return extractJsonPayload(text);
    } catch {
      // Fail closed by returning null and letting deterministic stages proceed.
      return null;
    }
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

export async function llmContractTypeClassifier(params: {
  document: ContractDocument;
  runId: string;
  cfg: OpenClawConfig;
  timeoutMs?: number;
}): Promise<ContractTypeResolution | null> {
  const prompt = [
    "You are a strict legal contract classifier.",
    'Return JSON only: {"contractType": string, "confidence": number}',
    "Use concise contractType labels like: nda, msa, sow, employment, lease, purchase_agreement, general.",
    "Confidence must be between 0 and 1.",
    "Document excerpt:",
    params.document.contractText.slice(0, 6000),
  ].join("\n\n");

  const parsed = await runLlmJsonTask({
    cfg: params.cfg,
    runId: params.runId,
    prompt,
    timeoutMs: params.timeoutMs ?? 60_000,
  });

  if (!parsed || typeof parsed !== "object") {
    return null;
  }
  const record = parsed as Record<string, unknown>;
  const contractType = typeof record.contractType === "string" ? record.contractType.trim() : "";
  const confidence = toBoundedConfidence(record.confidence);
  if (!contractType || confidence === undefined) {
    return null;
  }
  return { contractType: contractType.toLowerCase(), confidence };
}

export async function llmClauseExtractor(params: {
  document: ContractDocument;
  jurisdiction: JurisdictionResolution;
  contractType: ContractTypeResolution;
  runId: string;
  cfg: OpenClawConfig;
  timeoutMs?: number;
}): Promise<ProposedFinding[] | null> {
  const sections = params.document.sections.map((section) => ({
    page: section.page,
    section: section.section,
    text: section.text.slice(0, CLAUSE_SECTION_MAX_CHARS),
  }));
  const chunks = buildSectionChunks(sections);
  if (chunks.length === 0) {
    return null;
  }
  const chunkTimeoutMs = params.timeoutMs ?? 90_000;
  const mergedFindings = new Map<string, ProposedFinding>();
  let parsedChunkCount = 0;

  for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex += 1) {
    const chunk = chunks[chunkIndex];
    const prompt = [
      "You are a legal contract reviewer.",
      "Extract high-value review findings as JSON array only.",
      "Each object must contain:",
      "findingId, title, clauseType, severity, whyItMatters, recommendedAction, confidence, evidence{page,section,quote}.",
      "Allowed clauseType: payment, termination, liability, indemnity, ip, confidentiality, privacy, dispute_resolution, assignment, warranty, other.",
      "Allowed severity: critical, high, medium, low.",
      "Do not invent evidence. quote must be copied from provided sections.",
      "Do not repeat duplicate findings within this chunk.",
      `Jurisdiction: ${params.jurisdiction.jurisdiction}`,
      `Contract type: ${params.contractType.contractType}`,
      `Source document: ${params.document.sourceDocumentId}`,
      `Chunk: ${chunkIndex + 1}/${chunks.length} (sections ${chunk.start + 1}-${chunk.end})`,
      "Sections:",
      JSON.stringify(chunk.sections),
    ].join("\n\n");

    const parsed = await runLlmJsonTask({
      cfg: params.cfg,
      runId: `${params.runId}-chunk-${chunkIndex + 1}`,
      prompt,
      timeoutMs: chunkTimeoutMs,
    });

    if (!Array.isArray(parsed)) {
      continue;
    }
    parsedChunkCount += 1;

    for (let index = 0; index < parsed.length; index += 1) {
      const item = parsed[index];
      if (!item || typeof item !== "object") {
        continue;
      }
      const finding = parseProposedFindingFromRecord({
        record: item as Record<string, unknown>,
        defaultJurisdiction: params.jurisdiction.jurisdiction,
        sourceDocumentId: params.document.sourceDocumentId,
        fallbackFindingId: `chunk_${chunkIndex + 1}_finding_${index + 1}`,
      });
      if (!finding) {
        continue;
      }
      const key = stableFindingKey(finding);
      const existing = mergedFindings.get(key);
      if (!existing || finding.confidence > existing.confidence) {
        mergedFindings.set(key, finding);
      }
    }
  }

  if (parsedChunkCount === 0) {
    return null;
  }
  return mergedFindings.size > 0 ? [...mergedFindings.values()] : null;
}
