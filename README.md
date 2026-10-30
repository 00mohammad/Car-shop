# Car-Shop | Elecar

Car-Shop is an advanced landing page project designed to showcase electric vehicles. Its primary goal is to preserve the original Elecar visual identity while improving code structure, file organization, CSS and JavaScript maintainability, and preparing the project for a future migration to React and Vite.

## Design

🔗 **Original Figma Design**

[View the Original Figma Design](https://www.figma.com/design/MXqnlCWUwEngNeBlEXZy7p/Figma-Design-Responsive-car-website--Community-?t=ANHyHu8PXBvGjg6L-0)

## Features

- Responsive layout for desktop, tablet, and mobile devices
- Interactive mobile navigation menu
- Hero section featuring a vehicle and related statistics
- About, Popular, Featured, and Special Offers sections
- Brand showcase and project footer
- Google Fonts and locally stored SVG and image assets
- Architecture prepared for a future migration to React

## Technologies

- HTML5
- CSS3 with Flexbox, Grid, and media queries
- Modern, modular JavaScript
- Google Fonts
- GitHub Pages for deployment

## Project Structure

```text
Car-shop/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── img/
│   ├── svg/
│   ├── Design/
│   └── ...
├── styles/
│   ├── base/
│   ├── components/
│   ├── layout/
│   ├── sections/
│   ├── main.css
│   └── responsive.css
├── scripts/
│   ├── main.js
│   └── modules/
├── docs/
│   ├── architecture.md
│   └── react-migration-plan.md
├── DEMO.md
└── .git/
```

## Baseline Report

- The current project structure is prepared as a static website for showcasing an electric vehicle platform.
- The original CSS was maintained in two main files and needed to be divided into logical modules for better maintainability.
- The original JavaScript handled basic navigation and had not yet been organized into a modular architecture.
- The project was functionally sound at a basic level but required a more structured architecture and detailed documentation to support future development.

## Local Development

This is a static project and does not require dependency installation.

### 1. Clone the Repository

```bash
git clone https://github.com/00mohammad/Car-shop.git
```

### 2. Navigate to the Project Directory

```bash
cd Car-shop
```

### 3. Start a Local Server

```bash
python -m http.server 8000
```

### 4. Open in Your Browser

```text
http://localhost:8000/
```

## Technical Documentation

- [Architecture Documentation](./docs/architecture.md)
- [React Migration Plan](./docs/react-migration-plan.md)

## Live Demo

[View Live Demo](https://00mohammad.github.io)
