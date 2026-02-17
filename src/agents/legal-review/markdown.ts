import type { LegalReviewResult } from "./types.js";

function formatExcerpt(params: {
  evidence?: {
    page: number;
    section: string;
    quote: string;
  };
  fallback?: string;
}): string {
  const evidence = params.evidence;
  if (!evidence || !evidence.quote?.trim()) {
    return params.fallback ?? "Excerpt unavailable from the document.";
  }
  return `page ${evidence.page}, ${evidence.section} — "${evidence.quote}"`;
}

export function buildPlainEnglishLegalReviewMarkdown(result: LegalReviewResult): string {
  const lines: string[] = [];
  const findingsById = new Map(
    [...result.validatedFindings, ...result.needsHumanReview].map((finding) => [
      finding.findingId,
      finding,
    ]),
  );
  lines.push("# Contract Summary (Plain English)");
  lines.push("");
  lines.push(
    `- Issues we are confident about: ${result.validatedFindings.length} (with supporting text from the contract)`,
  );
  lines.push(`- Items that still need lawyer review: ${result.needsHumanReview.length}`);
  lines.push("");

  if (result.keyAreas.length > 0) {
    lines.push("## Main Things To Watch");
    for (const area of result.keyAreas) {
      lines.push(`- **${area.title}** (risk: ${area.severity})`);
      const sampleFinding = area.findingIds
        .map((id) => findingsById.get(id))
        .find((finding) => Boolean(finding));
      lines.push(`  - Excerpt: ${formatExcerpt({ evidence: sampleFinding?.evidence })}`);
    }
    lines.push("");
  }

  if (result.validatedFindings.length > 0) {
    lines.push("## Clear Findings");
    for (const finding of result.validatedFindings.slice(0, 20)) {
      lines.push(`- **${finding.title}** (risk: ${finding.severity})`);
      lines.push(`  - Why this matters: ${finding.whyItMatters}`);
      lines.push(`  - What to do: ${finding.recommendedAction}`);
      lines.push(`  - Excerpt: ${formatExcerpt({ evidence: finding.evidence })}`);
    }
    lines.push("");
  }

  if (result.needsHumanReview.length > 0) {
    lines.push("## Needs Lawyer Review");
    for (const finding of result.needsHumanReview.slice(0, 20)) {
      lines.push(`- **${finding.title}** (risk: ${finding.severity})`);
      lines.push(`  - Why this is not final yet: ${finding.reasons.join(", ")}`);
      lines.push(
        `  - Excerpt: ${formatExcerpt({
          evidence: finding.evidence,
          fallback: "No reliable excerpt yet. Please check the original clause directly.",
        })}`,
      );
    }
  }

  return lines.join("\n").trim();
}
