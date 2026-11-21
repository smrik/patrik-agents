# Project Setup trial evidence

These findings come from synthetic repository trials on 18 November 2026. Results describe the specified task, client and model.

## Eight-condition Codex comparison

Codex CLI 0.169.0 and GPT-6.2 Sol added a Python route under eight combinations of a pointer to the compatibility note, a narrower endpoint-skill trigger and an explicit request to exercise five routes. The independent check required the new route to use the correct audit bucket. Each cell also checked edit scope and actual execution.

| Active practices | Independent route check on first run |
| --- | --- |
| Baseline | Failed |
| Narrow trigger | Failed |
| Pointer | Passed |
| Explicit finish line | Failed |
| Pointer and narrow trigger | Passed |
| Pointer and finish line | Passed |
| Narrow trigger and finish line | Failed |
| All three | Passed |

Including repeats, all seven runs with a pointer passed the independent check. All five without it failed. All twelve exercised all five routes. The existing endpoint skill already asked for execution. Adding the finish line made the returned values easier to inspect.

## Codex routing control

On an ordinary support-email edit in the README, all six runs produced the correct result. The broad description caused three specialist reads in three runs. The narrow description caused zero in three. Both descriptions still selected the skill on the route task. The trials did not measure token or time savings.

## Claude invoice

In Claude Code 2.1.327 with Sonnet 4.6, all eight sessions found the invoice contract and passed the existing suite on independent rerun. Four of four prompts naming a finish line produced a successful in-session test run. Of four open prompts, one ran it successfully and a second attempted a blocked command. This task provided evidence for changing the verification prompt. It gave no correctness reason to add a pointer. Actual workbook import was untested.

## Coding holdout

In a fresh Claude Code release-manifest fixture, the original prompt's implementation passed its unit suite and failed the existing download-page check. Project Setup found the check and proposed appending both commands to the request. On a clean replay only the exporter changed. Both `node --test` and `node scripts/check-download-page.mjs` passed in-session and on independent rerun. The revised setup skill reproduced this result on the same fixture. Equal publication dates were outside the check.

## Working setups and instruction conflict

In a scan-tag fixture the project instructions already pointed to the owning spec and the task named the passing check. The first review proposed extra wording. After the skill required a demonstrated gap, a fresh native Claude Code review on that same fixture recommended keeping the setup.

In a public-notice fixture, baseline replies produced the correct UTC notice but still offered a stale CET alternative. Replacing the stale rule with a pointer to the editor-owned handbook preserved the correct notice and removed that alternative on replay. In a separate skill-selection control, the active arrival-card skill covered the request. Project Setup recommended zero additions and skipped the setup reference.
