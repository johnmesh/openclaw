---
title: "Legal agent with knowledge base"
summary: "Build an OpenClaw agent that answers legal questions using an external similarity-search knowledge base or workspace memory."
---

# Legal agent with knowledge base

This guide walks you through building an OpenClaw agent that answers legal questions and uses a **knowledge base** for accurate, cited answers. The KB can be an **external search** (similarity/vector search API) or OpenClaw’s built-in workspace memory search.

## What you get

- A dedicated **workspace** with a legal persona and instructions.
- **Knowledge base access**: either an **external similarity-search API** (your RAG/vector service) or the built-in `memory_search` / `memory_get` over workspace Markdown.
- Optional: a **workspace skill** that tells the agent to query the KB and cite sources for legal questions.

## 1. Create the legal agent workspace

You can either use the **default** workspace as your legal agent or create a **separate agent** (e.g. for multi-agent routing).

### Option A: Use the default workspace

1. Set or confirm the workspace path in `~/.openclaw/openclaw.json`:

```json5
{
  agent: {
    workspace: "~/.openclaw/workspace",
  },
}
```

2. Run `openclaw setup` to create the workspace and bootstrap files if needed.

### Option B: Separate legal agent (multi-agent)

1. Add a second agent with its own workspace:

```bash
openclaw agents add legal --workspace ~/.openclaw/workspace-legal
```

2. Configure routing so the legal agent is used for a specific channel or keyword (see [Multi-Agent Routing](/concepts/multi-agent) and [Channel routing](/channels/channel-routing)).

3. Use workspace path: `~/.openclaw/workspace-legal` (or whatever you set).

In both cases, the steps below refer to **that** workspace directory (e.g. `~/.openclaw/workspace` or `~/.openclaw/workspace-legal`).

## 2. Define the legal persona and rules

Edit these files inside the workspace.

### SOUL.md — persona and boundaries

Set a legal-assistant tone and clear boundaries (e.g. not legal advice, recommend a lawyer when appropriate):

```markdown
# Legal assistant persona

You are a careful, citation-focused assistant that helps users understand legal concepts and find relevant information in the knowledge base.

- Be precise and cite sources (file and section) when you use the knowledge base.
- If the knowledge base does not clearly support an answer, say so and do not guess.
- Do not provide formal legal advice; recommend consulting a qualified lawyer for specific situations.
- Prefer short, clear answers with bullet points when listing requirements or steps.
```

### IDENTITY.md — name and vibe

Give the agent a name and emoji (e.g. "Legal Assistant" / scale-of-justice emoji). Create or edit `IDENTITY.md` in the workspace; `openclaw setup` can seed a template.

### AGENTS.md — use the knowledge base for legal questions

Add a clear rule so the agent always consults the KB before answering legal questions:

- **If using an external search API:** “For legal questions, query the external knowledge base using the URL or command in TOOLS.md. Base your answer on the returned snippets and cite the source. If nothing relevant is found, say so and suggest consulting a lawyer.”
- **If using built-in memory:** “For legal questions, use `memory_search` then `memory_get`; base your answer on the retrieved content and cite (e.g. memory/contracts.md). If nothing relevant, say so and suggest a lawyer.”

You can keep the rest of the default AGENTS.md (memory, safety, tools) and add the above as a new section.

## 3. Connect the knowledge base

Choose one: **external similarity search** (your API) or **built-in memory search** (workspace Markdown).

### Option A: External similarity-search API (recommended when KB is external)

The knowledge base is accessed through an **external search** that uses similarity (e.g. vector/RAG). The agent needs a way to call it.

**1. Document how to call it in TOOLS.md**

In the workspace, edit `TOOLS.md` and add a short section so the agent knows exactly how to query the KB:

- **If your search is a GET endpoint** (e.g. `https://kb.example.com/search?q=...`):

```markdown
## Legal knowledge base (external)

Query the external similarity-search API via `web_fetch`. Base URL:

- `https://your-kb-api.example.com/search?q=<encoded-query>&limit=5`

Replace `<encoded-query>` with the user’s question or key terms (URL-encoded). Use the response content to answer and cite (e.g. "According to the knowledge base …").
```

- **If your search is POST or needs a secret** (e.g. API key, custom body):

```markdown
## Legal knowledge base (external)

Query the API using `system.run` (or `bash`). Command template:

