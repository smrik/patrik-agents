# Patrik Agents

Choose either plugin or install both. **Project Setup** helps you choose skills when you ask to set up a project. **Git Reminder** checks the current folder at session start. In an unversioned folder it asks whether to initialize Git before the first code edit. It stays quiet for notes. The reminder requires Node.js and Git on your path.

## Codex

Once this marketplace is published, run `codex plugin marketplace add smrik/patrik-agents`. Install the plugin you want with `codex plugin add project-setup@patrik-agents` or `codex plugin add git-reminder@patrik-agents`. For the reminder, review and trust its SessionStart command. Start a fresh session.

## Claude Code

Once published, run `claude plugin marketplace add smrik/patrik-agents`. Run `claude plugin install project-setup@patrik-agents --scope user` or `claude plugin install git-reminder@patrik-agents --scope user`. To receive updates automatically, enable auto-update for this marketplace in the plugin manager. Start a fresh session after an update. Claude may also ask you to trust a new workspace.
