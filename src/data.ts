export const sample = {
  "repoName": "foxhen-docs-fix-kit",
  "title": "Docs Fix Kit",
  "subtitle": "Documentation cleanup sample",
  "serviceLine": "Technical writing and docs QA",
  "heroTitle": "Turn confusing docs into a clear implementation path.",
  "heroCopy": "A public-safe docs repair board with page audit, broken-step detection, changelog preview, examples, and handoff notes.",
  "primaryAction": "Audit docs",
  "secondaryAction": "Preview changelog",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-docs-fix-kit",
  "liveDemoUrl": "https://foxhen-docs-fix-kit.vercel.app",
  "theme": {
    "accent": "#2f496e",
    "accent2": "#d8b45f",
    "ink": "#08111f",
    "soft": "#edf3ff",
    "warm": "#fff5da",
    "surface": "#fffaf4",
    "muted": "#5c667a",
    "border": "rgba(7, 18, 31, 0.12)"
  },
  "metrics": [
    {
      "label": "Pages audited",
      "value": "14",
      "note": "sample docs"
    },
    {
      "label": "Broken steps",
      "value": "6",
      "note": "fixed plan"
    },
    {
      "label": "Example clarity",
      "value": "90%",
      "note": "+32 pts"
    }
  ],
  "stages": [
    {
      "label": "Audit",
      "detail": "Identify unclear prerequisites, missing context, outdated steps, and dead ends.",
      "status": "ready",
      "owner": "Docs",
      "index": 1
    },
    {
      "label": "Repair",
      "detail": "Rewrite instructions around the reader's first successful outcome.",
      "status": "active",
      "owner": "Studio",
      "index": 2
    },
    {
      "label": "Examples",
      "detail": "Add concise snippets and acceptance checks where readers get stuck.",
      "status": "waiting",
      "owner": "Engineer",
      "index": 3
    },
    {
      "label": "Publish",
      "detail": "Package changelog, review notes, and follow-up backlog.",
      "status": "queued",
      "owner": "Ops",
      "index": 4
    }
  ],
  "workItems": [
    {
      "title": "Quickstart",
      "detail": "Move setup caveats before install step",
      "status": "ready"
    },
    {
      "title": "Integration guide",
      "detail": "Replace vague config copy",
      "status": "active"
    },
    {
      "title": "Troubleshooting",
      "detail": "Waiting on known-error list",
      "status": "waiting"
    },
    {
      "title": "Changelog",
      "detail": "Queued for final pass",
      "status": "queued"
    }
  ],
  "deliverables": [
    {
      "title": "Docs audit",
      "detail": "Page-by-page issue log with severity and reader impact."
    },
    {
      "title": "Rewrite plan",
      "detail": "Clear edits tied to user outcomes."
    },
    {
      "title": "Changelog preview",
      "detail": "Readable summary of what changed and why."
    }
  ],
  "timeline": [
    {
      "time": "0-2 hrs",
      "detail": "Audit reader path and broken steps"
    },
    {
      "time": "2-10 hrs",
      "detail": "Rewrite highest-impact sections"
    },
    {
      "time": "10-16 hrs",
      "detail": "QA examples and prepare changelog"
    }
  ],
  "proof": [
    "Fits paid docs fixes, technical writing, and product education work.",
    "Shows product sense and reader empathy.",
    "Uses fictional docs content only."
  ]
} as const;

export type StageStatus = "ready" | "active" | "waiting" | "queued";
export type DemoStage = (typeof sample.stages)[number];
export type WorkItem = (typeof sample.workItems)[number];
