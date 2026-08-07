# Car-Shop / Elecar

Elecar is a responsive electric-car showcase built as a focused, static frontend portfolio project. It presents a hero vehicle, Porsche listings, featured cars, promotional content, brand marks, and a responsive navigation menu while preserving the supplied visual design.

## Features

- Responsive desktop, tablet, and mobile layouts
- Mobile navigation toggle with keyboard-accessible controls
- Hero, about, popular cars, featured cars, offers, brands, and footer sections
- Local Poppins and Exo font assets
- Local image and SVG assets with responsive variants

## Technologies

- Semantic HTML5
- CSS3 (Flexbox, Grid, media queries, and custom properties)
- Vanilla JavaScript

## Responsive design

The layout adapts across mobile, tablet, and desktop viewport sizes. Dedicated mobile image variants are retained for the hero, about, feature, and offer areas where the original design uses them.

## Live demo

[Open the Elecar demo](https://00mohammad.github.io/Car-shop/)

## Screenshots

![Desktop design](./assets/Design/Desktop%20x%201024%20-%20%20Responsive%20car%20website.png)
![Mobile design](./assets/Design/Movil%20x%2024%20-%20Responsive%20car%20website.png)

## Project structure

```text
.
├── index.html
├── assets/
│   ├── css/      # Main and responsive stylesheets
│   ├── font/     # Local Poppins and Exo fonts
│   ├── img/      # Raster and responsive image assets
│   ├── js/       # Navigation behavior
│   └── svg/      # Icons and brand artwork
├── DEMO.md
└── README.md
```

## Run locally

Because this is a static site, no dependency installation is required. From the project root, run:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in a browser.

## Repository

<https://github.com/00mohammad/Car-shop>
