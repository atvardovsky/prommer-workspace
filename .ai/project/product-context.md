# prommer.net Product Context

## Purpose

prommer.net is Thomas Prommer's public personal site. It presents his work as a
technology executive and applied-AI practitioner alongside his hybrid-athlete
identity and related public interests.

## Public Product Signals

- Primary content areas include Tech & AI, Training, and Press.
- The site connects Thomas's publications, tools, activity, media coverage,
  personal-brand surfaces, and related ventures.
- `Ask AI Tom` is an existing AI-facing product surface.
- The site's stated AI posture is production-first, human-in-the-loop, and
  measurable: AI should help real work reach the people who can use it.
- Likely audiences include founders, operators, technology leaders,
  strategists, media professionals, and people following Thomas's work.

## Design Implications

- Tailor workflows and copy to Thomas's actual content, voice, and audiences.
- Prefer useful, evidence-backed output over generic generated content.
- Keep human judgment explicit at consequential decisions and publication
  boundaries.
- Treat external publication, analytics, email, social posting, and paid APIs
  as live-external actions requiring separate authorization.
- Preserve graceful behavior when an AI provider or external integration is
  unavailable.

## Current POC Behavior

- The current product slice prepares a LinkedIn draft from one public
  prommer.net article.
- A source analyst creates evidence-backed claims, a writer generates the
  draft, and an independent reviewer either approves it or requests one bounded
  revision.
- OpenAI and Anthropic are supported behind a provider-neutral structured-output
  contract; an offline deterministic simulator supports credential-free demos.
- The workflow exports Markdown and JSON for human review. It never posts to
  LinkedIn.

## Current Unknowns

Deployment expectations, production model selection, voice calibration,
LinkedIn OAuth and publication requirements, analytics, persistent approvals,
and production observability remain unestablished.

## Public Sources

- `https://prommer.net/`
