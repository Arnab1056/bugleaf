# BugLeaf Software — GitHub Pages Ready

This folder is ready to upload to a GitHub repository named **bugleaf**.

## 1. Install and test locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000/bugleaf/
```

## 2. Create the GitHub repository

Create a repository named:

```text
bugleaf
```

Do not add another README, .gitignore, or license if this folder is being uploaded as-is.

## 3. Push this folder

Open the terminal inside this folder:

```bash
git init
git add .
git commit -m "Initial BugLeaf website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bugleaf.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## 4. Enable GitHub Pages

On GitHub:

Settings → Pages → Build and deployment → Source → **GitHub Actions**

Then open the Actions tab and wait for the deployment to finish.

## 5. Website address

If the repository is named `bugleaf`:

```text
https://YOUR_USERNAME.github.io/bugleaf/
```

## Important

This project is configured with:

```ts
basePath: "/bugleaf"
```

If you rename the repository, change `basePath` in `next.config.ts` to the new repository name.

## Included

- Light mode
- Dark mode
- Theme toggle
- Responsive design
- BugLeaf logo
- Hero/device illustration
- Project mockup images
- Services
- Projects
- Process
- Contact CTA
- Footer
- CSS animations
- GitHub Pages deployment workflow
