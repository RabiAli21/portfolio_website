# Rabi Ali — Portfolio Website

A luxury dark-theme portfolio built with Next.js 14, TypeScript, and Tailwind CSS.  
Designed for Vercel deployment.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build
```

## ☁️ Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a new GitHub repo
2. Go to https://vercel.com/new
3. Import your repo → click Deploy
4. Done ✅

## ✏️ Customise

All content is in `app/page.tsx` at the top in the data arrays:
- `SKILLS` — Tech categories
- `SKILL_BARS` — Proficiency percentages
- `EXPERIENCE` — Work history
- `PROJECTS` — Project showcase
- `STATS` — Hero numbers

Update your **LinkedIn URL** in the nav and contact section (search for `linkedin.com` and replace with your full profile URL).

## 🎨 Colours

Edit `app/globals.css` `:root` variables to change the palette:
- `--gold`: Accent colour (default: warm gold `#d4a847`)
- `--black`: Background
- `--white`: Text colour
