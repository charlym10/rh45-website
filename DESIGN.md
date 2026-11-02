---
name: Rh45
description: A monochrome statement site on shadcn/ui. White and black pages, bordered cards and headlines that pair a bold sans with a quiet serif.
colors:
  background: { light: "#FFFFFF", dark: "#000000" }
  foreground: { light: "#000000", dark: "#FFFFFF" }
  card: { light: "#F5F5F5", dark: "#1F1F1F" }
  secondary: { light: "#F5F5F5", dark: "#1F1F1F" }
  accent: { light: "#EBEBEB", dark: "#333333" }
  muted-foreground: { light: "#666666", dark: "#999999" }
  primary-foreground: { light: "#FFFFFF", dark: "#000000" }
  border: { light: "#E0E0E0", dark: "#333333" }
  circle-line: { light: "rgba(0,0,0,.28)", dark: "rgba(255,255,255,.34)" }
  circle-wide: { light: "rgba(0,0,0,.07)", dark: "rgba(255,255,255,.13)" }
  circle-outer: { light: "rgba(0,0,0,.04)", dark: "rgba(255,255,255,.07)" }
  footer: { light: "#000000", dark: "#1F1F1F" }
  footer-foreground: { light: "#999999", dark: "#999999" }
typography:
  statement: { fontFamily: "Inter", fontSize: "clamp(36px, 4.4vw, 64px)", lineHeight: 1.25, fontWeight: 600, letterSpacing: "-0.01em" }
  statement-serif: { fontFamily: "Source Serif 4", fontWeight: 400 }
  section-title: { fontFamily: "Inter", fontSize: "clamp(32px, 3.8vw, 48px)", lineHeight: 1.08, fontWeight: 600, letterSpacing: "-0.01em" }
  title: { fontFamily: "Inter", fontSize: "30px", lineHeight: "36px", fontWeight: 600, letterSpacing: "-0.01em" }
  card-title: { fontFamily: "Inter", fontSize: "20px", lineHeight: "28px", fontWeight: 600 }
  lead: { fontFamily: "Inter", fontSize: "18px", lineHeight: "28px", fontWeight: 400 }
  body: { fontFamily: "Inter", fontSize: "16px", lineHeight: "24px", fontWeight: 400 }
  card-body: { fontFamily: "Inter", fontSize: "14px", lineHeight: "20px", fontWeight: 400 }
  caption: { fontFamily: "Inter", fontSize: "13px", lineHeight: "20px", fontWeight: 400, letterSpacing: "0.01em" }
rounded:
  base: "8px"
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

This file records the design the website ships. The website uses the **Rh45** Design System artifact on claude.ai: its shadcn/ui tokens, `globals.css` theme, Button and Card. `src/styles/globals.css` holds the tokens, and changing the artifact does not change the site until someone updates that file.

**Where the site differs from the artifact, on purpose.** It adds Source Serif 4 and a larger `h1`. It keeps the content links, hero circle, mobile menu, footer and uppercase page titles of its earlier versions. It uses the media query instead of the `.dark` class, because it follows the system theme. It does not use `attention` or the state colors, Status, Metric, EventRow or JetBrains Mono.

**References.** Do not use the logos, illustrations, copy or proprietary typefaces of any reference site.

## Principles

1. **Statements first.** Each page opens with its claim in type, then the supporting detail.
2. **Monochrome.** Color never carries meaning here. Hierarchy comes from size, weight and typeface.
3. **Rules, not shadows.** Cards have a `border` and no shadow. Sections separate with space and tone; only the hero keeps a rule below it.
4. **Systems, not screens.** The cognitive cycle shows parts connected to each other.

## Voice

Short, declarative sentences. Lead with the fact, in the active voice. Sentence case for titles and labels, except the company page titles above the `h1`, which CSS sets in uppercase. No exclamation marks, emoji or metaphors about magic or brains.

## Color

