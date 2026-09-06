# Native Worker Binding

Use this provider-neutral authoring template only after the selected assistant
capability record verifies project-owned worker definitions for the exact
target client/runtime. The installed native file uses that client's required
format; this template remains the adaptation evidence.

Assistant surface: `request-specific`
Client product/runtime: `request-specific`
Client version: `request-specific`
Native definition format: `request-specific`
Native definition path: `request-specific`
Role ID: `request-specific`
Role prompt: `request-specific`
Model selection: `request-specific`
Model/reasoning evidence: `request-specific`
Tool restrictions: `request-specific`
Write isolation: `request-specific`
Verification/expiry: `request-specific`

Canonical references:

- `.ai/assistant/delegation-policy.json`
- `.ai/assistant/workers/role-catalog.json`
- `.ai/assistant/prompts/worker-orchestration.md`
- `.ai/assistant/templates/subagent-task-packet.md`
- `.ai/assistant/templates/worker-result.md`

The native definition must stay thin. It may express client-required metadata,
role purpose, model selection, tool restrictions, and pointers to canonical
target contracts. It must not duplicate full project/framework policy, grant
new action phases or approval, activate nested adapters, or infer unsupported
client features.

After creating or changing the native file, record its exact path in the
selected capability record and rerun target validation. If support becomes
unknown, unsupported, or stale, disable the binding and use suggestion-only or
sequential-primary fallback rather than relocating it by assumption.
