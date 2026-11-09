/* =====================================================================
   MER chatbot knowledge base, part 1: company, services, pricing,
   process, booking, portfolio.

   HOW TO EDIT (no coding needed):
     ## id        -> start of one topic
     q:           -> ways people might ask (separate with | )
     a:           -> English answer
     ur:          -> Roman Urdu answer (optional, used when the visitor writes in Roman Urdu)
   Links: [text](#book) opens the booking tab, [text](#contact), [text](work.html)
   {EMAIL} {WHATSAPP} {WA_LINK} are filled in from site-content.js (contact section).
   Lines containing [EDIT] are placeholders: replace them with real details.
   ===================================================================== */
// Contact details now come from site-content.js. This block is only a fallback.
window.MER_CONFIG = {
  email: "hello@yourdomain.com",          // [EDIT]
  whatsapp: "+92 300 0000000",            // [EDIT]
  whatsappLink: "https://wa.me/923000000000", // [EDIT]
};

window.MER_KB = (window.MER_KB || "") + `
## about
q: what is mer | who are you guys | tell me about mer | what does mer do | about your company | about mer studio | what kind of company is mer | introduce your agency | mer kya hai | mer kya karta hai | aap log kaun ho | apki company ke bare mein batao | what is mer agency
a: **MER** is a creative & digital studio for startups and growing brands. Strategy, design, code and content under one roof: websites, Shopify stores, apps, branding, AI tools, SEO, AI video editing, UGC and photo shoots. Our tagline: *Small pixels. Big ideas.*
ur: **MER** ek creative aur digital studio hai jo startups aur growing brands ke liye kaam karta hai. Strategy, design, code aur content sab ek jagah: websites, Shopify stores, apps, branding, AI tools, SEO, AI video editing, UGC aur photo shoots.

## name-meaning
q: what does mer stand for | meaning of mer | why the name mer | mer full form | what is the meaning of mer name | mer ka matlab kya hai | mer ka full form | naam mer kyun rakha
a: MER is our studio name and brand. [EDIT] Add the story or meaning behind the name here. Our logo is a pixel "M": small pixels coming together into something big.
ur: MER hamara studio ka naam hai. [EDIT] Naam ki kahani yahan likhein. Hamara logo pixel "M" hai: chhote pixels mil kar kuch bada banate hain.

## location
q: where are you located | where is your office | which country are you in | are you in pakistan | where are you based | your address | office location | aap kahan se ho | office kahan hai | aap kis sheher mein ho | location kya hai | which city
a: We're based in **Pakistan** and work with clients worldwide over video calls, WhatsApp and email. [EDIT] Add your city or office address here.
ur: Hum **Pakistan** mein hain aur duniya bhar ke clients ke saath video calls, WhatsApp aur email par kaam karte hain. [EDIT] Apna sheher ya office address yahan likhein.

## international
q: do you work with international clients | can you work with clients outside pakistan | do you work with usa clients | uk clients | do you work worldwide | can you work with my company in dubai | foreign clients | bahar ke clients ke saath kaam karte ho | international clients lete ho | kya aap abroad clients ke saath kaam karte hain
a: Yes! 🌍 We work with clients worldwide (USA, UK, Europe, Middle East and more). We plan calls around your time zone and communicate over Google Meet, Zoom, WhatsApp and email.
ur: Ji haan! 🌍 Hum duniya bhar ke clients (USA, UK, Europe, Middle East waghera) ke saath kaam karte hain. Calls aapke time zone ke hisaab se rakhte hain.

## team
q: how big is your team | how many people work at mer | team size | who is in your team | how many developers do you have | team kitni bari hai | kitne log kaam karte hain | aapki team mein kaun kaun hai | do you have designers and developers
a: MER is a team of designers, developers and content creators working together. [EDIT] Add your real team size and roles here (for example "6 people: 2 designers, 3 developers, 1 video editor").
ur: MER mein designers, developers aur content creators ki team kaam karti hai. [EDIT] Apni team ki asli tadaad aur roles yahan likhein.

## founded
q: when was mer founded | how old is your company | since when are you working | how many years of experience | when did you start | kab se kaam kar rahe ho | company kab bani | kitne saal ka tajurba hai | experience kitna hai
a: [EDIT] Add the year MER started and your team's years of experience here. We'd love to show you relevant past work on a free call: [book one here](#book).
ur: [EDIT] MER kab shuru hua aur team ka tajurba yahan likhein. Free call par hum aapko apna related kaam dikha sakte hain: [yahan book karein](#book).

## why-us
q: why should i choose mer | why choose you | what makes you different | why you and not another agency | what is special about mer | benefits of working with you | aap hi kyun | aap doosron se alag kaise ho | aapko kyun choose karun | kya khaas baat hai
a: A few reasons clients pick MER:
- **One team, start to finish**: strategy, design, code and content together
- **Fixed quotes**: you know the full price before we start
- **Weekly updates**, so there are no surprises
- **You own everything** once it's paid
- Modern, fast, animated websites that look premium and convert
ur: Clients MER ko kyun chunte hain:
- **Ek hi team** shuru se aakhir tak: strategy, design, code aur content
- **Fixed quote**: kaam shuru hone se pehle poori qeemat pata hoti hai
- **Har hafte update**, koi surprise nahi
- Payment ke baad **sab kuch aapka**
- Modern, fast aur premium websites jo customers laati hain

## agency-or-freelancer
q: are you a freelancer or an agency | is mer a company or one person | are you freelancers | is this a real agency | is it a team or single person | aap freelancer ho ya agency | kya ye ek banda hai ya team | real company hai
a: MER is a studio (a small agency), not a single freelancer. You get a team of designers, developers and content people, with one point of contact for your project.
ur: MER ek studio (choti agency) hai, akela freelancer nahi. Aapko designers, developers aur content walon ki team milti hai, aur project ke liye ek hi rabte ka banda.

## hours
q: what are your working hours | when are you available | office timings | what time do you work | are you open on weekends | working days | aapke timings kya hain | kab available hote ho | office kab khulta hai | sunday ko kaam karte ho
a: We usually work **Monday to Saturday**, and we schedule calls to suit your time zone. [EDIT] Add your exact office hours here. Messages get a reply within one working day.
ur: Hum aam taur par **Monday se Saturday** kaam karte hain, aur calls aapke time zone ke hisaab se rakhte hain. [EDIT] Apne exact timings yahan likhein. Message ka jawab ek working day mein milta hai.

## contact
q: how can i contact you | contact details | your email | email address | phone number | how to reach you | how do i get in touch | contact info | rabta kaise karun | aapka number kya hai | email kya hai | contact number do | aapse baat kaise karun
a: You can reach us here:
- ✉ Email: {EMAIL}
- 💬 WhatsApp: [{WHATSAPP}]({WA_LINK})
- 📅 Or [book a free video call](#book)
We reply within one working day.
ur: Aap hum se yahan rabta kar sakte hain:
- ✉ Email: {EMAIL}
- 💬 WhatsApp: [{WHATSAPP}]({WA_LINK})
- 📅 Ya [free video call book karein](#book)
Hum ek working day mein jawab dete hain.

## whatsapp
q: whatsapp number | can i whatsapp you | do you have whatsapp | whatsapp pe baat ho sakti hai | whatsapp karo | whatsapp contact | message you on whatsapp | aapka whatsapp number
a: Yes, WhatsApp is great for quick questions: [{WHATSAPP}]({WA_LINK}) 💬
ur: Ji haan, jaldi sawalon ke liye WhatsApp best hai: [{WHATSAPP}]({WA_LINK}) 💬

## social
q: social media | instagram | linkedin | facebook page | do you have instagram | behance | dribbble | follow you | aapka instagram | social links | tiktok account
a: [EDIT] Add your social links here (Instagram, LinkedIn, Behance). You can also find them in the website footer.
ur: [EDIT] Apne social media links yahan likhein. Website ke footer mein bhi links hain.

## careers
q: are you hiring | jobs | career opportunities | can i work with you | job vacancy | internship | do you offer internships | i want to join your team | apply for job | naukri | job chahiye | internship milegi | kya aap hiring kar rahe ho
a: Thanks for your interest! 🙌 Send your CV and portfolio to {EMAIL} with the role in the subject line. [EDIT] Add current openings or internship details here.
ur: Shukriya! 🙌 Apni CV aur portfolio {EMAIL} par bhejein, subject mein role likhein. [EDIT] Abhi ki job ya internship ki details yahan likhein.

## partnership
q: partnership | can we partner | white label | do you do white label work | reseller | outsourcing for agencies | can my agency outsource to you | collaboration | partner banna hai | white label kaam karte ho | agency ke liye kaam
a: Yes, we're open to partnerships, including white-label design and development for other agencies. Let's talk about how it would work: [book a call](#book) or email {EMAIL}.
ur: Ji haan, hum partnerships ke liye tayyar hain, doosri agencies ke liye white-label design aur development bhi. [Call book karein](#book) ya {EMAIL} par email karein.

## services
q: what services do you offer | what do you do | your services | services list | what can you do for me | what can you build | do you offer | services kya hain | aap kya kya karte ho | kaun si services dete ho | kya kya bana sakte ho | all services
a: Here's what we do:
- 🌐 **Web Design & Development**
- 🛒 **E-commerce & Shopify**
- 🎨 **Branding & UI/UX**
- 📱 **Mobile Apps**
- 🤖 **AI & Automation**
- 📈 **SEO & Growth**
- 🎬 **AI Video Editing**
- 🤳 **UGC Production**
- 📸 **Photo Shoots**
Which one are you interested in?
ur: Hamari services:
- 🌐 **Website design aur development**
- 🛒 **E-commerce aur Shopify**
- 🎨 **Branding aur UI/UX**
- 📱 **Mobile apps**
- 🤖 **AI aur automation**
- 📈 **SEO aur growth**
- 🎬 **AI video editing**
- 🤳 **UGC production**
- 📸 **Photo shoots**
Aapko kis mein dilchaspi hai?

## web-design
q: do you make websites | website design | can you build my website | website development | i need a website | make a website for me | business website | company website | website banwani hai | website bana sakte ho | mujhe website chahiye | website banate ho | new website
a: Yes! 🌐 We design and build fast, modern websites: from a single landing page to a full multi-page site or web app, with smooth animations and an easy way to update content. Tell me a bit about your business and I can point you in the right direction, or [book a free call](#book).
ur: Ji haan! 🌐 Hum fast aur modern websites banate hain: ek landing page se le kar poori website ya web app tak, smooth animations ke saath. Apne business ke baare mein batayein, ya [free call book karein](#book).

## landing-page
q: landing page | one page website | single page site | i need a landing page | sales page | product launch page | landing page banwana hai | ek page ki website | landing page kitne din mein
a: A landing page is a single focused page built to turn visitors into leads or sales. We design it around one goal (sign-ups, calls, purchases). It usually takes **1 to 2 weeks**.
ur: Landing page ek single page hota hai jo visitors ko customers ya leads mein badalta hai. Hum usay ek goal ke liye design karte hain. Aam taur par **1 se 2 hafte** lagte hain.

## web-app
q: web app | web application | saas | dashboard | portal | login system | admin panel | custom software | build a platform | web app banwani hai | dashboard bana sakte ho | software banate ho | saas product
a: Yes, we build web apps too: dashboards, portals, SaaS products and platforms with logins, admin panels and databases, using React / Next.js or Vue / Nuxt. The timeline depends on features, so we start with a discovery call and a fixed quote.
ur: Ji haan, hum web apps bhi banate hain: dashboards, portals, SaaS aur login wale platforms (React / Next.js ya Vue / Nuxt). Waqt features par depend karta hai, isliye pehle discovery call aur fixed quote.

## wordpress
q: do you work with wordpress | wordpress website | wordpress development | can you fix my wordpress site | elementor | wordpress theme | wordpress pe bana sakte ho | wordpress site | woocommerce
a: Yes, we work with **WordPress** (including WooCommerce) for sites that need easy editing. For high-performance or highly animated sites we often recommend a custom build with React / Next.js. We'll suggest what fits you best.
ur: Ji haan, hum **WordPress** (WooCommerce samait) par kaam karte hain. Zyada fast ya animated sites ke liye hum aksar custom React / Next.js recommend karte hain.

## tech-stack
q: what technology do you use | which tech stack | do you use react | next js | vue | nuxt | what programming languages | frameworks you use | technology kaun si use karte ho | kis language mein banate ho | tech stack kya hai
a: Our usual stack: **React / Next.js**, **Vue / Nuxt**, **WordPress**, **Shopify (Liquid)**, **React Native / Flutter** for apps, **Figma** for design, plus GSAP and Three.js for animation and 3D. We pick what's best for your project.
ur: Hum zyada tar **React / Next.js**, **Vue / Nuxt**, **WordPress**, **Shopify**, apps ke liye **React Native / Flutter**, aur design ke liye **Figma** use karte hain. Project ke hisaab se best choose karte hain.

## animations
q: can you make animated websites | 3d website | website with animations | scroll animations | interactive website | creative website like awwwards | gsap | three js | animated site bana sakte ho | 3d website banti hai | motion design website
a: Yes, that's one of our favourite things! ✨ Scroll animations, 3D elements, interactive effects (like the ones on this site) built with GSAP, Lenis and Three.js, while keeping the site fast and mobile-friendly.
ur: Ji haan, ye hamara pasandida kaam hai! ✨ Scroll animations, 3D aur interactive effects (jaise is site par hain), fast aur mobile-friendly rakhte hue.

## redesign
q: redesign my website | can you improve my existing website | website makeover | update my old site | modernize my website | my website looks old | purani website theek karni hai | website redesign | website ko naya banana hai
a: Absolutely. We can redesign your current site with a fresh look, better speed and clearer messaging, and keep your content and SEO safe while moving over. Share your current URL on a [free call](#book) and we'll suggest improvements.
ur: Bilkul. Hum aapki purani website ko naya look, behtar speed aur clear message ke saath redesign kar sakte hain, aur SEO ko safe rakhte hain. [Free call](#book) par apni website ka link share karein.

## website-fix
q: fix my website | my website is broken | bug fix | website not working | website error | can you fix bugs | website slow hai theek karo | website band hai | site mein masla hai | fix issues
a: We can help fix bugs, errors, broken layouts and slow pages. Send us your website link and a short description of the issue on [WhatsApp]({WA_LINK}) or {EMAIL}, and we'll tell you what it would take.
ur: Hum bugs, errors aur slow pages theek kar sakte hain. Apni website ka link aur masla [WhatsApp]({WA_LINK}) ya {EMAIL} par bhejein.

## shopify
q: shopify store | do you make shopify stores | shopify development | build my online store | ecommerce website | online shop | i want to sell online | shopify theme | shopify store banwana hai | online store chahiye | ecommerce site | dukaan online karni hai
a: Yes! 🛒 We build **Shopify stores** that look premium and sell: custom theme design, product pages, collections, payments, shipping setup, apps and speed tuning. We can also help with product photos and UGC ads to launch.
ur: Ji haan! 🛒 Hum premium **Shopify stores** banate hain: custom design, product pages, payments, shipping setup aur speed. Launch ke liye product photos aur UGC ads mein bhi madad karte hain.

## shopify-custom
q: custom shopify theme | customize my shopify theme | shopify sections | shopify liquid | shopify expert | edit my shopify store | shopify customization | theme customize karni hai | shopify mein changes
a: Yes, we customise existing Shopify themes or build fully custom ones (Liquid sections you can edit yourself in the theme editor). Tell us what you want changed and we'll quote it.
ur: Ji haan, hum Shopify themes customise bhi karte hain aur bilkul naye bhi banate hain. Batayein kya changes chahiye, hum quote de denge.

## store-migration
q: migrate to shopify | move my store to shopify | woocommerce to shopify | wix to shopify | transfer products | store migration | store shift karna hai | shopify par move karna
a: Yes, we can migrate your store to Shopify: products, customers, orders (where possible), redirects for SEO, and a fresh design. Share your current platform and product count for a quote.
ur: Ji haan, hum aapka store Shopify par shift kar sakte hain: products, customers aur SEO redirects samait. Apna platform aur products ki tadaad batayein.

## payment-gateways
q: payment gateway | can customers pay by card | jazzcash | easypaisa | stripe | paypal | cash on delivery | payments in pakistan | online payment setup | card payment | payment kaise lenge | cod
a: We set up the payment options that work in your market: card payments through supported gateways, local wallets where available, and cash on delivery. Availability depends on your country and business registration, so we'll check what fits you on the call.
ur: Hum aapke market ke hisaab se payment options set karte hain: card payments, jahan mumkin ho local wallets, aur cash on delivery. Ye aapke mulk aur business registration par depend karta hai.

## branding
q: branding | logo design | do you make logos | brand identity | create my brand | i need a logo | brand guidelines | visual identity | logo banwana hai | logo bana sakte ho | brand banana hai | branding karte ho
a: Yes! 🎨 We create logos and full brand identities: logo, colours, typography, brand guidelines and social templates, so everything looks like one brand. (We even made our own pixel "M" logo 😉)
ur: Ji haan! 🎨 Hum logo aur poori brand identity banate hain: logo, rang, fonts, guidelines aur social templates.

## uiux
q: ui ux design | app design | figma design | user interface | user experience | design my app screens | wireframes | prototype | ui ux karte ho | app ka design | figma mein design
a: Yes, we design user interfaces and experiences in **Figma**: wireframes, full screen designs, clickable prototypes and design systems, ready for development (by us or your team).
ur: Ji haan, hum **Figma** mein UI/UX design karte hain: wireframes, screens, clickable prototypes aur design systems.

## mobile-app
q: mobile app | do you make apps | android app | ios app | iphone app | app development | build an app | i need an app | react native | flutter | app banwani hai | app bana sakte ho | mobile application
a: Yes! 📱 We build **iOS and Android apps** from one codebase with React Native or Flutter: clean design, smooth performance, and help publishing to the App Store and Play Store.
ur: Ji haan! 📱 Hum **Android aur iPhone apps** banate hain (React Native ya Flutter), aur App Store / Play Store par publish karne mein bhi madad karte hain.

## app-publish
q: publish app to play store | app store submission | upload my app | google play account | apple developer account | app store par lagana | app publish karoge | play store upload
a: Yes, we help publish your app to the **Google Play Store** and **Apple App Store**. You'll need your own developer accounts (Google has a one-time fee, Apple a yearly fee), and we handle the setup and submission.
ur: Ji haan, hum app ko **Play Store** aur **App Store** par publish karne mein madad karte hain. Developer accounts aapke naam par hote hain, baaki setup hum karte hain.

## ai-automation
q: ai services | ai automation | do you make ai tools | business automation | automate my work | ai integration | workflow automation | ai solutions | ai ka kaam karte ho | automation karte ho | ai tool banwana hai
a: Yes! 🤖 We build **AI and automation** solutions: chatbots, smart features in apps, and workflows that connect your tools (forms, CRM, email, sheets) so repetitive work happens automatically.
ur: Ji haan! 🤖 Hum **AI aur automation** solutions banate hain: chatbots, apps mein smart features, aur workflows jo repetitive kaam khud kar dete hain.

## chatbot-service
q: can you make a chatbot | chatbot for my website | ai chatbot | whatsapp bot | customer support bot | bot like this one | chatbot banwana hai | aisa bot mujhe bhi chahiye | website ke liye chatbot
a: Yes, we can build a chatbot like this one for your website (or WhatsApp): it answers customer questions about your business 24/7 and passes leads to your team. [Book a call](#book) to discuss.
ur: Ji haan, hum aapki website (ya WhatsApp) ke liye aisa chatbot bana sakte hain jo 24/7 customers ke sawalon ka jawab de. [Call book karein](#book).

## seo
q: seo services | do you do seo | rank on google | google ranking | search engine optimization | get my website on first page | local seo | seo karte ho | google pe upar lana hai | website rank karwani hai
a: Yes! 📈 Our **SEO & Growth** service covers technical SEO, site speed, keywords, content and analytics, with plain-language reports. SEO builds over time (usually months), so we focus on steady, real growth.
ur: Ji haan! 📈 Hum technical SEO, speed, keywords, content aur analytics par kaam karte hain. SEO mein waqt lagta hai (aam taur par kuch mahine), hum steady growth par focus karte hain.

## google-ads
q: google ads | ppc | paid ads | run ads for me | adwords | advertising | google ads chalate ho | ads lagwane hain | paid marketing | meta ads | facebook ads
a: Our growth service includes **Google Ads** set-up and management. [EDIT] If you also run Meta (Facebook/Instagram) ads, add that here. For ad creatives we also produce UGC and AI-edited videos.
ur: Hamari growth service mein **Google Ads** shamil hain. [EDIT] Agar Meta ads bhi chalate hain to yahan likhein. Ads ke liye hum UGC aur AI videos bhi banate hain.

## social-media-management
q: social media management | manage my instagram | social media marketing | posting on instagram | content calendar | smm | instagram handle karoge | social media chalate ho | daily posts
a: We create content for social media (UGC videos, AI-edited reels, photo shoots, brand templates). [EDIT] If you offer full social media management (posting, captions, replies), add the details here; otherwise we'll recommend a partner.
ur: Hum social media ke liye content banate hain (UGC, reels, photos, templates). [EDIT] Agar poori social media management karte hain to details yahan likhein.

## ai-video
q: ai video editing | video editing | edit my videos | reels editing | short form videos | youtube video editing | tiktok editing | ad video | video edit karte ho | reels bana sakte ho | video editing chahiye
a: Yes! 🎬 We edit short-form videos, reels and ads with **AI-assisted workflows**: fast cuts, captions, b-roll, music, voice clean-up and versions for TikTok, Reels and YouTube Shorts.
ur: Ji haan! 🎬 Hum **AI ki madad se** reels, short videos aur ads edit karte hain: captions, music, b-roll aur har platform ke liye versions.

## ugc
q: ugc | ugc videos | user generated content | ugc creators | ugc ads | testimonial style videos | tiktok ugc | ugc production | ugc kya hai | ugc video banwani hai | creator videos
a: Yes! 🤳 We produce **UGC-style videos**: authentic, creator-style content (unboxings, reviews, how-to, testimonials) for TikTok, Instagram Reels and ads. They feel real and often perform better than polished ads.
ur: Ji haan! 🤳 Hum **UGC videos** banate hain: asli lagne wala creator style content (unboxing, review, how-to) TikTok, Reels aur ads ke liye.

## photo-shoot
q: photo shoot | product photography | do you do photoshoots | lifestyle photos | ecommerce photos | photos for my store | professional photos | product shoot | photoshoot karte ho | product ki photos | model shoot
a: Yes! 📸 We do **product and lifestyle photo shoots** for websites, Shopify stores and social media: clean white-background shots and styled lifestyle images. [EDIT] Add where you shoot (studio/on-location) and cities.
ur: Ji haan! 📸 Hum **product aur lifestyle photo shoots** karte hain: white background aur styled photos, website aur social media ke liye. [EDIT] Location / sheher yahan likhein.

## content-writing
q: content writing | copywriting | website content | do you write the text | blog writing | product descriptions | can you write my website copy | content likhte ho | website ka text kaun likhega
a: We help shape your website's message and copy as part of our projects, and product descriptions for stores. [EDIT] If you offer blog writing as a separate service, add it here.
ur: Hum projects mein website ka message aur text banane mein madad karte hain. [EDIT] Agar blog writing alag service hai to yahan likhein.

## process
q: how do you work | your process | what is the process | how does it work | steps of a project | how do we start | working process | kaam kaise karte ho | process kya hai | project kaise chalta hai | shuru kaise karein
a: Our process is simple, in 4 steps:
- **1. Discover**: free call, goals, plan and a fixed quote
- **2. Design**: wireframes, then full designs in Figma, with your feedback
- **3. Build**: development, testing and weekly updates
- **4. Launch & Grow**: go live, training, and ongoing support
ur: Hamara process 4 steps ka hai:
- **1. Discover**: free call, goals aur fixed quote
- **2. Design**: wireframes aur Figma designs, aapke feedback ke saath
- **3. Build**: development, testing aur har hafte update
- **4. Launch & Grow**: live karna, training aur support

## discovery-call
q: what happens on the discovery call | free consultation | what is the first call about | is the first call free | consultation | first meeting | pehli call mein kya hota hai | free consultation hai | call free hai
a: The discovery call is **free, 30 minutes**, on Google Meet or Zoom. We learn about your idea and goals, suggest the best approach, and give a rough timeline. Afterwards you get a fixed quote. [Book it here](#book).
ur: Discovery call **free aur 30 minute** ki hoti hai (Google Meet ya Zoom). Hum aapka idea samajhte hain, best tareeqa batate hain, phir fixed quote dete hain. [Yahan book karein](#book).

## revisions
q: how many revisions | can i ask for changes | revisions included | what if i dont like the design | design changes | edits after delivery | kitni dafa changes | design pasand na aaye to | revisions milenge
a: Feedback is built into our process: you review wireframes and designs and we refine them until you're happy. The exact number of revision rounds is written in your quote so expectations are clear. [EDIT] Add your standard number of revision rounds here.
ur: Feedback hamare process ka hissa hai: aap designs dekhte hain aur hum unhe behtar karte hain. Revisions ki tadaad quote mein likhi hoti hai. [EDIT] Apne standard revisions yahan likhein.

## updates
q: will i get updates | how will i know progress | weekly updates | project tracking | can i see progress | progress kaise pata chalega | update milte rahenge | kaam ka pata kaise chalega
a: Yes, you'll get **weekly progress updates** plus preview links to see the work as it's built. You'll always know what's done, what's next and what's needed from you.
ur: Ji haan, aapko **har hafte update** aur preview links milte hain, taake aap kaam bante hue dekh sakein.

## communication
q: how do we communicate | communication tools | do you use slack | whatsapp group | project manager | who will i talk to | point of contact | baat kaise hogi | kis se rabta rahega
a: You get one point of contact for your project. We communicate on WhatsApp, email and video calls (Google Meet / Zoom), and can use Slack or your tools if you prefer.
ur: Project ke liye aapka ek hi rabte ka banda hota hai. Baat WhatsApp, email aur video calls par hoti hai.

## nda
q: nda | will you sign an nda | confidentiality | is my idea safe | non disclosure agreement | contract | do you sign contracts | agreement | mera idea safe hai | nda sign karoge | contract hota hai
a: Yes, your idea is safe with us. We're happy to sign an **NDA**, and every project has a written agreement covering scope, timeline, price and ownership.
ur: Ji haan, aapka idea safe hai. Hum **NDA** sign kar dete hain, aur har project ka written agreement hota hai.

## launch-support
q: support after launch | what happens after launch | do you give support | after delivery support | warranty | bug fixing after launch | launch ke baad support | baad mein masla aaye to | support milegi
a: Every project includes **launch support** so everything runs smoothly. After that you can choose a monthly plan for updates, fixes and growth work, or contact us whenever you need something.
ur: Har project ke saath **launch support** milti hai. Uske baad aap monthly plan le sakte hain ya jab zaroorat ho rabta kar sakte hain.

## maintenance
q: maintenance | website maintenance | monthly maintenance | retainer | ongoing support | monthly plan | care plan | updates every month | maintenance package | monthly plan kya hai | har mahine kaam
a: Our **Monthly growth plan** gives you a set number of hours each month for updates, new features, fixes, SEO and marketing, with priority support and a monthly report. You can pause or cancel anytime.
ur: Hamara **Monthly plan** har mahine kuch ghante deta hai updates, naye features, fixes aur SEO ke liye, priority support ke saath. Kabhi bhi pause ya cancel kar sakte hain.

## engagement
q: ways to work with you | engagement models | hire a dedicated developer | dedicated team | fixed price or hourly | hire developers monthly | staff augmentation | developer hire karna hai | kaam karne ke tareeqe
a: Three ways to work with us:
- **Fixed project**: clear scope, timeline and price
- **Monthly growth**: set hours each month for updates and growth
- **Dedicated team**: designers or developers who join your team full-time
ur: Hamare saath kaam ke 3 tareeqe:
- **Fixed project**: scope, waqt aur qeemat pehle se tay
- **Monthly plan**: har mahine updates aur growth
- **Dedicated team**: full-time designers ya developers

## ownership
q: will i own the website | who owns the code | do i get the source code | ownership | copyright | do i own the design files | code mera hoga | website ka malik kaun | source code milega
a: Yes, **you own everything** once the project is paid: design files, source code, and all accounts we set up for you (domain, hosting, store, analytics).
ur: Ji haan, payment ke baad **sab kuch aapka**: design files, source code aur saare accounts.

## edit-myself
q: can i edit the website myself | cms | update content myself | change text and images | easy to update | admin panel to edit | khud edit kar sakta hun | text khud badal sakte hain | cms milega
a: Yes. We set up an easy way to update text, images, products and blog posts yourself (a CMS or Shopify admin), and show you how to use it during handover.
ur: Ji haan. Hum aisa system dete hain jis se aap text, images aur products khud badal sakte hain, aur training bhi dete hain.

## training
q: training | will you teach me | how to use my website | handover | tutorial | show me how to manage | training doge | sikhaoge kaise chalana hai
a: Yes, at launch we walk you (and your team) through managing your site or store, and share a short guide or video for later.
ur: Ji haan, launch par hum aapko site ya store chalana sikhate hain aur ek chhoti guide bhi dete hain.

## responsive
q: mobile friendly | responsive design | will it work on mobile | phone pe chalegi | tablet friendly | mobile version | mobile responsive | mobile par theek dikhegi
a: Yes, every site we build is **fully responsive**: it looks and works great on phones, tablets and desktops. We test on real devices before launch.
ur: Ji haan, har website **mobile, tablet aur desktop** sab par achhi dikhti aur chalti hai. Launch se pehle test karte hain.

## speed
q: will my website be fast | site speed | page speed | performance | fast loading | core web vitals | lighthouse score | website slow to nahi hogi | fast website | loading speed
a: Speed is a priority for us ⚡: optimised images, clean code, lazy loading and good hosting. Fast sites rank better and convert more visitors.
ur: Speed hamari priority hai ⚡: optimised images, saaf code aur achhi hosting. Fast sites Google par behtar rank aur zyada sales karti hain.

## security
q: is it secure | website security | ssl | https | protection from hackers | backups | website safe hogi | hack to nahi hogi | security
a: Yes, we follow security best practices: HTTPS/SSL, secure hosting, updated software, strong access controls and regular backups.
ur: Ji haan, hum security ka khayal rakhte hain: SSL, secure hosting, updates aur regular backups.

## hosting-domain
q: do you provide hosting | domain name | who buys the domain | hosting included | can you set up hosting | domain kaun lega | hosting dete ho | domain aur hosting
a: We help you choose and set up the right **domain and hosting** (in your name, so you own them). Hosting and domain costs are separate and paid to the provider; we'll recommend good options for your budget.
ur: Hum **domain aur hosting** chunne aur set karne mein madad karte hain (aapke naam par). Inka kharcha alag hota hai jo provider ko jaata hai.

## price-general
q: how much does it cost | pricing | your prices | rates | how much do you charge | price list | packages | what are your charges | kitne paise lagenge | rate kya hai | qeemat kya hai | charges kitne hain | budget kitna chahiye
a: Every project is different, so we give a **fixed quote** after a free discovery call: you know the full price before anything starts, with no surprise invoices. Price depends on pages, features and content. [Book a free call](#book) to get yours. [EDIT] Add starting prices here if you want to share them.
ur: Har project alag hota hai, isliye hum free call ke baad **fixed quote** dete hain: kaam shuru hone se pehle poori qeemat pata hoti hai. Qeemat pages aur features par depend karti hai. [Free call book karein](#book). [EDIT] Starting prices yahan likh sakte hain.

## price-website
q: how much for a website | website cost | website price | cost of a business website | website kitne ka banega | website ki qeemat | website banwane ka kharcha | website ke kitne paise | price of website design
a: A website's price depends on the number of pages, design complexity, animations and features (forms, booking, blog, CMS). After a short free call we send a **fixed quote**. [EDIT] Add "Websites start from ___" here if you'd like to share a starting price.
ur: Website ki qeemat pages, design, animations aur features par depend karti hai. Choti si free call ke baad hum **fixed quote** bhejte hain. [EDIT] "Websites ___ se shuru" yahan likh sakte hain.

## price-landing
q: landing page price | cost of landing page | one page website price | landing page kitne ka | landing page charges
a: A landing page is our most affordable option, since it's a single focused page. [EDIT] Add your landing page starting price here. Get an exact quote on a [free call](#book).
ur: Landing page sab se kam qeemat wala option hai. [EDIT] Starting price yahan likhein. Exact quote ke liye [free call](#book) karein.

## price-shopify
q: shopify store price | cost of online store | ecommerce website cost | shopify kitne ka | store banwane ke paise | online store ki qeemat
a: A Shopify store's price depends on design (theme customisation vs fully custom), number of products and integrations. Remember Shopify's own monthly plan is separate. [EDIT] Add your starting price. [Book a call](#book) for a fixed quote.
ur: Shopify store ki qeemat design, products aur integrations par depend karti hai. Shopify ka apna monthly plan alag hota hai. [EDIT] Starting price yahan likhein.

## price-app
q: app price | how much does an app cost | mobile app cost | app development cost | app kitne ki banegi | app ke paise | app banwane ka kharcha
a: App cost depends mostly on features and screens (logins, payments, maps, chat, admin panel). We usually suggest starting with an **MVP** (the essential features) to launch sooner and spend less. [Book a call](#book) for a quote.
ur: App ki qeemat features aur screens par depend karti hai. Hum aksar pehle **MVP** (zaroori features) banane ka mashwara dete hain taake kam kharche mein jaldi launch ho.

## price-logo
q: logo price | how much for a logo | branding cost | logo kitne ka | logo design charges | brand identity price
a: Logo-only and full brand identity packages are priced differently. [EDIT] Add your logo / branding starting prices here. Ask for a quote on a [free call](#book).
ur: Sirf logo aur poori branding ki qeemat alag hoti hai. [EDIT] Prices yahan likhein.

## price-video
q: video editing price | ugc price | cost per video | reels price | how much for ugc | photo shoot price | photoshoot cost | video ke kitne paise | ugc kitne ka | shoot ke charges
a: Video, UGC and photo shoot pricing depends on the number of pieces, length and production needs. [EDIT] Add per-video or package prices here. We can share options on a [free call](#book).
ur: Video, UGC aur photo shoot ki qeemat tadaad, length aur production par depend karti hai. [EDIT] Prices yahan likhein.

## hourly
q: hourly rate | do you charge per hour | per hour price | hourly basis | ghante ke hisaab se | per hour kitna
a: For defined projects we prefer **fixed quotes** so you know the total upfront. For ongoing work, the monthly plan uses a set number of hours. [EDIT] Add your hourly rate here if you offer one.
ur: Projects ke liye hum **fixed quote** dete hain. Ongoing kaam ke liye monthly plan mein ghante tay hote hain. [EDIT] Hourly rate yahan likhein.

## payment-terms
q: payment terms | do i pay upfront | advance payment | deposit | installments | milestones | how do i pay | payment schedule | advance kitna dena hoga | qiston mein payment | payment kaise karni hai
a: Projects usually start with a **deposit**, and the rest is paid in milestones written in your quote (for example after design and at launch). [EDIT] Add your exact payment split here.
ur: Project aam taur par **advance** se shuru hota hai, baaki milestones par (jaise design ke baad aur launch par). [EDIT] Apna payment split yahan likhein.

## payment-methods
q: payment methods | bank transfer | how can i pay | payoneer | wise | paypal payment | pay in dollars | pay in pkr | payment kis tarah | bank transfer chalega | dollar mein payment
a: [EDIT] List the payment methods you accept here (for example bank transfer, Wise, Payoneer). We accept payments from both local and international clients.
ur: [EDIT] Jo payment methods aap lete hain yahan likhein (bank transfer, Wise, Payoneer waghera).

## refund
q: refund policy | money back | can i get a refund | cancel project | what if i cancel | refund milega | paise wapas | project cancel karna ho
a: [EDIT] Add your refund and cancellation policy here. Generally, work completed up to cancellation is billed, and terms are written in your agreement.
ur: [EDIT] Refund aur cancellation policy yahan likhein. Aam taur par cancel tak ka kaam bill hota hai, terms agreement mein hoti hain.

## discount
q: discount | any offers | student discount | startup discount | can you give a discount | negotiable | cheaper option | discount milega | koi offer hai | price kam ho sakti hai
a: We try to fit your budget: we can adjust scope, phase the project, or start with an MVP. [EDIT] Add any current offers or startup discounts here.
ur: Hum budget ke hisaab se scope adjust kar sakte hain ya kaam phases mein kar sakte hain. [EDIT] Koi offer ho to yahan likhein.

## small-budget
q: i have a small budget | low budget | limited budget | i cant afford much | cheap website | affordable | budget kam hai | kam paison mein | sasta kaam
a: No problem, tell us your budget honestly 🙂 We'll suggest what's possible: a strong landing page, a theme-based store, or an MVP you can grow later. [Book a free call](#book).
ur: Koi masla nahi, apna budget batayein 🙂 Hum batayenge kya mumkin hai: landing page, theme wala store, ya MVP jo baad mein barhaya ja sake.

## hidden-costs
q: hidden costs | any extra charges | what is not included | additional costs | extra paise to nahi | koi chhupa kharcha | extra charges
a: No hidden costs: the quote lists exactly what's included. Third-party costs (domain, hosting, Shopify plan, paid apps, stock assets, ad spend) are separate and explained upfront.
ur: Koi chhupa kharcha nahi: quote mein sab likha hota hai. Domain, hosting, Shopify plan ya ads ka kharcha alag hota hai jo pehle bata diya jaata hai.

## time-general
q: how long does it take | timeline | how much time | delivery time | when will it be ready | turnaround | kitna time lagega | kitne din lagenge | kab tak ready hoga | kitne dino mein | delivery kab
a: Typical timelines:
- **Landing page**: 1–2 weeks
- **Website or store**: 3–6 weeks
- **Apps & platforms**: longer, depending on features
You get an exact timeline with your quote.
ur: Aam taur par:
- **Landing page**: 1–2 hafte
- **Website ya store**: 3–6 hafte
- **Apps**: features ke hisaab se zyada
Exact waqt quote ke saath milta hai.

## time-app
q: how long to build an app | app timeline | app kitne din mein | app development time | mvp timeline
a: An MVP app often takes a couple of months, depending on screens and features. We'll give you a clear timeline after the discovery call.
ur: MVP app aam taur par kuch mahine leti hai, features par depend karta hai. Call ke baad exact timeline milti hai.

## urgent
q: urgent | rush delivery | i need it fast | asap | deadline next week | can you do it quickly | express | jaldi chahiye | urgent kaam | is hafte chahiye
a: We'll do our best for tight deadlines! ⚡ Share your deadline on [WhatsApp]({WA_LINK}) or a [quick call](#book) and we'll tell you honestly what's possible by then.
ur: Hum tight deadline ke liye poori koshish karte hain! ⚡ Apni deadline [WhatsApp]({WA_LINK}) par batayein, hum imaandari se batayenge kya mumkin hai.

## start-when
q: when can you start | availability | are you available now | how soon can we start | taking new projects | kab shuru kar sakte ho | abhi available ho | naya kaam le rahe ho
a: We're currently **taking new projects** 🟢. After the discovery call and quote approval, we can usually start soon. [Book a call](#book) to lock a start date.
ur: Hum abhi **naye projects le rahe hain** 🟢. Call aur quote ke baad jaldi kaam shuru ho sakta hai.

## portfolio
q: show me your work | portfolio | previous work | examples | case studies | projects you have done | samples | apka kaam dikhao | portfolio dikhao | pehle kya banaya hai | examples dikhao
a: You can see examples on our [Work page](work.html): web apps, Shopify stores, branding, mobile apps and more. [EDIT] Replace the sample projects with your real case studies. We can also share relevant work on a [call](#book).
ur: Hamara kaam [Work page](work.html) par dekhein. [EDIT] Sample projects ki jagah asli projects lagayein. Call par related kaam bhi dikha sakte hain.

## clients
q: who are your clients | which companies have you worked with | client list | big clients | brands you worked with | kis kis ke liye kaam kiya | clients kaun hain
a: [EDIT] Add the clients or industries you've worked with here (only ones you're allowed to mention). We're happy to share relevant examples on a [free call](#book).
ur: [EDIT] Apne clients ya industries yahan likhein. Call par related examples share kar sakte hain.

## reviews
q: reviews | testimonials | what do clients say | feedback | ratings | are you trustworthy | can i trust you | reviews kahan hain | log kya kehte hain | bharosa kaise karun
a: [EDIT] Add real client testimonials or a link to your reviews here. We work with written agreements, milestone payments and weekly updates, so you always see progress before paying more.
ur: [EDIT] Asli reviews ya link yahan lagayein. Hum written agreement, milestone payments aur weekly updates ke saath kaam karte hain.

## industries
q: which industries do you work with | do you work with restaurants | real estate website | clinic website | school website | fashion brand | startups | small business | kis industry ke liye | restaurant ki website | clinic ki website
a: We work with all kinds of businesses: startups, e-commerce and fashion brands, clinics, restaurants, real estate, education, services and more. Different industry? Tell us about it!
ur: Hum har tarah ke business ke saath kaam karte hain: startups, fashion, clinics, restaurants, real estate, education waghera.

## book-call
q: book a video call | book a call | schedule a meeting | i want a meeting | video call | google meet | zoom call | talk to someone | consultation booking | call book karni hai | meeting chahiye | video call karni hai | baat karni hai team se
a: Great! 📅 You can book a **free 30-minute video call** (Google Meet or Zoom): [open the booking calendar](#book), pick a day and time, and add your name and email.
ur: Zaroor! 📅 **Free 30 minute video call** (Google Meet ya Zoom) book karein: [booking calendar kholein](#book), din aur time chunein, naam aur email likhein.

## reschedule
q: reschedule my call | change meeting time | cancel meeting | i cant make the call | move my appointment | call ka time badalna | meeting cancel | reschedule
a: No problem, just reply to the confirmation email or message us on [WhatsApp]({WA_LINK}) and we'll find a new time.
ur: Koi masla nahi, confirmation email ka jawab dein ya [WhatsApp]({WA_LINK}) karein, naya time rakh lenge.

## prepare-call
q: what should i prepare for the call | what do you need from me | before the meeting | information needed | what to bring | call se pehle kya tayyar karun | aapko kya chahiye
a: Nothing formal! Helpful to have: a short description of your business and goal, any websites you like, your rough budget and timeline, and existing logo or content if you have them.
ur: Kuch khaas nahi! Achha hai agar aap batayein: business aur goal, pasandida websites, andaza budget aur timeline.

## human
q: talk to a human | real person | can i speak to someone | agent | customer service | are you a real person | insaan se baat | kisi bande se baat karni hai | team se baat
a: Of course! 🙋 Message the team on [WhatsApp]({WA_LINK}), email {EMAIL}, or [book a video call](#book). A real person replies within one working day.
ur: Bilkul! 🙋 Team ko [WhatsApp]({WA_LINK}) karein, {EMAIL} par email karein, ya [video call book karein](#book).

## response-time
q: how fast do you reply | response time | when will you reply | how long to get a reply | jawab kab tak | kitni der mein reply | reply kab milega
a: We reply within **one working day**, usually much sooner on WhatsApp.
ur: Hum **ek working day** mein jawab dete hain, WhatsApp par aksar jaldi.

## send-message
q: send a message | contact form | fill the form | leave a message | write to you | email you | message bhejna hai | form kahan hai
a: Use the [contact form](#contact) (tab "Send a message"): add your name, email, what you need and a few lines about your project. We'll reply within one working day.
ur: [Contact form](#contact) mein naam, email aur project ke baare mein likhein. Hum ek working day mein jawab denge.

## quote
q: get a quote | quotation | estimate | proposal | i want a quote | send me a quote | price estimate | quote chahiye | estimate do | proposal bhejo
a: Happy to! 🧾 Tell us about your project in the [contact form](#contact) or on a [free call](#book), and we'll send a **fixed quote** with scope, timeline and price.
ur: Zaroor! 🧾 [Contact form](#contact) ya [free call](#book) par project batayein, hum **fixed quote** bhejenge.

## mvp
q: mvp | minimum viable product | startup idea | i have an app idea | validate my idea | build my startup | startup ke liye | idea hai app ka | mvp kya hota hai
a: Love that! 🚀 For startups we usually build an **MVP**: the smallest version with the core features, so you can launch fast, test with real users and grow from there. Tell me your idea in one line?
ur: Zabardast! 🚀 Startups ke liye hum **MVP** banate hain: sirf zaroori features ke saath choti version, taake jaldi launch ho aur asli users se test ho.
`;
