# Architecture, Explained Simply

Use this as a script when an interviewer asks, "How did you build your portfolio?"

## The one-sentence version

"It is a single-page React application written in TypeScript, built with Vite, styled with Tailwind CSS, and deployed from GitHub to Vercel. All content lives in data files, so adding a project or certificate never requires touching the UI code."

## Tech choices and why

| Technology | Why I used it |
| --- | --- |
| **React** | Reusable components (cards, timeline, dialog) keep the UI consistent. |
| **TypeScript** | Types catch mistakes at build time, for example a project with a missing field. |
| **Vite** | Very fast dev server and optimised production builds. |
| **Tailwind CSS** | A consistent design system (spacing, colours) without writing large CSS files. |
| **Framer Motion** | Small, purposeful animations. They switch off for visitors who prefer reduced motion. |
| **Vercel + GitHub** | Every `git push` builds and deploys automatically (a simple CI/CD flow). |

## How the code is organised

```
data/        → what is shown      (profile, skills, projects, certifications)
sections/    → page areas         (Hero, Skills, Projects, Contact ...)
components/  → reusable pieces    (ProjectCard, ProjectModal, FlowDiagram ...)
hooks/       → small shared logic (which section is currently in view)
```

**Data-driven design:** a section reads an array from `data/` and renders one component per item. To add a project, I add one object to the array. The card, the filter and the detail dialog appear automatically.

## Interesting details worth mentioning

- **Honest status labels.** A `ProjectStatus` type (`planned`, `in-progress`, `completed`, `academic`) controls the badge and what the dialog says. Planned projects show no fake results.
- **Skill levels instead of percentages.** The `SkillLevel` type forces every skill into one of four honest categories. The filter on the Skills section is built from the same data.
- **Not-configured states.** If the email, GitHub link or resume is missing, a `LinkButton` shows a disabled state instead of a dead link.
- **Contact form.** It validates input in the browser, includes a hidden honeypot field to catch bots, and posts JSON to a form service whose URL comes from an environment variable (`VITE_FORM_ENDPOINT`). Without it, the form says it is not connected.
- **GitHub activity.** The page calls the public GitHub API from the browser, handles loading, error and empty states, and cancels the request if the component unmounts.
- **Accessibility.** Semantic landmarks, skip link, keyboard-operable filters, a dialog with a focus trap and Escape to close, labelled form fields, and reduced-motion support.
- **Diagrams.** The workflow and Playwright architecture diagrams are one reusable `FlowDiagram` component that renders an ordered list, so the diagrams are readable by screen readers too.

## Build and deploy flow

```
git push → GitHub → Vercel runs "npm run build" (tsc + vite) → static files in dist/ → live site
```

A separate GitHub Actions workflow (`.github/workflows/ci.yml`) type-checks and builds on every push and pull request, so a broken change is caught before it reaches production.

## Honest limitations (say these confidently)

- It is a static front end with no backend of its own; the contact form relies on a form service.
- The QA automation projects shown on it are planned, and I label them that way until the code and test reports exist.
- Testing of the site itself is currently manual (see `docs/QA_CHECKLIST.md`). A natural next step is adding Playwright tests for navigation, filters and the contact form.
