import { Type } from "@sinclair/typebox";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import type { OpenClawConfig } from "../../config/config.js";
import type { AnyAgentTool } from "./common.js";
import { stringEnum } from "../schema/typebox.js";
import { jsonResult, readStringParam } from "./common.js";

const PLAYWRIGHT_ACTIONS = ["navigate", "snapshot", "wait_for", "close", "click", "type"] as const;

const PlaywrightMcpSchema = Type.Object({
  action: stringEnum(PLAYWRIGHT_ACTIONS, {
    description:
      "Action: navigate (open URL), snapshot (accessibility tree), wait_for (then snapshot), close, click, type.",
  }),
  url: Type.Optional(Type.String({ description: "URL to open (required for navigate)." })),
  ref: Type.Optional(
    Type.String({ description: "Element ref from a previous snapshot (for click/type)." }),
  ),
  element: Type.Optional(
    Type.String({
      description: "Human-readable element label for click/type (from snapshot).",
    }),
  ),
  text: Type.Optional(
    Type.String({
      description: "Text to wait for (wait_for), or to type (type action).",
    }),
  ),
  textGone: Type.Optional(
    Type.String({ description: "Wait for this text to disappear (wait_for)." }),
  ),
  time: Type.Optional(
    Type.Number({
      description: "Wait duration in seconds (wait_for).",
      minimum: 0,
    }),
  ),
  timeout: Type.Optional(
    Type.Number({
      description: "Max wait in milliseconds (wait_for).",
      minimum: 100,
    }),
  ),
});

const DEFAULT_MCP_URL = "http://localhost:8931/mcp";
const MCP_TIMEOUT_MS = 90_000;
const MIN_NODE_MAJOR = 20;

function getNpxPath(): string {
  const major = parseInt(process.version.slice(1).split(".")[0] ?? "0", 10);
  if (major < MIN_NODE_MAJOR) {
    throw new Error(
      `playwright_browser requires Node ${MIN_NODE_MAJOR}+ (mcporter needs it). The gateway process is running under ${process.version}. To fix: start the gateway from a shell where node is 22+ (e.g. \`pnpm openclaw gateway run\`), not from the Mac app or a Node 18 environment.`,
    );
  }
  const nodeDir = path.dirname(process.execPath);
  const npxName = process.platform === "win32" ? "npx.cmd" : "npx";
  return path.join(nodeDir, npxName);
}

function getMcpUrl(config?: OpenClawConfig): string {
  const env = process.env.OPENCLAW_PLAYWRIGHT_MCP_URL?.trim();
  if (env) {
    return env;
  }
  const cfg = config?.tools as { playwrightMcp?: { url?: string } } | undefined;
  return cfg?.playwrightMcp?.url?.trim() ?? DEFAULT_MCP_URL;
}

/** Minimal config path so mcporter does not load ~/.mcporter or editor imports (avoids EISDIR). */
function ensureMinimalConfigPath(): string {
  const p = path.join(os.tmpdir(), "openclaw-mcporter-config.json");
  const body = JSON.stringify({ imports: [], mcpServers: {} });
  fs.writeFileSync(p, body, "utf8");
  return p;
}

function buildMcporterArgs(
  baseUrl: string,
  action: (typeof PLAYWRIGHT_ACTIONS)[number],
  params: Record<string, unknown>,
  configPath: string,
): string[] {
  // URL selector form (baseUrl.tool) avoids "Tool … not found" with server.tool
  const toolSelector = `${baseUrl.replace(/\/$/, "")}.browser_${action}`;
  const args: string[] = ["call", "--config", configPath, "--allow-http", toolSelector];

  if (action === "navigate") {
    const url = readStringParam(params, "url", { required: true, label: "url" });
    args.push(`url=${url}`);
    return args;
  }

  if (action === "snapshot") {
    return args;
  }

  if (action === "wait_for") {
    const time = params.time;
    if (typeof time === "number" && Number.isFinite(time)) {
      args.push(`time=${time}`);
    }
    const text = readStringParam(params, "text");
    if (text) {
      args.push(`text=${text}`);
    }
    const textGone = readStringParam(params, "textGone");
    if (textGone) {
      args.push(`textGone=${textGone}`);
    }
    const timeout = params.timeout;
    if (typeof timeout === "number" && Number.isFinite(timeout)) {
      args.push(`timeout=${timeout}`);
    }
    return args;
  }

  if (action === "close") {
    return args;
  }

  if (action === "click") {
    const ref = readStringParam(params, "ref", { required: true, label: "ref" });
    args.push(`ref=${ref}`);
    const element = readStringParam(params, "element");
    if (element) {
      args.push(`element=${element}`);
    }
    return args;
  }

  if (action === "type") {
    const ref = readStringParam(params, "ref", { required: true, label: "ref" });
    const text = readStringParam(params, "text", { required: true, label: "text" });
    args.push(`ref=${ref}`, `text=${text}`);
    const element = readStringParam(params, "element");
    if (element) {
      args.push(`element=${element}`);
    }
    return args;
  }

  return args;
}

export function createPlaywrightMcpTool(options?: { config?: OpenClawConfig }): AnyAgentTool {
  const baseUrl = getMcpUrl(options?.config);

  return {
    name: "playwright_browser",
    label: "playwright_browser",
    description:
      "Control a real browser via Playwright MCP (navigate, snapshot, click, type). Use this for SPAs and JS-rendered pages when web_fetch returns only layout or empty content. Requires Playwright MCP server (e.g. Docker on port 8931) and mcporter.",
    parameters: PlaywrightMcpSchema,
    execute: async (_toolCallId, args) => {
      const params = (args ?? {}) as Record<string, unknown>;
      const action = params.action as (typeof PLAYWRIGHT_ACTIONS)[number] | undefined;
      if (!action || !PLAYWRIGHT_ACTIONS.includes(action)) {
        throw new Error(`playwright_browser requires action: ${PLAYWRIGHT_ACTIONS.join(", ")}`);
      }

      const configPath = ensureMinimalConfigPath();
      const mcporterArgs = buildMcporterArgs(baseUrl, action, params, configPath);
      const npxPath = getNpxPath();
      const nodeDir = path.dirname(process.execPath);
      const pathSep = process.platform === "win32" ? ";" : ":";
      const pathVar = process.platform === "win32" ? "Path" : "PATH";
      const existingPath = process.env[pathVar] ?? process.env.PATH ?? "";
      const envWithNodeFirst = {
        ...process.env,
        npm_config_yes: "true",
        [pathVar]: `${nodeDir}${pathSep}${existingPath}`,
      };
      if (pathVar !== "PATH") {
        envWithNodeFirst.PATH = envWithNodeFirst[pathVar];
      }
      const result = spawnSync(npxPath, ["mcporter", ...mcporterArgs], {
        encoding: "utf8",
        timeout: MCP_TIMEOUT_MS,
        env: envWithNodeFirst,
      });

      const out = (result.stdout ?? "").trim();
      const err = (result.stderr ?? "").trim();
      if (result.status !== 0) {
        const message = err || out || `mcporter exited ${result.signal ?? result.status}`;
        throw new Error(`playwright_browser (${action}): ${message}`);
      }

      return jsonResult({
        action,
        output: out || "(no output)",
        stderr: err || undefined,
      });
    },
  };
}
