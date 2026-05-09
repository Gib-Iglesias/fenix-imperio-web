# Fenix Fragrance Holdings — Website

A modern, trilingual (EN / PT / ES) website for **Fenix Fragrance Holdings** — a Brazilian perfumery ecosystem platform encompassing fragrance creation, talent discovery, industry summits, investor networking, and wholesale distribution to UK & EU markets.

## Tech Stack

- **Framework:** Next.js 14 (App Router, Static Export)
- **Styling:** Tailwind CSS 3.4 + custom Fenix design tokens
- **Animation:** Framer Motion 11
- **Icons:** Lucide React
- **Fonts:** Playfair Display + Cormorant Garamond + Montserrat (Google Fonts)
- **i18n:** File-based dictionary system with middleware locale routing

## Quick Start

```bash
npm install
npm run dev     # → http://localhost:3000
npm run build   # Static export for deployment
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Fenix theme (ember/amber palette)
│   ├── layout.js            # Root SEO metadata
│   └── [lang]/
│       ├── layout.js        # Locale-specific SEO + JSON-LD
│       └── page.js          # Assembles all sections
├── components/
│   ├── Navbar.jsx           # Glass nav with language switcher
│   ├── Hero.jsx             # "Rise With Fenix" hero with floating orbs
│   ├── Pillars.jsx          # 4 ecosystem pillars (Craft, Talent, Summits, Invest)
│   ├── Founder.jsx          # Founder story + timeline + stats
│   ├── Products.jsx         # 4 fragrance cards with modal detail view
│   ├── VideoGallery.jsx     # Filterable video grid from centralized config
│   ├── Contact.jsx          # Partnership form with interest selector
│   └── Footer.jsx           # Minimal footer with social links
├── dictionaries/
│   ├── en.json              # English
│   ├── pt.json              # Portuguese (BR)
│   └── es.json              # Spanish
└── lib/
    ├── getDictionary.js     # Dictionary loader + locale exports
    └── videos.config.js     # Centralized video/media management
```

## Key Features

### Ecosystem Pillars
The site presents Fenix's four core business areas:
1. **Craft & Create** — Fragrance development with Brazilian botanicals
2. **Discover Talent** — Scouting and sponsoring emerging perfumers
3. **Summits & Events** — Industry conventions and networking
4. **Invest & Scale** — Connecting brands with UK/EU investors and buyers

### Video Management (`videos.config.js`)
All video content is managed from a single config file:
- **Categories:** Campaigns, Summits & Events, Talent Discovery, Reels & Shorts, Behind the Scenes
- **Status:** `active` / `paused` / `archived` — toggle without touching components
- **Phase tags:** `launch`, `expansion`, `talent`, `community`, `product`, `awareness`
- **Featured flag:** Highlight key videos with a star badge
- Add, remove, or pause videos by editing one file.

### Contact Form
- Interest selector with 5 partnership categories
- Direct contact sidebar with phone, email, address
- Social media links

### SEO
- JSON-LD structured data (Organization schema)
- OpenGraph + Twitter cards
- hreflang alternate links
- Semantic HTML with proper heading hierarchy

## Palette

| Token       | Hex       | Use                        |
|-------------|-----------|----------------------------|
| Ivory       | `#FAFAF6` | Page background            |
| Ember       | `#D4703A` | Primary accent (CTA, links)|
| Amber       | `#C98A3C` | Secondary accent           |
| Copper      | `#B07A50` | Warm undertone             |
| Plum        | `#6E4B5E` | Events/summits accent      |
| Sage        | `#6B8C62` | Talent/growth accent       |
| Char-900    | `#1E1B18` | Dark sections background   |

## Deployment

Optimized for **Vercel** or **Netlify** static deployment:

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod --dir=out
```

## Customization

- **Brand name/copy:** Edit `src/dictionaries/{lang}.json`
- **Colors:** Edit `tailwind.config.js` → `theme.extend.colors.fenix`
- **Videos:** Edit `src/lib/videos.config.js`
- **Fonts:** Edit the `@import` in `src/app/globals.css`
- **Founder photo:** Replace the placeholder in `Founder.jsx` with an `<Image>` component

## License

Private — Fenix Fragrance Holdings © 2026
