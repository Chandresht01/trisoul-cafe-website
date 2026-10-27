# Trisoul Cafe Website

A responsive, static cafe website built from the menu/logo photos supplied by the cafe.

## Files
- `index.html` — main page
- `style.css` — responsive design
- `script.js` — menu data, category filters and year
- `assets/` — logo + original menu photos

## Run locally
Just open `index.html` in a browser.

For a local development server:
```bash
python -m http.server 5500
```
Then open `http://localhost:5500`.

## Deploy
This is a static site, so it can be deployed directly to:
- Vercel
- Netlify
- GitHub Pages

## Important
The Google Maps embed is based on the Jesal Park / Bhayandar East address shown in the supplied menu. Before publishing, replace it with the exact cafe pin if needed.


## Customer reviews
The review form lets visitors choose a 1–5 star rating and write feedback. Submitting opens WhatsApp with the review pre-filled for the cafe at 95033 49111; the visitor must press Send in WhatsApp. This static version does not automatically publish reviews on the website or store them in a shared database. To collect and display public reviews automatically, connect a backend or form service.


## Online table booking
The Book a Table form collects the guest's name, phone number, preferred date/time, party size, occasion and optional notes. On submit it opens WhatsApp with a booking request addressed to the cafe. The guest must press Send, and the cafe must confirm availability manually. This static website does not automatically reserve tables or check live availability; that requires a backend/database or reservation service.
