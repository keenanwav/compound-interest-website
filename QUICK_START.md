# Quick Start — 60 seconds to live

## For deployment tomorrow, do this in order:

### 1️⃣ **Install Vercel CLI** (one time, 30 seconds)
```bash
npm install -g vercel
```

### 2️⃣ **Login to Vercel** (30 seconds)
```bash
vercel login
```
Follow the browser prompt — choose GitHub auth is easiest.

### 3️⃣ **Deploy** (instant)
```bash
cd /path/to/this/project
vercel
```

That's it! Your site is live. Vercel will output a URL like:
```
✅ Production: https://compound-interest.vercel.app
```

---

## Test it locally first:

```bash
pnpm dev
```

Then open:
- `http://localhost:3000/index.html` → Your landing page
- Click **"Watch Ads to Unlock Premium"** → Should show timer + code

---

## What you get out of the box:

✅ Google AdSense integrated (your Publisher ID: `ca-pub-5154234384505350`)  
✅ 30-second ad timer  
✅ Unique code generation per ad watch  
✅ "Copy Code" button for easy sharing  
✅ Notion aesthetic (clean, professional, responsive)  
✅ Fully accessible (ARIA labels, keyboard navigation)  

---

## Next steps (optional, not needed for tomorrow):

1. **Wire up Premium button** → Connect Stripe/RevenueCat
2. **Add backend validation** → Verify codes in your extension
3. **Customize colors/text** → Edit the HTML directly
4. **Update Ad Slot ID** → If you want specific ad placements

See `DEPLOYMENT_GUIDE.md` for full details.

---

**Ready?** Run `vercel` and your site goes live! 🚀
