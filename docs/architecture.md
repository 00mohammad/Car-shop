# Project Architecture and Baseline Report

## 1. Project Overview

Car-Shop (Elecar) is a responsive electric vehicle landing page originally built with HTML, CSS, and vanilla JavaScript.

The project is being refactored to improve maintainability, code organization, accessibility, and readiness for a potential future migration to React.

The current application remains a vanilla JavaScript project. React migration is outside the scope of the current refactoring phase.

### Original Project Structure

The original implementation used a simpler structure with CSS and JavaScript concentrated in a small number of files.

```text
Car-shop/
├── index.html
├── README.md
├── .gitignore
├── DEMO.md
└── assets/
    ├── css/
    │   ├── Style.css
    │   └── Media.css
    ├── img/
    ├── js/
    │   └── APP.js
    ├── svg/
    └── Design/
```

This represents the original structure described in the project baseline, not the current directory structure.

### Technologies

- HTML5
- CSS3, including Flexbox, Grid, and media queries
- Vanilla JavaScript and ES modules
- Vite for local development and production builds
- Swiper for slider functionality
- Google Fonts
- Local image and SVG assets
- Git and GitHub
- GitHub Pages for hosting

## 2. Existing Features

The project includes the following page sections and functionality:

- Responsive header and navigation
- Hero section with vehicle imagery and statistics
- About section
- Popular vehicle cards
- Featured vehicles grid
- Special offers and subscription section
- Footer with navigation and social media links
- Responsive layouts for different screen sizes
- Interactive navigation menu

Individual features should be tested during refactoring to confirm that their original behavior is preserved.

## 3. Identified Architectural Issues

The original implementation presented several opportunities for improvement:

- CSS responsibilities were concentrated in two large files.
- JavaScript functionality was maintained in a single file.
- File organization and naming conventions needed greater consistency.
- Accessibility and interaction handling required further review.
- Separation of responsibilities could be improved to simplify maintenance.
- Asset references and deployment paths required consistent handling.

These points describe the original refactoring objectives; they do not imply that every issue remains unresolved in the current implementation.

## 4. Refactoring Objectives

The refactoring aims to:

1. Establish a clear and maintainable directory structure.
2. Separate CSS by responsibility.
3. Divide JavaScript functionality into focused modules.
4. Update HTML references and asset paths consistently.
5. Preserve the original Elecar visual identity and existing functionality.
6. Improve accessibility and maintainability.
7. Document architectural decisions.
8. Outline a potential future React migration strategy.
9. Verify local development and production builds.

## 5. Current Project Architecture

The current project uses the following structure:

```text
Car-shop/
├── assets/
│   ├── img/
│   ├── svg/
│   └── Design/
├── docs/
├── public/
│   └── assets/
│       └── js/
│           └── vendor/
│               └── swiper-bundle.min.js
├── scripts/
│   ├── main.js
│   └── modules/
│       └── navigation.js
├── styles/
│   ├── base/
│   │   ├── global.css
│   │   ├── reset.css
│   │   ├── typography.css
│   │   └── variables.css
│   ├── components/
│   │   ├── buttons.css
│   │   └── cards.css
│   ├── layout/
│   │   ├── footer.css
│   │   └── header.css
│   ├── sections/
│   │   ├── about.css
│   │   ├── featured.css
│   │   ├── hero.css
│   │   ├── offers.css
│   │   └── popular.css
│   ├── main.css
│   └── responsive.css
├── .gitignore
├── DEMO.md
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.mjs
```

> **Note:** This tree reflects the project structure identified during the current refactoring. Confirm the contents of `assets/` and `docs/` in the working directory before documenting additional nested files.

### 5.1 CSS Organization

The CSS is separated by responsibility:

- `base/` — Reset rules, global styles, design variables, and typography.
- `components/` — Reusable UI styles, including buttons and cards.
- `layout/` — Shared page layout elements, including the header and footer.
- `sections/` — Styles for individual page sections.
- `main.css` — Main stylesheet entry point.
- `responsive.css` — Responsive rules for different viewport sizes.

The purpose of this structure is to make styles easier to locate, maintain, and update without changing the visual design unnecessarily.

### 5.2 JavaScript Organization

The JavaScript is organized around an application entry point and focused modules:

- `scripts/main.js` — Main JavaScript entry point.
- `scripts/modules/navigation.js` — Navigation menu functionality.

Additional modules should be introduced only when the corresponding functionality benefits from separation.

### 5.3 Static and Vendor Assets

