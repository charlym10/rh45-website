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
  footer: { light: "#000000", dark: "#141414" }
  footer-foreground: { light: "#8C8C8C", dark: "#A3A3A3" }
typography:
  display: { fontFamily: "Inter", fontSize: "48px", lineHeight: "52px", fontWeight: 600, letterSpacing: "-0.02em" }
  display-second-beat: { fontFamily: "Inter", fontWeight: 400 }
  title: { fontFamily: "Inter", fontSize: "30px", lineHeight: "36px", fontWeight: 600, letterSpacing: "-0.01em" }
  heading: { fontFamily: "Inter", fontSize: "20px", lineHeight: "28px", fontWeight: 600 }
  lead: { fontFamily: "Inter", fontSize: "18px", lineHeight: "28px", fontWeight: 400 }
  body: { fontFamily: "Inter", fontSize: "16px", lineHeight: "24px", fontWeight: 400 }
  small: { fontFamily: "Inter", fontSize: "14px", lineHeight: "20px", fontWeight: 400 }
  label: { fontFamily: "Inter", fontSize: "12px", lineHeight: "16px", fontWeight: 500, letterSpacing: "0.025em" }
  data: { fontFamily: "JetBrains Mono", fontSize: "13px", lineHeight: "20px", fontWeight: 400 }
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

**Where the site differs from the artifact, on purpose.** It uses the media query instead of the `.dark` class, because it follows the system theme. `lead` 18/28 and the regular-weight second beat of a headline are its own. Status, Metric, EventRow, Chart, Input and AlertDialog are not used: Rh45 has no live data to show and the site has no forms.

## Principles

1. **The cycle is the spine.** Sense, reason, coordinate and act organize Home, instead of sitting in a row of tiles.
2. **Monochrome.** Color never carries meaning here. Hierarchy comes from size and weight.
3. **Rules, not shadows.** Cards have a `border` and no shadow. Separate with space, rules and tone. shadcn's own shadows stay on menus and dialogs.
4. **One solid block.** A full-width `primary` block is the counterweight of a page in the light theme: "What if…" on Home, the closing line on How we operate. In the dark theme it uses `secondary`, because a white band overpowers the page.
5. **Real content only.** Never show readings, metrics or logs Rh45 does not have.

## Voice

Short, declarative sentences. Lead with the fact, in the active voice. Sentence case for titles, except the company page labels above the `h1`, which CSS sets in uppercase. No exclamation marks, emoji or metaphors about magic or brains.

## Color

- Page: `background`. Cards: `card`, set apart by `border`. Bands: `secondary`. Solid block: `primary` with `primary-foreground`, or `secondary` with `foreground` in the dark theme.
- Text: `foreground`, secondary `muted-foreground`. Never text in `border`.
- Hover: `accent`, which equals `secondary`; `muted-foreground` on the primary button.
- The footer uses `footer` and `footer-foreground` in both themes.
- No literal colors. Translucency is a token with opacity, as in shadcn's focus rings at 50%.
- The theme follows `prefers-color-scheme`.

## Typography

Inter for text, from Google Fonts. JetBrains Mono only for numbering.

| Element | Style |
| --- | --- |
| `h1` | `display`, 36/40 below 620px; its `em` uses `display-second-beat` |
| `h2`, cycle step titles, closing statement | `title` |
| `h3`, card and principle headings | `heading` |
| Lead paragraphs, cycle step text | `lead` |
| Running text | `body`, measure near 68 characters |
| Card text, notes | `small` |
| Company page labels above the `h1` | `label`, uppercase |
| Cycle and About numbering | `data`, `muted-foreground`, tabular figures |

## Layout

A centered 1120px shell with `space-6` side margins. Sections have 96px of vertical padding, 48px below 620px. Statements are two columns, with the title on the left and the text on the right, and collapse at 860px. Card grids use `space-4` gaps and collapse at 620px or 720px.

The Home hero fills the viewport below the header, with its text vertically centered. Its circle is 550px wide, 120px past the right edge and 12% from the top, with a 1px border of `foreground` at 30% and two flat bands of 60px (`foreground` at 10%) and 120px (`foreground` at 5%).

## Components

All from shadcn/ui, themed by the tokens. Their files in `src/components/ui/` are not edited for color or radius.

- **Button:** `default` once per view, for Contact, with `sm` size and 36px high below 620px. `outline` with an `input` border and no shadow for Company and section actions. `ghost` `icon` with a 44px touch target and the Lucide `PanelLeft` icon for the mobile menu, at the right end of the header. `link` with an underline for Back to home and the footer email.
- **DropdownMenu:** Company on desktop.
- **Sheet and Collapsible:** the mobile menu below 620px, built like shadcn's Sidebar and using its `sidebar` tokens. It opens from the right, under an Rh45 group label, with Home and a collapsible Company item whose links sit behind a `sidebar-border` rule. Company starts open.
- **Dialog:** Contact. It holds the contact sentence and the email button.
- **Card:** the conflict tiles, operating principles and About groups, with `shadow-none` and `space-6` padding.
- **Badge:** `secondary`, for The status quo and The consequence.
- **Table:** Purpose, Mission and Vision, and Non-negotiables.
- **Tabs:** the four About groups. Every panel stays in the HTML.
- **Separator:** between the About introduction and its tabs.
- **Cycle rail:** the site's own. A sticky list on a 1px `foreground` line, whose node fills as its step reaches the middle of the viewport. Hidden below 720px, where the steps read as a list.
- **Footer:** on every page, a contact close above the legal line.

## Behavior

- **Pages:** each company page is its own URL with its own title. The old `#manifesto`, `#how-we-operate` and `#about` links redirect to them.
- **Menus and dialog:** Radix handles keyboard, focus and Escape.
- **JavaScript:** React runs in the browser only for the header and the About tabs. Without JavaScript, a plain list of company links appears under the header and the footer still offers the email.

## Iconography

Lucide at 16px with a 1.5px stroke, in `foreground` or `muted-foreground`. Arrows on links are Lucide icons, not text characters.

## Logo

The site has no logo yet. The wordmark is "Rh45" in Inter 600, letter-spacing -0.02em. The favicons set "45" in white on black and are not a logo.