- Page: `background`. Cards: `card`. Bands: `secondary`. Hover states: `accent`.
- Text: `foreground`, secondary `muted-foreground`. Never text in `border`.
- The `circle-*` tokens are only for the hero circle.
- The footer stays dark in both themes, using `footer` and `footer-foreground`.
- The theme follows `prefers-color-scheme`.

## Typography

Inter (400, 500, 600) for text, Source Serif 4 for the second beat of a headline and the closing statement. Both load from Google Fonts.

| Element | Style |
| --- | --- |
| `h1` | `statement`; its `em` uses `statement-serif` |
| Home section `h2` | `section-title` |
| Other `h2`, closing statement | `title`; the closing statement is set in the serif at weight 400 |
| Card `h3`, principle headings | `card-title` |
| Lead paragraphs on company pages and in the closing Home section | `lead`, `muted-foreground` |
| Running text, including the other Home paragraphs | `body`, measure near 68 characters |
| Card text | `card-body` |
| Company page titles above the `h1` | 12/16, weight 600, tracking 0.14em, uppercase, `foreground` |
| Other eyebrows, card labels, About numbering | `caption`, `muted-foreground` |
| Mobile menu links | 12.48px, kept from the first version of the site |
| Cognitive cycle numbers | 28/32, weight 600, tabular figures |

## Layout

A centered 1120px shell with `space-6` side margins. Each company page is its own route. Home sections are two columns, with the title on the left and the supporting text on the right, and they collapse to one column at 860px. Two full-width `secondary` bands alternate with the `background` sections on Home, and the second closes the page above the footer. Card grids use `space-4` gaps. The cycle goes from four columns to two at 1000px and to one at 620px. Principles collapse at 720px, and About cards at 620px.

The Home hero fills the viewport below the header, with its text vertically centered, so its link leads to the next section. It keeps the circle from the first version of the site, in the new palette and stronger, so it reads in both themes: 550px wide, 120px past the right edge and 12% from the top, with a 1px `circle-line` border and two flat bands of 60px (`circle-wide`) and 120px (`circle-outer`). The hero is never shorter than 460px, or 400px below 620px wide, and clips the circle at its lower rule.

## Components

- **Company button:** shadcn Button, `secondary`, `sm`, with `accent` on hover. Desktop only.
- **Primary button:** the header contact link, shadcn Button `default`, `sm`. One per view. Below 620px it is 36px high with a 44px touch target.
- **Content links:** kept from the first version of the site. `.content-link` is inline `foreground` text with a 1px `foreground` underline 6px below it.
- **Mobile menu:** below 620px, a shadcn Button, `secondary`, `icon`, with a 44px touch target. Its icon is three left-aligned lines of decreasing length. The menu opens as a panel under the header: Company as a plain row, and its links indented behind a `border` rule, kept from the first version of the site.
- **Card:** shadcn Card for tiles, cycle steps, principles and About cards, with its border and `shadow-none`. `space-6` padding.
- **Footer:** the legal line only, on `footer`.
- **Status, Metric and EventRow:** not used. They show live readings, and the site must not present data Rh45 does not have.

## Behavior

- **Pages:** each company page is its own URL with its own title. The old `#manifesto`, `#how-we-operate` and `#about` links redirect to them. React runs only at build time.
- **Company menu:** a disclosure. A mouse opens it on hover; keyboard and touch toggle it with the button. Escape closes it, and it closes after any header link is used. The current page's link is marked with `aria-current` and weight 600.
- **Mobile menu:** opening it moves focus to Company. Escape returns focus to the button. It closes on an outside tap, on any header link and when the layout crosses 620px.

## Iconography

Lucide, in `foreground` or `muted-foreground`: 16px with a 1.5px stroke, or 24px in diagrams and principle cards. The mobile menu icon is custom.

## Logo

The site has no logo yet. The wordmark is "Rh45" in Inter 600, letter-spacing -0.02em. The favicons set "45" in white on black and are not a logo.
