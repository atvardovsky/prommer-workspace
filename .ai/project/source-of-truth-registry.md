# Source Of Truth Registry

This registry records the current fact ownership state for the prommer.net workspace.
The target contains no product implementation yet, so absent owners are
explicit gaps rather than inferred facts.

## Baseline Registry Entries

### Fact Type: `product behavior`

Canonical owner: `.ai/project/product-context.md` for public positioning and
audience facts. Concrete application behavior remains unestablished and needs
a supplied specification or code/test contract plus maintainer review.

### Fact Type: `business rule`

Canonical owner: not established. Business-policy changes are protected and
require an identified decision owner before acceptance.

### Fact Type: `architecture decision`

Canonical owner: `.ai/project/architecture/README.md` for architecture
selection policy and `.ai/project/architecture/catalog.json` for routed
decision records. No concrete solution decision or diagram exists. Proposals
remain proposed until repository evidence, maintainer acceptance, and any
required approval are recorded.

### Fact Type: `architecture pattern`

Canonical owner: `.ai/project/architecture/catalog.json`, with detail routed to
the project-owned source named by each catalog item. The catalog currently has
no concrete patterns. Implementation frequency must not be treated as intent.

### Fact Type: `data model`

Canonical owner: not established. No schema, persistence layer, migration
policy, or rollback process exists. Data-changing work is blocked pending these
facts.

### Fact Type: `dependency public contract and target use`

Canonical owner: not established because there is no package manifest or
lockfile. The optional dependency-knowledge module is disabled.

### Fact Type: `workspace identity and development mode relationship`

Canonical owner: `.ai/alatyr.yaml` for the root adapter identity. No additional
workspace modes are defined; the optional workspace-modes module is disabled.

### Fact Type: `validation command`

Canonical owner: `.ai/alatyr.yaml` and `.ai/project/delivery-policy.md`. Only
manual target review is currently available. No product build, test, lint, or
CI command exists.

### Fact Type: `security policy`

Canonical owner: not established. Security-sensitive work is blocked until a
target owner, policy, credential boundary, approval rule, and validation are
recorded.

### Fact Type: `assistant operation`

Canonical owner: `.ai/assistant/context-router.json`,
`.ai/assistant/help.md`, and `.ai/assistant/policies/action-authorization.json`.
The installed operation catalog is `.ai/assistant/operation-catalog.json`.

### Fact Type: `development process pattern`

Canonical owner: `.ai/project/development-evidence.json`. The register starts
empty; add only normalized recurring patterns supported by evidence, never a
single unreviewed occurrence or raw interaction content.

### Fact Type: `AI infrastructure item`

Canonical owner: `.ai/assistant/ai-infrastructure-router.json` for routing,
`AGENTS.md` for the Codex entry bridge, and `.ai/assistant` for adapter
mechanics. No imported third-party AI infrastructure is installed.

### Fact Type: `workspace privacy and retention`

Canonical owner: `.ai/project/privacy-policy.md`. Reviewed project knowledge,
development patterns, compact engineering evidence, and explicitly activated
Debug Mode records may be persisted under its redaction rules. External
sharing requires separate authorization.

### Fact Type: `delivery quality`

Canonical owner: `.ai/project/delivery-policy.md`. Working end-to-end behavior,
explicit contracts, failure handling, validation, reproducibility, and
prommer.net-specific fit are required once implementation begins.

### Fact Type: `code documentation profile`

Canonical owner: not established. The optional code-documentation module is
disabled.

### Fact Type: `project vocabulary`

Canonical owner: not established. The optional project-vocabulary module is
disabled.

### Fact Type: `test strategy and test-first policy`

Canonical owner: not established. No tests, commands, fixtures, CI gates, or
accepted TDD policy exist. The optional test-first module is disabled.

### Fact Type: `team policy`

Canonical owner: not established. The optional team-collaboration module is
disabled; no actor identity, authority, task backend, concurrency, retention,
or privacy claims may be made.

## Conflict Resolution

When future sources disagree, remain read-only for the affected fact, identify
the competing evidence, and ask the relevant repository maintainer to select or
create the canonical owner. Generated indexes and support hashes never resolve
semantic conflicts.
