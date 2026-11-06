# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The website is oriented toward residential communities that could become design partners, and people who have a problem in their spaces or want to work on this. Residents and other end users are outside the website's current target audience. This does not define the eventual users or buyers of the autonomous-access project; those roles remain open.

## Product Purpose

Rh45 is an early-stage company. It states its purpose as redefining how the physical world supports human life, its mission as enabling the places where people live, work and gather to become autonomous, adaptive and secure, on foundations designed to evolve, and its vision as a world where the places people inhabit anticipate needs, protect life and adapt over time while remaining accountable to the people they serve. Its first project is an autonomous access system for residential communities. Rh45 is building it and is looking for design partners to build the first version with. No version is available yet.

## Positioning

The foundational text is the Rh45 Foundational Direction (Revised) doc. It says Rh45 exists to give the physical world the ability to think. Whether Rh45 is a horizontal platform or a vertically integrated product company is a Strategic Architecture decision, so public copy does not use "cognitive layer" or "we do not build isolated products" as identity claims. It describes intelligence as distributed across edge, cloud and human context, with open interfaces at system boundaries. The exact architecture and mechanism behind this positioning remain unconfirmed. Preserve the conceptual strength of the idea while being precise about which systems sense, reason, coordinate, or act.

## Operating Context

The repository contains a static company website with a single Home page, in English at `/` and in Spanish at `/es/`, and a 404. The Spanish version exists because design partners are only in Pereira, Colombia. The site asks residential communities to become design partners. Design partners are only available in Pereira, Colombia. They pay: Rh45 always charges, at a preferential price lower than later customers will pay. The price itself is not public. The first project is an autonomous access system for residential communities. The site describes it as managing pedestrian access: it recognizes residents, handles visitors, checks each request in context, opens the door, records every event and sends anything outside the rules to a person. Rh45 intends to integrate with private security companies rather than compete with them; the site says the system is designed to work with a community's security company and portería staff, not to replace them.

The site uses `partners@rh45.ai` for design partner requests and `contact@rh45.ai` for everything else. It promises a reply within 2 working days and says the founding team reads every message: both are public commitments.

## Search and sharing

Page titles carry the company's long-term direction ("Making the physical world intelligent"), and descriptions add the entry point: residential access in Pereira. Structured data keeps them apart: the Organization describes the vision and is not limited to a place, and a separate Service describes the design partner program, available only in Pereira. A new city or type of place becomes another Service, not a change to the Organization.

Spanish copy uses Colombian vocabulary: *conjunto residencial* and *portería*, the words community boards and property managers search for.

## Capabilities and Constraints

- Company stage: early-stage, building its first project, an autonomous-access system. No version is available yet.
- The autonomous-access project's requirements and architecture remain unconfirmed, and it has no available capabilities yet.
- Autonomous environments are the company's purpose, mission, and vision; these do not define a technical implementation.
- Describe the project as work in progress: what Rh45 is building, not what communities can use today.
- Keep strategic beliefs and future capabilities distinct from verified implementation.
- The website is a static Astro project; its pages are in `src/pages/` and its deployment instructions are in `README.md`.

## Brand Commitments

- Use the company name Rh45.
- The company is early-stage; describe its direction and current operating reality accurately.
- Retain conceptual force while maintaining technical precision. The user rejected copy that became generic or technically inaccurate.
- Preserve the company's stated commitments: purpose before technology; distributed intelligence and open boundaries; autonomy with accountability; foundations that can evolve; and human-centered systems.
- Treat human safety, security and privacy, reliability and rigor, transparency, and no artificial lock-in as the company's non-negotiables.
- Do not invent customers, deployed products, results, or technical architecture.

## Evidence on Hand

- `src/pages/` contains the current company website. Public copy should keep the distinction between direction and available product clear.
- `README.md` documents local development and GitHub Pages deployment.
- No customer evidence, product demonstration, performance data, or case study is documented in this repository.

## Product Principles

- Put real human needs before technology, with safety and security as foundational constraints.
- Design for distributed intelligence and interoperability across systems, infrastructure, and human context.
- Pair autonomy with accountability, transparency, reliability, and meaningful human oversight.
- Build durable foundations for long-term adaptation rather than disconnected products or short-term gains.
- Preserve the force of Rh45's direction while distinguishing strategic ambition from verified technical capability.
