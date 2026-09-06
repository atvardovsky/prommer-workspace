# Alatyr Core Update Record

Migration ID: `alatyr-core-alpha58-20260906`
Operation ID: `update-alatyr-core-alpha58`
Evidence classification: historical framework-maintenance record
Prepared at: `2026-09-06T16:10:40+03:00`

## Version Scope

- Accepted baseline: framework `0.1.0-alpha.52`, adapter schema `42`, target
  template `47`.
- Interrupted staging checkpoint: framework `0.1.0-alpha.55`, adapter schema
  `45`, target template `50`; this checkpoint was never accepted.
- Final target: framework `0.1.0-alpha.58`, adapter schema `48`, target template
  `53`.
- Upstream revision: `112382767a2974bd8199ceb2d570c010a217456c`.
- Framework pack: `complete`, preserved.
- Support profile: `core`, preserved.

## Routed Impact

- Changed rules: `ALATYR-CONTEXT-001`, `ALATYR-DECOMPOSITION-001`,
  `ALATYR-DELEGATION-001`, `ALATYR-LIFECYCLE-001`, `ALATYR-MODULE-001`, and
  `ALATYR-SUPPORT-001`.
- Canonical owners: context profiles, lifecycle, module profile, subagent
  delegation, support information, and task decomposition.
- Changed portable framework files: 26 files selected by the alpha.55 to
  alpha.58 upgrade assessment and synchronized from the upstream source.
- Migration report SHA-256:
  `bfe2e5792e4fedb83fbf7a0db1cfe0890da31bf60471519c106a21154283bf13`.
- Selected target surfaces: manifest, root instructions, context router and
  profiles, module profile, delegation contracts, selected Codex bridge,
  generated semantic/index/bootstrap/integrity/entry/support projections,
  approval, transition state, and update guidance.
- Omitted context: product sources and project evidence records because this
  migration does not change product facts.

## Composition And Migration

- Target projection is used; conformance projection is source-maintainer-only.
- `core` support, `complete` framework pack, Codex, and every previously
  enabled optional module are preserved.
- `modules.selected` records the intended composition, `modules.staged` is
  empty because no new module awaits evidence, and `modules.enabled` preserves
  the already accepted module set.
- Context routing moves to router schema 11, semantic codebook schema 2, and
  context packet schema 3. Routine loading stops after the compact bootstrap;
  integrity and entry-packet evidence remain lazy.
- Delegation moves to policy schema 3 with primary-owned dispatch, bounded
  depth/worker/context/retry budgets, unique coverage keys, child proposals,
  and evidence-saturation stop reasons.
- Approval: `.ai/assistant/approvals/alatyr-core-update-20260906.json`.

## Preserved State

- Project facts, project knowledge, engineering evidence, Debug Mode records,
  architecture catalog, privacy limits, and existing module choices are not
  replaced or promoted.
- Diagrams, team tracking, and change packages remain disabled.
- Context caching remains unknown and bounded routing remains the fallback.
- No product source, test, deployment, commit, push, publication, or live
  external action is included.

## Validation

- Source checks passed against upstream revision
  `112382767a2974bd8199ceb2d570c010a217456c`: full `81/81`, fast `32/32`,
  platform `22/22`, and release `81/81`. Source unit tests passed for 63 files
  in 8 shards in the full, fast, and release runs.
- Full target migration-staging validation passed with 0 errors and 0 blocking
  warnings.
- Full target strict acceptance validation passed with 0 errors and 0 blocking
  warnings. Two non-blocking warnings record shared-workspace delegation
  isolation and the absent target-local checker.
- Entry packet, bootstrap/integrity pair, 33 recursive context indexes, and
  support state for 226 managed files were regenerated in dependency order.
- The post-update assessment reports alpha.58 to alpha.58, schema 48 to 48,
  template 53 to 53, acceptance eligible, and no unresolved active
  placeholders.
- Privacy-sensitive phrase scan passed with no matches outside portable
  framework documentation.

## Residual Risk

The workspace has no Git metadata, so revision binding and canonical Git
change-set hash enforcement are unavailable. This limitation must remain
reported after structural validation.

The optional `framework-upgrade` context-planning probe reports
`REQUIRED_CONTEXT_UNINDEXED` for the canonical root manifest
`.ai/alatyr.yaml`. Full adapter validation and generated-catalog checks pass,
so this is retained as a planner limitation rather than worked around by
removing the manifest from required upgrade context or hand-editing a generated
catalog.
