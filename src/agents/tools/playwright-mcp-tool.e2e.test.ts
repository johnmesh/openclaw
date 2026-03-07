import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const spawnSyncMock = vi.hoisted(() => vi.fn());

vi.mock("node:child_process", () => ({
  spawnSync: (...args: unknown[]) => spawnSyncMock(...args),
}));

import { createPlaywrightMcpTool } from "./playwright-mcp-tool.js";

function lastSpawnArgs(): string[] {
  const call = spawnSyncMock.mock.calls.at(-1);
  return (call?.[1] as string[]) ?? [];
}

describe("playwright_browser tool", () => {
  beforeEach(() => {
    spawnSyncMock.mockReset();
    spawnSyncMock.mockReturnValue({
      status: 0,
      signal: null,
      stdout: "ok",
      stderr: "",
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns a tool with name playwright_browser and expected shape", () => {
    const tool = createPlaywrightMcpTool();
    expect(tool.name).toBe("playwright_browser");
    expect(tool.label).toBe("playwright_browser");
    expect(tool.description).toContain("Playwright MCP");
    expect(tool.parameters).toBeDefined();
    expect(typeof tool.execute).toBe("function");
  });

  it("throws when action is missing", async () => {
    const tool = createPlaywrightMcpTool();
    await expect(tool.execute("id", {})).rejects.toThrow(/playwright_browser requires action/);
    await expect(tool.execute("id", { action: "invalid" })).rejects.toThrow(
      /playwright_browser requires action/,
    );
  });

  it("throws when action is navigate but url is missing", async () => {
    const tool = createPlaywrightMcpTool();
    await expect(tool.execute("id", { action: "navigate" })).rejects.toThrow(/url required/);
  });

  it("calls mcporter with URL selector form and --config --allow-http for snapshot", async () => {
    const tool = createPlaywrightMcpTool();
    await tool.execute("id", { action: "snapshot" });

    expect(spawnSyncMock).toHaveBeenCalledOnce();
    const args = lastSpawnArgs();
    expect(args).toContain("mcporter");
    expect(args).toContain("call");
    expect(args).toContain("--config");
    const configIdx = args.indexOf("--config");
    expect(configIdx).toBeGreaterThanOrEqual(0);
    expect(args[configIdx + 1]).toMatch(/\.json$/);
    expect(args).toContain("--allow-http");
    expect(args.some((a) => a.includes("localhost") && a.includes("browser_snapshot"))).toBe(true);
    const [, , options] = spawnSyncMock.mock.calls[0];
    expect(options?.encoding).toBe("utf8");
    expect(options?.env?.npm_config_yes).toBe("true");
  });

  it("includes url= in args for navigate", async () => {
    const tool = createPlaywrightMcpTool();
    await tool.execute("id", { action: "navigate", url: "https://example.com" });

    const args = lastSpawnArgs();
    expect(args.some((a) => a.startsWith("url="))).toBe(true);
    expect(args.some((a) => a === "url=https://example.com")).toBe(true);
  });

  it("uses config tools.playwrightMcp.url when provided", async () => {
    const tool = createPlaywrightMcpTool({
      config: {
        tools: { playwrightMcp: { url: "http://config-url:8931/mcp" } },
      } as never,
    });
    await tool.execute("id", { action: "snapshot" });

    const args = lastSpawnArgs();
    const selector = args.find((a) => a.includes("browser_snapshot"));
    expect(selector).toContain("http://config-url:8931/mcp");
  });

  it("throws with stderr message when spawn returns non-zero", async () => {
    spawnSyncMock.mockReturnValue({
      status: 1,
      signal: null,
      stdout: "",
      stderr: "mcporter failed",
    });
    const tool = createPlaywrightMcpTool();
    await expect(tool.execute("id", { action: "snapshot" })).rejects.toThrow(
      /playwright_browser \(snapshot\): mcporter failed/,
    );
  });

  it("returns details with action, output, stderr on success", async () => {
    spawnSyncMock.mockReturnValue({
      status: 0,
      signal: null,
      stdout: "snapshot result",
      stderr: "warn",
    });
    const tool = createPlaywrightMcpTool();
    const result = await tool.execute("id", { action: "snapshot" });

    expect(result?.details).toMatchObject({
      action: "snapshot",
      output: "snapshot result",
      stderr: "warn",
    });
  });

  it("includes ref= and element= for click action", async () => {
    const tool = createPlaywrightMcpTool();
    await tool.execute("id", { action: "click", ref: "ref-42", element: "Submit" });

    const args = lastSpawnArgs();
    expect(args.some((a) => a === "ref=ref-42")).toBe(true);
    expect(args.some((a) => a === "element=Submit")).toBe(true);
  });

  it("throws when click is missing ref", async () => {
    const tool = createPlaywrightMcpTool();
    await expect(tool.execute("id", { action: "click" })).rejects.toThrow(/ref required/);
  });

  it("includes ref= and text= for type action", async () => {
    const tool = createPlaywrightMcpTool();
    await tool.execute("id", { action: "type", ref: "input-1", text: "hello" });

    const args = lastSpawnArgs();
    expect(args.some((a) => a === "ref=input-1")).toBe(true);
    expect(args.some((a) => a === "text=hello")).toBe(true);
  });

  it("throws when type is missing text", async () => {
    const tool = createPlaywrightMcpTool();
    await expect(tool.execute("id", { action: "type", ref: "r" })).rejects.toThrow(/text required/);
  });

  it("includes time, text, textGone, timeout for wait_for when provided", async () => {
    const tool = createPlaywrightMcpTool();
    await tool.execute("id", {
      action: "wait_for",
      time: 2,
      text: "Loaded",
      textGone: "Spinner",
      timeout: 5000,
    });

    const args = lastSpawnArgs();
    expect(args.some((a) => a === "time=2")).toBe(true);
    expect(args.some((a) => a === "text=Loaded")).toBe(true);
    expect(args.some((a) => a === "textGone=Spinner")).toBe(true);
    expect(args.some((a) => a === "timeout=5000")).toBe(true);
  });
});
