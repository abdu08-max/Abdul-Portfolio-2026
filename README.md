# Abdul Muhaiman Basha — Personal Interactive Portfolio & Digital Resume

A cinematic, interactive personal portfolio and digital resume web application built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed with a luxury automotive and dark-editorial technology aesthetic for showcasing artificial intelligence, data science, software engineering, and creative media craft.

---

## 🌟 Visual & Architectural Direction

- **Dark Cinematic Aesthetic**: Built on a curated palette of near-black (`#0B0D10`), deep charcoal surfaces (`#12161C`, `#151A22`), crisp typography, and restrained electric blue accents (`#7AA2FF`).
- **Luxury Automotive & Editorial Inspiration**: High-contrast typography hierarchy (Inter, Outfit, JetBrains Mono), technical spec matrices, clean status badges, and subtle ambient glows without distracting clutter.
- **Data-Driven Architecture**: All biographical data, skills, projects, timeline milestones, and creative gallery items are managed through modular files in `src/data/`.
- **High-Contrast Print-Ready Resume**: Includes dedicated print stylesheets (`@media print`) that automatically strip away headers, navigation bars, background gradients, and interactive controls to produce a clean resume document when using the browser's **Print to PDF** function.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18.0 or newer recommended; tested on v24.15)
- npm (v9.0 or newer; tested on 10.9)

### 1. Installation
In the project root directory, install dependencies:
```bash
npm install
```

### 2. Development Server
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173/
```

### 3. Production Build
Compile and bundle optimized assets for deployment (Vercel, Netlify, GitHub Pages, etc.):
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```text
abdul-virtual-id/
├── public/
│   ├── images/
│   │   ├── gearnest.jpg             # GearNest automotive project preview
│   │   ├── upi_detector.jpg         # UPI Fraud detection project preview
│   │   ├── atm_system.jpg           # ATM banking system project preview
│   │   ├── creative_automotive.jpg  # Automotive photography piece
│   │   └── creative_branding.jpg    # Graphic design & branding piece
│   └── resume.pdf                   # Downloadable resume PDF
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Fixed blur navigation with active section indicator & mobile drawer
│   │   ├── Hero.jsx                 # Full-screen cinematic title card with staggered text reveal
│   │   ├── About.jsx                # Editorial bio & 4 structured domain panels
│   │   ├── Skills.jsx               # Categorized skills matrix with stage filters
│   │   ├── Projects.jsx             # Project showcase cards with status filters
│   │   ├── ProjectModal.jsx         # Accessible modal (problem, approach, features, learnings)
│   │   ├── Timeline.jsx             # Vertical milestone timeline (education, involvement, experience)
│   │   ├── CreativeGallery.jsx      # Media gallery with accessible lightbox dialog
│   │   ├── Resume.jsx               # Digital CV with print dialog & PDF download integration
│   │   ├── Contact.jsx              # Contact section with copy-to-clipboard email feedback
│   │   ├── Footer.jsx               # Footer with tech stack credits
│   │   ├── BackToTop.jsx            # Smooth floating scroll-to-top button
│   │   ├── SocialIcons.jsx          # SVG icons for GitHub, LinkedIn, etc.
│   │   └── ThemeToggle.jsx          # Dark / Light mode toggle
│   │
│   ├── data/
│   │   ├── profile.js               # Central profile, contact info, bio, and social links
│   │   ├── skills.js                # Technical proficiencies and learning stages
│   │   ├── projects.js              # Project details, features, problem statements, and links
│   │   ├── timeline.js              # Education, projects, involvement, and milestones
│   │   └── gallery.js               # Photography, design, videography, and video editing items
│   │
│   ├── hooks/
│   │   └── useActiveSection.js      # Intersection and scroll listener for navigation tracking
│   │
│   ├── App.jsx                      # Main application layout
│   ├── index.css                    # Design tokens, Tailwind v4 import, and print stylesheets
│   └── main.jsx                     # React entrypoint
│
├── index.html                       # SEO meta tags, Google Fonts (Inter, Outfit, JetBrains Mono)
├── package.json                     # Scripts & dependencies
└── vite.config.js                   # Vite configuration with @tailwindcss/vite
```

---

## ✏️ How to Customize Your Content

All content is designed to be easily editable without touching JSX structure:

### 1. Editing Profile & Contact Information (`src/data/profile.js`)
- Update your email address, LinkedIn URL, GitHub URL, and personal statements.
- To configure your real resume PDF:
  1. Drop your PDF into `public/resume.pdf`.
  2. Set `hasCustomPdf: true` in `src/data/profile.js`.

### 2. Updating Skills (`src/data/skills.js`)
- Add or modify skills in the `skillsData` array.
- Update the `status` property to `'Comfortable using'`, `'Currently learning'`, or `'Exploring'` to transparently communicate your current progress.

### 3. Adding or Updating Projects (`src/data/projects.js`)
- Each project object accepts:
  - `title`, `subtitle`, `description`, `status` (`'Completed'`, `'In Progress'`, or `'Concept'`)
  - `technologies`: Array of tech tags
  - `image`: Path to project preview in `public/images/`
  - `details`: Rich breakdown of the problem, architectural approach, key features, and lessons learned.
  - `links`: GitHub repository and live preview URLs.

### 4. Updating Timeline & Experience (`src/data/timeline.js`)
- Add internship roles, certifications, or campus leadership positions in `timelineData`.
- Mark placeholders with `isPlaceholder: true` if details are still in progress.

### 5. Managing Creative Works (`src/data/gallery.js`)
- Add new photos, video editing reels, or graphic design pieces to `galleryItems`.
- Set the category to `'Photography'`, `'Graphic Design'`, `'Videography'`, or `'Video Editing'`.

---

## 🖨️ Printing & Exporting Your Resume

- Click **Print Resume** in the interactive resume section.
- In the print preview window:
  - Destination: Select **Save as PDF** or choose your printer.
  - Margins: Default or Minimum.
  - Headers & Footers: Uncheck.
- The print CSS ensures the navigation, buttons, and dark background are hidden, leaving an ATS-friendly, clean, black-and-white resume layout.

---

## ♿ Accessibility & Performance Features

- **Keyboard Navigation**: Interactive elements have visible focus rings (`focus:ring-[#7AA2FF]`). Modals and lightboxes can be dismissed using the `Escape` key.
- **Scroll Lock**: Body scroll is automatically locked while project modals or media lightboxes are open.
- **Reduced Motion Support**: Motion animations respect `prefers-reduced-motion` settings.
- **Responsive Layout**: Fluid column grids tested across mobile (375px), tablet (768px), and desktop (1440px+).
