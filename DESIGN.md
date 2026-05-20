---
version: alpha
name: modern-web-system
description: Premium, high-performance web design system featuring dark mode optimization, vibrant HSL gradients, interactive elements, and sophisticated typography.
colors:
  primary: "#0e43a0"
  accent: "#29a38f"
  surface-light: "#ffffff"
  surface-dark: "#000000"
  teal: "#4de9d2"
  blue: "#3b82f6"
  purple: "#9333ea"
typography:
  display-lg:
    fontFamily: Patrick Hand
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.1
  display-md:
    fontFamily: Patrick Hand
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.2
  display-sm:
    fontFamily: Patrick Hand
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
  h1:
    fontFamily: Patrick Hand
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
  h2:
    fontFamily: Patrick Hand
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
  body-lg:
    fontFamily: NTR
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: NTR
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: NTR
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.5
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  "2xl": 32px
  "3xl": 48px
  "4xl": 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface-light}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface-dark}"
    rounded: "{rounded.full}"
  navbar:
    backgroundColor: "#000000"
    textColor: "{colors.surface-light}"
    rounded: "{rounded.full}"
---

## Overview

This design system defines a "Technically Sophisticated yet Accessible" brand identity for modern, high-end web applications. It combines functional precision with modern creative flair, prioritizing clarity, user engagement, and visual excellence.

### Brand & Personality
- **Mission**: Author and implement premium digital products that are implementation-ready, highly interactive, and visually stunning.
- **Tone**: Professional, innovative, and concise, balancing technical authority with user-friendly clarity.
- **Aesthetic Philosophy**: Optimized for dark mode, influenced by glassmorphism, featuring high-fidelity hover states, smooth transitions, and tactile feedback.
- **Workflow & Quality Gates**:
  1. Define core functional goals and technical context.
  2. Select HSL-based tokens optimized for responsive layouts and 8pt grids.
  3. Ensure WCAG 2.2 AA accessibility, full keyboard navigation, and high-performance 60fps animations.
  4. Verify theme consistency across both light and dark modes without layout shifts.

## Colors

The color system is rooted in deep HSL-mapped tones and vibrant gradients, with primary emphasis on dark mode surfaces.

- **Primary (#0e43a0):** A deep blue used for primary branding and solid UI structures.
- **Accent (#29a38f):** A vibrant teal supporting interaction states and highlights.
- **Surface Light (#ffffff):** A crisp background color for light mode surfaces.
- **Surface Dark (#000000):** A solid dark background establishing the base for dark mode interfaces.
- **Teal (#4de9d2), Blue (#3b82f6), Purple (#9333ea):** Vibrant colors used together to form sophisticated, multi-stop linear gradients.

## Typography

Typography creates hierarchy and stylistic distinction through a combination of creative display fonts and highly legible body sans.

- **Display Fonts (Patrick Hand):** Used for large, impactful headings to project a modern creative personality.
- **Primary Body Font (NTR):** A sans-serif typeface used for paragraphs and functional user interfaces.
- **Monospace Font (JetBrains Mono):** For code blocks, technical readouts, and tabular data.
- **Font Weights**: Supported in 300 (Light), 400 (Regular), and 700 (Bold).

## Layout

A robust grid and spacing scale ensures consistent alignment and modular flexibility.

- **Spacing Scale (8pt Grid)**: Scaled from 4px to 64px.
  - `xs (4px)`: Micro spacing, inline items.
  - `sm (8px)`: Padding between adjacent inputs or label-input connections.
  - `md (12px)`: Tight spacing for nested card elements.
  - `lg (16px)`: Standard component spacing and padding.
  - `xl (24px)`: Medium container padding.
  - `2xl (32px)`: Section layout padding.
  - `3xl (48px)`: Large layout separations.
  - `4xl (64px)`: Hero and section margins.

## Elevation & Depth

Interactive depth is established through micro-animations, subtle background blurs, and translucent layering.

- **Glassmorphism**: Combines heavy background blurs (`backdrop-blur-xl`), semi-transparent background fills (e.g., `bg-background/70`), and thin, low-contrast borders (`border-white/10` or `border-black/5`).
- **Motion**: GPU-accelerated entrance and interaction transitions targeting 60fps execution. Ease-out transitions lasting between 150ms and 200ms apply to scale, background color, and text color properties.

## Shapes

Shapes define the structural boundaries of the UI, supporting clean contours and smooth rounded corners.

- **Rounded Scale**:
  - `sm (4px)`: Subtly rounded corners for inputs, checkboxes, and tiny badges.
  - `md (8px)`: Medium rounded corners for buttons and inline dropdowns.
  - `lg (16px)`: Rounded corners for main content cards and dialog overlays.
  - `full (9999px)`: Used to create circular buttons, pill-shaped badges, and floating navigation menus.

## Components

Here are the functional specifications for component layout, interaction states, and composition.

### Component Families
- **Core UI**: Buttons (primary, outline, secondary, ghost, destructive), Cards (with hover lift), Avatars, Badges, Tabs, Accordions, Carousels, Dialogs/Modals, Tooltips, Toasts.
- **Specialty Elements**: Canvas/SVG Visualization Engines, Dynamic Text Effects, Motion Containers, Hero Layouts, Timelines, Content Showcases.

### Component Specification: Navigation (Navbar)
- **Desktop Layout**: Centered pill shape (`rounded-full`) with a max-width container (e.g., `max-w-5xl`).
- **Mobile Layout**: Floating and pill-shaped menu to maintain high tap target visibility.
- **Aesthetic**: Translucent glassmorphism using `backdrop-blur-xl`, semi-transparent backgrounds, and thin borders.
- **Brand/Logo Placement**: Left-aligned, using the Display typography style with a multi-stop HSL gradient.
- **Active Navigation States**: Dynamically highlighted via Intersection Observer. Highlights use a subtle background fill (`bg-primary/10` or `accent/15`), a soft shadow, and bold text.
- **Transitions**: 150ms-200ms ease-out transitions for interactive elements. Smooth scale-in and fade-in animations for the mobile dropdown card.

## Do's and Don'ts

### Do
- Use semantic CSS variables derived from design system tokens.
- Target the Dark Mode experience as the primary aesthetic layer.
- Enforce keyboard navigability and WCAG 2.2 AA contrast standards.
- Add hardware-accelerated entrance animations to major page sections.
- Maintain separate type scales for Display headings versus readable Body sections.

### Don't
- Hardcode spacing, color, or rounded values directly inside components.
- Crowd mobile viewports; use drawers and responsive disclosure patterns instead.
- Use color pairings that fail accessibility contrast checkers.
- Inject raw styles or components without specifying their relationship to the central system tokens.
