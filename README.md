# Patrik Agents (moved)

This repository is retired. Its six plugins now live in the skill library of
[smrik/patrik-toolkit](https://github.com/smrik/patrik-toolkit), under `library/`:
project-map, project-setup, research-agent-guidance, consolidate-agent-guidance,
repo-cleanup and git-reminder.

Add the marketplace once, then switch a plugin on where you need it:

```
claude plugin marketplace add smrik/patrik-toolkit
python3 tools/skills.py on project-map --here   # run inside a patrik-toolkit checkout
```

Or install directly: `claude plugin install project-map@patrik-personal --scope project`
(Codex: `codex plugin add project-map@patrik-personal`).
