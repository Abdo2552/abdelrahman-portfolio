# Abdelrahman Ehab Helmy — Portfolio

Built with React + Vite + Tailwind CSS v4.

## What's in here

- `src/data/profile.js` — your name, role, university, skills, journey timeline,
  and services. **Add your email, GitHub, and LinkedIn URLs here** — they're
  left blank on purpose since I wasn't given them, and the Contact section
  will show "Add your ___ here" until you fill them in.
- `src/data/projects.js` — the two featured projects (PC Builder, Coffee
  House) and the "Other Projects" list. Edit text/tech/links here.
- `src/components/` — one file per section (Navbar, Hero, About, Skills,
  Projects, ProjectCard, Journey, Services, Contact, Footer).
- `src/index.css` — design tokens (colors, fonts) at the top under `@theme`.

## Screenshots

I could not reach your live PC Builder site (`pc-builder-sandy.vercel.app`)
from this environment to capture real screenshots, so instead of faking any
UI, each project card shows a labeled placeholder frame ("Add screenshot:
Homepage", etc.) — a dashed box with the browser-chrome dots, ready for a
real image.

To add real screenshots:
1. Take screenshots of your own site (homepage, the Build a PC page, the
   products page work well) and save them into `src/assets/`.
2. In `src/data/projects.js`, import the image at the top of the file and
   set it as the `file` value for the matching entry in `images: [...]`, e.g.:
   ```js
   import pcBuilderHome from "../assets/pc-builder-home.png";
   // ...
   images: [{ label: "Homepage", file: pcBuilderHome }, ...]
   ```

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Go to vercel.com, "Add New Project", import the repo.
3. Vercel auto-detects Vite — framework preset "Vite", build command
   `npm run build`, output directory `dist`. Click Deploy.

Or from the CLI:
```bash
npm install -g vercel
vercel
```

## Notes

- The contact form isn't wired to a backend — it currently just shows an
  alert on submit. Hook `handleSubmit` in `src/components/Contact.jsx` up to
  a service like Formspree or EmailJS when you're ready, or your own API.
- Section content (About, feature lists, etc.) is written from what's
  actually documented in your two repos — nothing invented. If any wording
  doesn't sound like you, it's easy to edit in the data files or the
  relevant component.
