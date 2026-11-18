# Personal Profile Website (Nuxt.js + Tailwind CSS)

A responsive two-page personal profile website built with **Nuxt 4**, **Vue 3**, and **Tailwind CSS v4**.

- **Homepage** (`app/pages/index.vue`) — name, introduction, avatar, welcome message, and a button to the Profile page.
- **Profile page** (`app/pages/profile.vue`) — Personal Information, Educational Background, Skills & Interests, and Hobbies.

## Customize your details

All personal content is stored in one file: **`app/data/profile.ts`**.
Replace the placeholder values (name, age, school, hobbies, etc.) and both pages update automatically.
To use your own photo, put it in `public/images/` (e.g. `public/images/me.jpg`) and change `avatar` to `'/images/me.jpg'`.

## Project structure

```
app/
├─ app.vue                # Root component (layout + pages)
├─ assets/css/main.css    # Tailwind CSS import + global styles
├─ components/            # Reusable UI: header, footer, avatar, section card, icons
├─ data/profile.ts        # Your personal content (edit this!)
├─ layouts/default.vue    # Shared layout: header + page + footer
└─ pages/
   ├─ index.vue           # Homepage  →  /
   └─ profile.vue         # Profile   →  /profile
public/
└─ images/avatar.svg      # Placeholder profile picture
nuxt.config.ts            # Nuxt config (Tailwind Vite plugin, head tags)
```

## Run locally

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production build

```bash
npm run build
npm run preview
```
