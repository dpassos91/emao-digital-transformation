# EMAO — Digital Transformation Project

[![Live Website](https://img.shields.io/badge/Live-emao.pt-13233f?style=flat-square)](https://emao.pt)
![Version](https://img.shields.io/badge/version-V1.1-5f8fb4?style=flat-square)
![Status](https://img.shields.io/badge/status-live-2e7d32?style=flat-square)

A public portfolio snapshot of the digital transformation work developed for **Escola de Música dos Antigos Orfeonistas (EMAO)** in Coimbra, Portugal.

The project started with a public website, but its purpose is broader: turn real operational needs into small, measurable digital products that improve acquisition, lead handling and decision-making while keeping scope, privacy and maintenance proportional to the organisation.

**V1 launched on 28 August 2026. V1.1 was completed in September 2026.**  
Live service: [emao.pt](https://emao.pt)

> This repository is a clean, security-reviewed portfolio snapshot. Production history, infrastructure identity, submitted data and operational configuration remain in a separate private repository.

## From public website to operational workflow

The product evolved from a clearer public experience into a connected enquiry and lead-management workflow.

![EMAO public website homepage](docs/assets/Captura%20de%20ecr%C3%A3%202026-09-25%20114353.png)

*V1 established a clear public journey around the school's offer and a prominent free-trial call to action.*

![EMAO trial lesson enquiry form](docs/assets/Captura%20de%20ecr%C3%A3%202026-09-25%20114422.png)

*The enquiry journey captures structured contact, learner, interest and availability information so the next operational step starts with usable data.*

![EMAO protected lead-management interface](docs/assets/Captura%20de%20ecr%C3%A3%202026-09-25%20114503.png)

*V1.1 extended the service into day-to-day operations, with lifecycle states, aggregate counts, search and filtering, and manual lead creation in a protected administrative interface.*

## Project at a glance

| | |
|---|---|
| **Initial problem** | The school's digital presence did not clearly communicate its offer, pricing or next step, and enquiries were not supported by a consistent digital workflow. |
| **Programme goal** | Improve the school's digital presence and progressively strengthen acquisition, lead operations and data-informed decision-making. |
| **Primary users** | Families with children or teenagers, adult learners, and students preparing for specialised music education. |
| **Role** | Project Manager and Product Owner |
| **Current release** | V1.1 — live and operational |
| **Delivery model** | Iterative releases based on real operational needs, feedback and observed data |

## My role

I lead the initiative from problem definition through delivery and operational validation, combining project coordination, product ownership and AI-assisted implementation.

Responsibilities include:

- defining problems, objectives, users, scope and exclusions;
- translating the school's real operation into requirements and workflows;
- prioritising backlogs and controlling scope across releases;
- coordinating content, privacy, process and functional decisions;
- implementing and reviewing the solution through an AI-assisted development workflow;
- defining acceptance criteria and conducting functional, responsive and end-to-end testing;
- configuring and validating preview and production environments;
- managing stakeholder feedback, trade-offs, risks and release readiness;
- documenting decisions, releases, operating rules and future opportunities;
- using production feedback and funnel data to inform subsequent priorities.

## V1 — public service foundation

V1 replaced a static digital presence with a production service that:

- explains the school, educational offer and pricing through a responsive public website;
- provides a clear free-trial-lesson call to action;
- captures structured enquiries with client- and server-side validation;
- protects submissions with Cloudflare Turnstile, honeypot and rate limiting;
- persists enquiries in Cloudflare D1;
- sends automatic confirmation and internal notification emails;
- separates preview and production environments;
- applies HTTPS, canonical redirects and security headers;
- supports production validation from form submission through database persistence and email delivery.

The release established the first measurable digital journey and the technical foundation for later operational improvements.

## V1.1 — measurement and lead operations

V1.1 moved the project beyond lead capture into day-to-day lead management.

### Acquisition and measurement

- campaign attribution fields captured with each enquiry;
- baseline conversion tracking for the trial-lesson funnel;
- contact preference captured as structured data;
- richer availability capture with multiple time options;
- validation rules aligned with the school's actual scheduling process.

### Protected lead-management workflow

- protected administrative interface for enquiry management;
- manual lead creation for enquiries originating outside the website;
- lifecycle states: `new`, `contacted`, `trial_scheduled`, `converted`, `trial_no_conversion` and `archived`;
- controlled status transitions reflecting the real operating process;
- trial date required when an experimental lesson is scheduled;
- preservation of trial history when a lead does not convert;
- support for reactivation and scheduling a new trial after non-conversion;
- internal notes with append-only operational history;
- first and second follow-up actions recorded without introducing unnecessary workflow states;
- status filters, top-level counts and progressive pagination;
- interaction refinements that keep the operator's position when filtering or loading more records.

### Operational outcome

V1.1 provides one consistent place to move a prospective student from first contact to trial lesson and final outcome. It also creates structured data for later analysis of source, demand, trial attendance and conversion without turning the release into a full school-management platform.

## Delivery approach

```text
Operational problem → Scope → Requirements → Implementation → Validation → Production use → Feedback → Iteration
```

The project documentation records the evolution of the product and its scope:

- [V1 Project Brief](docs/V1-project-brief.md)
- [V1 Content Inventory](docs/V1-content-inventory.md)
- [V1.1 Project Brief](docs/V1.1-project-brief.md)
- [V1.1 Content & Functionality Inventory](docs/V1.1-content-inventory.md)
- [Digital Transformation Strategy](docs/digital-transformation-strategy.md)

## Technology

| Area | Technology |
|---|---|
| Frontend | React 19, Next.js 16, TypeScript, CSS |
| Build and runtime | Vite, Vinext, Cloudflare Workers |
| Data | Cloudflare D1 (SQLite), Drizzle ORM |
| Email | Resend, Cloudflare Email Routing |
| Protection | Cloudflare Turnstile, rate limiting, honeypot, security headers, protected admin access |
| Quality | ESLint, production build validation, automated HTML tests, end-to-end testing |
| Workflow | Git, GitHub, preview/production separation, AI-assisted development |

## What is deliberately not in V1.1

V1.1 is an operational lead-management release, not a full ERP or student portal. It deliberately excludes:

- payments and billing;
- lesson timetable management;
- student and teacher portals;
- attendance and lesson-summary management;
- newsletters and broad CRM automation.

These areas are evaluated separately and only move into delivery when the operational problem, expected value and maintenance cost justify them.

## Next direction

With V1.1 technically and operationally closed, the next stage is **measurement before expansion**.

The immediate focus is to:

1. use the lead workflow in normal school operations;
2. collect enough campaign and conversion data to establish a useful baseline;
3. review acquisition quality, follow-up effectiveness and conversion patterns;
4. prioritise the next release from observed operational value rather than from feature availability.

Potential future work includes deeper reporting and selected school-operation workflows, but those are not committed scope until discovery is complete.

## Run locally

### Requirements

- Node.js 22.13 or later
- npm
- WSL 2 recommended on Windows because the build scripts use Linux tooling

### Installation

```bash
npm ci
npx wrangler d1 migrations apply site-creator-d1 --local
npm run dev
```

The local D1 data is stored in `.wrangler/` and must not be committed.

### Validation

```bash
npm test
npm run lint
npm run build
```

Additional artifact validation is available through:

```bash
npm run validate:artifact
```

## Repository structure

```text
app/                         pages, layouts, components, styles and API
db/                          D1 connection and database schema
docs/                        project, product and delivery documentation
drizzle/                     SQL migrations and Drizzle metadata
public/                      neutral portfolio assets and public icons
scripts/                     installation, build and validation scripts
tests/                       automated tests
worker/                      Cloudflare Worker entry point
wrangler.example.jsonc       sanitised deployment configuration example
```

## Data and secrets

This public snapshot does not contain submitted enquiries, credentials, tokens, production secrets or historical personal files. Infrastructure identifiers and operational addresses are sanitised where appropriate.

---

**Project coordination, product ownership and AI-assisted implementation:** [Diogo Passos](https://github.com/dpassos91)
