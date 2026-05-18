# Yousef Mohamed — Portfolio

**Live:** Deploy to Vercel or Netlify in one click.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📦 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import repo on vercel.com
3. Done — auto-deploys on every push

### Netlify
1. `npm run build`
2. Drag the `dist/` folder to netlify.com/drop

### GitHub Pages
```bash
npm run build
# push dist/ contents to gh-pages branch
```

## 🗂 Structure

```
src/
  components/    # Nav, Hero, About, Projects, Experience, Skills, Education, Contact, Footer
  data/          # portfolio.js — all content lives here (edit to update)
  App.jsx
  main.jsx
  index.css
```

## ✏️ Editing Content

All content is in `src/data/portfolio.js`.  
Change `projects`, `experience`, `skills`, or `certs` — UI updates automatically.
