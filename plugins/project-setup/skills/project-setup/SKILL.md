---
name: project-setup
description: Set up a project, choose project skills, or review project instructions, task prompts, and skill triggers when asked how to improve an agent setup.
---

Start with the deliverable the user described. Ask what they want to finish only if it is unclear.

For a setup or review request about instructions, prompting, or skill design, read [the setup reference](references/harness.md). Inspect the client's active instructions, the prompt, and evidence from the target task. Recommend an edit only if you can name the behavior it would improve. If the instructions lead to the owning source and the task already gets the required check, recommend keeping the setup and finish. For a demonstrated gap, show the smallest proposed edit, why it addresses that gap, and a task that can verify it. Continue below when the user also wants to choose skills.

Check which relevant skills the client currently exposes. Identify each one's owner, source path or listing, and scope. Treat catalogs and directories as candidates until the client exposes the skill. If the active setup covers the task, name the skill and finish without writing files.

For a gap, inspect the smallest useful candidates across authors. Read their instructions and inspect the install unit. Preview the exact name, source, trigger, benefit, destination, bundled extras, dependencies and rules affecting other tasks. Offer a single choice including “use existing setup.” Apply only the selected unit, preserving existing files and settings. If the client requires a larger bundle, disclose its contents before selection.

After a change, check the client’s active list in a fresh session and report added and removed names, the scope and the files changed. Distinguish installation from confirmed availability when a fresh session is pending.
