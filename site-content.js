/* ============================================================================
   MER WEBSITE CONTENT  ·  edit this ONE file to update the whole website
   ----------------------------------------------------------------------------
   Is file mein website ki saari maloomat hai. Yahan kuch bhi badlein, save karein,
   aur page refresh karein: har page, footer, contact section aur chatbot khud
   update ho jaayenge.

   Rules (simple):
   - Only change the text inside "quotes".
   - Keep the commas , at the end of lines.
   - To add a project / service / FAQ: copy one { ... } block, paste it below,
     and change the text.
   ============================================================================ */
window.SITE = {

  /* ---------- Brand ---------- */
  brand: {
    name: "MER",
    tagline: "Creative & Digital Studio",
    slogan: "Small pixels. Big ideas.",
    description: "A creative & digital studio for startups and growing brands. Strategy, design and code under one roof.",
    location: "Pakistan · Working worldwide",
  },

  /* ---------- Contact details (used everywhere: header, footer, contact, chatbot) ---------- */
  contact: {
    email: "hello@yourdomain.com",
    whatsappDisplay: "+92 300 0000000",
    whatsappNumber: "923000000000",      // country code + number, no + or spaces
    phone: "+92 300 0000000",
    city: "Lahore, Pakistan",            // shown on the contact page
    hours: "Monday – Saturday, 10am – 7pm (PKT)",
    replyTime: "within one working day",
  },

  /* ---------- Social links (leave "" to hide one) ---------- */
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    behance: "https://behance.net/",
    facebook: "",
    tiktok: "",
    youtube: "",
  },

  /* ---------- Forms & booking ---------- */
  settings: {
    // Formspree / Getform link to receive contact form messages by email.
    // Empty = the form opens the visitor's email app instead.
    formEndpoint: "",
    // Your Cal.com or Calendly link for real video call bookings.
    // Empty = booking requests are sent to you by email.
    bookingUrl: "",
    takingProjects: true,               // shows the green "Taking new projects" badge
  },

  /* ---------- Menu (top navigation) ---------- */
  menu: [
    { label: "Services", page: "services.html" },
    { label: "Process",  page: "process.html" },
    { label: "Work",     page: "work.html" },
    { label: "FAQ",      page: "faq.html" },
    { label: "Contact",  page: "contact.html" },
  ],

  /* ---------- Services (shown on the clock, Services page and chatbot) ----------
     icon: web | shop | brand | app | ai | seo | video | ugc | photo
     project: id of a project below to show next to the clock            */
  services: [
    { id: "web", title: "Web Design & Development", clock: "Web Design", icon: "web", project: "fintech",
      short: "Fast, modern websites and web apps.",
      text: "Fast, modern websites and web apps, from a sharp landing page to a full platform with logins and dashboards.",
      tags: ["React / Next.js", "Vue / Nuxt", "WordPress", "CMS", "Animations"] },
    { id: "shop", title: "E-commerce & Shopify", clock: "E‑commerce", icon: "shop", project: "fashion",
      short: "Online stores that look premium and sell.",
      text: "Online stores that look premium and sell: custom Shopify themes, product pages, payments, shipping and speed tuning.",
      tags: ["Shopify", "Custom themes", "Payments", "Store setup"] },
    { id: "brand", title: "Branding & UI/UX", clock: "Branding", icon: "brand", project: "identity",
      short: "Logos, identities and product design.",
      text: "Logos, brand identity and product interfaces designed in Figma, with a clear system so everything looks like one brand.",
      tags: ["Logo & identity", "Figma", "Design systems", "Prototypes"] },
    { id: "app", title: "Mobile Apps", clock: "Mobile Apps", icon: "app", project: "food",
      short: "iOS and Android apps from one codebase.",
      text: "iOS and Android apps from a single codebase, with clean design, smooth performance and help publishing to the stores.",
      tags: ["React Native", "Flutter", "App Store", "Play Store"] },
    { id: "ai", title: "AI & Automation", clock: "AI & Automation", icon: "ai", project: "chatbot",
      short: "Chatbots and automations that save time.",
      text: "Chatbots, smart features and workflow automation that answer customers faster and save your team hours every week.",
      tags: ["Chatbots", "Integrations", "Automation", "Internal tools"] },
    { id: "seo", title: "SEO & Growth", clock: "SEO & Growth", icon: "seo", project: "clinic",
      short: "Rank higher and get more customers.",
      text: "Technical SEO, analytics and campaigns that bring the right visitors, plus regular reports in plain language.",
      tags: ["Technical SEO", "Analytics", "Google Ads", "Content"] },
    { id: "video", title: "AI Video Editing", clock: "AI Video Editing", icon: "video", project: "reel",
      short: "Reels, shorts and ads, edited fast.",
      text: "Short-form videos, reels and ads edited with AI-assisted workflows: captions, music, b-roll and versions for every platform.",
      tags: ["Reels", "TikTok", "YouTube Shorts", "Ads"] },
    { id: "ugc", title: "UGC Production", clock: "UGC Production", icon: "ugc", project: "ugc",
      short: "Authentic creator-style videos.",
      text: "Authentic, creator-style videos (unboxings, reviews, how-tos) for TikTok, Instagram Reels and ads.",
      tags: ["UGC ads", "Creators", "TikTok", "Reels"] },
    { id: "photo", title: "Photo Shoots", clock: "Photo Shoots", icon: "photo", project: "shoot",
      short: "Product and lifestyle photography.",
      text: "Product and lifestyle photo shoots for websites, Shopify stores and social media, fully edited and ready to use.",
      tags: ["Product photos", "Lifestyle", "Retouching"] },
  ],

  /* ---------- Process (4 steps) ---------- */
  process: [
    { title: "Discover", text: "A free call to understand your goals, customers and budget. You get a clear plan and a fixed quote.", tags: ["Discovery call", "Scope", "Fixed quote"] },
    { title: "Design", text: "Wireframes first, then full designs in Figma. You give feedback until it feels right.", tags: ["Wireframes", "UI design", "Feedback rounds"] },
    { title: "Build", text: "We develop, test on every device and share progress every week, so there are no surprises.", tags: ["Development", "Weekly updates", "Testing"] },
    { title: "Launch & Grow", text: "We go live, train your team and stay on to support, improve and grow what we built.", tags: ["Go live", "Training", "Support & growth"] },
  ],

  /* ---------- Projects (Work page, home page, clock, chatbot) ----------
     category: web | shop | brand | app | video | photo   (used by the filters)
     image: path to a real screenshot, e.g. "assets/work/fintech.jpg"
            (leave "" to show a drawn mockup instead)
     visual (when no image): browser | phones | brand | phone | chat | chart | video | ugc | photos
     color  (when no image): a | b | c | d
     featured: true = also shown on the home page                         */
  projects: [
    { id: "fintech", title: "Fintech Dashboard", category: "web", badge: "Web App", meta: "Product design · Development", tags: ["Next.js", "Figma"], link: "", image: "", visual: "browser", color: "a", featured: true },
    { id: "fashion", title: "Fashion Store", category: "shop", badge: "E-commerce", meta: "Shopify · Branding", tags: ["Shopify", "Liquid"], link: "", image: "", visual: "phones", color: "b", featured: true },
    { id: "identity", title: "Studio Identity", category: "brand", badge: "Branding", meta: "Logo · Brand system", tags: ["Identity", "Guidelines"], link: "", image: "", visual: "brand", color: "c", featured: true },
    { id: "food", title: "Food Delivery App", category: "app", badge: "Mobile App", meta: "UI/UX · React Native", tags: ["iOS", "Android"], link: "", image: "", visual: "phone", color: "d", featured: true },
    { id: "chatbot", title: "AI Support Chatbot", category: "web", badge: "AI", meta: "Chatbot · Automation", tags: ["AI", "Automation"], link: "", image: "", visual: "chat", color: "c", featured: false },
    { id: "clinic", title: "Clinic Website SEO", category: "web", badge: "SEO", meta: "Design · WordPress · SEO", tags: ["WordPress", "SEO"], link: "", image: "", visual: "chart", color: "b", featured: false },
    { id: "reel", title: "Product Launch Reel", category: "video", badge: "AI Video", meta: "AI editing · Motion", tags: ["Reels", "Ads"], link: "", image: "", visual: "video", color: "d", featured: false },
    { id: "ugc", title: "Skincare UGC Ads", category: "video", badge: "UGC", meta: "UGC · TikTok · Reels", tags: ["UGC", "TikTok"], link: "", image: "", visual: "ugc", color: "a", featured: false },
    { id: "shoot", title: "Lifestyle Product Shoot", category: "photo", badge: "Photo Shoot", meta: "Photography · Styling", tags: ["Product", "Lifestyle"], link: "", image: "", visual: "photos", color: "b", featured: false },
  ],

  /* ---------- Ways to work ---------- */
  models: [
    { title: "Fixed project", text: "A clear scope, timeline and price. Best for a new website, store, app or brand.", points: ["Fixed quote upfront", "Design + development", "Launch support included"], popular: false },
    { title: "Monthly growth", text: "A set number of hours every month for updates, new features, SEO and marketing.", points: ["Priority support", "Monthly report", "Pause or cancel anytime"], popular: true },
    { title: "Dedicated team", text: "Developers and designers who join your team full-time and work in your tools.", points: ["Full-time resources", "Your tools & process", "Scale up or down"], popular: false },
  ],

  /* ---------- FAQ (FAQ page, home page and chatbot) ---------- */
  faq: [
    { q: "How much does a website cost?", a: "It depends on the pages, features and design. After a free discovery call we send a fixed quote, so you know the full price before anything starts." },
    { q: "How long does a project take?", a: "A landing page usually takes 1–2 weeks, a full website or store 3–6 weeks, and apps or platforms longer. You get a timeline with your quote." },
    { q: "Do you work with clients outside Pakistan?", a: "Yes. We work with clients worldwide over calls, WhatsApp and email, and plan meetings around your time zone." },
    { q: "Will I own the design and code?", a: "Yes. Once the project is paid, you own the design files, the code and all accounts we set up for you." },
    { q: "Do you offer support after launch?", a: "Every project includes launch support. After that, you can choose a monthly plan for updates, fixes and growth work." },
    { q: "How do payments work?", a: "Projects usually start with a deposit, and the rest is paid in milestones written in your quote, for example after design and at launch." },
    { q: "Can I update the website myself?", a: "Yes. We set up an easy way to update text, images and products yourself, and show you how during handover." },
    { q: "Do you make UGC videos and do photo shoots?", a: "Yes. We produce UGC-style videos, AI-edited reels and ads, and product and lifestyle photo shoots for websites, stores and social media." },
  ],
};
