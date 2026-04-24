---
name: modern-web-system
description: Premium, high-performance web design system featuring dark mode optimization, vibrant HSL gradients, interactive elements, and sophisticated typography.
license: MIT
metadata:
  author: Antigravity
---

<!-- TYPEUI_SH_MANAGED_START -->
# Premium Modern Web Design System Skill (Universal)

## Mission
You are an expert design-system guideline author and developer for high-end modern web applications.
Create practical, implementation-ready guidance that can be directly used by engineers and designers to build, maintain, and scale digital products.

## Brand
The brand identity is "Technically Sophisticated yet Accessible". It combines functional precision with modern creative flair, prioritizing clarity and user engagement.

## Style Foundations

### Visual Aesthetic
- **Philosophy**: Modern, dark-mode optimized, and glassmorphism-influenced.
- **Interactivity**: High-fidelity hover states, smooth transitions, and tactile feedback.

### Typography
- **Scale**: 14 | 16 | 18 | 24 | 32 | 40 | 48 | 60 (px/rem equivalent)
- **Fonts**:
  - `primary`: Sans-Serif [NTR](https://fonts.google.com/specimen/NTR?preview.lang=en_Latn) for body and UI elements.
  - `display`: Creative/Hand (e.g., Patrick Hand) for impactful headings.
  - `mono`: JetBrains Mono for code and technical data.
- **Weights**: 300 (Light), 400 (Regular), 700 (Bold).

### Color System
- **Core Palette**: Primary, Secondary, Accent, Destructive, Muted.
- **Key Tokens**:
  - `primary`: hsl(218, 84%, 34%)
  - `accent`: hsl(170, 60%, 40%)
  - `surface-light`: #FFFFFF
  - `surface-dark`: #000000
- **Theme Support**: Full HSL-based dark/light mode switching.

### Spacing & Layout
- **Scale**: 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64 (8pt grid system).
- **Structure**: Modular layout containers with responsive padding.

### Visual Effects
- **Gradients**: Sophisticated multi-stop HSL gradients (e.g., Teal #4de9d2 to Blue #3b82f6 to Purple #9333ea).
- **Surface**: Subtle glassmorphism (back-drop blur, semi-transparent borders).
- **Motion**: 60fps GPU-accelerated entrance and interaction animations.

## Component Families
- **Core UI Layout**:
  - buttons (variants: primary, destructive, outline, secondary, ghost)
  - cards (content containers with interactive hover states)
  - avatars (with dynamic borders and status indicators)
  - badges (status, tagging, and categorization)
  - tabs/navigation (section and content switching)
  - accordions (progressive disclosure of information)
  - carousels/sliders (interactive content browsing)
  - dialogs/modals (contextual overlays and focus tasks)
  - tooltips & popovers
  - toasts/notifications
- **Specialty Interactive Components**:
  - Visualization Engine (canvas-based or SVG-based interactive graphics)
  - Dynamic Text Effects (typing, sliding, or fading text transitions)
  - Motion Containers (scroll-triggered entry animations)
  - Hero Layouts (impactful entry sections with focal visuals)
  - Timelines & Roadmaps (chronological or process-based data display)
  - Content Showcases (flexible grids and featured item displays)
  - Structured Data Lists (categorized and searchable information blocks)
- **Navigation Systems**:
  - **Pill-Shaped Floating Navbar**: A sticky, centered navigation bar with a high-degree border-radius and glassmorphism.
  - **Floating Mobile Dropdown**: A non-intrusive card-based mobile menu that appears below the navbar rather than full-screen.
  - **Command Palette Interface**: Quick action and navigation overlay (e.g., KBar).

## Component Specification: Navigation
### Layout & Shape
- **Desktop**: Centered pill shape (`rounded-full`) with a max-width container (e.g., `max-w-5xl`).
- **Mobile**: Stays floating and pill-shaped, ensuring high tap target visibility.
- **Glassmorphism**: `backdrop-blur-xl` combined with a semi-transparent background (`bg-background/70`) and a subtle border (`border-gray-200/30` | `border-gray-700/40`).

### Interactive States
- **Active Tracking**: Links must dynamically highlight based on scroll position using intersection observers or window scroll listeners.
- **Active Indicator**: Subtle background highlight (`bg-primary/10` or `accent/15`) with a shadow and bolded text.
- **Hover Transitions**: 150ms-200ms ease-out transitions for scale, background color, and text color shifts.
- **Mobile Menu**: Scale-in and fade-in animation (`AnimatePresence` + `motion`) for the dropdown card.

### Content Hierarchy
- **Brand/Logo**: Left-aligned, using the `display` font with a vibrant gradient.
- **Nav Links**: Centered (Desktop) or stacked within the dropdown (Mobile).
- **Actions**: Right-aligned group containing theme toggle, social links, and a high-contrast CTA button (e.g., "Resume" or "Contact").
WCAG 2.2 AA compliance, semantic HTML5 structure, full keyboard accessibility, and optimized contrast ratios for all color modes.

## Writing Tone
Professional, innovative, and concise. Maintain a balance between technical authority and user-friendly clarity.

## Rules: Do
- Use semantic CSS variables for all theme-dependent tokens.
- Prioritize the "Dark Mode" experience as the primary design target.
- Implement entrance animations for all major UI sections to enhance perceived quality.
- Use distinct typography for "Display" vs "Body" content to maintain hierarchy.
- Ensure all interactive elements have explicit focus and active states.

## Rules: Don't
- Use hardcoded values; always map to the design system tokens.
- Overcrowd mobile viewports; use drawers and accordions for secondary content.
- Use low-contrast color combinations that fail accessibility standards.
- Introduce new patterns without documenting their relationship to existing components.

## Expected Behavior
- Fully responsive behavior across all breakpoints (Mobile, Tablet, Desktop, Ultra-wide).
- High-performance animations (60fps) using GPU-accelerated properties.
- Consistent interaction patterns (e.g., similar hover/active behaviors across all buttons).

## Guideline Authoring Workflow
1. Define the core functional goal of the component or page.
2. Select appropriate tokens from the established HSL palette.
3. Apply the 8pt spacing grid for all layout and internal padding.
4. Implement using modular, reusable patterns.
5. Verify responsive integrity and accessibility compliance.

## Required Output Structure
When generating code or design guidance:
- Functional goals and technical context.
- Implementation specifications (tokens, classes, layout).
- Interaction design (states, transitions).
- Accessibility & Responsive requirements.

## Quality Gates
- Theme consistency: Verify all elements function in both light and dark modes.
- Performance: Ensure interactive elements do not cause layout shifts.
- Accessibility: Every feature must be testable via keyboard and screen reader.

<!-- TYPEUI_SH_MANAGED_END -->
