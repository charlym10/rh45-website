---
name: Rh45
description: Warm black and white, generous space and clear type. One ochre accent marks the moments a person is needed.
colors:
  paper: { light: "#F7F6F2", dark: "#121211" }
  surface: { light: "#FFFFFF", dark: "#1C1C1A" }
  ink: { light: "#111110", dark: "#F2F1EC" }
  ink-muted: { light: "#5E5D58", dark: "#A3A29B" }
  on-ink: { light: "#F7F6F2", dark: "#121211" }
  line: { light: "#DDDBD3", dark: "#2E2D2A" }
  accent: { light: "#8A5B12", dark: "#D9A54A" }
  accent-soft: { light: "#EFE6D3", dark: "#2A2418" }
  danger: { light: "#A3332A", dark: "#E07A6E" }
  state-ok: { light: "#2E6A43", dark: "#6FBF8A" }
  state-active: { light: "#2C5C8A", dark: "#8DB6E0" }
  state-attention: "{colors.accent}"
  state-alert: "{colors.danger}"
typography:
  display: { fontFamily: "Inter", fontSize: "48px", lineHeight: "52px", fontWeight: 600, letterSpacing: "-0.02em" }
  title: { fontFamily: "Inter", fontSize: "32px", lineHeight: "40px", fontWeight: 600, letterSpacing: "-0.01em" }
  heading: { fontFamily: "Inter", fontSize: "20px", lineHeight: "28px", fontWeight: 600 }
  body: { fontFamily: "Inter", fontSize: "16px", lineHeight: "26px", fontWeight: 400 }
  small: { fontFamily: "Inter", fontSize: "14px", lineHeight: "20px", fontWeight: 400 }
  label: { fontFamily: "Inter", fontSize: "12px", lineHeight: "16px", fontWeight: 500, letterSpacing: "0.04em" }
  metric: { fontFamily: "JetBrains Mono", fontSize: "28px", lineHeight: "32px", fontWeight: 500, letterSpacing: "-0.01em" }
  data: { fontFamily: "JetBrains Mono", fontSize: "13px", lineHeight: "20px", fontWeight: 400 }
rounded:
  sm: "4px"
  md: "8px"
  full: "9999px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-4: "16px"
  space-6: "24px"
  space-12: "48px"
---

# Design System: Rh45

This file records how the website applies the Rh45 design system. The system itself is kept in the **Rh45** Design System artifact on claude.ai, which owns the tokens, components and brand book. When they differ, the artifact wins: update it first, then the tokens in `index.html` and this file.

## Principles

1. **Precision over noise.** No hype, no superlatives, no decoration that does not explain something.
2. **Observable by design.** What a system does, why, and who acted must always be visible.
3. **Systems, not screens.** Show relationships, not isolated widgets.
4. **The human decides.** `accent` is reserved for where a person is asked to look, decide or approve.
5. **Rules, not shadows.** Separate with `line` and with space. No shadows, no gradients.

## Voice

Short, declarative sentences. Lead with the fact, in the active voice. Sentence case for titles and labels. No exclamation marks, emoji or metaphors about magic or brains.

## Color

- Page: `paper`. Cards and panels: `surface`. Text: `ink`, secondary `ink-muted`. Never text in `line`.
- Control borders use `ink-muted`; `line` is for decorative rules only.
- On this site `accent` appears only on links and focus rings. The site has no item awaiting a human decision yet.
- The theme follows `prefers-color-scheme`. Both themes use the same token names.

## Typography

Inter for text, JetBrains Mono for figures. Both load from Google Fonts. Hierarchy comes from size and weight, never from color.

| Element | Style |
| --- | --- |
| `h1` | `display`, scaled down below 384px wide so long words fit |
| `h2`, closing statement | `title` |
| Principle headings, `h3` | `heading` |
| Card titles | 16/24, weight 600, from the Card component |
| Lead paragraphs | 20/28, weight 400, `ink-muted` |
| Running text | `body`, measure near 68 characters |
| Card text, notes, footer, company menu | `small` |
| Eyebrows | `label`, uppercase |
| Numbering (01, 02) | `data` |

## Layout

A centered 1120px shell with `space-6` side margins. Content is left-aligned. Sections are `space-12` apart and separated by a `line` rule. Grids collapse to one column at 720px (How we operate) and 620px (everything else). One solid `ink` block on Home acts as counterweight.

## Components

- **Button:** the header contact link uses the secondary style. Its height grows from 36px to 44px below 620px, for touch.
- **Card:** tiles, cycle steps, principles and About cards. `surface`, `line` border, `radius-md`, `space-4` padding.
- **Text link:** `accent`, underlined, so color is never the only cue.
- **Status, Metric and EventRow:** not used. They show live readings, and the site must not present data Rh45 does not have.

## Iconography

1.5px stroke icons with rounded joins, in `ink` or `ink-muted`. The system has no icon set yet.

## Logo

The system has no logo yet. The wordmark is "Rh45" in Inter 600, `ink`, letter-spacing -0.02em. The favicons set "45" in type, `on-ink` on `ink`, and are not a logo.
