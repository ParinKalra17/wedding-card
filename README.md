# Aayush weds Bridhi: one-page wedding invitation site

React + Vite + plain CSS. One continuous page; the menu scrolls to sections (no router, no reloads).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/ (any static host)
```

Edit everything in `src/data/weddingData.js`. Items in `[square brackets]` are placeholders
(street address, story text, photos). The RSVP form is a front-end demo that saves nothing until
you set `rsvp.whatsapp` or `rsvp.email`. Gallery photos: put files in `public/images/gallery/`
and set `src` in `gallery`.
