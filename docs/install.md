# Installation guide

[Back to Patrik Agents](../README.md)

## Claude Code

Run the command for the plugin you want in your terminal. Each command also registers the marketplace.

**Project Setup**

```sh
claude plugin install project-setup --marketplace smrik/patrik-agents --scope user
```

**Git Reminder** · Requires Node.js and Git on your path.

```sh
claude plugin install git-reminder --marketplace smrik/patrik-agents --scope user
```

Claude may ask you to trust a new workspace. To receive updates automatically, open `/plugin` → **Marketplaces** and enable auto-update for **patrik-agents**. After your first interactive message, Claude waits up to ten minutes before starting its background check. When an update notice appears, run `/reload-plugins` or start a fresh session.

For a manual update, run `claude plugin marketplace update patrik-agents`, then `claude plugin update project-setup@patrik-agents --scope user`. Reload or start a fresh session afterward.

## Codex

Add the marketplace once:

```sh
codex plugin marketplace add smrik/patrik-agents
```

Then install **Project Setup**:

```sh
codex plugin add project-setup@patrik-agents
```

Or install **Git Reminder**:

```sh
codex plugin add git-reminder@patrik-agents
```

For Git Reminder, review and trust its **SessionStart** command, then start a fresh session. The command uses Node.js and Git on your path.

Codex checks this Git marketplace for updates at startup on a best-effort basis. Run `codex plugin marketplace upgrade patrik-agents` to fetch an update immediately. Once the plugin updates, invoke Project Setup again in your current chat. If you still see the old behavior, start a fresh chat.

## Desktop

Copy the marketplace URL:

```text
https://github.com/smrik/patrik-agents
```

- **Codex desktop:** Open **Plugins → Add → Add a marketplace**. Paste the URL, open the plugin you want and select **Install plugin**.
- **Claude:** Open **Customize → Plugins → Add → Add marketplace**. Choose **Add from a repository**, paste the URL, then select the plugin. [Claude’s marketplace guide](https://support.claude.com/en/articles/13837440-use-plugins-in-claude)

## Try it

In a fresh chat with Project Setup installed, ask: “Set up this project for reviewing a small Python change. Show me which installed skills already cover it.” You should get a recommendation before anything is added.

To try Git Reminder in Codex or Claude Code, open an empty folder outside Git. Ask for a shopping note, then ask for a Python script in the same chat. The Git choice should appear before the script is written.

## Other agents

For **Project Setup** alone, run Vercel’s skills installer and choose your target agent. Git Reminder uses a client hook and needs one of the marketplace installs above.

```sh
npx skills add smrik/patrik-agents --skill project-setup
```
