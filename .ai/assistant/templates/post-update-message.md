# Post-Update Assistant Chat Message

Use this template for the assistant's chat response after Alatyr Core is
updated in `{PROJECT_NAME}`.

Replace placeholders with target facts before sending the message.

Delivery evidence is separate from this template. Record `sent`, `skipped`, or
`blocked`, together with the delivery mechanism, reason, and observation time.
The presence of this file never proves that a chat message reached a user.

```text
Alatyr Core has been updated for `{PROJECT_NAME}`.

Framework baseline:
`{ALATYR_CORE_SOURCE_OR_BASELINE}`

Framework version/schema:
`{ALATYR_CORE_VERSION}`, adapter schema `{ALATYR_ADAPTER_SCHEMA_VERSION}`, template `{ALATYR_TEMPLATE_VERSION}`

Updated adapter surfaces:
`{UPDATED_ADAPTER_SURFACES}`

Future assistant bootstrap:
- Do not rely on this chat message alone.
- Treat `AGENTS.md` as preloaded; start from
  `.ai/assistant/bootstrap-index.json`. Keep integrity and recovery metadata
  lazy unless validation fails, recovery or audit is requested, or routing
  conflicts.
- Verify or rebuild the bootstrap integrity record, recovery entry packet, and
  recursive framework, project, and assistant context indexes from this
  branch's installed files, then repair the bootstrap from `.ai/alatyr.yaml`, `.ai/README.md`,
  `.ai/assistant/context-router.json`, and `.ai/framework/semantics/index.json`
  when stale.
- Preserve target-owned support classifications, accepted relationships,
  candidates, and generator bindings. Rebuild optional reverse/generation
  indexes, then generate `.ai/support-state.json` last.
- Preserve selected assistant/provider capability evidence. Recheck provider
  cache mode, exposed client controls and telemetry, and freshness before
  using or reporting caching; otherwise retain bounded-routing fallback.
- Use the resolved core semantic definitions once, follow only selected index
  branches, and load canonical owner prose for unresolved or conflicting terms.
  Report stale entries, omitted live references, and fallback events.
- Send `Alatyr` for compact actions or `Alatyr status` for a read-only adapter health check.
- If migration impact is unclear, run `recheck-after-framework-update` before editing files.
- Re-evaluate `.ai/assistant/policies/action-authorization.json` at every
  action-phase boundary. Never reuse edit, commit, push, or live-action intent
  from a completed or superseded scope.

Recommended follow-up:
Use the installed Alatyr adapter in this repository.
Operation type: recheck-after-framework-update
Goal: compare the installed adapter against the updated Alatyr Core baseline and report required migrations.
Non-goals: do not change project behavior without approval.
Allowed actions: read-only

Migration assessment:
`{MIGRATION_ASSESSMENT_PATH_OR_MANUAL_REVIEW}`

Upgrade impact router:
`{UPGRADE_IMPACT_JSON_PATH_OR_MANUAL_REVIEW}`

Load only canonical sources and target surfaces selected by the migration
assessment. Record candidate context intentionally omitted.

Operation help:
- Send `Alatyr` for compact relevant operations; use `Alatyr status` or
  `Alatyr doctor` for read-only health evidence.
- Exact IDs and aliases route through `.ai/assistant/operation-index.json`;
  bounded natural-language requests route automatically and operation IDs are
  optional. Load the full catalog only for ambiguity or repair.
- Issue/backlog returns, status requests, discussion, analysis, plans, reports,
  and ambiguous continuation remain read-only. Require current-scope intent for
  modification, commit, publication, and live external action separately; a
  clear request may authorize multiple named phases together.
- Risky or cross-boundary changes show a pre-change preview before edits.
- Use `.ai/assistant/help.md`, `.ai/assistant/help-reference.md`, and `.ai/assistant/templates/operation-request.md` for structured requests.
- Use `Alatyr what do we know <subject>` for bounded accepted/current project
  knowledge, `Alatyr remember this` for a review proposal, and `Alatyr
  revalidate knowledge <id>` after freshness triggers. Historical evidence is
  not promoted during update.
- Preserve durable engineering-evidence IDs and records. Recheck compact index
  synchronization, contract/template versions, task/revision binding state,
  Git object type/ancestry, prior-binding lineage, canonical-owner links, privacy,
  external-patch policy, and record access; never replace existing records
  with source placeholders.
- Preserve project-knowledge promotion IDs and dispositions, canonical owner
  bindings/digests, candidate origins, guidance kinds, direct decision-owner
  authority, exception precedence, coverage states, route shards,
  contradiction and supersession lineage, and retention policy. Revalidate
  accepted facts against canonical owners and rebuild derived routes when
  needed; do not promote historical evidence or source placeholders during
  update.
- Preserve Debug Mode IDs, records, active-scope evidence, normalized events,
  timing, metrics, and publication policy when the module is enabled. Recheck
  versioned actor/causality/intervention/contribution attribution, structured
  architectural impacts, direction-change hypothesis/replacement chains,
  lifecycle timestamp bounds, immutable completion and continuation lineage,
  typed evidence-event roles, materiality evaluation, canonical skip
  preservation, claim-validation fidelity, durable Engineering Evidence
  decisions/references, binding lineage, completed-record comparison,
  dependency closure, schema, lazy route, operation, validator, and activation
  expiry. Preserve schema-version-1 and version-2 records as migration-limited
  evidence; do not reactivate or append to a closed scope or include debug
  files in a clean external patch. Use schema version 3 only for new records;
  do not silently invent historical attribution or materiality.
- When subagent delegation is enabled, preserve the target policy, role
  catalog/prompts, execution plans, packet/result evidence, privacy, and
  retry/conflict rules. Recheck each surface's exact client/runtime, native
  definition format and paths, invocation mode, tools, isolation, background/
  nested behavior, role/model bindings, and freshness. Remove or migrate stale
  thin native bindings only from target evidence; never infer support from the
  updated framework templates.
- Recheck AI infrastructure router entries and adaptation records when skills, prompts, gates, tools, or bridge contracts changed.
- Recheck the architecture catalog owner, decision authority, item states,
  selected evidence paths, validation, and evidence revision when
  `architecture-knowledge` or project architecture contracts changed. Use
  `Alatyr architecture` for a bounded inventory, explanation, comparison, or
  review.
- Use `alatyr-suggest-ai <scope>` or `alatyr-improve-ai <item-id>` for a read-only recommendation when project needs or existing item outcomes changed.

Validation run:
`{VALIDATION_RUN_OR_UNRESOLVED}`

Validation phase and branch/revision:
`{ACCEPTANCE_OR_MIGRATION_STAGING_AND_TARGET_BRANCH_REVISION}`

Acceptance status:
`{ACCEPTED_OR_STAGED_WITH_ACTIVE_PLACEHOLDERS_AND_REQUIRED_STRICT_RERUN}`

Adapter health:
`{READY_ATTENTION_BLOCKED_OR_UNVERIFIED_WITH_REASON}`

Do not describe the update as complete when validation used migration staging,
active adapter placeholders remain, enabled manifest modules disagree with the
module profile, or evidence belongs to another branch or revision.

Do not report adapter health as `ready` unless installation state is
`accepted` and current strict acceptance validation passed for this branch and
revision.

Known adapter gaps or migrations:
`{KNOWN_GAPS_OR_MIGRATIONS}`


Delivery status: `{SENT_SKIPPED_OR_BLOCKED}`
Delivery mechanism: `{CHAT_SURFACE_OR_UNAVAILABLE}`
Delivery reason: `{WHY_SENT_SKIPPED_OR_BLOCKED}`
Delivery observed at: `{DELIVERY_TIMESTAMP_OR_NOT_OBSERVED}`
```
