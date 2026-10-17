---
name: Rh45
description: A precise, architectural visual language for the physical world's cognitive layer.
colors:
  primary: "#C6F36A"
  neutral-bg: "#0B0D10"
  neutral-deep: "#0E1115"
  neutral-surface: "#12171C"
  neutral-foreground: "#F3F5F7"
  neutral-muted: "#A6AFB9"
  cool-gray: "#C5CBD2"
  label-muted: "#8E99A5"
  footer-muted: "#89939D"
  neutral-line: "#FFFFFF20"
  pill-line: "#FFFFFF44"
  lime-outline: "rgba(190,255,80,.28)"
  hero-outline: "#C6F36A25"
  hero-ring-wide: "#C6F36A08"
  hero-ring-outer: "#C6F36A05"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5.25rem)"
    fontWeight: 560
    lineHeight: 0.98
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4.1rem)"
    fontWeight: 550
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.16em"
  contact:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 650
    lineHeight: 1.6
rounded:
  dropdown: "12px"
  card: "15px"
  list-item: "7px"
  pill: "20px"
  circular: "50%"
spacing:
  shell-gutter: "20px"
  nav-gap: "24px"
  grid-gap: "12px"
  card-padding: "24px"
  section-desktop: "90px"
  section-mobile: "68px"
components:
  contact-link:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.primary}"
    typography: "{typography.contact}"
    rounded: "{rounded.card}"
    padding: "9px 16px"
  content-card:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-foreground}"
    rounded: "{rounded.card}"
    padding: "24px"
  dropdown-item:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.cool-gray}"
    rounded: "{rounded.list-item}"
    padding: "10px 12px"
  mobile-menu:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-foreground}"
    rounded: "{rounded.circular}"
    size: "44px"
  text-link:
    textColor: "{colors.neutral-foreground}"
    padding: "0 0 6px"
---

# Design System: Rh45

## Overview

**Creative North Star: "La capa cognitiva del mundo físico"**

The visual language is precise, architectural, and human. It gives a long-term infrastructure ambition a confident presence while keeping the interface controlled and legible. Large sans-serif headlines and deliberate open space let the physical-world thesis carry the weight.

Surfaces stay mostly flat and tonal. Fine borders define cards and controls; lime marks emphasis and action. Controls and cards remain minimal and nearly invisible around the content. The rendered website is the source of truth for this document: it currently uses a soft electric lime, charcoal backgrounds, cool grays, and a dark theme.

**Key Characteristics:**
- Dark charcoal canvas with a soft electric-lime accent and cool gray supporting text.
- Architectural spacing and large, responsive sans-serif headlines.
- Flat tonal panels, fine borders, and restrained controls.
- Human consequences remain present in technical storytelling.

## Colors

The implemented palette pairs a near-black canvas with a soft lime signal and cool gray text. The values in the frontmatter preserve the actual rendered colors, including distinct low-contrast details still present in the stylesheet.

### Primary
- **Electric Lime** (`{colors.primary}`): Emphasized words, small labels, links, and the contact action.

### Neutral
- **Near-Black Canvas** (`{colors.neutral-bg}`): Page background, header, and dropdown field.
- **Deep Charcoal Surface** (`{colors.neutral-deep}`): Alternate dark sections.
- **Graphite Panel** (`{colors.neutral-surface}`): Contact action and content cards.
- **Soft White** (`{colors.neutral-foreground}`): Main headings and body text.
- **Mist Gray** (`{colors.neutral-muted}`): Muted descriptions and supporting copy.
- **Cool Gray** (`{colors.cool-gray}`): Navigation and paragraph text.
- **Small Label Gray** (`{colors.label-muted}`): Compact uppercase labels.
- **Footer Gray** (`{colors.footer-muted}`): Footer copy.
- **Hairline White** (`{colors.neutral-line}`): Standard section, card, and control borders.
- **Pill Border** (`{colors.pill-line}`): Dashed outline on small status pills.
- **Lime Icon Outline** (`{colors.lime-outline}`): Border around How We Operate principle icons.
- **Hero Lime Outline** (`{colors.hero-outline}`): Fine outline around the Home hero rings.
- **Wide Hero Ring** (`{colors.hero-ring-wide}`) and **Outer Hero Ring** (`{colors.hero-ring-outer}`): Faint concentric bands behind the Home headline.

**The Lime Signal Rule.** Reserve the accent for emphasis and actions; keep most of each screen in dark neutrals and supporting grays.

## Typography

**Display Font:** Inter, with a system sans-serif fallback  
**Body Font:** Inter, with a system sans-serif fallback  
**Label Font:** Inter, with a system sans-serif fallback

**Character:** A compact, modern sans-serif voice balances a technical subject with direct, readable language. Headlines carry the strongest weight; supporting copy uses generous line height.

