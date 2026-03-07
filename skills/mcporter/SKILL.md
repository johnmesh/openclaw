---
name: mcporter
description: Call MCP servers via CLI (HTTP or stdio). Use for Playwright browser automation when web_fetch returns empty (SPAs, JS-rendered pages like Kenya Law). Run mcporter with --http-url for Playwright MCP.
homepage: http://mcporter.dev
metadata:
  {
    "openclaw":
      {
        "emoji": "📦",
        "requires": { "bins": ["mcporter"] },
        "install":
          [
            {
              "id": "node",
              "kind": "node",
              "package": "mcporter",
              "bins": ["mcporter"],
              "label": "Install mcporter (node)",
            },
          ],
      },
  }
---

# mcporter

Use `mcporter` to work with MCP servers directly.

Quick start

- `mcporter list`
- `mcporter list <server> --schema`
- `mcporter call <server.tool> key=value`

Call tools

- Selector: `mcporter call linear.list_issues team=ENG limit:5`
- Function syntax: `mcporter call "linear.create_issue(title: \"Bug\")"`
- Full URL: `mcporter call https://api.example.com/mcp.fetch url:https://example.com`
- Stdio: `mcporter call --stdio "bun run ./server.ts" scrape url=https://example.com`
- JSON payload: `mcporter call <server.tool> --args '{"limit":5}'`

Auth + config

- OAuth: `mcporter auth <server | url> [--reset]`
- Config: `mcporter config list|get|add|remove|import|login|logout`

Daemon

- `mcporter daemon start|status|stop|restart`

Codegen

- CLI: `mcporter generate-cli --server <name>` or `--command <url>`
- Inspect: `mcporter inspect-cli <path> [--json]`
- TS: `mcporter emit-ts <server> --mode client|types`

Notes

- Config default: `./config/mcporter.json` (override with `--config`).
- Prefer `--output json` for machine-readable results.
- **EISDIR when loading config:** mcporter merges home config (`~/.mcporter/mcporter.json`) and editor import paths (Cursor, Claude, etc.). If one of those paths is a directory (or a file path that exists as a dir), `readExternalEntries` throws EISDIR. Workaround: pass an explicit config so only that file is used: `--config ./config/mcporter.json` (or set `MCPORTER_CONFIG` to that path). Alternatively set `"imports": []` in `~/.mcporter/mcporter.json` to disable editor import discovery.

Playwright MCP (Docker)

Run Playwright MCP as a long-lived HTTP service, then point mcporter at `http://localhost:8931/mcp` in config. Use `--entrypoint node` so the image runs the CLI. **Include `--isolated`** so the browser profile is not locked (avoids "Browser is already in use for /ms-playwright/mcp-chromium").

```bash
docker run -d -i --rm --init --pull=always \
  --entrypoint node \
  --name playwright-mcp \
  -p 8931:8931 \
  mcr.microsoft.com/playwright/mcp \
  cli.js --headless --browser chromium --no-sandbox --port 8931 --host 0.0.0.0 --isolated
```

If you see "Browser is already in use", stop the container (`docker stop playwright-mcp`) and start it again with `--isolated` in the command above.

Use `--allow-http` when using HTTP. **Prefer the URL selector** for ad-hoc Playwright MCP: `http://localhost:8931/mcp.<tool>` (avoids "Tool … not found" that can occur with `server.tool`). If you see EISDIR when loading config, add `--config ./config/mcporter.json`.

- `mcporter list --http-url http://localhost:8931/mcp --allow-http` (shows tools)
- Navigate: `mcporter call --allow-http http://localhost:8931/mcp.browser_navigate url=<url>` (add `--config ./config/mcporter.json` if you hit EISDIR)
- Snapshot: `mcporter call --allow-http http://localhost:8931/mcp.browser_snapshot`
- Click: `mcporter call --allow-http http://localhost:8931/mcp.browser_click ref=<ref> element="<label>"`
- Close: `mcporter call --allow-http http://localhost:8931/mcp.browser_close`

OpenClaw agent: using Playwright MCP

**Prefer the `playwright_browser` tool** when you need a real browser (SPAs, JS-rendered pages like Kenya Law, or when web_fetch returns only layout/filters). It calls Playwright MCP for you with actions: `navigate`, `snapshot`, `wait_for`, `close`, `click`, `type`.

If `playwright_browser` is not available or you need ad-hoc mcporter calls, use the **exec** tool. Ensure mcporter is installed (e.g. `npm i -g mcporter`) and Playwright MCP is running (e.g. Docker on port 8931). If you see `EISDIR`, add `--config ./config/mcporter.json`. If you see "Browser is already in use for … mcp-chromium", the Playwright MCP container was started without `--isolated`; tell the user to restart it with `--isolated` (see Docker command above). **Use the URL selector** `http://localhost:8931/mcp.<tool>` so the tool is found (the `server.tool` form can fail with "Tool … not found"). Examples:

- Navigate: `mcporter call --config ./config/mcporter.json --allow-http http://localhost:8931/mcp.browser_navigate url=<url>`
- Snapshot: `mcporter call --config ./config/mcporter.json --allow-http http://localhost:8931/mcp.browser_snapshot`
- Wait then snapshot: run `browser_wait_for` (e.g. `time=3` or `text=...`) then `browser_snapshot`
- Click: `mcporter call --config ./config/mcporter.json --allow-http http://localhost:8931/mcp.browser_click ref=<ref> element="<label>"`
- Close: `mcporter call --config ./config/mcporter.json --allow-http http://localhost:8931/mcp.browser_close`

For SPAs: navigate, wait for content (e.g. 3–5s or for specific text), then snapshot and work from the result.

If using exec and it is allowlist-based, add `mcporter` to `tools.exec.safeBins` (e.g. `openclaw config set tools.exec.safeBins '["mcporter"]'`).
