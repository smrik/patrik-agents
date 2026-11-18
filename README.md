# ![Patrik Agents. Git Reminder asks whether to initialize Git before writing a script. Project Setup identifies an existing review skill.](docs/banner.png)

Two optional plugins for Claude Code and Codex.

**Git Reminder** catches the moment a scratch folder becomes a code project. Ask for a note and it stays quiet. Ask for a Python script and, if the folder is outside Git, it offers to initialize a repository before the first edit. You can also choose to carry on.

**Project Setup** answers “Do I already have a skill for this?” Tell it what you’re building. It checks the skills your agent can use and shows you what a new one would add before you install it.

## Install

Choose either plugin or install both. These commands install **Git Reminder**. For **Project Setup**, replace `git-reminder` with `project-setup`.

**Claude Code**

```sh
claude plugin install git-reminder --marketplace smrik/patrik-agents --scope user
```

**Codex**

```sh
codex plugin marketplace add smrik/patrik-agents
codex plugin add git-reminder@patrik-agents
```

Git Reminder needs Node.js and Git. In Codex, review and trust the startup hook. Open a fresh chat to use it.

[Desktop installation](docs/install.md#desktop) · [Try the plugins](docs/install.md#try-it) · [Full installation guide](docs/install.md)