### Hierarchy
- **Display** (weight 560, `clamp(3rem, 6vw, 5.25rem)`, line height 0.98): Home and company-page hero headlines; page-specific responsive overrides are documented in Layout.
- **Headline** (weight 550, `clamp(2rem, 5vw, 4.1rem)`, line height 1.05): Major section statements.
- **Title** (weight 700, `1.2rem`): Card and principle titles, with tight tracking.
- **Body** (weight 400, `16px`, line height 1.6): Default copy. Lead paragraphs grow fluidly and use a 760px maximum measure.
- **Label** (weight 700, `0.72rem`, tracking `0.16em`, uppercase): Eyebrows and short section labels.

**The Headline Scale Rule.** Let page statements lead, then reduce scale and density for supporting copy; preserve the per-page mobile overrides rather than applying one headline size everywhere.

## Layout

Content sits in a centered shell capped at 1120px with 20px side gutters. Desktop navigation is 74px high with 24px gaps. Sections use 90px vertical padding on wide screens and 68px below 621px. Card grids use 12px gaps and 24px internal padding; larger editorial blocks use two-column layouts before collapsing to one column.

At widths below 621px, navigation collapses behind a 44px circular control, the Home hero is at least 400px high, and its headline uses `clamp(2.7rem, 8vw, 3rem)`. Company-page hero headings use `clamp(2.8rem, 13vw, 4.2rem)` at that width. From 1200px upward, Home and company-page hero headings use `clamp(3.5rem, 6vw, 5.25rem)` with `-0.04em` tracking. The How We Operate principle grid becomes one column below 721px; content grids adjust below 801px. Company subpages use 30px/28px hero padding and 22px/72px body padding on wide screens, tightening to 22px/22px and 18px/52px below 621px.

**The Measured Shell Rule.** Keep reading content aligned to the centered shell and preserve the wide-screen measure; let grids collapse at their observed breakpoints instead of squeezing cards.

## Elevation & Depth

Depth is mostly tonal: the panel surface and fine border separate cards from the canvas without a default shadow. The company dropdown uses the only structural shadow. The Home hero adds faint concentric lime bands as a localized atmospheric effect. The header uses a translucent dark backdrop and blur; neither effect is a general panel treatment.

### Shadow Vocabulary
- **Dropdown separation** (`0 14px 34px #0008`): Floating company menu.
- **Hero rings** (`0 0 0 60px #c6f36a08, 0 0 0 120px #c6f36a05`): Home hero only.

**The Flat Surface Rule.** Use tonal contrast and fine borders at rest; keep shadows and blur limited to their existing header, dropdown, and hero contexts.

## Shapes

Cards and the contact action use gently rounded 15px corners; the dropdown uses 12px, dropdown items 7px, and small status pills 20px. The mobile navigation control is circular. Borders remain 1px and quiet, except the pill's dashed border. Keep these restrained silhouettes rather than introducing a new radius language.

## Components

### Company Navigation
- The wordmark sits at the left of the header. The company dropdown and contact action follow on desktop; a circular menu control appears on mobile.
- The dropdown is a dark floating column with compact links. Hover and keyboard focus change the item surface and accent color; the chevron rotates over 180ms.
- Smooth anchor scrolling is disabled when reduced motion is requested.

### Contact Action
- **Character:** Compact, quiet, and easy to find in the header.
- **Surface:** Panel background, lime text, and a fine outline; 15px corners and `9px 16px` padding.
- **Typography:** Inter, 0.82rem, weight 650.

### Content Cards
- **Surface:** Tonal panel with a 1px hairline border, 15px corners, and 24px padding.
- **Use:** Principles, operating ideas, and supporting content. Keep body copy muted and subordinate to its heading.

### Text Link
- **Style:** Inline text with a fine lime underline and a small directional cue; the underline sits 6px below the text.

### How We Operate Principle
- **Layout:** Two-column row with a line icon and explanatory text; cards form two columns above 720px and one below.
- **Surface:** Quiet translucent white tint, hairline border, 15px corners, and 28px padding, reduced to 22px on mobile.
- **Icon:** 44px outlined container with a 12px radius, reduced to 40px below 721px.

### Mobile Menu Control
- **Style:** Circular 44px control with a 1px border and an 18px three-line icon.
- **Behavior:** Opens the navigation; the company menu toggles on touch layouts.

## Do's and Don'ts

### Do:
- **Do** use the implemented accent sparingly for emphasis, labels, and actions.
- **Do** preserve the high-contrast headline hierarchy and responsive type steps.
- **Do** keep panels flat, tonal, and outlined with the existing fine border.
- **Do** respect reduced-motion preferences for anchor scrolling and transitions.

### Don't:
- **Don't** introduce a new accent color or silently merge the distinct grays and translucent borders documented from the current stylesheet.
- **Don't** apply shadows, blur, or hero-ring effects to ordinary cards.
- **Don't** let navigation controls or decorative details compete with the page message.
