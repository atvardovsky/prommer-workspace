# Post-Install Assistant Chat Message

Use this template for the assistant's chat response after Alatyr Core is
installed in `{PROJECT_NAME}`.

Replace placeholders with target facts before sending the message.

Delivery evidence is separate from this template. Record `sent`, `skipped`, or
`blocked`, together with the delivery mechanism, reason, and observation time.
The presence of this file never proves that a chat message reached a user.

```text
Alatyr Core is installed for `{PROJECT_NAME}`.

Installation state: `{SCAFFOLDED_STAGED_ACCEPTED_DEGRADED_OR_INVALID}`
Adapter health: `{READY_ATTENTION_BLOCKED_OR_UNVERIFIED}`
Acceptance eligible: `{YES_OR_NO_WITH_REASON}`

`scaffolded`, `staged`, and `degraded` installations are not `ready`.
Only `accepted` installation state with current strict validation can be
reported as `ready`.

Entry points:
- `AGENTS.md`
- `AI_ASSISTANTS.md`
- `.ai/alatyr.yaml`
- `.ai/README.md`
- `.ai/assistant/templates/installation-note.md`
- `.ai/assistant/help.md`
- `.ai/assistant/help-reference.md`
- `.ai/assistant/operation-index.json`
- `.ai/assistant/operation-catalog.json`
- `.ai/assistant/policies/action-authorization.json`
- `.ai/assistant/context-router.json`
- `.ai/assistant/bootstrap-index.json`
- `.ai/assistant/bootstrap-integrity.json`
- `.ai/framework/context-index.json`, `.ai/project/context-index.json`, and
  `.ai/assistant/context-index.json`
- `.ai/project/support-policy.json` and final `.ai/support-state.json`
- `.ai/framework/semantics/index.json`
- `.ai/assistant/gates/index.json`
- `.ai/assistant/context-profiles.md`
- `.ai/assistant/module-profile.md`
- `.ai/project/source-of-truth-registry.md`
- `.ai/project/engineering-evidence/index.json` and its target storage policy
- `.ai/project/knowledge/index.json`, reviewed promotions, compact route shards,
  and `.ai/assistant/context/project-knowledge-routing.json`
- `.ai/project/debug/index.json` and its non-canonical storage/privacy policy
  when optional Debug Mode is enabled
- `.ai/project/architecture/README.md` and `.ai/project/architecture/catalog.json` when architecture knowledge is enabled
- `.ai/assistant/maturity-profile.md`
- `.ai/assistant/bridge-capability-matrix.md`
- `.ai/assistant/assistant-capabilities.json`
- For the selected assistant surface, resolve its provider/model cache mode,
  exposed controls, telemetry, and freshness from the indexed capability
  record. Keep stable semantic context before task-specific context, but use
  bounded routing normally when caching is unsupported or unknown. Do not
  treat cached input as removed from the model context window.
- `.ai/assistant/delegation-policy.json`, `.ai/assistant/workers/role-catalog.json`, and `.ai/assistant/prompts/worker-orchestration.md` when subagent delegation is enabled
- `.ai/assistant/ai-infrastructure-router.json` when AI infrastructure is enabled

Future assistant bootstrap:
- Do not rely on this chat message alone.
- Treat `AGENTS.md` as preloaded; start from
  `.ai/assistant/bootstrap-index.json`. Keep
  `.ai/assistant/bootstrap-integrity.json` and
  `.ai/assistant/entry-packet.json` lazy unless validation fails, recovery or
  audit is requested, or routing conflicts.
- Use the bootstrap's resolved core semantic definitions once. Follow only
  task-selected branches from the three contour context indexes; a parent
  index does not authorize loading every child.
- Repair stale recursive indexes, bootstrap integrity, and bootstrap from their
  named sources; otherwise load profiles, module state, registries, blueprint, gate
  fragments, and the installation note only when routing or unclear adapter
  state requires them. Fall back to canonical owner prose when a compact term
  cannot be resolved exactly.
- Rebuild the entry packet, optional consistency/generation indexes, and
  recursive context indexes before refreshing support state. Use support
  differences to select context; do not infer semantic correctness from
  matching hashes.
- Send `Alatyr` for compact actions or `Alatyr status` for a read-only adapter health check.
- If the installation itself is unclear, run `recheck-after-installation` before editing files.
- Re-evaluate the newest request at every action-phase boundary. A completed
  task's edit, commit, or push authorization does not carry into a new issue,
  backlog item, discussion, report, or subject switch.

Installed operation help:
- Send `Alatyr` to see adapter state and up to three relevant operations.
- Send `Alatyr status` or `Alatyr doctor` for read-only health evidence.
- Clear development requests route automatically; operation IDs are optional.
- Issue/backlog returns, status requests, discussion, analysis, plans, reports,
  and ambiguous continuation are read-only until the current request explicitly
  authorizes implementation. Implementation intent does not authorize commit
  or push, and commit intent does not authorize push.
- Risky or cross-boundary changes show a pre-change preview before edits.
- Use `.ai/assistant/templates/operation-request.md` for structured requests.
- When architecture knowledge is enabled, use `Alatyr architecture` to inventory, explain, discuss, compare, review, or document project architecture and patterns.

Available next actions:
- `create-project-blueprint`: create or repair project source-of-truth docs from target evidence.
- `project-knowledge`: explain, route, review, promote, reject, defer, record
  registered decision-owner guidance or an explicit exception, supersede, or
  revalidate reusable project guidance without treating historical evidence as
  current authority.
- `recheck-after-installation`: verify the installed adapter and report gaps.
- `product-change`: run blueprint-driven change from intent through validation and evidence.
- `logical-integrity-review`: check consistency across code, docs, tests, diagrams, prompts, skills, gates, and bridges.
- `architecture-assistance`: discuss project architecture and patterns from a compact evidence-backed catalog; observed or proposed items are not accepted architecture.
- `subagent-delegation`: when enabled, let the primary assistant propose or
  dispatch bounded worker tasks through project-owned roles and the selected
  current assistant capability. Unsupported clients continue sequentially;
  native worker support and model choice are never inferred.
- `engineering-evidence`: use `Alatyr evidence`, `Alatyr capture evidence`, or
  `Alatyr explain decision <evidence-id>`. Material tasks preserve compact
  reusable conclusions when triggered; small self-explanatory tasks may skip
  with a specific reason. Raw assistant reasoning is never retained.
- `debug-mode`: when enabled, use `Enable Alatyr Debug Mode for this task`,
  `Alatyr debug status`, `Alatyr debug checkpoint`, `Alatyr debug summary`,
  `Disable Alatyr Debug Mode`, or `Alatyr compare debug`. The module starts
  inactive; each task/session needs explicit activation, and no engineering,
  commit, push, publication, or live-action permission is granted.
- `ai-infrastructure-inventory`: check existing AI instructions, prompts, skills, wrappers, bridges, rules, MCP/tool configs, gates, and checkers. Alias: `alatyr-ai-inventory`.
- `ai-infrastructure-recommendation`: suggest new items or improvements to existing items from bounded project evidence in read-only mode. Aliases: `alatyr-suggest-ai <scope>`, `alatyr-improve-ai <item-id>`.
- `skill-adaptation`: adapt or add skills, prompts, wrappers, bridges, rules, MCP/tool configs, gates, checkers, or third-party assistant infrastructure. Aliases: `alatyr-adaptation <source>`, `alatyr-add-ai <source>`.
- AI infrastructure operations select a route and item ID before loading item-specific context.

Validation run:
`{VALIDATION_RUN_OR_UNRESOLVED}`

Known adapter gaps:
`{KNOWN_GAPS_OR_NONE}`

Delivery status: `{SENT_SKIPPED_OR_BLOCKED}`
Delivery mechanism: `{CHAT_SURFACE_OR_UNAVAILABLE}`
Delivery reason: `{WHY_SENT_SKIPPED_OR_BLOCKED}`
Delivery observed at: `{DELIVERY_TIMESTAMP_OR_NOT_OBSERVED}`

Suggested first request:
Alatyr status
```
