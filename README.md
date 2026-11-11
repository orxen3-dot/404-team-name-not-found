<div align="center">

# 🌱 Organic Shop

### Naturally better.

**A collaborative team project: a responsive landing page for an organic food store.**

[GitHub Repository](https://github.com/orxen3-dot/404-team-name-not-found)

</div>

---

## 👥 About the Team Project

**Organic Shop** is a multi-section website concept for an organic food store, developed collaboratively by a team as part of the GoIT learning program.

The team created a landing page that introduces the brand's mission, highlights the benefits of organic products, showcases its assortment, and presents customer feedback, FAQs, and contact information.

The main focus of the project was teamwork in a shared codebase, building a consistent responsive interface, dividing development tasks, and integrating individual contributions into one website.

## ✨ Website Features

- **Responsive design** for mobile, tablet, and desktop screens.
- **Multi-section landing page** with hero, mission, benefits, product assortment, testimonials, FAQ, and contacts.
- **Reusable HTML partials** injected into the main page with Vite.
- **Mobile navigation menu** with open and close interactions.
- **Product assortment cards** with product descriptions and prices.
- **Customer feedback section** with ratings and customer information.
- **FAQ section** with common questions about products and services.
- **Contact form UI** with required fields and input validation attributes.
- **Responsive images** using `picture`, `srcset`, and lazy loading.
- **SVG icon system** using reusable SVG sprites.
- **Automated deployment** workflow through GitHub Actions and GitHub Pages.

## 🧰 Tech Stack

| Technology / Tool | Purpose |
| --- | --- |
| HTML5 | Semantic page structure and forms |
| CSS3 | Responsive layouts, styling, and transitions |
| JavaScript (ES Modules) | Mobile menu interaction and DOM handling |
| SVG | Scalable icons and logo assets |
| Vite | Development server and production build |
| vite-plugin-html-inject | Reusable HTML partials |
| PostCSS Sort Media Queries | Mobile-first media query ordering |
| Modern Normalize | Consistent browser defaults |
| Git & GitHub | Version control and team collaboration |
| GitHub Actions | Automated build and deployment |

## 📱 Responsive Layout

The website adapts its layout to different viewport sizes:

- **Mobile:** compact navigation and vertically arranged content.
- **Tablet:** adjusted spacing and section layouts.
- **Desktop:** expanded navigation and multi-column content sections.

Responsive images are provided with `srcset` and `picture` to serve suitable image sizes for different screens.

## 🗂️ Project Structure

```text
404-team-name-not-found/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── css/
│   │   ├── styles.css
│   │   └── ...section styles
│   ├── js/
│   │   └── menu.js
│   ├── partials/
│   │   ├── header.html
│   │   ├── hero.html
│   │   ├── mission.html
│   │   ├── benefits.html
│   │   ├── assorts.html
│   │   ├── feedbacks.html
│   │   ├── faq.html
│   │   ├── contacts.html
│   │   ├── footer.html
│   │   └── menu.html
│   ├── img/
│   ├── index.html
│   └── main.js
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/orxen3-dot/404-team-name-not-found.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 404-team-name-not-found
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your terminal.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the project for production |
| `npm run preview` | Previews the production build locally |

## 🤝 Collaboration & Team Workflow

This repository represents a shared team deliverable rather than an individual project.

The team worked with a common codebase and used Git and GitHub to manage changes and combine work across the website's sections. The project provided practical experience with collaborative development, coordinating page components, maintaining consistent styles, and integrating the complete interface.

## 🧠 Skills & Practices Demonstrated

- Building a responsive multi-section website from a design.
- Writing semantic HTML markup.
- Creating mobile-first layouts with CSS and media queries.
- Organizing styles into separate files by section.
- Reusing page sections through HTML partials.
- Working with responsive images and lazy loading.
- Using SVG sprites for interface icons.
- Adding JavaScript interactions to the mobile navigation.
- Configuring Vite plugins and the production build.
- Collaborating in a team and managing changes with Git.

## ⚙️ Project Scope

This repository contains a front-end website implementation. Product cards, contact details, and form elements represent the interface; a working shopping cart, payment flow, or backend form submission is not implemented in the reviewed source.

---

<div align="center">

**Created collaboratively by the GoIT project team.** 🌿

</div>
