import type { Command } from "commander";
import { legalReviewCommand } from "../../commands/legal-review.js";
import { defaultRuntime } from "../../runtime.js";
import { runCommandWithRuntime } from "../cli-utils.js";

function formatValueForError(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") {
    return String(value);
  }
  if (value === null || value === undefined) {
    return String(value);
  }
  try {
    return JSON.stringify(value);
  } catch {
    return "<unprintable>";
  }
}

function parseOptionalNumber(value: unknown): number | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`Invalid numeric value: ${formatValueForError(value)}`);
  }
  return parsed;
}

function parseOptionalInt(value: unknown): number | undefined {
  const parsed = parseOptionalNumber(value);
  if (parsed === undefined) {
    return undefined;
  }
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`Invalid integer value: ${formatValueForError(value)}`);
  }
  return parsed;
}

export function registerLegalReviewCommand(program: Command) {
  const legal = program.command("legal").description("Legal contract review tools");

  legal
    .command("review")
    .description("Run fail-closed multi-agent legal contract review")
    .requiredOption("--file <path>", "Path to contract file (.txt, .json, or .pdf)")
    .option("--format <txt|json|pdf>", "Input format override")
    .option("--jurisdiction <id>", "Jurisdiction hint (for example: us, uk)")
    .option("--contract-type <id>", "Contract type hint (for example: msa, nda)")
    .option("--run-id <id>", "Run id for traceability")
    .option("--use-llm", "Enable hybrid mode with LLM classifier/extractor", false)
    .option("--llm-timeout-ms <n>", "Timeout for each LLM stage in milliseconds")
    .option("--min-confidence <value>", "Default confidence threshold (0-1)")
    .option(
      "--high-severity-min-confidence <value>",
      "Confidence threshold for high/critical findings (0-1)",
    )
    .option("--max-attempts <n>", "Maximum retry attempts", "3")
    .option("--json", "Output structured JSON", false)
    .action(async (opts) => {
      await runCommandWithRuntime(defaultRuntime, async () => {
        await legalReviewCommand(
          {
            file: opts.file as string,
            format: (opts.format as "txt" | "json" | "pdf" | undefined) ?? undefined,
            jurisdiction: opts.jurisdiction as string | undefined,
            contractType: opts.contractType as string | undefined,
            runId: opts.runId as string | undefined,
            useLlm: Boolean(opts.useLlm),
            llmTimeoutMs: parseOptionalInt(opts.llmTimeoutMs),
            minConfidence: parseOptionalNumber(opts.minConfidence),
            highSeverityMinConfidence: parseOptionalNumber(opts.highSeverityMinConfidence),
            maxAttempts: parseOptionalInt(opts.maxAttempts),
            json: Boolean(opts.json),
          },
          defaultRuntime,
        );
      });
    });
}
