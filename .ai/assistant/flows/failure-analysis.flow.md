# Failure Analysis Flow

Use this flow for an evidence-led analysis of an agent, tool, integration, or
software failure. Keep the result transient unless the user explicitly asks to
persist a product artifact.

## Inputs

- Expected behavior and success criteria
- Observed behavior and user or system impact
- Timeline, logs, traces, outputs, and relevant code
- Recovery actions already attempted
- Known constraints and unavailable evidence

## Method

1. Separate observed facts from hypotheses.
2. Reconstruct the smallest reliable timeline.
3. Locate the first incorrect state transition, contract violation, or missing
   control—not merely the final visible symptom.
4. Identify the root cause and contributing technical or process conditions.
5. Explain why detection, validation, retry, fallback, or review did not catch
   the problem sooner.
6. Describe immediate containment and durable prevention separately.
7. Prefer specific code, contract, test, observability, and workflow changes
   over vague advice.
8. State how each prevention action will be validated and what uncertainty
   remains.

## Output Contract

- Context and expected behavior
- Observed failure and impact
- Evidence and concise timeline
- Root cause
- Contributing conditions
- Recovery
- Prevention and regression coverage
- Validation
- Uncertainty and residual risk

Do not invent logs, metrics, dates, people, or production facts. If the failure
is based on personal experience, preserve the user's judgment and voice rather
than manufacturing a generic incident narrative.
