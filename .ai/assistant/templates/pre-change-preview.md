# Alatyr Pre-Change Preview

Use this bounded artifact before edits when operation routing identifies a
semantic or protected change, cross-boundary scope, external or destructive
effect, or unclear allowed-action surface.

The preview is not approval. Refresh it when changed facts, risk, expected
surfaces, allowed actions, or approval scope changes materially.
It is also not action authorization. Stop when the newest user request does not
authorize the next state-changing phase.

## Preview

- Operation ID: `request-specific`
- Goal: `request-specific`
- Selected context profile and overlays: `request-specific`
- Changed facts or suspected facts: `request-specific`
- Canonical owners: `request-specific`
- Affected contours, project areas, and external surfaces:
  `request-specific`
- Risk classes: `request-specific`
- Preview trigger: `request-specific`
- Expected files or bounded surface patterns: `request-specific`
- Allowed actions: `request-specific`
- Current logical scope: `request-specific`
- Current user authorization: `request-specific`
- Authorization source/message: `request-specific`
- Next phase authorized: `request-specific`
- Approval needs and selected records: `request-specific`
- Planned validation: `request-specific`
- Unresolved questions: `request-specific`
- Evidence basis: `request-specific`
- Decision: `request-specific`

## Skip Evidence

For routine read-only or local non-semantic work, do not create a full preview.
Record only:

```text
Pre-change preview: skipped
Reason: <no semantic or protected effect, no boundary crossing, and allowed
scope is clear>
```
