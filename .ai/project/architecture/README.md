# Project Architecture Knowledge

Use this project-contour index to discuss and eventually record the workspace
architecture without treating an unknown implementation as established fact.

Machine-readable catalog: `.ai/project/architecture/catalog.json`
Source-of-truth registry: `.ai/project/source-of-truth-registry.md`

## Ownership And Evidence

Architecture owner: repository maintainers
Decision authority: repository maintainer acting on explicit current-scope approval
Canonical architecture sources: this file and `.ai/project/source-of-truth-registry.md`
Decision-record sources: `.ai/project/architecture/catalog.json` and future project-owned records linked from it
Diagram sources: none; diagram routing is disabled
Validation or fitness checks: Alatyr structural validation plus review against future repository evidence and project validation commands
Last reviewed: 2026-09-03
Evidence revision: no Git revision is available; evidence is bound to the current validated workspace files

## Status Meanings

- `observed`: repository evidence exists, but intended use is not confirmed.
- `proposed`: under discussion and not accepted project architecture.
- `accepted`: approved and recorded by the target architecture owner.
- `preferred`: accepted for new work in a named scope.
- `restricted`: allowed only in recorded scopes or circumstances.
- `deprecated`: retained for compatibility and not for new work.
- `contradicted`: intended architecture and repository evidence disagree.
- `unknown`: evidence is missing or conflicting.

Implementation frequency, age, or recency does not make a pattern accepted.

## Architecture Areas

No architecture areas are currently established. Add an area only after the
requirements or repository supply a real boundary, owner, and evidence source.

## Architecture Patterns And Items

No concrete pattern is currently selected. In particular, do not infer a
runtime agent topology, application style, model provider, framework,
database, retrieval system, queue, cloud platform, or deployment topology.

## Architecture Selection Principles

Apply these accepted project-level selection principles when concrete
requirements arrive:

- choose the smallest architecture that completely satisfies the confirmed
  requirements;
- give every component one explicit responsibility and every boundary a
  structured contract;
- place deterministic validation around probabilistic or external behavior;
- isolate external systems behind replaceable adapters when replacement,
  testing, or failure containment is a real concern;
- require explicit human approval before consequential external actions;
- make retries bounded, side effects idempotent, and failure states visible;
- make execution observable, reproducible, and testable without retaining
  prohibited private material;
- degrade gracefully when optional services are unavailable;
- justify every dependency from an actual requirement and maintenance owner;
- demonstrate a working vertical slice before expanding architecture.

These principles constrain selection. They are not evidence that any concrete
pattern is implemented or preferred.

## Pattern Lifecycle

- Record a plausible but unevaluated option as `unknown` or outside the
  catalog, not as current architecture.
- Use `proposed` only after naming the problem, drivers, non-goals, evidence,
  alternatives, tradeoffs, validation, and decision owner.
- Use `observed` for implementation evidence whose intended status is not
  confirmed.
- Promote to `accepted`, `preferred`, `restricted`, or `deprecated` only with
  repository evidence, maintainer acceptance, required approval, and a
  project-owned decision record.
- Use `contradicted` when intended architecture and implementation evidence
  disagree; block dependent decisions until the conflict is resolved.
- Preserve replacement and supersession relationships rather than silently
  rewriting history.

## Known Gaps And Contradictions

- The implementation requirements, codebase, runtime, dependency graph, data
  boundaries, validation commands, and deployment topology are unavailable.
- There are no known contradictions because there is no concrete architecture
  evidence yet.

## Maintenance Triggers

Review this index and the catalog after accepted architecture decisions, new
project areas or dependencies, changed data or trust boundaries, repeated
undocumented pattern use, recurring architecture review findings, pattern
deprecation, moved owners, or contradictions between intended architecture and
repository evidence.

Supporting documentation is project truth only when the target registry names
it as canonical. Otherwise it is a routed explanation or draft derived from
the listed owners.
