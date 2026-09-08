# Source Of Truth Registry

This registry records the current fact ownership state for the prommer.net
workspace. The repository contains a runnable LinkedIn content-workflow POC;
production and external-publication facts remain explicit gaps.

## Baseline Registry Entries

### Fact Type: `product behavior`

Canonical owner: `.ai/project/product-context.md` for public positioning,
audience, scope, and human-publication boundary. `src/domain/contracts.ts` and
the application tests own executable behavior at agent handoffs.

### Fact Type: `business rule`

Canonical owner: not established. Business-policy changes are protected and
require an identified decision owner before acceptance.

### Fact Type: `architecture decision`

Canonical owner: `.ai/project/architecture/README.md` for architecture intent
and `.ai/project/architecture/catalog.json` for routed decision records. The
root `README.md` owns GitHub-rendered operational diagrams derived from those
decisions.

### Fact Type: `architecture pattern`

Canonical owner: `.ai/project/architecture/catalog.json`, with detail routed to
the project-owned source named by each catalog item. Accepted POC patterns are
modular ports and adapters, explicit bounded orchestration, and a human
publication gate.

### Fact Type: `data model`

Canonical owner: not established. No schema, persistence layer, migration
policy, or rollback process exists. Data-changing work is blocked pending these
facts.

### Fact Type: `dependency public contract and target use`

Canonical owner: `package.json` for declared dependencies and scripts;
`package-lock.json` owns exact resolved dependency versions. The optional
dependency-knowledge module remains disabled.

### Fact Type: `workspace identity and development mode relationship`

Canonical owner: `.ai/alatyr.yaml` for the root adapter identity. No additional
workspace modes are defined; the optional workspace-modes module is disabled.

### Fact Type: `validation command`

Canonical owner: `package.json` for product commands and `.ai/alatyr.yaml` for
the routed validation set. `npm run check` validates formatting, types, and
tests; `npm run build` validates the distributable TypeScript build. CI remains
unestablished.

### Fact Type: `security policy`

Canonical owner: `.ai/project/privacy-policy.md` for retained information and
`.ai/project/product-context.md` for the external-publication boundary. Provider
credentials are accepted only by the composition-root factory and must never
enter source, traces, or artifacts. Broader production security policy remains
unestablished.

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

Canonical owner: root `README.md` for public POC documentation and source TSDoc
for exported contracts, classes, and functions. The optional code-documentation
module remains disabled.

### Fact Type: `project vocabulary`

Canonical owner: not established. The optional project-vocabulary module is
disabled.

### Fact Type: `test strategy and test-first policy`

Canonical owner: `tests/**/*.test.ts` for executable behavioral expectations
and `package.json` for validation commands. Contract-first TDD is required for
this POC and its RED/GREEN evidence is summarized in `README.md`; the optional
test-first module remains disabled and CI policy remains unestablished.

### Fact Type: `team policy`

Canonical owner: not established. The optional team-collaboration module is
disabled; no actor identity, authority, task backend, concurrency, retention,
or privacy claims may be made.

## Conflict Resolution

When future sources disagree, remain read-only for the affected fact, identify
the competing evidence, and ask the relevant repository maintainer to select or
create the canonical owner. Generated indexes and support hashes never resolve
semantic conflicts.
