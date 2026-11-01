# Gulam Mohsin – QA Automation Engineer Portfolio

A premium, dark-themed portfolio website for **Gulam Mohsin**, a Computer Science Engineering graduate focused on QA automation, software quality engineering and test automation (JavaScript with Playwright, API testing, manual testing and SQL).

Built with **React 18, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide icons**. It is a static site, ready to deploy on **Vercel** from GitHub.

> ## ⚠️ Status of this source code
> This project was written without the ability to run `npm install`, a build or a browser, so **it has not been compiled, built or visually tested yet**. The first thing to do on your laptop is run `npm install` and `npm run build` (see below). If you see any error, it is a normal first-run fix. Then work through [`docs/QA_CHECKLIST.md`](docs/QA_CHECKLIST.md) before publishing.

---

## Honesty principles

This portfolio is deliberately truthful, so every claim can be explained in an interview:

- **No fake data.** No invented experience, certificates, credential IDs, email addresses or social links.
- **No skill percentages.** Skills use four honest labels: *Currently Learning*, *Basic Familiarity*, *Practical Project Experience* and *Demonstrated Proficiency*. Nothing is claimed as "Demonstrated Proficiency" yet.
- **All QA automation projects are marked "Planned".** They show intended scope only. No repository, report or test result is shown until it really exists.
- **Anything not configured is shown as such** (for example the contact form, resume download, GitHub link) instead of a broken or fake link.

---

## Quick start

Requirements: **Node.js 18.18 or newer** (Node 20 LTS recommended) and npm.

```bash
# 1. Install dependencies (also creates package-lock.json, commit it)
npm install

# 2. Start the development server
npm run dev
# open the address printed in the terminal (usually http://localhost:5173)

# 3. Type-check and create a production build
npm run build

# 4. Preview the production build locally
npm run preview
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Type-checks (`tsc -b`) then builds to `dist/` |
| `npm run preview` | Serves the built `dist/` folder locally |
| `npm run typecheck` | TypeScript check only |

---

## Personalise it (5 minutes)

All content lives in **`src/data/`**. You never need to edit the design to change content.

1. **`src/data/profile.ts`**: add your real `email`, `github`, `linkedin`, `photo`, and set `resume.available` to `true`.
2. Put your files in `public/`:
   - Resume PDF: `public/resume/Gulam_Mohsin_Resume.pdf`
   - Profile photo: `public/images/profile.jpg` (then set `photo: '/images/profile.jpg'`)
3. **Contact form**: see [Contact form setup](#contact-form-setup).
4. Review **`src/data/skills.ts`**: the levels are conservative starting points. Adjust them only to match what you can honestly demonstrate.

Full list of what to provide: [`docs/ASSETS_CHECKLIST.md`](docs/ASSETS_CHECKLIST.md).
How to add projects and certificates: [`docs/UPDATING.md`](docs/UPDATING.md).

---

## Contact form setup

The form posts JSON to any service that accepts it. The easiest option is [Formspree](https://formspree.io):

1. Create a free Formspree account and a new form.
2. Copy the form endpoint (looks like `https://formspree.io/f/<your-form-id>`).
3. Locally: copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT=<endpoint>`.
4. On Vercel: add `VITE_FORM_ENDPOINT` under *Project Settings → Environment Variables*, then redeploy.

Until `VITE_FORM_ENDPOINT` is set, "Send" opens the visitor's email app with the message pre-filled to your email (no setup needed). Do not put secrets in `VITE_` variables; they are public in the built site.

---

## Project structure

```
.
├── public/                  Static files copied as-is (favicon, resume, images, certificates)
├── src/
│   ├── components/          Reusable UI (Navbar, ProjectCard, ProjectModal, FlowDiagram, ContactForm, ...)
│   ├── sections/            One file per page section, in page order
│   ├── data/                ALL content: profile, skills, projects, experience, certifications, topics
│   ├── hooks/               useActiveSection (scroll tracking for the navigation)
│   ├── styles/              Tailwind entry and shared component classes
│   ├── pages/               Reserved for future multi-page routes (the site is currently one page)
│   ├── assets/              Reserved for bundled images/fonts
│   ├── types.ts             Shared TypeScript types
│   ├── App.tsx              Composes the sections
│   └── main.tsx             React entry point
├── docs/                    Guides (GitHub, Vercel, updating, architecture, QA checklist, assets)
├── .github/workflows/       CI for this portfolio (type-check and build)
├── vercel.json              Vercel configuration and security headers
└── .env.example             Environment variable template
```

Sections appear in this order: Home, About, Skills, Manual Testing, Automation Testing, Automation Frameworks, API Testing, Database Testing, Featured Automation Projects, Software Development Projects, Experience, Education, Certifications, GitHub Activity, Resume, Contact.

---

## Documentation

| Guide | Purpose |
| --- | --- |
| [`docs/GITHUB_GUIDE.md`](docs/GITHUB_GUIDE.md) | Publish this project to GitHub, step by step |
| [`docs/VERCEL_GUIDE.md`](docs/VERCEL_GUIDE.md) | Deploy to Vercel, add a custom domain, auto-deploy on every push |
| [`docs/UPDATING.md`](docs/UPDATING.md) | Add projects, certificates, skills; publish updates |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Plain-language architecture explanation for interviews |
| [`docs/ASSETS_CHECKLIST.md`](docs/ASSETS_CHECKLIST.md) | Personal assets you need to provide |
| [`docs/QA_CHECKLIST.md`](docs/QA_CHECKLIST.md) | Manual test checklist for the portfolio itself |

---

## Deployment (summary)

1. Push this repository to GitHub ([guide](docs/GITHUB_GUIDE.md)).
2. Import it on [vercel.com](https://vercel.com) (framework preset: Vite, build command `npm run build`, output directory `dist`).
3. Add `VITE_FORM_ENDPOINT` if you use the contact form.
4. Every push to `main` then redeploys automatically ([guide](docs/VERCEL_GUIDE.md)).

---

## Screenshots

Screenshots have not been captured yet. After your first successful run, add images to `docs/screenshots/` and link them here:

```md
![Home](docs/screenshots/home.png)
![Skills](docs/screenshots/skills.png)
![Projects](docs/screenshots/projects.png)
```

---

## Accessibility and performance notes

- Semantic landmarks, skip-to-content link, visible focus styles, labelled form fields and dialog focus handling (Escape to close, focus trap).
- Animations are disabled automatically for visitors who prefer reduced motion.
- Code is split into vendor chunks; fonts are loaded with `display=swap`.
- These are design intentions. Verify them with the checklist and a Lighthouse run once the site is built.

---

## License

All personal content (text, name, résumé, photos) belongs to Gulam Mohsin. Add a software license (for example MIT) for the code if you want others to reuse it.
