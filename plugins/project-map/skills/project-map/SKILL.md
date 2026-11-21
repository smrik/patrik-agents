---
name: project-map
description: Track a branching project in conversation when the user asks for a project map, a progress bookmark, or to resume from a pasted map or bookmark.
---

Use the user's branch names. Start with what the conversation establishes. When a branch forks, keep the parent and its unfinished children. Carry the map through follow-up questions about this project. An unrelated one-off gets an ordinary answer. Resume the map when the user returns.

Open with a compact map. Give each branch a short state such as current, open, paused, or done. Expand the current path one level deeper where useful. Keep the name and state of each unfinished sibling visible, including siblings of the current branch's ancestors. Put deferred decisions beside the branch that owns them, with the condition for revisiting them if known. Mark work done only when a result, check, or the user's confirmation supports it.

Answer the current question below the map. For a detour, answer it and keep the return point visible. When the user switches focus, update the current path and preserve where the previous branch paused. On return, use the last known decision and next step.

End with one short line: **Bookmark** · Current branch → next concrete step. If the user asks for only a map or only a bookmark, show just that part. For a handoff, make the map and bookmark sufficient to paste into a fresh chat: keep pending decisions and the specific next action in those two pieces. Resume from the pasted state using conversation context alone.
