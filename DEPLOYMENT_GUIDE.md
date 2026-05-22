# Deployment Guide — Compound Interest Landing Page

Your Notion-inspired landing page is ready to deploy to Vercel. Follow this guide to go live tomorrow.

---

## 📦 What You Have

- **`public/index.html`** — Complete, self-contained landing page
- **Google AdSense integrated** — With your Publisher ID `ca-pub-5154234384505350`
- **30-second ad timer** — Users watch an ad and receive a unique Premium unlock code
- **Code generation** — Each ad watch produces a single-use code (format: `COMP-TIMESTAMP-RANDOM`)
- **Notion aesthetic** — Off-white design, Inter font, minimal shadows, professional UI

---

## 🚀 Deploy to Vercel (5 minutes)

### **Option A: Via Vercel Dashboard (Easiest)**

1. **Go to** [vercel.com/new](https://vercel.com/new) and log in with your GitHub account
2. **Click** "Add New → Project"
3. **Upload or connect:**
   - **Option 1:** Drag-and-drop this entire project folder
   - **Option 2:** Connect your GitHub repo (if you pushed to GitHub)
4. **Vercel auto-detects the setup** — no configuration needed
5. **Click "Deploy"** — done! Your site is live at `yoursite.vercel.app`

### **Option B: Via Vercel CLI**

```bash
# Install Vercel CLI (one time)
npm install -g vercel

# From your project directory
vercel login
vercel

# Follow the prompts and your site deploys instantly
```

---

## ⚙️ AdSense Setup Details

Your landing page uses **Google AdSense** with:

- **Publisher ID:** `ca-pub-5154234384505350` (already embedded)
- **Ad Slot:** `1234567890` (placeholder — update if you want specific ad placements)

### To customize ad placements:

1. Go to [AdSense Dashboard](https://adsense.google.com)
2. Create a new **300x250 medium rectangle** ad unit
3. Copy the `data-ad-slot` value
4. Replace `1234567890` in `index.html` (line ~777) with your real slot ID
5. Redeploy

---

## 🔌 How the Premium Code Flow Works

### User Experience:

1. User clicks **"Watch Ads to Unlock Premium"**
2. Modal opens with a 300x250 ad space
3. Google AdSense ad displays + 30-second countdown timer starts
4. After 30 seconds, timer completes automatically
5. A unique code appears: `COMP-TIMESTAMP-RANDOM` (e.g., `COMP-1H8KJD-ABC123`)
6. User clicks **"Copy Code"** to clipboard
7. User pastes code into your Chrome extension settings to unlock Premium

### Code Generation:

- **Unique per session** — Each ad watch = new code
- **Timestamp-based** — Prevents duplicates
- **Single-use** — Your extension validates against a backend (optional)

---

## 🛠️ Connecting to Your Chrome Extension

When the user pastes their code into your extension, your extension needs to:

1. **Validate the code format** (starts with `COMP-`)
2. **Optionally verify on your backend** (create an API endpoint to check if code is valid/used)
3. **Activate Premium features** in the extension
4. **Mark code as used** (optional, prevents reuse)

### Example validation endpoint (Node.js/Express):

```javascript
app.post('/api/validate-code', async (req, res) => {
  const { code } = req.body;

  // Check if code exists in your database
  const isValid = await db.codes.findOne({ code, used: false });

  if (isValid) {
    // Mark as used
    await db.codes.updateOne({ code }, { used: true });
    res.json({ valid: true, message: 'Premium unlocked!' });
  } else {
    res.json({ valid: false, message: 'Invalid or already used code' });
  }
});
```

---

## 📋 Pre-Deploy Checklist

- [ ] Google AdSense account connected
- [ ] Ad slot ID customized (if needed)
- [ ] Premium button placeholder wired to your payment system (Stripe/RevenueCat)
- [ ] Extension ready to accept unlock codes
- [ ] Backend API ready to validate codes (optional but recommended)

---

## 📝 Environment Variables

**None required for the landing page itself.** If you add Stripe or RevenueCat later:

```bash
# In Vercel Dashboard → Settings → Environment Variables
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

---

## 🔄 After Deployment

1. **Test locally first:**
   ```bash
   pnpm dev  # or npm run dev
   ```
   Open http://localhost:3000 and test both buttons

2. **Visit your live site** at `yoursite.vercel.app`

3. **Click "Watch Ads to Unlock Premium"**
   - Timer should count down 30 seconds
   - Code should appear and be copyable

4. **Share the link** — your landing page is live!

---

## 💡 Optional Customizations

### Change the ad duration from 30 seconds:

In `index.html`, find line ~817:
```javascript
currentAdDuration = 30;  // Change to 15, 60, etc.
```

### Update branding/text:

- **Logo/title:** Search for "Compound" in HTML
- **Colors:** Edit CSS variables at top of `<style>` (lines ~19-28)
- **Feature list:** Update the card-body section

### Wire up Premium button (Stripe example):

Replace the premium modal placeholder (line ~749-754) with:
```html
<script src="https://js.stripe.com/v3/"></script>
<button onclick="openCheckout()">Subscribe Now ($9.99)</button>
```

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| **Ad doesn't show** | AdSense takes 24-48 hours to show real ads in new sites. See PSA placeholders first. |
| **Timer doesn't count down** | Clear browser cache or try incognito mode |
| **Code doesn't copy** | Ensure HTTPS (Vercel provides this automatically) |
| **Can't deploy** | Check that `public/index.html` exists and is valid HTML |

---

## ✅ You're Done!

Your landing page is production-ready. Deploy to Vercel, test the ad flow, and start collecting unlock codes from users. Everything else is optional — Premium button, extension validation, analytics — you can wire those up anytime.

**Questions?** Check the code comments in `index.html` or open a support ticket at [vercel.com/help](https://vercel.com/help).
