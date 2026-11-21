---
name: research-agent-guidance
description: Fetch and date primary sources when asked to refresh evidence on agent instructions, skill discovery, or model-specific prompting.
---

Use the evidence file named by the user, or `agent-guidance/SOURCES.md` relative to the consuming project. Start with the relevant dated entries if they exist. For a first refresh, create the file with the verified observations. If the user asks only a question, return the findings in the reply.

Open the relevant sections of live first-party documentation, release notes or implementation sources. Compare the advice with the previous observation. A search snippet or a newer crawl date alone cannot establish a change.

For each material finding, record the source link, publication date when known, retrieval date, affected product or model, and what changed or still applies. Preserve the previous dated observation when a rolling page changes. Distinguish a documented replacement from advice for a different model or task. If a source is unreachable, record the gap and keep the previous verification date.

Label local observations with their project and evidence file. Identify preferences as such. Finish with the decisions the evidence could change. A requested refresh updates the evidence file. Synthesizing a guide is a separate task.
