# Alatyr Adapter Output Contracts

Use this file in `not-applicable-no-target-evidence` to define the minimum evidence an assistant
must report after installation, framework update, or adapter recheck work.

Replace placeholders with target facts before accepting installation.

## Contract: `operation-completion-evidence`

Use after any material operation where the assistant intends to report a final
status, especially after modifying files, committing, publishing, or completing
a large task package.

- Template path: `.ai/assistant/templates/operation-completion-evidence.json`
- Operation id: `not-applicable-no-target-evidence`
- Operation type: `not-applicable-no-target-evidence`
- Operation status: `not-applicable-no-target-evidence`
- Completion claim: `not-applicable-no-target-evidence`
- Current user authorization: `not-applicable-no-target-evidence`
- Context receipt result: `not-applicable-no-target-evidence`
- Changed facts: `not-applicable-no-target-evidence`
- Validation completion basis: `not-applicable-no-target-evidence`
- Tests run: `not-applicable-no-target-evidence`
- Required checks: `not-applicable-no-target-evidence`
- Skipped or unavailable checks: `not-applicable-no-target-evidence`
- Logical integrity result: `not-applicable-no-target-evidence`
- Companion surfaces: `not-applicable-no-target-evidence`
- Approval scope result: `not-applicable-no-target-evidence`
- Residual risks: `not-applicable-no-target-evidence`
- May claim complete: `not-applicable-no-target-evidence`
- Blocking reasons: `not-applicable-no-target-evidence`
- Next owner or action: `not-applicable-no-target-evidence`

Do not report `complete` when current authorization is missing, required
validation failed or was unavailable without an accepted target reason, logical
integrity is unresolved, approval scope is required but unverified, or residual
risk needs a target owner decision.

## Contract: `adapter-health-output`

Use after `Alatyr status`, `Alatyr doctor`, or another read-only adapter
health request.

- Operation id: `not-applicable-no-target-evidence`
- Operation type: `adapter-health`
- Current user authorization: `not-applicable-no-target-evidence`
- Evidence basis: `not-applicable-no-target-evidence`
- Observed at: `not-applicable-no-target-evidence`
- Observed repository branch: `not-applicable-no-target-evidence`
- Observed repository revision: `not-applicable-no-target-evidence`
- Manifest path: `.ai/alatyr.yaml`
- Health state: `not-applicable-no-target-evidence`
- Installation state: `not-applicable-no-target-evidence`
- Installation transition record: `not-applicable-no-target-evidence`
- Validation phase: `not-applicable-no-target-evidence`
- Acceptance eligible: `not-applicable-no-target-evidence`
- Required final strict rerun: `not-applicable-no-target-evidence`
- Checks run: `not-applicable-no-target-evidence`
- Checks unavailable: `not-applicable-no-target-evidence`
- Finding counts: `not-applicable-no-target-evidence`
- Blocking findings: `not-applicable-no-target-evidence`
- Attention findings: `not-applicable-no-target-evidence`
- Repair operations: `not-applicable-no-target-evidence`
- Automatic repair performed: `false`
- Files changed: `none`
- Residual risk: `not-applicable-no-target-evidence`

## Contract: `installation-output`

Use after the initial Alatyr Core installation or a scoped adapter expansion.

- Operation id: `not-applicable-no-target-evidence`
- Operation type: `not-applicable-no-target-evidence`
- Current user authorization: `not-applicable-no-target-evidence`
- Evidence basis: `not-applicable-no-target-evidence`
- Observed at: `not-applicable-no-target-evidence`
- Observed repository branch: `not-applicable-no-target-evidence`
- Observed repository revision: `not-applicable-no-target-evidence`
- Historical records used: `not-applicable-no-target-evidence`
- Unverifiable historical claims: `not-applicable-no-target-evidence`
- Installation id: `not-applicable-no-target-evidence`
- Requested by: `not-applicable-no-target-evidence`
- Framework source or baseline: `not-applicable-no-target-evidence`
- Framework version: `not-applicable-no-target-evidence`
- Adapter schema version: `not-applicable-no-target-evidence`
- Template version: `not-applicable-no-target-evidence`
- Manifest path: `.ai/alatyr.yaml`
- Installation state: `not-applicable-no-target-evidence`
- Installation transition record: `not-applicable-no-target-evidence`
- Installation plan path or summary: `not-applicable-no-target-evidence`
- Approval records used: `not-applicable-no-target-evidence`
- Approval scope enforcement: `not-applicable-no-target-evidence`
- Surfaces created: `not-applicable-no-target-evidence`
- Surfaces updated: `not-applicable-no-target-evidence`
- Surfaces skipped: `not-applicable-no-target-evidence`
- Existing files preserved: `not-applicable-no-target-evidence`
- Existing files overwritten with approval:
  `not-applicable-no-target-evidence`
