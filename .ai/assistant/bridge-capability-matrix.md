# Assistant Capability Matrix

Only the assistant surface actually selected for this workspace is recorded.
Client permissions remain separate from Alatyr authorization.

### Assistant Surface: `codex`

Subagent delegation capability record: `.ai/assistant/assistant-capabilities/codex.json`
Diagram capability record: `.ai/assistant/assistant-capabilities/codex.json`
Context caching capability record: `.ai/assistant/assistant-capabilities/codex.json`

- Overall state: limited
- Selected for target: yes
- Instruction entry: `AGENTS.md`
- Auto-load observed: yes, in the active workspace on 2026-09-03
- Operation routing: supported through the compact bootstrap and operation index;
  integrity evidence and the recovery entry packet remain lazy unless routing
  fails, conflicts, or is being audited
- Diagram module: disabled by project choice
- Diagram discussion capability: portable ASCII remains available if needed;
  rich native diagram syntax is not claimed
- Target-specific skills: not configured
- Context caching: unknown; the current Codex host exposes neither provider
  cache controls nor cached-input telemetry, so bounded routing remains the
  fallback and no cache-hit or context-window-reduction claim is made
- Subagent delegation: supported through native Codex collaboration controls
- Delegation activation: automatic when repository instructions and the
  bounded policy show a material critical-path or independent-review benefit;
  an explicit user restriction disables it
- Delegation policy: automatic bounded selection, with up to three delegates
  alongside the primary assistant; the primary owns all dispatch, workers may
  propose depth-two children, and work stops at evidence saturation or a tree limit
- Worker roles: explorer, implementer, test-runner, documentation-worker,
  reviewer, and fast-focused-worker
- Write isolation: shared workspace; concurrent writable tasks must have
  disjoint path scopes and coverage keys, with primary-owned final convergence
- Project-native worker definitions: not supported; Alatyr role contracts are
  translated into bounded native task messages
- Tool permissions: controlled by the current Codex host and always separate
  from inspect, modify, commit, publish, and live-external authorization
- Review trigger: Codex runtime, collaboration limits, instruction loading,
  shared-workspace behavior, or target capability configuration changes
