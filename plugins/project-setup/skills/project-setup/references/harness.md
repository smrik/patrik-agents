# Reviewing an agent setup

Start with one task and the behavior the user wants to change. Inspect the instructions the client loads from the task's launch directory. Find who owns the relevant rule or check before proposing an edit.

| Observed symptom | Smallest change to try | When to keep the current setup |
| --- | --- | --- |
| A routine edit misses a repo convention, or two instruction files give different answers. | Point from the active project instructions to the maintained rule. Name the task and the path. Leave changeable values in the owner's file. If ownership is unclear, ask which source governs. | Keep a rule that already leads to the correct behavior without conflict. Both Claude invoice variants found the contract. A pointer mattered for the Codex route change. [Trial results](#trial-results) |
| The output looks right but the agent skips a check the user relies on. | Put the existing acceptance check and the expected observable result in the task prompt. Check that the client can run it. | Keep the prompt if the agent already performs the check. In the Claude trial, an explicit finish line improved observed verification. All eight outputs passed the existing suite on independent rerun. [Trial results](#trial-results) |
| A specialist skill opens for unrelated work. | Narrow its description to the operation that actually needs it. Try one task that should trigger it and one ordinary edit that should skip it. Inspect invocations or file reads as well as the output. | Keep the description if both cases route correctly. An ordinary edit can succeed even when the wrong skill consumed context. [Trial results](#trial-results) |

Use `AGENTS.md` for Codex. For Claude Code check the active `CLAUDE.md`, imports and instruction-loading mode before adding a second copy. Names and descriptions are visible before the skill body loads. Keep a specialist reference with the skill when only that workflow needs it. The trials did not compare inline and external reference layouts. [Codex discovery](https://learn.chatgpt.com/docs/agent-configuration/agents-md) · [Claude discovery](https://code.claude.com/docs/en/memory#agentsmd) · [Skill structure](https://agentskills.io/specification#progressive-disclosure)

## Trial results

- **Codex CLI 0.169.0, GPT-6.2 Sol.** Three of three route edits with the pointer satisfied a backwards-compatibility rule. All three without it missed the rule. Broad and narrow triggers both served the route task. On a README-only edit the broad description caused three unnecessary specialist reads in three runs. The narrow description caused none in three. All six README edits were correct.
- **Claude Code 2.1.327, Sonnet 4.6.** The invoice task's explicit finish line produced four successful in-session test runs in four attempts. The open prompt produced one success and one blocked attempt in four sessions. All eight sessions found the finance contract. This fixture provided no reason to add a pointer for correctness alone.

The full three-practice Codex comparison also tested a prompt asking the agent to exercise five routes. The endpoint skill already prompted verification. Naming those checks added no correctness benefit. In an unfamiliar Claude release-manifest repo the default unit suite missed a wrong sort order. Project Setup found the consumer check and added its command to the task prompt. The replay passed that unchanged check. Equal publication dates were outside the check.

The installed skill includes evidence from 18 November 2026. When reviewing another project, use these results and inspect its own spec or acceptance check. [Eight-condition Codex comparison](trials.md#eight-condition-codex-comparison) · [Codex routing control](trials.md#codex-routing-control) · [Claude invoice](trials.md#claude-invoice) · [Coding holdout](trials.md#coding-holdout) · [Working setups and instruction conflict](trials.md#working-setups-and-instruction-conflict)