- `curl -s -X POST -H "Authorization: Bearer $LEGAL_KB_API_KEY" -H "Content-Type: application/json" -d '{"query":"<query>","top_k":5}' "https://your-kb-api.example.com/search"`

Set `LEGAL_KB_API_KEY` in `skills.entries.legal-kb.env` (or in the environment the gateway runs in). Use the JSON response to answer and cite the returned passages.
```

Adjust the URL, headers, and body to match your actual API. The agent will use `web_fetch` for GET or `system.run` for curl/CLI.

**2. Ensure the right tools are allowed**

- For GET-only KB: allow `web_fetch` (and optionally `group:web`). See [Tools](/tools/index) and [web_fetch](/tools/web).
- For POST/CLI: allow `system.run` or `bash` and configure exec approvals if required. See [Exec approvals](/tools/exec-approvals).

**3. Optional: custom plugin tool**

For a typed, secure integration you can add a **plugin** that registers a tool (e.g. `legal_kb_search(query: string)`) that calls your API and returns snippets. The agent then uses that tool instead of raw `web_fetch` or `system.run`. See [Plugins](/tools/plugin).

### Option B: Built-in memory search (workspace Markdown)

OpenClaw can index workspace Markdown and expose `memory_search` (semantic) and `memory_get` (read by path/line). Use this when the legal KB lives as files in the workspace.

**Where to put legal content**

- **MEMORY.md** — Curated, long-term legal reference. Loaded only in the main session.
- **memory/** — One file per topic, e.g. `memory/contracts.md`, `memory/employment.md`. Only `MEMORY.md` and `memory/**/*.md` are indexed; use **Markdown** only.

**Enable memory search**

In `~/.openclaw/openclaw.json` set `agents.defaults.memorySearch` (e.g. `provider: "openai"`, `model: "text-embedding-3-small"`). The agent must have an API key for the chosen embedding provider. See [Memory](/concepts/memory#vector-memory-search).

**AGENTS.md rule for built-in memory**

For legal questions: use `memory_search` with a query that matches the question, then `memory_get` on the returned paths/ranges. Base your answer on the retrieved content and cite (e.g. "Per memory/contracts.md …"). If nothing relevant, say so and suggest a lawyer.

## 4. Optional: workspace skill for legal KB

OpenClaw ships a built-in skill **legal-kb** that tells the agent to query the knowledge base (external or built-in memory) and cite sources for legal questions. It is available by default. To customize, add a workspace skill with the same name (e.g. `<workspace>/skills/legal-kb/SKILL.md`). The skill text can mirror the TOOLS.md / AGENTS.md rules: use the external KB URL or command from TOOLS.md, or use `memory_search` / `memory_get` when using built-in memory.

## 5. Test the legal agent

1. Start (or restart) the gateway and open a session (CLI or your configured channel).
2. Ask a question that your knowledge base should answer.
3. Confirm the agent calls your external search (e.g. `web_fetch` to the KB URL or `system.run` with the curl command) or uses `memory_search` / `memory_get`, and cites the returned content.
4. Ask something outside the KB and confirm the agent says it has no supporting material and does not invent answers.

## Summary

| Piece                          | Role                                                                                      |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| **Workspace**                  | Home for the legal agent (persona, rules, TOOLS.md).                                      |
| **SOUL.md / IDENTITY.md**      | Legal persona and boundaries.                                                             |
| **AGENTS.md**                  | Rule: for legal questions → query KB (per TOOLS.md or memory_search) → cite.              |
| **TOOLS.md**                   | How to call the external KB (GET URL for web_fetch, or curl/CLI for system.run).          |
| **External KB API**            | Your similarity-search service; agent uses web_fetch or system.run to call it.            |
| **Or memory/** + **MEMORY.md** | Alternative: built-in memory search; set `memorySearch` and use memory_search/memory_get. |
| **skills/legal-kb** (optional) | Reinforces KB usage and citations.                                                        |

## See also

- [Agent workspace](/concepts/agent-workspace) — workspace layout and files
- [Memory](/concepts/memory) — built-in memory files and vector memory search
- [Tools](/tools/index) — web_fetch, system.run, tool allowlists
- [web_fetch](/tools/web) — HTTP GET for external GET-style search URLs
- [Exec approvals](/tools/exec-approvals) — allowing system.run / bash for CLI-based KB search
- [Multi-Agent Routing](/concepts/multi-agent) — separate agent with its own workspace
- [Creating Skills](/tools/creating-skills) — custom workspace skills