- `assets/` contains the project's visual resources.
- `public/assets/js/vendor/swiper-bundle.min.js` contains the Swiper vendor script.

Asset paths must remain consistent across local development and production deployment.

### 5.4 Build Configuration

The project uses Vite for local development and production builds.

The configuration file is:

```text
vite.config.mjs
```

The `base` option must match the deployment path. For the repository-based GitHub Pages URL, the expected setting is:

```js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Car-shop/",
});
```

## 6. Legacy-to-Current File Mapping

| Original File | Current Destination |
|---|---|
| `assets/css/Style.css` | `styles/main.css` and responsibility-based CSS files |
| `assets/css/Media.css` | `styles/responsive.css` |
| `assets/js/APP.js` | `scripts/main.js` and focused modules |
| `index.html` | Remains in the project root |

This mapping describes the intended refactoring relationship. It does not establish that every line of the original files has been migrated or that the new files are behaviorally identical.

Before removing or changing legacy files, review their contents and verify that all required styles, interactions, and asset references have been migrated.

## 7. Implementation Plan

### Phase 1: Audit and Stabilization

- Inspect the existing files and dependencies.
- Record current behavior and verify navigation and interactive features.
- Identify asset paths and deployment requirements.
- Confirm that the development server and production build work.

### Phase 2: CSS Refactoring

- Separate base styles, layouts, sections, and reusable components.
- Consolidate duplicate rules where appropriate.
- Preserve the original layout, typography, colors, and responsive behavior.
- Verify that stylesheet imports and cascade order remain correct.

### Phase 3: JavaScript Modularization

- Use `scripts/main.js` as the application entry point.
- Keep navigation behavior in `scripts/modules/navigation.js`.
- Separate additional functionality into focused modules when necessary.
- Preserve existing interactions and avoid duplicate event listeners.
- Verify script loading and initialization order.

### Phase 4: Integration and Testing

- Update HTML stylesheet references and JavaScript imports.
- Test navigation and responsive layouts.
- Verify vehicle cards, sliders, and interactive elements.
- Check browser console errors and failed network requests.
- Run the production build.
- Verify that the deployed site uses the correct asset paths.

### Phase 5: Documentation

- Update the project README.
- Document the final directory structure and architectural decisions.
- Maintain a separate React migration roadmap.
- Keep documentation consistent with the actual implementation.

## 8. React Migration Readiness

The project will remain an HTML, CSS, and vanilla JavaScript application during this refactoring.

The current architecture is intended to make a future React migration easier by encouraging separation of concerns, reusable styling, and isolated interactive functionality.

A future migration may introduce:

- React components for shared interface elements
- Component-based page sections
- Reusable, data-driven vehicle cards
- React state for interactive features
- A suitable build and routing strategy, if required

The existing HTML, CSS, and JavaScript should first be stable and well understood. React should be introduced as a separate, planned phase rather than as part of the current structural refactoring.

## 9. Quality Assurance Checklist

### Structure and Assets

- [ ] All required original assets are present.
- [ ] Image and SVG paths resolve correctly.
- [ ] Vendor scripts load without errors.
- [ ] Stylesheets are imported in the intended order.
- [ ] The documented file structure matches the actual repository.

### Functionality

- [ ] Navigation works on desktop and mobile.
- [ ] All page sections render correctly.
- [ ] Vehicle cards and sliders behave as expected.
- [ ] Interactive controls respond correctly.
- [ ] No duplicate event listeners have been introduced.
- [ ] Browser console errors have been reviewed.

### Responsive Design and Accessibility

- [ ] Layouts are checked at mobile, tablet, and desktop widths.
- [ ] Navigation can be operated using a keyboard.
- [ ] Interactive elements have appropriate accessible names.
- [ ] Semantic HTML is used where appropriate.
- [ ] Text and interface elements remain readable at different viewport sizes.

### Build and Deployment

- [ ] `npm install` completes successfully.
- [ ] `npm run dev` starts the development server.
- [ ] `npm run build` completes without errors.
- [ ] The generated production files are present in `dist/`.
- [ ] GitHub Pages uses a deployment workflow that publishes the production build.
- [ ] The live site loads its CSS, JavaScript, images, and vendor assets correctly.

## 10. Current Status

This document describes the project's original baseline, current intended architecture, and refactoring objectives.

The presence of a file or directory in the architecture does not, by itself, prove that its implementation is complete or tested. Checklist items should be marked complete only after the corresponding behavior has been verified.

The project remains focused on improving the maintainability and reliability of the existing vanilla JavaScript implementation while preserving the original Elecar design.