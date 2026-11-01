# QA Checklist for the Portfolio Itself

> **Status: NOT YET EXECUTED.** The source was written without being compiled or opened in a browser. Work through this list after `npm install && npm run build`, tick each item, and note any defect with the steps to reproduce.

## Build
- [ ] `npm install` finishes without errors
- [ ] `npm run build` finishes without TypeScript or Vite errors
- [ ] `npm run preview` serves the site

## Navigation
- [ ] Every top-bar link scrolls to the right section
- [ ] The active link highlights while scrolling
- [ ] Mobile menu opens, closes (button, link click, Escape key) and links work
- [ ] "Skip to main content" appears on first Tab press and works
- [ ] All 16 sections appear in the required order

## Buttons and links
- [ ] "Explore My Work" scrolls to Projects
- [ ] "Download Resume" is disabled while `resume.available` is false, and downloads the PDF once enabled
- [ ] GitHub / LinkedIn buttons are disabled when empty, and open in a new tab once set
- [ ] All external links use `rel="noopener noreferrer"`

## Skills
- [ ] Level filter shows the correct counts and categories
- [ ] "Demonstrated Proficiency" shows the "nothing claimed yet" message
- [ ] Hover/focus on a skill shows its tooltip

## Projects
- [ ] Filters (All, UI Automation, API, Database, CI/CD) show the right projects
- [ ] Clicking a card (and pressing Enter/Space on its title) opens the dialog
- [ ] Dialog closes with the X button, the Escape key and a click outside
- [ ] Keyboard focus stays inside the dialog and returns to the card afterwards
- [ ] Planned projects show the "planned, no results yet" notice
- [ ] Copy buttons on code blocks work

## Diagrams
- [ ] Workflow diagram shows all 9 stages with descriptions
- [ ] Playwright architecture diagram shows all 7 stages

## Contact form
- [ ] Without `VITE_FORM_ENDPOINT`: banner says it is not connected, fields and button are disabled
- [ ] With an endpoint: empty or invalid input shows error messages
- [ ] A valid submission shows the success message and the message arrives
- [ ] A failed request shows the error message

## GitHub activity
- [ ] Empty GitHub URL shows the "not added yet" state
- [ ] With a valid URL, repositories load and link correctly
- [ ] With an invalid username, the error state appears

## Responsive design
- [ ] 360 px wide phone: no horizontal scrolling, text readable, tap targets comfortable
- [ ] Tablet (768 px) and laptop (1280 px) layouts look correct

## Accessibility
- [ ] Everything is reachable and operable by keyboard, with a visible focus ring
- [ ] Lighthouse Accessibility score reviewed and issues fixed
- [ ] `prefers-reduced-motion` turns animations off
- [ ] Colour contrast is acceptable for body text and chips

## Performance, SEO and console
- [ ] No errors or warnings in the browser console
- [ ] Lighthouse Performance and SEO reviewed
- [ ] Page title, description and social tags are correct (`index.html`)
- [ ] No broken images or missing assets

## Truthfulness review
- [ ] No claim on the site is something you cannot explain in an interview
- [ ] No fake certificates, links, results or contact details
