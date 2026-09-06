# Delivery Policy

## Priorities

1. Parse the concrete brief and identify the smallest demonstrable outcome.
2. Ship an end-to-end working slice early, then improve reliability and fit.
3. Separate deterministic orchestration from model-dependent behavior.
4. Make inputs, outputs, state transitions, retries, and failure handling
   visible and testable.
5. Validate with the project's real commands once a codebase exists.
6. Keep setup and execution instructions short and reproducible.

## Agentic Workflow Quality

- Give each step a clear contract and bounded responsibility.
- Use structured state between steps instead of relying on conversation text.
- Add validation and recovery at tool and model boundaries.
- Keep humans in control of ambiguous, consequential, or publication decisions.
- Prefer a tailored workflow with explicit tradeoffs over a generic framework.
- Treat prompts as versioned implementation details, not the whole system.

## Failure Analysis Quality

A useful failure analysis names the expected behavior, observed behavior,
impact, timeline, detection gap, root cause, contributing conditions, recovery,
and prevention. Distinguish evidence from inference and identify how the fix
will be validated.

## Architecture Communication

Architecture explanations should show components, ownership, data flow, model
and tool boundaries, state, validation, retries, observability, and human
decision points. Discussion diagrams remain drafts unless accepted into a
project-owned source.
