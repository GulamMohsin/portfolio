# Updating the Portfolio

All content is data. Edit files in `src/data/`, save, check in the browser (`npm run dev`), then push.

## Add or change a QA automation project

File: `src/data/projects.ts` → `automationProjects`.

When you actually start a project:

1. Change `status` from `'planned'` to `'in-progress'`.
2. Add `repoUrl: 'https://github.com/<you>/<repo>'`.

When it is finished **and the tests have really run**:

1. Change `status` to `'completed'`.
2. Add `reportUrl` (a real, public HTML report) and update `note` with real results only.
3. Update `folderStructure`, `install` and `commands` so they match the real repository.

To add a new project, copy an existing object, give it a unique `id`, and choose a `category`: `'ui' | 'api' | 'database' | 'cicd'`. Cards, filters and the detail dialog update automatically.

## Add a software development project

File: `src/data/projects.ts` → `developmentProjects`. Use `status: 'academic'` for academic work or `'completed'` for finished personal work. Add `repoUrl` / `liveUrl` only when they exist.

## Add a certificate

1. Put the PDF or image in `public/certificates/`.
2. Add an entry to `src/data/certifications.ts`:

```ts
{
  id: 'unique-id',
  title: 'Exact title as issued',
  issuer: 'Issuing organisation',
  issueDate: 'Month YYYY',
  credentialUrl: 'https://verification-link',   // optional
  file: '/certificates/my-certificate.pdf',      // optional
  image: '/certificates/my-certificate.png',     // optional
},
```

Only add real certificates and real details. When the array has entries, the placeholders disappear automatically.

## Update skills

File: `src/data/skills.ts`. Each skill has a `level`:

| Level | Meaning |
| --- | --- |
| `learning` | Currently learning, not yet shown in a public project |
| `basic` | Understand the fundamentals, limited hands-on use |
| `practical` | Used in an academic project, internship or personal build |
| `proficient` | Backed by public, verifiable work (repository, report, certificate) |

Promote a skill only when you can show evidence for it in an interview.

## Update contact details, photo and resume

File: `src/data/profile.ts`. Put the resume PDF in `public/resume/` and set `resume.available` to `true`.

## Publish the update

```bash
git add .
git commit -m "Describe what changed"
git push
```

Vercel redeploys automatically within a minute or two.