- Required core profile result: `not-applicable-no-target-evidence`
- Optional module profile result: `not-applicable-no-target-evidence`
- Workspace-mode result: `not-applicable-no-target-evidence`
- Context profiles result: `not-applicable-no-target-evidence`
- Operation catalog and automatic routing result: `not-applicable-no-target-evidence`
- Adapter health and evidence freshness: `not-applicable-no-target-evidence`
- Pre-change preview result: `not-applicable-no-target-evidence`
- Context receipt and cost evidence: `not-applicable-no-target-evidence`
- Large-task orchestration result: `not-applicable-no-target-evidence`
- Operation packet template result: `not-applicable-no-target-evidence`
- Change-package module result: `not-applicable-no-target-evidence`
- Durable engineering-evidence result: `not-applicable-no-target-evidence`
- Debug Mode result: `not-applicable-no-target-evidence`
- Team-collaboration result: `not-applicable-no-target-evidence`
- Source-of-truth registry result: `not-applicable-no-target-evidence`
- Consistency-map result: `not-applicable-no-target-evidence`
- Logical integrity evidence: `not-applicable-no-target-evidence`
- Task-specific maturity result: `not-applicable-no-target-evidence`
- Bridge capability matrix result: `not-applicable-no-target-evidence`
- Root entry points checked: `not-applicable-no-target-evidence`
- Supported bridge files checked: `not-applicable-no-target-evidence`
- Adapter drift checks result: `not-applicable-no-target-evidence`
- Local path leakage result: `not-applicable-no-target-evidence`
- Target-local checker status: `not-applicable-no-target-evidence`
- AI infrastructure inventory result:
  `not-applicable-no-target-evidence`
- AI infrastructure recommendation result: `not-applicable-no-target-evidence`
- Development-pattern evidence result: `not-applicable-no-target-evidence`
- AI infrastructure router result: `not-applicable-no-target-evidence`
- AI infrastructure adaptation-record result: `not-applicable-no-target-evidence`
- Support/product change cost: `not-applicable-no-target-evidence`
- Contract artifact result: `not-applicable-no-target-evidence`
- Visual validation result: `not-applicable-no-target-evidence`
- Validation run: `not-applicable-no-target-evidence`
- Validation phase: `not-applicable-no-target-evidence`
- Active unresolved placeholders: `not-applicable-no-target-evidence`
- Manifest/module-profile agreement: `not-applicable-no-target-evidence`
- Acceptance eligible: `not-applicable-no-target-evidence`
- Required final strict rerun: `not-applicable-no-target-evidence`
- Validation skipped or unresolved: `not-applicable-no-target-evidence`
- Post-install message result: `not-applicable-no-target-evidence`
- Post-install delivery status: `not-applicable-no-target-evidence`
- Post-install delivery mechanism: `not-applicable-no-target-evidence`
- Post-install delivery reason: `not-applicable-no-target-evidence`
- Post-install delivery observed at: `not-applicable-no-target-evidence`
- Final evidence: `not-applicable-no-target-evidence`
- Residual risk: `not-applicable-no-target-evidence`

## Contract: `framework-update-output`

Use after updating or comparing an installed adapter against a newer Alatyr
Core baseline.

