---
version: alpha
name: KwikFlow Velocity System
description: A fast, precise, high-contrast design system for the KwikFlow Shopify automation app.
colors:
  primary: "#FFD400"
  primary-hover: "#E8C100"
  primary-pressed: "#CCAA00"
  primary-soft: "#FFF7CC"
  on-primary: "#0A0A0A"
  secondary: "#111111"
  secondary-hover: "#242424"
  tertiary: "#5C6670"
  neutral-0: "#FFFFFF"
  neutral-50: "#FAFAF8"
  neutral-100: "#F4F4F0"
  neutral-200: "#E7E7E1"
  neutral-300: "#D1D1CA"
  neutral-500: "#73736C"
  neutral-700: "#3C3C38"
  neutral-900: "#161614"
  surface: "#FFFFFF"
  surface-subtle: "#FAFAF8"
  surface-raised: "#FFFFFF"
  surface-inverse: "#0A0A0A"
  on-surface: "#161614"
  on-surface-muted: "#5F5F58"
  on-surface-inverse: "#FFFFFF"
  border: "#E2E2DC"
  border-strong: "#B8B8B0"
  focus: "#8A7200"
  success: "#087A45"
  success-soft: "#E5F6EE"
  warning: "#7A5100"
  warning-soft: "#FFF3D6"
  error: "#C62828"
  error-soft: "#FDECEC"
  info: "#1769AA"
  info-soft: "#EAF3FB"
  overlay: "rgba(10, 10, 10, 0.56)"
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 56px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  display-md:
    fontFamily: Manrope
    fontSize: 44px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: 750
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0em"
  label-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.005em"
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0em"
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.015em"
  data-md:
    fontFamily: Roboto Mono
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  none: 0px
  0-5: 2px
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  20: 80px
  24: 96px
  page-mobile: 16px
  page-tablet: 24px
  page-desktop: 32px
  content-max: 1200px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
    height: 44px
  button-tertiary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
    height: 44px
  button-disabled:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.neutral-700}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px 14px
    height: 44px
  card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 24px
  chip:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 10px
    height: 28px
  chip-active:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.on-primary}"
  status-success:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.success}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 10px
  status-warning:
    backgroundColor: "{colors.warning-soft}"
    textColor: "{colors.warning}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 10px
  status-error:
    backgroundColor: "{colors.error-soft}"
    textColor: "{colors.error}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 10px
  navigation-item-active:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
    height: 40px
  modal:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# KwikFlow Design System

## Overview

KwikFlow is a Shopify automation product built around one promise: important work should move quickly, clearly, and reliably. The identity combines a bold capital **K**, an integrated lightning flash, and two compact speed streaks. It should feel fast without feeling reckless, energetic without becoming playful, and modern without looking like a generic AI product.

The product experience is **precise, confident, minimal, and operational**. Interfaces should make status, next actions, and outcomes obvious at a glance. Use a restrained neutral canvas, strong black typography, and intentional flashes of Kwik Yellow. Density may be moderately high in dashboards, but grouping, spacing, and hierarchy must prevent clutter.

The system serves Shopify merchants and operational teams. Assume users may be busy, non-technical, and frequently working from laptops or mobile devices. Prioritize plain language, guided setup, visible system status, recoverable actions, and fast scanning.

### Brand principles

1. **Momentum:** Every screen should communicate progress and provide one obvious next step.
2. **Precision:** Alignments, spacing, numbers, and labels must feel deliberate.
3. **Clarity:** Prefer direct language and familiar interaction patterns over novelty.
4. **Confidence:** Use high contrast, stable layouts, and explicit feedback.
5. **Restraint:** Speed is expressed through the logo, typography, and focused accents—not decorative motion or visual noise.

### Logo system

The canonical mark is the approved **KwikFlow lightning-K**: one angular K fused with a lightning bolt and two left-facing speed streaks. Do not redraw, simplify, rotate, outline, stretch, or detach its parts.

- **Primary horizontal lockup:** Yellow logomark on the left with the black KwikFlow wordmark on the right. Use for websites, documents, onboarding, and wide headers.
- **Standalone logomark:** Yellow lightning-K on white. Use when the brand name is already evident.
- **App icon:** Yellow lightning-K centered on a black rounded square. Use for the Shopify listing, launcher icons, avatars, and compact navigation.
- **Stacked lockup:** Yellow logomark above the black wordmark. Use in centered or narrow compositions.
- **Reversed lockup:** Black mark and wordmark on Kwik Yellow. Use for high-impact brand panels and promotional moments.
- **Wordmark only:** Use sparingly when horizontal space is limited but the full name must remain visible.

Maintain clear space equal to at least **25% of the logomark height** on every side. At small sizes, remove the wordmark before reducing the symbol below legibility. Minimum digital sizes are 24px for the standalone mark, 32px for the app icon, and 120px wide for the horizontal lockup.

The custom wordmark is artwork, not a typeset font. Product UI must never imitate its aggressive italic cuts for paragraphs, controls, or data.

## Colors

