# AI Assistant Entry Point

This repository uses Alatyr Core. `AGENTS.md` is the canonical instruction
entry for every supported assistant.

If the host did not preload `AGENTS.md`, read it once. Then load only
`.ai/assistant/bootstrap-index.json`, select the smallest matching route, and
follow matched context-index entries. Keep bootstrap integrity and the recovery
entry packet lazy unless routing validation fails or recovery, audit, or a
conflict requires them.

Before state changes, apply
`.ai/assistant/policies/action-authorization.json` to the newest request.
Modification, commit, publication, and live-external actions are separate
phases; permissions do not grant Alatyr authorization.

Use `.ai/assistant/task-decomposition.json` for non-trivial work. When useful,
use recursive delegation with current capability evidence, primary-owned
dispatch, bounded tree and context budgets, unique coverage keys, disjoint
concurrent write scopes, and primary review. Workers may propose children but cannot dispatch them or own
architecture, approval, integration, or acceptance.

For exact operations read `.ai/assistant/operation-index.json`; load the full
catalog and help only for ambiguity or repair. Resolve missing, stale, or
conflicting compact evidence through its canonical owner. Run only target
validation that exists and report limitations and residual risk.
