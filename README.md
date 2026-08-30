# EMAO Website — Digital Transformation Project

[![Live Website](https://img.shields.io/badge/Live-emao.pt-13233f?style=flat-square)](https://emao.pt)
![Version](https://img.shields.io/badge/version-V1-5f8fb4?style=flat-square)
![Status](https://img.shields.io/badge/status-live-2e7d32?style=flat-square)

The public portfolio snapshot of the website for **Escola de Música dos Antigos Orfeonistas (EMAO)** in Coimbra, Portugal.

This is not only a website implementation. It is the first product delivered within a wider digital transformation programme for the school: turning operational knowledge, user needs and an informal enquiry process into a clear, secure and measurable digital service.

**V1 launched on 28 August 2026:** [emao.pt](https://emao.pt)

> This repository contains a clean, security-reviewed portfolio snapshot. Production history, infrastructure identity and submitted data remain in a separate private repository.

## Project at a glance

| | |
|---|---|
| **Problem** | The school's existing digital presence did not clearly communicate its offer, pricing or next step for prospective students. Enquiries were not supported by a consistent digital flow. |
| **Goal** | Create a professional, accessible website that explains the school clearly and makes requesting a free trial lesson simple. |
| **Primary users** | Families with children or teenagers, adult learners, and students preparing for specialised music education. |
| **Delivery** | 3–28 August 2026 |
| **Role** | Project Manager and Product Owner |
| **Status** | V1 live and validated in production; V1.1 planned |

## My role

I led the project from discovery to production, combining project coordination, product decisions and AI-assisted implementation.

My responsibilities included:

- defining the problem, objectives, users, scope and exclusions;
- gathering and structuring requirements from the school's real operation;
- prioritising the V1 backlog and controlling scope;
- redesigning the information architecture and service journey;
- coordinating content, pricing, privacy and functional decisions;
- implementing and reviewing the solution through an AI-assisted development workflow;
- defining acceptance criteria and conducting functional, responsive and end-to-end testing;
- configuring preview and production environments;
- managing stakeholder feedback, trade-offs, risks and release readiness;
- documenting the delivery, roadmap and operational decisions.

## What V1 delivers

### Public experience

- Responsive homepage and dedicated pages for the school, educational offer, pricing and privacy
- Clear information architecture for different learner profiles
- Consistent calls to action centred on a free trial lesson
- Mobile and desktop navigation
- Institutional contacts, location, social channels and internal regulations

### Trial lesson workflow

- Structured enquiry form with client-side and server-side validation
- Portuguese phone, email, age and controlled-value validation
- Cloudflare Turnstile, honeypot and rate limiting
- Secure persistence in Cloudflare D1
- Automatic confirmation email to the prospective student
- Internal notification email for operational follow-up
- Clear success and field-level error states

### Production and security

- Dedicated preview and production environments
- Protected preview access for testers
- Separate D1 databases and production configuration
- HTTPS and canonical domain redirect
- Security headers, Cloudflare Bot Fight Mode and managed rules
- End-to-end production validation covering form submission, database persistence and email delivery

## Outcome

V1 replaced a static digital presence with a live service that now:

- presents the school's offer and pricing transparently;
- gives prospective students one clear route to take action;
- captures structured enquiries instead of relying only on informal contact;
- stores requests securely and triggers immediate communication;
- creates the foundation for lead management, conversion measurement and future operational improvements.

The release was completed after stakeholder preview testing, iterative feedback, linting, production builds, automated checks and an end-to-end test on the public domain.

## Delivery approach

```text
Discovery → Scope → Content & UX → Implementation → Preview → Feedback → Security → Production → Validation
```

The project documentation records objectives, stakeholders, scope boundaries, product decisions, risks, testing and the release roadmap:

- [V1 Project Brief](docs/V1-project-brief.md)
- [V1 Content Inventory](docs/V1-content-inventory.md)
- [Digital Transformation Strategy](docs/digital-transformation-strategy.md)
- [V1.1 Project Brief](docs/V1.1-project-brief.md)
- [V1.1 Content & Functionality Inventory](docs/V1.1-content-inventory.md)

## Technology

| Area | Technology |
|---|---|
| Frontend | React 19, Next.js 16, TypeScript, CSS |
| Build and runtime | Vite, Vinext, Cloudflare Workers |
| Data | Cloudflare D1 (SQLite), Drizzle ORM |
| Email | Resend, Cloudflare Email Routing |
| Protection | Cloudflare Turnstile, rate limiting, honeypot, security headers |
| Quality | ESLint, production build validation, automated HTML tests, end-to-end testing |
| Workflow | Git, GitHub, preview/production separation, AI-assisted development |

## V1.1 roadmap

The next release is focused on making the service measurable and easier to operate:

- technical SEO, indexation and social sharing metadata;
- privacy-conscious baseline analytics;
- a documented lead-management process;
- a protected administrative area for viewing and managing enquiries;
- search, filters, statuses, internal notes and simple operational counts;
- regression, security and user acceptance testing.

The V1.1 scope is intentionally limited. Newsletters, payment management, scheduling and full student portals remain outside this release.

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

This public snapshot does not contain submitted enquiries, credentials, tokens, production secrets or historical personal files. Infrastructure identifiers and operational addresses have been sanitised where appropriate.

---

**Project coordination, product ownership and AI-assisted implementation:** [Diogo Passos](https://github.com/dpassos91)