The palette is intentionally dominated by clean neutrals. **Kwik Yellow (`primary`) is the single branded accent** and represents speed, activation, and forward movement.

- **Kwik Yellow (`#FFD400`):** Brand signature, primary actions, active progress, selected states, and controlled highlights.
- **Velocity Black (`#111111`):** Headlines, navigation, high-emphasis controls, and reversed brand artwork.
- **Canvas White (`#FFFFFF`):** Primary content surface.
- **Warm Neutral (`#FAFAF8`):** App background and low-emphasis sections; warmer than clinical blue-gray.
- **Slate (`#5C6670`):** Secondary information and utility content.

Yellow is not suitable for small text on white. Use black text on yellow, and use the darker `focus` token for focus rings where yellow would not provide sufficient contrast. Semantic success, warning, error, and information colors are functional and must not be replaced by brand yellow.

### Color application

- Default page ratio: approximately 70% light neutrals, 20% white surfaces, 10% yellow/black emphasis.
- Use one primary yellow action per local decision area.
- Use `primary-soft` for selected rows, onboarding tips, and low-emphasis brand callouts.
- Use `surface-inverse` for compact high-impact regions, never as the dominant background of dense admin screens.
- Text must achieve WCAG AA contrast: at least 4.5:1 for normal text and 3:1 for large text and meaningful UI graphics.
- Never rely on color alone to communicate status; pair it with a label, icon, or message.

## Typography

Typography pairs **Manrope** for expressive hierarchy with **Inter** for highly legible product UI. Both are open, modern families that work well across web and mobile. **Roboto Mono** is reserved for IDs, template variables, phone numbers, timestamps, code, and technical values.

- **Display and headlines:** Manrope, tightly tracked and heavy. Use sentence case. Headlines should feel decisive, not loud.
- **Body and controls:** Inter. Use regular weight for reading and semibold for actions or labels.
- **Operational data:** Roboto Mono only when fixed-width alignment improves comprehension.
- **Custom KwikFlow wordmark:** Use supplied artwork only. Never recreate it with Manrope, Inter, or italic text.

Limit most screens to three visible hierarchy levels. Avoid all-caps except for very short metadata labels. Do not italicize UI text to simulate speed. Use tabular numerals for analytics, billing, and message counts when supported.

On compact screens, reduce display sizes before wrapping into more than three lines. Body text must not fall below 14px, and essential controls should normally use 14–16px labels.

## Layout

KwikFlow uses a responsive **12-column desktop grid**, **8-column tablet grid**, and **4-column mobile grid**. The content region is fluid up to `content-max` (1200px). Keep primary tasks close to the reading path and avoid large decorative empty regions in operational screens.

The spacing system uses a 4px base with 8px as the primary rhythm. Use 4px for micro-spacing, 8–16px within controls, 16–24px between related elements, and 32–64px between major regions.

### Responsive behavior

- **Mobile, below 600px:** 16px page margins; single-column flow; full-width primary buttons when appropriate; bottom sheets instead of narrow dialogs.
- **Tablet, 600–1023px:** 24px margins; 8-column grid; collapse secondary navigation before compressing content.
- **Desktop, 1024px and above:** 32px margins; 12-column grid; maximum content width 1200px.
- **Wide desktop, above 1440px:** Keep content centered; do not stretch tables or paragraphs merely to fill space.

Cards should represent meaningful groups, not every piece of content. Prefer dividers, spacing, and headings inside a shared surface when items belong to one workflow. Keep critical action controls sticky only when the action remains relevant during scrolling.

Forms use a comfortable maximum width of 640px. Labels sit above fields. Group fields by user intent, not database structure. Place validation beside the affected field and preserve user input after errors.

Dashboards should lead with current system status and actionable exceptions, followed by performance summaries and history. Tables must support scanning: align text left, numbers right, keep headers visible for long lists, and provide a responsive card/list fallback rather than horizontal clipping on mobile.

## Elevation & Depth

KwikFlow is primarily flat. Hierarchy comes from tonal surfaces, borders, spacing, and typography. Shadows are subtle and functional, never cinematic.

- **Level 0:** Page background; no border or shadow.
- **Level 1:** Standard cards; 1px `border` and no shadow by default.
- **Level 2:** Dropdowns, sticky bars, and raised cards; `0 4px 16px rgba(17,17,17,0.08)`.
- **Level 3:** Dialogs and critical overlays; `0 16px 48px rgba(17,17,17,0.16)` over the `overlay` token.

Do not stack multiple shadowed surfaces. Hover elevation may increase slightly on clickable cards, but static informational cards must not imply interactivity. Yellow glow effects are prohibited.

## Shapes

The shape language balances the sharp energy of the lightning-K with calm, usable product surfaces. The logo owns the most angular geometry; interface containers remain controlled and slightly rounded.

- **4px (`xs`):** Dense table cells, tooltips, compact code blocks.
- **8px (`sm`):** Buttons, inputs, navigation items, chips with rectangular character.
- **12px (`md`):** Cards and standard panels.
- **16px (`lg`):** Dialogs, onboarding panels, and large modules.
- **24px (`xl`):** Marketing highlights used sparingly.
- **Full:** Avatars, status dots, compact badges, and true pills only.

