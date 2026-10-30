# React and Vite Migration Plan

## Objective

The current project is built with plain HTML, CSS, and JavaScript. The purpose of this document is to prepare the project for a gradual and safe migration to React and Vite in Phase 2, without changing the technology stack at this stage.

## Guiding Principles

- Preserve the Elecar visual identity.
- Separate responsibilities based on project domains and sections.
- Reduce dependency on deeply nested markup and inline styling.
- Prepare data structures and code components for future conversion into reusable components.

## 1. Preparing the Current Structure

### What Should Be Done

- Divide CSS files into logical modules.
- Convert JavaScript into independent modules.
- Keep the main page sections, such as Hero, About, Popular, Featured, and Offers, clearly separated.
- Move class and section naming conventions away from repetitive structural names toward more meaningful, semantic names.

### What Should Not Be Done

- Do not install React or Vite at this stage.
- Do not convert HTML files into JSX.
- Do not introduce unnecessary abstractions.

## 2. Proposed Future Structure

```text
Car-shop/
├── index.html
├── styles/
│   ├── base/
│   ├── components/
│   ├── layout/
│   ├── sections/
│   └── responsive.css
├── scripts/
│   ├── main.js
│   └── modules/
├── docs/
│   ├── architecture.md
│   └── react-migration-plan.md
└── assets/
```

## 3. React Migration Roadmap

### Stage 1: Component Extraction

- `Header`
- `Hero`
- `About`
- `PopularCars`
- `FeaturedCars`
- `OfferSection`
- `Footer`

### Stage 2: Converting Data into Arrays

All vehicle information, brands, and links should be converted into data arrays to avoid repetitive markup in JSX.

### Stage 3: Replacing the Legacy CSS Approach

- Existing CSS should be migrated to CSS Modules, styled-components, or vanilla CSS in React.
- Class naming conventions should become consistent and professional.

### Stage 4: Migrating Interactions

- Mobile navigation menu
- Focus management
- Click interactions and show/hide functionality

### Stage 5: Configuring Vite and Development Tools

- Set up the project using Vite.
- Add ESLint and Prettier.
- Configure static file paths and public assets.

## 4. Pre-Migration Checklist

- [ ] CSS is organized by page sections and components.
- [ ] JavaScript follows a modular architecture.
- [ ] Naming conventions follow a consistent standard.
- [ ] The original visual identity and color palette are preserved.
- [ ] Images and SVG assets are centrally organized.
- [ ] Project documentation is up to date.

## 5. Conclusion

In Phase 1, the focus is on preparing the architecture and eliminating technical inefficiencies. In Phase 2, React and Vite can be introduced to rebuild the existing design with a better architecture, cleaner code, and easier maintenance.
