# Deploy to Vercel

The site is a static Vite build, so Vercel's free plan is enough.

## 1. Sign in

1. Go to <https://vercel.com/signup>.
2. Choose **Continue with GitHub** and authorise Vercel.

## 2. Import the repository

1. Click **Add New… → Project**.
2. Select your portfolio repository (click **Adjust GitHub App Permissions** if it is not listed).
3. Click **Import**.

## 3. Check the build settings

These are also set in `vercel.json`, so Vercel should detect them automatically:

| Setting | Value |
| --- | --- |
| Framework Preset | Vite |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js version | 20.x (Project Settings → General) |

## 4. Add environment variables (securely)

Only if you use the contact form:

| Name | Value |
| --- | --- |
| `VITE_FORM_ENDPOINT` | Your Formspree endpoint, e.g. `https://formspree.io/f/<form-id>` |

Add it in **Environment Variables** before the first deploy (or later, then redeploy). Remember that every `VITE_` variable becomes public in the website, so never store secrets there.

## 5. Deploy

Click **Deploy**. After a minute or two you receive a URL like `https://<project-name>.vercel.app`.

## 6. Automatic deployments

Vercel is now connected to GitHub:

- **Push to `main`** → new production deployment.
- **Open a pull request or push another branch** → a preview deployment with its own URL.

To update the live site:

```bash
git add .
git commit -m "Update projects"
git push
```

Watch progress in the **Deployments** tab. If a build fails, open the log, fix the error locally with `npm run build`, then push again. The previous working deployment stays live.

## 7. Custom domain (optional)

1. Buy a domain from any registrar.
2. In Vercel: **Project → Settings → Domains → Add**, and enter your domain.
3. Vercel shows the exact DNS records to create at your registrar (use the values shown in your dashboard).
4. Wait for DNS to propagate (minutes to a few hours). Vercel issues the HTTPS certificate automatically.

## 8. After going live

- Run through [`QA_CHECKLIST.md`](QA_CHECKLIST.md) on the live URL, on a phone and a laptop.
- Run Lighthouse in Chrome DevTools (Accessibility, Performance, SEO) and fix any issues.
- Add the live URL to your GitHub repository description, your resume and LinkedIn.
- Optional: add `<link rel="canonical">` and an Open Graph image (`og:image`) in `index.html` once you have a final domain and a 1200×630 image.

## Optional backend

The site needs no backend. If you ever build one (for example a custom contact API), host it separately on a provider such as Render and call it from the front end through an environment variable.