- Operation id: `not-applicable-no-target-evidence`
- Operation type: `not-applicable-no-target-evidence`
- Current user authorization: `not-applicable-no-target-evidence`
- Evidence basis: `not-applicable-no-target-evidence`
- Observed at: `not-applicable-no-target-evidence`
- Observed repository branch: `not-applicable-no-target-evidence`
- Observed repository revision: `not-applicable-no-target-evidence`
- Historical records used: `not-applicable-no-target-evidence`
- Unverifiable historical claims: `not-applicable-no-target-evidence`
- Update source or baseline: `not-applicable-no-target-evidence`
- Previous framework version: `not-applicable-no-target-evidence`
- New framework version: `not-applicable-no-target-evidence`
- Framework version: `not-applicable-no-target-evidence`
- Previous adapter schema version: `not-applicable-no-target-evidence`
- New adapter schema version: `not-applicable-no-target-evidence`
- Adapter schema version: `not-applicable-no-target-evidence`
- Previous template version: `not-applicable-no-target-evidence`
- New template version: `not-applicable-no-target-evidence`
- Template version: `not-applicable-no-target-evidence`
- Manifest path: `.ai/alatyr.yaml`
- Installation state: `not-applicable-no-target-evidence`
- Installation transition record: `not-applicable-no-target-evidence`
- Migration note path: `.ai/assistant/templates/migration-note.md`
- Migration assessment result/path: `not-applicable-no-target-evidence`
- Migration diff result: `not-applicable-no-target-evidence`
- Changed rule ids: `not-applicable-no-target-evidence`
- Added or removed framework files: `not-applicable-no-target-evidence`
- Target adapter actions required: `not-applicable-no-target-evidence`
- Target adapter actions optional: `not-applicable-no-target-evidence`
- Surfaces created: `not-applicable-no-target-evidence`
- Surfaces updated: `not-applicable-no-target-evidence`
- Surfaces skipped: `not-applicable-no-target-evidence`
- Existing files preserved: `not-applicable-no-target-evidence`
- Approval records used: `not-applicable-no-target-evidence`
- Approval scope enforcement: `not-applicable-no-target-evidence`
- Required core profile result: `not-applicable-no-target-evidence`
- Optional module profile result: `not-applicable-no-target-evidence`
- Workspace-mode migration result: `not-applicable-no-target-evidence`
- Context profiles result: `not-applicable-no-target-evidence`
- Context receipt and cost evidence: `not-applicable-no-target-evidence`
- Large-task orchestration result: `not-applicable-no-target-evidence`
- Operation packet template result: `not-applicable-no-target-evidence`
- Change-package migration result: `not-applicable-no-target-evidence`
- Durable engineering-evidence migration result: `not-applicable-no-target-evidence`
- Debug Mode migration result: `not-applicable-no-target-evidence`
- Team-collaboration migration result: `not-applicable-no-target-evidence`
- Source-of-truth registry result: `not-applicable-no-target-evidence`
- Consistency-map result: `not-applicable-no-target-evidence`
- Logical integrity evidence: `not-applicable-no-target-evidence`
- Task-specific maturity result: `not-applicable-no-target-evidence`
- Operation catalog, health, preview, help, and routing result:
  `not-applicable-no-target-evidence`
- Bridge capability matrix result: `not-applicable-no-target-evidence`
- Adapter drift checks result: `not-applicable-no-target-evidence`
- Local path leakage result: `not-applicable-no-target-evidence`
- Target-local checker status: `not-applicable-no-target-evidence`
- AI infrastructure router result: `not-applicable-no-target-evidence`
- AI infrastructure recommendation result: `not-applicable-no-target-evidence`
- Development-pattern evidence result: `not-applicable-no-target-evidence`
- AI infrastructure adaptation-record result: `not-applicable-no-target-evidence`
- Support/product change cost: `not-applicable-no-target-evidence`
- Contract artifact result: `not-applicable-no-target-evidence`
- Visual validation result: `not-applicable-no-target-evidence`
- Validation run: `not-applicable-no-target-evidence`
- Validation phase: `not-applicable-no-target-evidence`
- Active unresolved placeholders: `not-applicable-no-target-evidence`
- Manifest/module-profile agreement: `not-applicable-no-target-evidence`
- Acceptance eligible: `not-applicable-no-target-evidence`
- Required final strict rerun: `not-applicable-no-target-evidence`
- Validation skipped or unresolved: `not-applicable-no-target-evidence`
- Post-update message result: `not-applicable-no-target-evidence`
- Post-update delivery status: `not-applicable-no-target-evidence`
- Post-update delivery mechanism: `not-applicable-no-target-evidence`
- Post-update delivery reason: `not-applicable-no-target-evidence`
- Post-update delivery observed at: `not-applicable-no-target-evidence`
- Final evidence: `not-applicable-no-target-evidence`
- Residual risk: `not-applicable-no-target-evidence`

## Contract: `adapter-recheck-output`

