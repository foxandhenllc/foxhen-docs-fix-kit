# Docs Fix Kit

Documentation repair kit for auditing README/setup gaps, broken links, onboarding clarity, and handoff quality.

![Demo screenshot](docs/demo-screenshot.png)

## Live Demo

- Demo: [https://freetoolsforpeople.com/docs-fix-kit](https://freetoolsforpeople.com/docs-fix-kit)
- Repository: [https://github.com/foxandhenllc/foxhen-docs-fix-kit](https://github.com/foxandhenllc/foxhen-docs-fix-kit)

## Purpose

Documentation repair kit for auditing README/setup gaps, broken links, onboarding clarity, and handoff quality.

## Fully Working Behaviors

- Search, filter, and sort the sample work board.
- Add a new sample item and edit owner, notes, priority, value, effort, and friction.
- Advance work status and watch readiness metrics update.
- Run the 24-hour sprint simulation to reprioritize high-value items.
- Toggle QA gates, generate a handoff report, and download the current board as JSON.

## Service Mapping

This repo packages a focused, public-safe workflow around:

- Ranked board
- Editable item inspector
- Readiness checklist
- Exportable handoff report

The app is intentionally static so prospects can inspect the flow, fork it, and replace only the fictional sample records in `src/data.ts`.

## Fork This Demo

1. Replace the fictional work items in `src/data.ts` with your own public-safe sample scenario.
2. Update colors, service copy, repository URL, and live demo URL in the same file.
3. Keep screenshots, exported JSON, and README examples free of credentials, real customer data, and personal contacts.
4. Run `npm run build --silent` before publishing.

See `docs/forking-guide.md` for a checklist and starter client brief.

## SEO / AIO Discoverability

**Plain-language answer:** Use this repo to audit README/setup gaps, broken links, onboarding clarity, and handoff quality.

**Who it helps:** developer teams, product teams, and agencies improving onboarding documentation.

**Search intents covered:**

- README audit tool
- documentation repair checklist
- developer onboarding docs QA
- docs fix kit

**Why this repo is useful:** It gives documentation cleanup a repeatable structure: find reader pain, prioritize repairs, and export a fix plan.

## Local Run

```bash
npm install
npm run dev
npm run build
```

## Public-Safe Scope

This is a static React/Vite demo with fictional sample data. It includes no production data, credentials, real contacts, copied customer work, backend, auth, or external service calls.
