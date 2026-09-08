# Project Contour

This contour describes the prommer.net workspace. Public product positioning
and a runnable LinkedIn content-workflow POC are recorded. The codebase now has
package metadata, runtime contracts, tests, and local validation commands;
production deployment and external-publication contracts remain unavailable.

## Owns

- product purpose
- public audience and content positioning from `.ai/project/product-context.md`
- delivery quality expectations from `.ai/project/delivery-policy.md`
- storage, retention, and external-action boundaries from
  `.ai/project/privacy-policy.md`
- business/domain rules
- architecture facts
- architecture selection principles, lifecycle, areas, patterns, constraints,
  intended states, decision authority, supporting documentation, and evidence
  revisions under `.ai/project/architecture`
- project-owned code-documentation areas, source-set profiles, comment content
  conventions, generator selection, output policy, owners, and evidence under
  `.ai/project/documentation` when code documentation is enabled
- project-owned vocabulary terms, aliases, acronyms, scoped meanings,
  acceptance states, owners, and canonical data links under
  `.ai/project/vocabulary` when project vocabulary is enabled
- project-owned test-first policy, trigger severity, modes, levels, commands,
  isolation, exceptions, CI/merge requirements, and decision authority under
  `.ai/project/testing` when test-first development is enabled
- use cases and workflows
- data model and persistence facts
- runtime flows and state machines
- deployment and operations facts
- project test strategy facts
- project terminology and decisions
- reviewed reusable project knowledge and supersession lineage under
  `.ai/project/knowledge`
- normalized reusable development-pattern evidence in
  `.ai/project/development-evidence.json`
- compact validated engineering outcomes under
  `.ai/project/engineering-evidence`
- explicitly activated, redacted Debug Mode records under `.ai/project/debug`
- project needs, constraints, recurring outcomes, and measured quality or cost
  evidence that may justify assistant-infrastructure recommendations
- target team actors and roles, decision authority, priority policy, required
  review, escalation, coordination backend, synchronization, retention,
  privacy, and accepted business or architecture decisions when team
  collaboration is enabled; machine-relevant team policy is canonical in
  `.ai/project/team-policy.json`

## Does Not Own

- portable Alatyr Core framework rules
- assistant workflow mechanics
- AI infrastructure item definitions, recommendation records, router entries,
  skills, prompts, gates, and assistant-specific implementation
- assistant bridge-file mechanics
- team task, claim, checkpoint, handoff, and operation-routing mechanics
- local validation command policy outside project facts
- prompt text, interaction transcripts, timing metadata, answer drafts,
  session provenance, task labels, private reasoning, or unrelated personal data
- team-tracking or change-package records

## Source Of Truth

Current target source-of-truth files:

- `.ai/project/contour.md` for the current target baseline
- `.ai/project/source-of-truth-registry.md`
- `.ai/project/product-context.md`
- `.ai/project/delivery-policy.md`
- `.ai/project/privacy-policy.md`
- `.ai/project/knowledge/README.md` and `.ai/project/knowledge/index.json`
- `.ai/project/development-evidence.json`
- `.ai/project/engineering-evidence/README.md` and
  `.ai/project/engineering-evidence/index.json`
- `.ai/project/debug/README.md` and `.ai/project/debug/index.json`
- `.ai/project/architecture/README.md` and
  `.ai/project/architecture/catalog.json`
- `.ai/project/documentation/README.md`,
  `.ai/project/documentation/catalog.json`, and
  `.ai/project/documentation/profiles.json` when code documentation is enabled
- `.ai/project/vocabulary/README.md`, `.ai/project/vocabulary/catalog.json`,
  `.ai/project/vocabulary/terms.json`, and
  `.ai/project/vocabulary/data-dictionary-links.json` when project vocabulary
  is enabled
- `.ai/project/testing/README.md` and
  `.ai/project/testing/test-first-policy.json` when test-first development is
  enabled

## AI Infrastructure Evidence Boundary

Project-contour sources may justify why an assistant capability is needed and
which project outcome it must improve. The assistant contour owns how a skill,
prompt, gate, checker, flow, tool, bridge, or wrapper is recommended,
implemented, routed, validated, and maintained.

Target observations must not directly change `.ai/framework`, AlatyrCore
source, or portable rules. The privacy policy permits only reviewed,
normalized, and redacted retained evidence. Debug Mode additionally requires
explicit activation for the current logical scope.

When team collaboration is enabled,
`.ai/project/team-operating-model.md` owns actor, authority, priority, review,
backend, storage, and privacy facts. The assistant work registry references
those facts; it does not replace them.
