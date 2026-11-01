# Personal Assets Checklist

Everything the site needs from you. Nothing here has been invented; every item below shows as "not added yet" on the site until you provide it.

| # | Asset | Where it goes | Status |
| --- | --- | --- | --- |
| 1 | Professional email address | `email` in `src/data/profile.ts` | ☐ |
| 2 | GitHub profile URL | `github` in `src/data/profile.ts` | ☐ |
| 3 | LinkedIn profile URL | `linkedin` in `src/data/profile.ts` | ☐ |
| 4 | Professional photograph (square, at least 400×400 px, `.jpg` or `.webp`) | `public/images/profile.jpg`, then set `photo: '/images/profile.jpg'` | ☐ |
| 5 | Resume PDF | `public/resume/Gulam_Mohsin_Resume.pdf`, then set `resume.available: true` | ☐ |
| 6 | Contact form endpoint (e.g. Formspree) | `.env` and Vercel variable `VITE_FORM_ENDPOINT` | ☐ |
| 7 | Certificates (only real ones): PDF/image, title, issuer, date, credential URL | `public/certificates/` and `src/data/certifications.ts` | ☐ |
| 8 | Repository URLs for each automation project (when they exist) | `repoUrl` in `src/data/projects.ts` | ☐ |
| 9 | Published test report URLs (only after real test runs) | `reportUrl` in `src/data/projects.ts` | ☐ |
| 10 | Optional: social sharing image 1200×630 px | `public/og-image.png` + `og:image` meta tag in `index.html` | ☐ |
| 11 | Optional: custom domain | Vercel → Settings → Domains | ☐ |

Review `src/data/skills.ts` as well and confirm every level is something you can explain with an example.
