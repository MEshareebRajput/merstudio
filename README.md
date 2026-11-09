# MER website

A static website (HTML + CSS + JS). It needs no build step, so you can upload the folder anywhere.

## Edit everything in ONE file: `site-content.js`

Open `site-content.js` (in the main folder) with any text editor (Notepad works). It holds:
- **brand**: name, tagline, slogan, description
- **contact**: email, WhatsApp, phone, city, hours, reply time
- **social**: Instagram, LinkedIn, Behance... (leave "" to hide)
- **settings**: form email link, booking link (Cal.com / Calendly), "taking projects" badge
- **menu**: the top navigation
- **services**: the 9 services (clock, Services page, contact form, chatbot)
- **process**: the 4 steps
- **projects**: your work (add `image: "assets/work/name.jpg"` for real screenshots)
- **models**: ways to work
- **faq**: questions and answers (FAQ page, home page and chatbot)

Save the file and refresh the page: the header, footer, every page, the contact section and the
chatbot update automatically. Only change text inside "quotes" and keep the commas.

## Pages
- `index.html`: Home
- `services.html`: Services (clock + all services + ways to work)
- `process.html`: Process (4 steps + promises + FAQ)
- `work.html`: Portfolio with filters
- `faq.html`: All FAQs
- `contact.html`: Contact form, video call booking, contact details
- `terms.html`: Terms & privacy (a template; get it reviewed before publishing)

`hero-3d.html`, `hero-concepts.html` and `contact-concepts.html` are design previews only (not linked in the menu).

## Files
- `site-content.js`: all website content (edit this)
- `assets/js/kb/`: extra chatbot knowledge (2,100+ questions)
- `assets/css/style.css`: design (colors and fonts at the top under `:root`)
- `assets/js/render.js`: builds pages from site-content.js (no need to edit)
- `assets/js/main.js`: animations and forms
- `assets/brand/`: logo, favicons and social images

## Before going live, replace these
1. **Email:** search for `hello@yourdomain.com` (in the HTML files and `main.js` → `CONTACT_EMAIL`).
2. **WhatsApp:** search for `923000000000` and use your number (country code without `+`).
3. **Social links:** in the footer, `href="#"` for Instagram / LinkedIn / Behance.
4. **Work cards:** these are sample projects with drawn mockups. Swap in your real projects and screenshots, or remove them.
5. **Promises:** check that the FAQ and "Ways to work" text (timelines, ownership, support, reply within 1 day) matches how you actually work.
6. **Terms:** add the date and get the text checked.

## Contact form
By default the form opens the visitor's email app with the message filled in.
To receive messages directly by email, create a free form on Formspree (or similar)
and paste its URL into `main.js`:

```js
FORM_ENDPOINT: "https://formspree.io/f/xxxxxxx",
```

## Run on your computer

**Windows:** unzip the folder, then double-click **`START-WEBSITE.bat`**. Your browser opens
http://localhost:8000 automatically. Keep the black window open while you browse; close it to stop.
(It needs Python or Node.js. If neither is installed, it opens `index.html` directly, which also works.)

**Mac / Linux:** run `sh START-WEBSITE-mac-linux.sh` in this folder.

**Manual:** in this folder run `python -m http.server 8000` and open http://localhost:8000

An internet connection is needed for the fonts and animation libraries (loaded from CDN).

## Put it online (free)
- **Netlify:** drag and drop this folder at app.netlify.com/drop (everything, including the chatbot, works on any static host)
- **Vercel / GitHub Pages / Cloudflare Pages:** upload the folder as-is.
Then connect your domain.

## Libraries (loaded from CDN)
GSAP 3.12.5 + ScrollTrigger, Lenis 1.1.13, and Google Fonts (Unbounded, Space Grotesk, JetBrains Mono).

## Chatbot (bottom-right on every page)

The chatbot works **without any API key or server**. It answers from a knowledge base of
2,100+ question phrasings (about 250 topics) in English and Roman Urdu, matched instantly
in the visitor's browser.

**Edit what it knows:** open the files in `assets/js/kb/`:
- `kb-1-business.js`: MER details, services, prices, process, booking (and your email/WhatsApp at the top)
- `kb-2-knowledge.js`: general website, design, marketing and e-commerce questions
- `kb-3-chat.js`: greetings, small talk and industry-specific questions
- `kb-4-details.js`: video, UGC, photo shoot, app, store and SEO details
- `kb-5-extra.js`: extra ways to ask popular questions

Each topic looks like this:

    ## topic-id
    q: one way to ask | another way to ask | roman urdu way
    a: The English answer.
    ur: Roman Urdu answer (optional).

Replace every `[EDIT]` line with your real details (or delete it). To add a topic, copy one and
change the id, questions and answer. Links: `[text](#book)` opens the booking tab,
`[text](#contact)` goes to the contact section, `[text](work.html)` opens a page.

If the bot can't find a good match, it offers to book a call or WhatsApp the team.

## Video call booking (Contact → "Book a video call")

Visitors pick a day and time. To send real calendar invites with a Google Meet / Zoom link,
create a free **Cal.com** or **Calendly** event (30 min) connected to your Google Calendar,
then paste its link into `assets/js/main.js` → `CONFIG.BOOKING_URL`. Until then, the
button emails you the requested time.
