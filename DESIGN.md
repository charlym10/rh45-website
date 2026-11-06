---
name: Rh45
description: A monochrome statement site on shadcn/ui. White and black pages, bordered cards and headlines that pair a bold sans with a quiet serif.
colors:
  background: { light: "#FFFFFF", dark: "#000000" }
  foreground: { light: "#000000", dark: "#FFFFFF" }
  secondary: { light: "#F5F5F5", dark: "#262626" }
  border: { light: "#E5E5E5", dark: "#262626" }
  input: { light: "#8C8C8C", dark: "#737373" }
  muted-foreground: { light: "#666666", dark: "#A3A3A3" }
  card: { light: "#FFFFFF", dark: "#141414" }
typography:
  display: { fontFamily: "Source Sans 3", fontSize: "48px", lineHeight: "52px", fontWeight: 600, letterSpacing: "-0.02em" }
  display-second-beat: { fontFamily: "Source Serif 4", fontWeight: 400 }
  title: { fontFamily: "Source Sans 3", fontSize: "30px", lineHeight: "36px", fontWeight: 600, letterSpacing: "-0.01em" }
  heading: { fontFamily: "Source Sans 3", fontSize: "20px", lineHeight: "28px", fontWeight: 600 }
  body: { fontFamily: "Source Sans 3", fontSize: "16px", lineHeight: "24px", fontWeight: 400 }
  small: { fontFamily: "Source Sans 3", fontSize: "14px", lineHeight: "20px", fontWeight: 400 }
  label: { fontFamily: "Source Sans 3", fontSize: "12px", lineHeight: "16px", fontWeight: 500, letterSpacing: "0.025em" }
  data: { fontFamily: "Source Code Pro", fontSize: "13px", lineHeight: "20px", fontWeight: 400 }
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

This file records the design the website ships. The website uses the **Rh45** Design System artifact on claude.ai: its shadcn/ui tokens, `globals.css` theme, type, components and Lucide icons. `src/styles/globals.css` holds the tokens, and changing the artifact does not change the site until someone updates that file.

**Where the site differs from the artifact, on purpose.** It uses the media query instead of the `.dark` class, because it follows the system theme. It sets text in Source Sans 3 and Source Code Pro instead of the artifact's Inter and JetBrains Mono, as the Rh45 Website design does. Of the artifact's components the site only uses Button: it is one page, with no live data and no forms.

## Principles

1. **Labelled sections.** The page reads as a short list of statements, each under a small uppercase label in a left column.
2. **Monochrome.** Color never carries meaning here. Hierarchy comes from size and weight.
3. **Rules, not shadows.** Separate with space, rules and tone.
4. **One solid block.** A full-width `primary` block is the counterweight of the page in the light theme: the contact block and footer. In the dark theme it uses `secondary`, because a white band overpowers the page.
5. **Real content only.** Never show readings, metrics or logs Rh45 does not have.

## Voice

Short, declarative sentences. Lead with the fact, in the active voice. Spanish addresses the reader as *usted*, for community boards and property managers in Colombia, and uses Colombian words: *conjunto residencial*, *portería*. Sentence case for titles, except section labels, which CSS sets in uppercase. No exclamation marks, emoji or metaphors about magic or brains.

## Color

- Page: `background`. Bands: `secondary`. Solid block: `primary` with `primary-foreground`, or `secondary` with `foreground` in the dark theme.
- Text: `foreground`, secondary `muted-foreground`. Never text in `border`.
- Hover: `accent`, which equals `secondary`; the button's own fill at 90% on primary buttons.
- Secondary text on the solid block, including the footer, uses `input` in the light theme, because `muted-foreground` on black falls below 4.5:1.
- No literal colors. Translucency is a token with opacity, as in shadcn's focus rings at 50%.
- The theme follows `prefers-color-scheme`.

## Typography

Source Sans 3 for text and Source Serif 4 for the second beat of a headline, served from the site itself through Fontsource packages, so no visit calls Google Fonts. Source Code Pro only for the non-negotiables numbers and the 404 label.

| Element | Style |
| --- | --- |
| Hero and 404 `h1`, contact `h2` | `display`, scaling from 36px to 48px at 5vw, line height 1.08, -0.01em; the `em` uses `display-second-beat` |
| First project title | `title` |
| Design partners heading | 24/32, weight 600, -0.01em |
| Design partner facts | `small`, terms at weight 600 |
| Introductions | `heading` size at weight 400, usually in `muted-foreground` |
| Running text | `body`, measure near 68 characters |
| Statements and non-negotiables | Weight 500, -0.01em; 24px to 30px and 20px to 24px |
| Header links, footer | `small` |
| Section labels | `label`, uppercase |
| Non-negotiables numbers, 404 label | `data`, `muted-foreground`, tabular figures |

## Layout

A centered shell of 1248px of content, with side margins from 24px to 96px at 6vw. The 80px header is sticky at every width. Sections have 96px of vertical padding at every width, with a label column that wraps above the content when there is no room for both. The contact block has 128px above its content and 96px below. Above 640px it is tall enough to reach under the header at the end of the page. At 640px and below it fits its content, with 64px above and below, and the header keeps its color unless the screen is short enough for the block to reach it.

