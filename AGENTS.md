# Agent Instructions

This project uses Alatyr Core. This file is host-preloaded.

Load `.ai/assistant/bootstrap-index.json`; choose the smallest matching
profile, intent, scale, area, operation, and gates, then follow only matched
child indexes. Keep `.ai/assistant/bootstrap-integrity.json` and
`.ai/assistant/entry-packet.json` lazy unless validation fails or recovery,
audit, or conflict requires them. On missing, stale, ambiguous, cyclic, or
contradictory routing, terms, digests, relationships, or facts, use the named
canonical owner. Use `.ai/README.md` only for adapter recovery.

Project facts belong to `.ai/project`, portable rules to `.ai/framework`, and
assistant routing to `.ai/assistant`; derived aids never create authority.

Before state changes, apply `ALATYR-AUTHORIZATION-001` through
`.ai/assistant/policies/action-authorization.json` to the newest request.
Inspect, modify, commit, publish, and live-external are separate phases.
Implementation does not imply commit; commit does not imply push. Protected
changes require target approval bound to scope and available diff evidence.

For semantic changes, re-derive invariants and reconcile selected dependent
surfaces. Use `.ai/assistant/task-decomposition.json` for non-trivial work.
When beneficial, use policy-bounded recursive delegation; it never transfers
authorization, decisions, integration, or acceptance. Run only existing target validation and report routing, evidence,
authorization, validation, and residual risk.