Avoid bubbly interfaces. Do not use full pill shapes for every button. Icons should be simple, outlined or filled consistently within a view, and drawn on a 20px or 24px grid. Use lightning motifs only in brand moments—not as a repeated decorative background pattern.

## Components

### Buttons

- Primary buttons use Kwik Yellow with near-black text. They identify the main safe action in a section.
- Secondary buttons use Velocity Black with white text for strong alternative actions or dark contexts.
- Tertiary buttons are transparent and work for low-emphasis actions.
- Destructive actions use the error color and require clear wording; irreversible bulk actions require confirmation.
- Minimum target size is 44×44px. Show visible hover, pressed, disabled, loading, and keyboard-focus states.
- Loading buttons retain their width, replace the leading icon with progress, and use a stable action label where space allows.

### Inputs and forms

Inputs use white surfaces, 1px borders, 8px radius, persistent labels, and optional helper text. Focus uses a 2px `focus` ring with 2px offset. Errors use both an error border and a concise message. Placeholder text is an example, never a substitute for a label.

Checkboxes, radios, and switches use yellow for the active control with black internal marks. Toggles must have explicit adjacent labels. Dangerous or costly automation switches should explain their effect before activation.

### Cards and panels

Cards have 24px desktop padding and 16px mobile padding. A card may contain a title, short explanation, content, and one aligned action region. Avoid nested cards unless the child is an interactive sub-object with its own state.

Use black inverse panels or yellow feature panels only for onboarding milestones, upgrade prompts, and major success moments. Never place several competing accent cards in one viewport.

### Navigation

Desktop application navigation uses a left rail or clear top-level structure. The active destination uses a soft yellow fill plus weight change; do not depend on a thin yellow line alone. Mobile navigation should expose the most frequent destinations and place infrequent configuration under a menu.

Navigation labels remain short and concrete. Preserve location during asynchronous updates and avoid unexpected full-page redirects.

### Status, alerts, and feedback

Every automation must communicate one of these states clearly: draft, active, paused, needs attention, failed, or completed. Pair color with an icon and text label. Provide timestamp or last-run context when it helps the user trust the state.

- Success feedback confirms the completed outcome and disappears only if no follow-up is required.
- Warning feedback explains risk and offers a direct resolution.
- Error feedback states what failed, whether data was preserved, and the next safe action.
- Toasts are for lightweight confirmations; persistent or blocking problems use inline alerts or banners.

### Tables and analytics

Use Inter for labels and Roboto Mono for tightly aligned numeric values. Right-align amounts, percentages, and counts. Make sortable columns explicit and maintain the selected sort state. Use yellow only for a selected data point or key highlight; do not color entire charts yellow when semantic comparison is needed.

Empty states explain why the area is empty and offer one meaningful next action. Loading states preserve the eventual layout with restrained skeletons. Avoid infinite spinners without explanatory text for processes that may exceed several seconds.

### Modals and confirmations

Dialogs are reserved for focused decisions that cannot safely occur inline. Use a clear title, one short explanation, and a predictable action order. The primary action appears last in left-to-right layouts. Destructive confirmations name the object or consequence explicitly.

### Motion

Motion reinforces speed through responsiveness, not spectacle. Use 120–180ms transitions for hover and control feedback, and 180–240ms for panels or navigation. Prefer ease-out on entry and ease-in on exit. Do not animate the lightning-K continuously. Respect `prefers-reduced-motion` and replace movement with immediate state changes or opacity transitions.

## Do's and Don'ts

- **Do** use the approved lightning-K artwork consistently across every brand format.
- **Don't** redraw the K, separate the bolt, add extra streaks, or change its proportions.
- **Do** reserve Kwik Yellow for brand emphasis, active states, and primary actions.
- **Don't** use yellow for body text on white or for every interactive element.
- **Do** place black text on yellow and white text on black.
- **Don't** use white text on yellow for essential information.
- **Do** keep layouts precise, spacious, and easy to scan.
- **Don't** create dense clusters of unrelated cards or excessive dashboard widgets.
- **Do** make the next safe action visually obvious.
- **Don't** show multiple equal-weight primary calls to action in one decision area.
- **Do** use plain, direct product language such as “Activate automation” or “Reconnect account.”
- **Don't** use vague labels such as “Proceed,” “Do it,” or “Magic.”
- **Do** use semantic colors for success, warning, error, and information.
- **Don't** communicate meaning through color alone.
- **Do** preserve at least 44×44px interaction targets and visible keyboard focus.
- **Don't** remove focus indicators or rely solely on hover behavior.
- **Do** use sentence case and concise labels.
- **Don't** imitate the custom italic wordmark in interface text.
- **Do** keep animation short, purposeful, and reducible.
- **Don't** add looping lightning, glow, parallax, or gratuitous speed effects.
- **Do** validate every new component for WCAG AA contrast and responsive behavior.
- **Don't** ship a component that only works at one viewport or with ideal-length content.