The hero fills the viewport below the header, up to 960px, with its text vertically centered beside the network drawing. The drawing is at most 440px wide. Below 900px it moves behind the text, 136px past the right edge and 68px past the bottom, at 30% opacity.
## Components

From shadcn/ui, themed by the tokens, unless noted. Their files in `src/components/ui/` are not edited for color or radius.

- **Header:** the wordmark, with a 44px high touch area, three section links that hide at 640px and below, a Lucide `Globe` link to the other language, named in that language and visible at every width, and a Contact button to the contact block. It takes the solid block's color once that block reaches it.
- **Network drawing:** the site's own. An SVG of nodes around a hub, in `foreground`, which turns slowly while nodes join and leave. It holds still under reduced motion.
- **Button:** `default` for the hero action, See the design partner offer, which scrolls to the panel with a Lucide `ArrowDown`, and for Become a design partner in the panel and the closing block, both to `partners@rh45.ai` with a Lucide `ArrowUpRight`, and for Back to home on the 404, with a 44px high touch area. `outline` with an `input` border and no shadow, `sm` size, for Contact in the header.
- **Design partner panel:** a `background` panel with `radius` on the `secondary` band: heading, where the offer is available at weight 500 after a Lucide `MapPin`, as beside the hero button, the company's stage, three facts behind an `input` rule, a prompt for the email, the button and the address as text with its copy icon, then the reply time and who reads it.
- **Copy address:** a Lucide `Copy` icon button right after every address on the page, kept on the address's line, for visitors with no mail app behind `mailto:` links. It follows the address with no space, 8px from the text, a 16px icon in a 24px button with a 44px touch area. Its name, and its native tooltip, is "Copy address: " plus the address, and it takes the color around it. Once copied, the icon turns to a `Check` and a small message in `popover` tokens appears above it for two seconds, Address copied to the clipboard. The message always stays 8px inside the window: it slides sideways near an edge, wraps if the window is too narrow, and moves below the icon when the sticky header would cover it; the message is the live region, so screen readers hear it too. When the browser refuses the Clipboard API it falls back to the copy command.
- **Closing block:** Become a design partner, then "Or write to `partners@rh45.ai`." as an underlined link with its copy icon, the reply time and who reads it, then `contact@rh45.ai`, also with its copy icon, for jobs, press and anything else.
- **Focus:** links and buttons take a 2px opaque outline in `ring`, which is white on the solid block.
- **In-page links:** the hero button, the header's section links, Contact and the wordmark scroll to their section without writing the anchor into the address, so a reload keeps the visitor where they are. The section takes focus without an outline, so Tab continues from it. An address shared with an anchor still opens at that section.
- **Skip link:** first in the page. On focus it appears as a full-width `secondary` band above the header, pushing it down instead of covering the wordmark.
- **404:** fills the viewport, with a label, title, line of text and Back to home beside a still version of the network drawing with one node missing, drawn dashed. The drawing hides at 900px and below. The header has the wordmark, the language link and Contact, without the section links, and the footer sits on the page `background`.
- **Footer:** the legal line, on the solid block on Home and behind a `border` rule in `muted-foreground` on the 404.

## Behavior

- **Language prompt:** a non-modal `<dialog>` in `popover` tokens with shadcn's menu shadow, at the bottom right (full width below 620px), in Spanish. It comes first inside `main`, after the header, and opens without taking keyboard focus; closing it from inside hands focus to `main`. It offers Ver en español and Seguir en inglés, plus a close button and Escape while focus is inside it. At 620px and below it is a single line (¿Prefiere español?, Ver en español and a close button), so it never covers the hero's button, and it closes, without remembering, once the visitor scrolls 200px. On wider screens it closes, also without remembering, when the footer reaches the bottom of the window. It appears on the English Home when the browser asks for Spanish or the time zone belongs to a Spanish-speaking country, and not once the visitor has picked a language there or in the header; the choice is kept in `localStorage`. A static site cannot read the visitor's country, and no geolocation service is called.
- **Titles:** the page's subject first and the brand last, after a middle dot: "Making the physical world intelligent · Rh45", "Page not found · Rh45".
- **Pages:** the Home in English at `/` and in Spanish at `/es/`, from one component and the texts in `src/i18n.ts`, and an English 404 with a link to the Spanish Home. Both Homes carry `hreflang` links, with English as `x-default`. Section ids stay in English in both.
- **Header:** a small script changes its color over the contact block. Above 640px, Contact lands with the block under the header, so the color changes on arrival. On the 404, Contact goes to the contact block on Home.
- **Indexing:** the 404 is `noindex` and has no canonical link.
- **Network drawing:** a small script animates it. Without JavaScript it stays still.
- **JavaScript:** no React runs in the browser. Everything but the two scripts above works without JavaScript.

## Share images

`public/og-en.png` and `public/og-es.png`, 1200×630, for link previews: the wordmark, the headline's two beats, the network drawing, and a footer rule with "Autonomous access for residential communities" and "Pereira, Colombia". They are rendered from HTML with the site's fonts; change them when the headline changes.

## Iconography

Lucide at 16px with a 1.5px stroke, in `foreground` or `muted-foreground`. Arrows on links are Lucide icons, not text characters.

## Logo

The site has no logo yet. The wordmark is "Rh45" in Source Sans 3 600, letter-spacing -0.02em. The favicons set "45" in white on black and are not a logo.
