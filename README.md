# Patrik Agents

Choose either plugin or install both. **Project Setup** helps you choose skills when you ask to set up a project. **Git Reminder** checks the current folder at session start. In an unversioned folder it asks whether to initialize Git before the first code edit. It stays quiet for notes. The reminder requires Node.js and Git on your path.

## Codex CLI

Run `codex plugin marketplace add smrik/patrik-agents`. Install the plugin you want with `codex plugin add project-setup@patrik-agents` or `codex plugin add git-reminder@patrik-agents`. For the reminder, review and trust its SessionStart command. Start a fresh session after installation.

Codex checks this Git marketplace for updates at startup on a best-effort basis. To fetch an update now, run `codex plugin marketplace upgrade patrik-agents`. Once the installed plugin updates, invoke Project Setup again in your current chat. If you still see the old behavior, try a fresh chat.

## Claude Code CLI

Run `claude plugin marketplace add smrik/patrik-agents`. Install the plugin you want with `claude plugin install project-setup@patrik-agents --scope user` or `claude plugin install git-reminder@patrik-agents --scope user`. Claude may ask you to trust a new workspace.

Open `/plugin` → **Marketplaces** and enable auto-update for `patrik-agents`. After your first interactive message, Claude waits up to ten minutes before starting its background check. When the update notice appears, run `/reload-plugins` to use the new skill in your current session, or start a fresh session.

To update Project Setup manually, run `claude plugin marketplace update patrik-agents`, then `claude plugin update project-setup@patrik-agents --scope user`. Reload or start a fresh session afterward.
