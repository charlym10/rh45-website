---
name: Rh45
description: A monochrome statement site. White and black pages, soft flat cards, pill navigation and headlines that pair a bold sans with a quiet serif.
colors:
  paper: { light: "#FFFFFF", dark: "#000000" }
  surface: { light: "#F5F5F5", dark: "#1F1F1F" }
  surface-strong: { light: "#EBEBEB", dark: "#333333" }
  ink: { light: "#000000", dark: "#FFFFFF" }
  ink-muted: { light: "#666666", dark: "#999999" }
  on-ink: { light: "#FFFFFF", dark: "#000000" }
  line: { light: "#E0E0E0", dark: "#333333" }
  art-mid: { light: "#BDBDBD", dark: "#4D4D4D" }
  footer-bg: { light: "#000000", dark: "#1F1F1F" }
typography:
  statement: { fontFamily: "Inter", fontSize: "clamp(30px, 3vw, 48px)", lineHeight: 1.25, fontWeight: 600, letterSpacing: "-0.01em" }
  statement-serif: { fontFamily: "Source Serif 4", fontWeight: 400 }
  section-title: { fontFamily: "Inter", fontSize: "clamp(32px, 3.8vw, 48px)", lineHeight: 1.08, fontWeight: 600, letterSpacing: "-0.01em" }
  title: { fontFamily: "Inter", fontSize: "32px", lineHeight: "40px", fontWeight: 600, letterSpacing: "-0.01em" }
  card-title: { fontFamily: "Inter", fontSize: "21px", lineHeight: "26px", fontWeight: 700 }
  lead: { fontFamily: "Inter", fontSize: "18px", lineHeight: "28px", fontWeight: 400 }
  body: { fontFamily: "Inter", fontSize: "16px", lineHeight: "26px", fontWeight: 400 }
  card-body: { fontFamily: "Inter", fontSize: "14.5px", lineHeight: "22px", fontWeight: 400 }
  caption: { fontFamily: "Inter", fontSize: "13px", lineHeight: "20px", fontWeight: 400, letterSpacing: "0.01em" }
rounded:
  button: "10px"
  card: "16px"
  full: "9999px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-4: "16px"
  space-6: "24px"
  space-8: "32px"
  space-12: "48px"
---

# Design System: Rh45

This file records the design the website ships. The tokens in `index.html` and this file are the source of truth for the site.

**Relationship to the Rh45 design system artifact.** The site started from the **Rh45** Design System artifact on claude.ai and has since deliberately diverged from it: this palette and these components replace its warm paper, ochre accent, JetBrains Mono and its Button and Card shapes. Its voice and its composition grammar still apply. Changing the artifact does not change the site until someone updates these tokens.

**References.** Component shapes are modeled on anthropic.com, and the palette on openai.com. They are references for structure and color only. Do not use their logos, illustrations, copy or proprietary typefaces.

## Principles

1. **Statements first.** Each page opens with its claim in type, then the supporting detail.
2. **Monochrome.** Color never carries meaning here. Hierarchy comes from size, weight and typeface.
3. **Flat and soft.** Cards are tonal, with no borders or shadows. Sections separate with space and tone, not rules.
4. **Systems, not screens.** The hero composition and the cognitive cycle show parts connected to each other.

## Voice

Short, declarative sentences. Lead with the fact, in the active voice. Sentence case for titles and labels. No exclamation marks, emoji or metaphors about magic or brains.

## Color

- Page: `paper`. Cards and the band: `surface`. Buttons and hover states: `surface-strong`.
- Text: `ink`, secondary `ink-muted`. Never text in `line` or `art-mid`.
- `art-mid` is only for the middle block in the hero composition.
- The footer stays dark in both themes, using `footer-bg` with fixed white and `#999999` text and `#333333` rules.
- The theme follows `prefers-color-scheme`.

## Typography

Inter for text, Source Serif 4 for the second beat of a headline and the closing statement. Both load from Google Fonts.

| Element | Style |
| --- | --- |
| `h1` | `statement`; its `em` uses `statement-serif` |
| Home section `h2` | `section-title` |
| Other `h2`, closing statement | `title`; the closing statement is set in the serif at weight 400 |
| Card `h3`, principle headings | `card-title` |
| Lead paragraphs | `lead`, `ink-muted` |
| Running text | `body`, measure near 68 characters |
| Card text | `card-body` |
| Eyebrows, card labels, About numbering | `caption`, `ink-muted` |
| Cognitive cycle numbers | 28/32, weight 600, tabular figures |

## Layout

A centered 1120px shell with `space-6` side margins. Home sections are two columns, with the title on the left and the supporting text on the right, and they collapse to one column at 860px. One full-width `surface` band sits in the middle of Home. Card grids use `space-4` gaps. The cycle goes from four columns to two at 1000px and to one at 620px. Principles collapse at 720px, and About cards at 620px.

The Home hero is a statement followed by a full-width `surface` panel holding the composition: an `ink` slab bled off the top, `ink-muted` and `art-mid` blocks, a node grid at a 48px pitch and thin `ink` edges joining one hub. It is decorative, so it stays hidden from assistive technology.

## Components

- **Navigation pill:** 28px high, `radius-full`, 13px text, `surface` with a `line` border. Grows to 44px on touch layouts.
- **Primary button:** the header contact link, in the pill shape with an `ink` fill. One per view.
- **Secondary button:** `.link` and `.back`. 44px high, `radius-button`, `surface-strong` with a `line` border.
- **Card:** tiles, cycle steps, principles and About cards. `surface`, `radius-card`, `space-8` padding, `space-6` below 620px. No border.
- **Footer:** the wordmark on the left, ruled links with chevrons on the right and a legal line below.
- **Status, Metric and EventRow:** not used. They show live readings, and the site must not present data Rh45 does not have.

## Iconography

1.5px stroke icons with rounded joins, in `ink` or `ink-muted`. The site has no icon set yet.

## Logo

The site has no logo yet. The wordmark is "Rh45" in Inter 700, letter-spacing -0.02em. The favicons set "45" in white on black and are not a logo.
