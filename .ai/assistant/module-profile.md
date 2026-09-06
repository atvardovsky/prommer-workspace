# Alatyr Module Profile

This profile records the Alatyr capabilities selected for the prommer.net workspace.
Capability claims are limited to the current product context and verified
Codex surface.

## Module State Evidence

- Manifest: `.ai/alatyr.yaml`
- Capability catalog: `.ai/framework/capabilities.json`
- Support profile: `core`
- Framework pack: `complete`
- Selected optional modules: `ai-infrastructure`, `architecture-knowledge`, `assistant-runtime-capabilities`, `blueprint-change`, `debug-mode`, `effectiveness-metrics`, `installed-operations`, `multi-assistant-bridges`, `subagent-delegation`
- Staged optional modules: none; all selected modules were already accepted before this framework migration
- Enabled optional modules: `ai-infrastructure`, `architecture-knowledge`, `assistant-runtime-capabilities`, `blueprint-change`, `debug-mode`, `effectiveness-metrics`, `installed-operations`, `multi-assistant-bridges`, `subagent-delegation`
- Manifest/profile agreement: current for the accepted alpha.58 projection
- Required surfaces: migration-staging and strict alpha.58 acceptance validation passed on 2026-09-06
- Reviewer role: primary repository maintainer

## Kernel And Core Profiles

The following kernel items are enabled and structurally current:

- contours
- manifest and versioning
- adapter ownership roles
- bounded context profiles and recursive indexes
- source-of-truth registry
- risk, approval, and logical-integrity rules
- current-scope action authorization
- task decomposition
- validation and final-evidence gates
- support policy and generated support state

The `current-scope-action-authorization` capability is enabled through
`.ai/assistant/policies/action-authorization.json`.

The core additions `durable-engineering-evidence` and
`project-knowledge-delivery` are enabled with repository-maintainer ownership
and the redaction rules in `.ai/project/privacy-policy.md`.

Core profile addition: `durable-engineering-evidence`
State: `enabled`
Owner or file: `.ai/project/engineering-evidence/README.md`
Reason: required core-profile dependency; retain only compact validated outcomes

Core profile addition: `project-knowledge-delivery`
State: `enabled`
Adoption state: `enabled-empty`
Owner or file: `.ai/project/knowledge/README.md`
Reason: retain reviewed reusable project guidance with supersession lineage

## Optional Modules

Module: `blueprint-change`
State: `enabled`
Owner or file: `.ai/assistant/flows/blueprint-driven-change.flow.md`
Reason: working implementation changes need a source-to-code-to-validation flow

Module: `installed-operations`
State: `enabled`
Owner or file: `.ai/assistant/operation-catalog.json`
Reason: exact routing is needed for implementation, evidence, knowledge, debugging, failure analysis, and health

Module: `ai-infrastructure`
State: `enabled`
Owner or file: `.ai/assistant/ai-infrastructure-router.json`
Reason: provides normalized development-pattern evidence capture and AI infrastructure routing

Module: `architecture-knowledge`
State: `enabled`
Owner or file: `.ai/project/architecture/catalog.json`
Reason: retain project-owned selection principles and evidence-backed architecture items without assuming a concrete solution

Module: `debug-mode`
State: `enabled`
Owner or file: `.ai/assistant/flows/debug-mode.flow.md`
Reason: provide explicit-scope diagnostic evidence; installation does not activate capture

Module: `effectiveness-metrics`
State: `enabled`
Owner or file: `.ai/assistant/templates/effectiveness-report.md`
Reason: required dependency of Debug Mode

Module: `diagrams`
State: `disabled`
Owner or file: `.ai/alatyr.yaml`
Reason: not needed for this workspace

Module: `assistant-runtime-capabilities`
State: `enabled`
Owner or file: `.ai/assistant/assistant-capabilities.json`
Reason: required dependency for the already selected Codex capability,
AI-infrastructure, multi-assistant bridge, and subagent-delegation surfaces

Module: `multi-assistant-bridges`
State: `enabled`
Owner or file: `.ai/assistant/bridge-capability-matrix.md`
Reason: bind the installed Alatyr delegation contracts to the verified Codex surface

Module: `subagent-delegation`
State: `enabled`
Owner or file: `.ai/assistant/delegation-policy.json`
Reason: automatically use bounded parallel and depth-two recursive work when it materially helps, with primary-owned dispatch and convergence

All other optional modules are deferred. Team tracking and change packages
remain explicitly disabled by privacy policy. Test-first development,
dependency knowledge, code documentation, vocabulary, workspace modes,
extensions, support generation, and migration diff remain deferred
until the concrete codebase and requirements provide owners and validation.

Enable an optional module only after target evidence identifies its owner,
authority, maintenance policy, validation, and required framework-pack
expansion. Do not infer enablement from the presence of portable framework
documentation.

## Evidence

The prior multi-agent transition passed strict acceptance validation with zero
errors and zero blocking warnings. The alpha.58 migration adds bounded dispatch
tree, unique coverage, child-proposal, and evidence-saturation controls while
retaining the shared-workspace warning and packet-level disjoint-write rule.
Project knowledge remains enabled-empty, and Debug Mode remains inactive until
an explicit scope activation. Architecture knowledge is enabled with no
concrete areas or patterns selected; its transition passed strict acceptance
validation with zero errors and zero blocking warnings. The final alpha.58
validator retains two non-blocking warnings: Codex delegates share the
workspace and require disjoint-write enforcement, and no target-local checker
exists before a codebase is supplied. The source validator remains outside the
target repository.