Use after read-only, adapter-only, or maturity-focused rechecks of an installed
adapter.

- Operation id: `not-applicable-no-target-evidence`
- Operation type: `not-applicable-no-target-evidence`
- Current user authorization: `not-applicable-no-target-evidence`
- Evidence basis: `not-applicable-no-target-evidence`
- Observed at: `not-applicable-no-target-evidence`
- Observed repository branch: `not-applicable-no-target-evidence`
- Observed repository revision: `not-applicable-no-target-evidence`
- Historical records used: `not-applicable-no-target-evidence`
- Unverifiable historical claims: `not-applicable-no-target-evidence`
- Recheck trigger: `not-applicable-no-target-evidence`
- Allowed actions: `not-applicable-no-target-evidence`
- Manifest path: `.ai/alatyr.yaml`
- Installation state: `not-applicable-no-target-evidence`
- Installation transition record: `not-applicable-no-target-evidence`
- Installation note status: `not-applicable-no-target-evidence`
- Migration assessment result/path: `not-applicable-no-target-evidence`
- Framework version: `not-applicable-no-target-evidence`
- Adapter schema version: `not-applicable-no-target-evidence`
- Template version: `not-applicable-no-target-evidence`
- Approval records used: `not-applicable-no-target-evidence`
- Approval scope enforcement: `not-applicable-no-target-evidence`
- Surfaces created: `not-applicable-no-target-evidence`
- Surfaces updated: `not-applicable-no-target-evidence`
- Surfaces skipped: `not-applicable-no-target-evidence`
- Existing files preserved: `not-applicable-no-target-evidence`
- Required core profile result: `not-applicable-no-target-evidence`
- Optional module profile result: `not-applicable-no-target-evidence`
- Workspace-mode recheck result: `not-applicable-no-target-evidence`
- Context profiles result: `not-applicable-no-target-evidence`
- Context receipt and cost evidence: `not-applicable-no-target-evidence`
- Large-task orchestration result: `not-applicable-no-target-evidence`
- Operation packet template result: `not-applicable-no-target-evidence`
- Change-package recheck result: `not-applicable-no-target-evidence`
- Durable engineering-evidence recheck result: `not-applicable-no-target-evidence`
- Debug Mode recheck result: `not-applicable-no-target-evidence`
- Team-collaboration recheck result: `not-applicable-no-target-evidence`
- Source-of-truth registry result: `not-applicable-no-target-evidence`
- Consistency-map result: `not-applicable-no-target-evidence`
- Logical integrity evidence: `not-applicable-no-target-evidence`
- Task-specific maturity result: `not-applicable-no-target-evidence`
- Bridge capability matrix result: `not-applicable-no-target-evidence`
- Operation catalog, health, preview, help, and routing result:
  `not-applicable-no-target-evidence`
- Approval-record policy result: `not-applicable-no-target-evidence`
- Adapter drift checks result: `not-applicable-no-target-evidence`
- Local path leakage result: `not-applicable-no-target-evidence`
- Target-local checker status: `not-applicable-no-target-evidence`
- AI infrastructure inventory result:
  `not-applicable-no-target-evidence`
- AI infrastructure recommendation result: `not-applicable-no-target-evidence`
- Development-pattern evidence result: `not-applicable-no-target-evidence`
- AI infrastructure router result: `not-applicable-no-target-evidence`
- AI infrastructure adaptation-record result: `not-applicable-no-target-evidence`
- Prompt-injection policy result: `not-applicable-no-target-evidence`
- Support/product change cost: `not-applicable-no-target-evidence`
- Contract artifact result: `not-applicable-no-target-evidence`
- Visual validation result: `not-applicable-no-target-evidence`
- Validation run: `not-applicable-no-target-evidence`
- Validation phase: `not-applicable-no-target-evidence`
- Active unresolved placeholders: `not-applicable-no-target-evidence`
- Manifest/module-profile agreement: `not-applicable-no-target-evidence`
- Acceptance eligible: `not-applicable-no-target-evidence`
- Required final strict rerun: `not-applicable-no-target-evidence`
- Validation skipped or unresolved: `not-applicable-no-target-evidence`
- Recommended next operation: `not-applicable-no-target-evidence`
- Final evidence: `not-applicable-no-target-evidence`
- Residual risk: `not-applicable-no-target-evidence`
