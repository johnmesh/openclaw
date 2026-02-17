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
  const sections = params.document.sections.slice(0, 40).map((section) => ({
    page: section.page,
    section: section.section,
    text: section.text.slice(0, 500),
  }));

  const prompt = [
    "You are a legal contract reviewer.",
    "Extract high-value review findings as JSON array only.",
    "Each object must contain:",
    "findingId, title, clauseType, severity, whyItMatters, recommendedAction, confidence, evidence{page,section,quote}.",
    "Allowed clauseType: payment, termination, liability, indemnity, ip, confidentiality, privacy, dispute_resolution, assignment, warranty, other.",
    "Allowed severity: critical, high, medium, low.",
    "Do not invent evidence. quote must be copied from provided sections.",
    `Jurisdiction: ${params.jurisdiction.jurisdiction}`,
    `Contract type: ${params.contractType.contractType}`,
    `Source document: ${params.document.sourceDocumentId}`,
    "Sections:",
    JSON.stringify(sections),
  ].join("\n\n");

  const parsed = await runLlmJsonTask({
    cfg: params.cfg,
    runId: params.runId,
    prompt,
    timeoutMs: params.timeoutMs ?? 90_000,
  });

  if (!Array.isArray(parsed)) {
    return null;
  }

  const findings: ProposedFinding[] = [];
  for (const item of parsed) {
    if (!item || typeof item !== "object") {
      continue;
    }
    const record = item as Record<string, unknown>;
    const findingId = typeof record.findingId === "string" ? record.findingId.trim() : "";
    const title = typeof record.title === "string" ? record.title.trim() : "";
    const clauseType = typeof record.clauseType === "string" ? record.clauseType.trim() : "other";
    const severity = typeof record.severity === "string" ? record.severity.trim() : "medium";
    const whyItMatters =
      typeof record.whyItMatters === "string"
        ? record.whyItMatters.trim()
        : "Clause may materially change obligations or enforceability.";
    const recommendedAction =
      typeof record.recommendedAction === "string"
        ? record.recommendedAction.trim()
        : "Review with local counsel.";
    const confidence = toBoundedConfidence(record.confidence) ?? 0.5;
    const evidenceRaw =
      record.evidence && typeof record.evidence === "object"
        ? (record.evidence as Record<string, unknown>)
        : undefined;
    const pageRaw = evidenceRaw?.page;
    const page =
      typeof pageRaw === "number" && Number.isFinite(pageRaw)
        ? Math.max(1, Math.floor(pageRaw))
        : 1;
    const section =
      typeof evidenceRaw?.section === "string" && evidenceRaw.section.trim().length > 0
        ? evidenceRaw.section.trim()
        : "Section";
    const quote = typeof evidenceRaw?.quote === "string" ? evidenceRaw.quote.trim() : "";

    if (!findingId || !title || !quote) {
      continue;
    }

    findings.push({
      findingId,
      title,
      clauseType: clauseType as ProposedFinding["clauseType"],
      severity: severity as ProposedFinding["severity"],
      whyItMatters,
      recommendedAction,
      applicableJurisdiction: params.jurisdiction.jurisdiction,
      confidence,
      evidence: {
        sourceDocumentId: params.document.sourceDocumentId,
        page,
        section,
        quote,
      },
    });
  }

  return findings.length > 0 ? findings : null;
}
