# Durable Engineering Evidence

This directory is the compact historical engineering-evidence surface for
`prommer.net workspace`. Canonical project facts remain owned by the project sources
referenced from each record.

Index: `.ai/project/engineering-evidence/index.json`

Records: `.ai/project/engineering-evidence/records/`

Owner: `repository maintainers`

Storage mode: `repository-internal`

External patch policy: `exclude-from-external-patch`

Retention policy: `retain compact validated engineering outcomes until superseded or removed by a maintainer`

Redaction policy: `exclude prompts transcripts timing session provenance private reasoning credentials and non-product contextual metadata`

Ignored local storage is not durable team memory unless an approved retained
store also preserves the record. Do not store raw chats, chain-of-thought,
secrets, credentials, personal data, unrelated session history, complete
diffs, or verbose validation logs.

Canonical rule: `.ai/framework/engineering-evidence.md`

New schema-version-3 records list related Debug session IDs when Debug Mode was
active. Each link is reciprocal and shares a task or issue reference. Leave the
list empty when Debug Mode was not active; do not add inferred links to schema-
version-1 or version-2 historical records. Schema-version-3 records require the
schema-version-4 index.
