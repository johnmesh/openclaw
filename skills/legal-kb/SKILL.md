---
name: legal-kb
description: Answer legal questions using the knowledge base (external similarity search or workspace memory). Use when the user asks about law, policy, contracts, or compliance; always query the KB and cite sources.
---

# Legal knowledge base

For legal or policy-related questions:

**If the KB is an external similarity-search API:** Use the URL or command documented in TOOLS.md (e.g. `web_fetch` for a GET search URL, or `system.run` with the curl/CLI command for POST). Base your answer on the returned snippets and cite the source (e.g. "According to the knowledge base …").

**If the KB is workspace memory:** Run `memory_search` with a query that captures the question (topic, jurisdiction, concepts), then `memory_get` on the returned file paths and line ranges. Answer from the retrieved content and cite (e.g. "Per memory/contracts.md …").

If no relevant results or low confidence, say so and recommend consulting a lawyer or adding more context. Do not invent legal conclusions; base answers on retrieved knowledge-base content only.
