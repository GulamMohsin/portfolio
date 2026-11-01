# Publish the Portfolio to GitHub

Follow these steps once. Replace the text in `<angle brackets>` with your own values.

## 1. Create or use your GitHub account

1. Go to <https://github.com> and sign up, or sign in to your existing account.
2. Turn on two-factor authentication (Settings → Password and authentication).

## 2. Install Git

Download it from <https://git-scm.com/downloads> and check it works:

```bash
git --version
```

## 3. Create a public repository

1. On GitHub click **New repository**.
2. Name it, for example `portfolio` (or `<your-username>.github.io` is *not* needed here).
3. Choose **Public**.
4. Do **not** tick "Add a README", ".gitignore" or a license (this project already has them).
5. Click **Create repository**.

## 4. Configure Git locally (first time only)

```bash
git config --global user.name "Gulam Mohsin"
git config --global user.email "<the email address linked to your GitHub account>"
```

## 5. Install, build and check the project first

From inside the project folder:

```bash
npm install
npm run build
```

Fix any error before committing. `npm install` creates `package-lock.json`. **Commit it.**

## 6. Make sure no secrets are included

- `.env` is already ignored by `.gitignore`. Only `.env.example` (with no real values) is committed.
- Never commit passwords, tokens or private keys.

## 7. Commit and push

```bash
git init
git add .
git commit -m "Initial commit: QA automation engineer portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

GitHub will ask you to sign in. If a password is requested, use a **Personal Access Token** (Settings → Developer settings → Personal access tokens) or sign in through the browser prompt of Git Credential Manager. Never paste tokens into project files.

## 8. Verify the repository

- Open `https://github.com/<your-username>/<repository-name>`.
- Check the README renders and shows the project structure.
- Confirm `.env` is **not** in the file list.
- Open the **Actions** tab: the `CI` workflow should run and pass (type-check and build).

## 9. Connect to Vercel

Continue with [`VERCEL_GUIDE.md`](VERCEL_GUIDE.md).

## Everyday workflow

```bash
git add .
git commit -m "Describe the change"
git push
```

Each push to `main` redeploys the live site (once Vercel is connected).
