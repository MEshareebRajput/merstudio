/* =====================================================================
   MER chatbot knowledge base, part 3: small talk, the assistant itself,
   and detailed follow-up questions about projects.
   Same format as part 1 (## id / q: / a: / ur:).
   ===================================================================== */
window.MER_KB = (window.MER_KB || "") + `
## hello
q: hi | hello | hey | hey there | hello there | hi there | yo | hiya | greetings | good day | salam | assalam o alaikum | assalamualaikum | aoa | salaam | hello mer | hi mer | hey team | hi bot | hlo | hii
a: Hello! 👋 Welcome to MER. How can I help you today? You can ask about our services, prices, timelines, or book a free call.
ur: Walaikum assalam! 👋 MER mein khush aamdeed. Main aapki kya madad kar sakta hun? Services, prices, waqt, ya free call ke baare mein poochein.

## good-morning
q: good morning | good afternoon | good evening | good night | morning | subha bakhair | shab bakhair | evening
a: Hello, and a great day to you! ☀️ What can I help you with?
ur: Aapka din achha guzre! ☀️ Bataiye main kya madad kar sakta hun?

## how-are-you
q: how are you | how are you doing | how is it going | whats up | sup | how r u | kaise ho | kya haal hai | kese ho | aap kaise hain | sab theek | kya chal raha hai
a: I'm doing great, thanks for asking! 😊 Ready to help. What are you working on?
ur: Main bilkul theek hun, shukriya! 😊 Bataiye aap kis cheez par kaam kar rahe hain?

## who-are-you
q: who are you | what are you | are you a bot | are you a robot | are you human | are you ai | is this a real person | am i talking to a bot | what is your name | your name | aap kaun ho | kya aap bot ho | insaan ho ya bot | aapka naam kya hai | tum kon ho
a: I'm the **MER Assistant** 🤖, an automated helper that answers common questions about MER instantly. For anything detailed, a real person on our team is one [WhatsApp]({WA_LINK}) or [video call](#book) away.
ur: Main **MER Assistant** 🤖 hun, ek automated helper jo MER ke aam sawalon ka foran jawab deta hai. Tafseeli baat ke liye team se [WhatsApp]({WA_LINK}) ya [video call](#book) karein.

## what-can-you-do
q: what can you do | how can you help | help | help me | what can i ask | what do you know | options | menu | start | i need help | kya kar sakte ho | kya pooch sakta hun | madad chahiye | help karo
a: I can help with:
- Our **services** (websites, Shopify, apps, branding, AI, SEO, video, UGC, photo)
- **Prices** and **timelines**
- How our **process** works
- **Booking** a free video call
- General questions about websites, design and marketing
Just type your question!
ur: Main in cheezon mein madad kar sakta hun:
- Hamari **services**
- **Prices** aur **waqt**
- Hamara **process**
- Free video call **book** karna
- Website, design aur marketing ke general sawal

## thanks
q: thanks | thank you | thank you so much | thanks a lot | thx | ty | appreciate it | great thanks | nice thanks | shukriya | bohot shukriya | jazakallah | meherbani | thanks bhai | thank u
a: You're very welcome! 😊 Anything else I can help with?
ur: Aapka bhi shukriya! 😊 Kuch aur poochna ho to batayein.

## bye
q: bye | goodbye | see you | see ya | later | talk later | thats all | nothing else | im done | allah hafiz | khuda hafiz | phir milte hain | bas itna hi | ok bye
a: Thanks for stopping by! 👋 Whenever you're ready, you can [book a free call](#book) or message us on [WhatsApp]({WA_LINK}). Have a great day!
ur: Aane ka shukriya! 👋 Jab chahein [free call book karein](#book) ya [WhatsApp]({WA_LINK}) karein. Allah Hafiz!

## ok
q: ok | okay | k | alright | cool | got it | i see | understood | fine | sure | hmm | acha | achha | theek hai | thik hai | samajh gaya | ji | han
a: 👍 Is there anything else you'd like to know? For example our prices, timelines or how to book a call.
ur: 👍 Kuch aur jaanna chahenge? Jaise prices, waqt ya call kaise book karein.

## yes
q: yes | yeah | yep | yes please | sure please | of course | definitely | haan | ji haan | bilkul | zaroor
a: Great! 🙌 The quickest next step is a [free 30-minute video call](#book) where we can discuss everything. Or tell me more about your project here.
ur: Zabardast! 🙌 Agla qadam ek [free 30 minute video call](#book) hai. Ya yahin project ke baare mein batayein.

## no
q: no | nope | no thanks | not now | maybe later | nah | nahi | nahi shukriya | abhi nahi | baad mein
a: No problem at all! 🙂 I'm here if you have any other questions.
ur: Koi baat nahi! 🙂 Koi aur sawal ho to main yahin hun.

## compliment
q: nice website | great website | love your website | awesome site | cool design | beautiful website | amazing | wow | your site is great | zabardast website | bohot achhi website | website kamaal hai
a: Thank you so much! 💜 We built it ourselves, and we'd love to make something just as special for you. Want to see more of our [work](work.html)?
ur: Bohot shukriya! 💜 Ye hum ne khud banayi hai, aur aapke liye bhi aisa kuch khaas bana sakte hain. Hamara [kaam](work.html) dekhein?

## love
q: i love you | love you | you are cute | marry me | you are sweet | i like you | pyar | tum achhe ho
a: Aww, that's sweet! 😊 I'm just a bot, but I'm happy to help with your website or project anytime.
ur: Aww, shukriya! 😊 Main sirf bot hun, magar aapke project mein madad ke liye hamesha hazir hun.

## joke
q: tell me a joke | joke | make me laugh | say something funny | are you funny | koi joke sunao | mazak karo | latifa sunao
a: Why did the web designer go broke? 🤔 Because he used up all his **cache**! 😄 Want to hear about something more useful, like our services?
ur: Web designer ka bank balance kyun khatam ho gaya? 🤔 Kyunki usne saara **cache** kharch kar diya! 😄

## bored
q: im bored | entertain me | boring | say something | fun fact | interesting fact | bore ho raha hun | kuch interesting batao
a: Fun fact: the first website ever is still online. It went live in 1991 and was just plain text with links! 🌐 Websites have come a long way, like this one with 3D and animations. 😉
ur: Dilchasp baat: duniya ki pehli website 1991 mein bani thi aur ab bhi online hai, sirf text aur links ke saath! 🌐

## angry
q: this is useless | you are stupid | bad bot | you dont understand | not helpful | worst | you are dumb | bekar ho | samajh nahi aata tumhe | faltu bot
a: Sorry I couldn't help with that! 🙏 I'm an automated assistant with limited answers. A real person can help right away on [WhatsApp]({WA_LINK}) or a [quick call](#book).
ur: Maafi chahta hun! 🙏 Main limited jawab wala bot hun. Team se foran [WhatsApp]({WA_LINK}) ya [call](#book) par baat karein.

## sorry
q: sorry | my bad | oops | apologies | maaf karna | sorry yaar
a: No worries at all! 😊 What would you like to know?
ur: Koi baat nahi! 😊 Bataiye kya jaanna hai?

## language
q: do you speak urdu | can i ask in urdu | roman urdu | urdu mein baat karo | hindi | english | which languages | kya urdu mein jawab doge | urdu aati hai
a: Yes! You can ask in **English** or **Roman Urdu** and I'll reply in the same style. 🙂 Our team speaks English and Urdu too.
ur: Ji haan! Aap **English** ya **Roman Urdu** mein poochein, main usi andaz mein jawab dunga. 🙂

## time-now
q: what time is it in pakistan | your local time | time zone | which timezone | pakistan time | abhi kya time hai | aapka time zone
a: We're in **Pakistan Standard Time (PKT, GMT+5)**. Booking slots on our calendar are shown in PKT, and we're happy to schedule around your time zone.
ur: Hum **Pakistan time (PKT, GMT+5)** mein hain. Calendar par slots PKT mein hain, aur hum aapke time ke hisaab se adjust kar lete hain.

## project-idea
q: i have a project | i want to start a project | new project | i need something built | can you help with my idea | i have an idea | mera project hai | naya project shuru karna hai | idea hai mere paas
a: Exciting! 🚀 Tell me in one line: what do you want to build (website, store, app, brand, videos)? Or jump straight to a [free 30-minute call](#book) and we'll plan it together.
ur: Zabardast! 🚀 Ek line mein batayein kya banana hai (website, store, app, brand, videos)? Ya seedha [free call book karein](#book).

## restaurant
q: website for restaurant | restaurant website | food business website | cafe website | online menu | food ordering website | restaurant ki website | cafe ke liye website | online menu banwana
a: We'd love to! 🍽️ A restaurant site usually includes a mouth-watering menu, photos, location and hours, reservations or online ordering, and WhatsApp/Google Maps integration. We can also shoot food photos and reels.
ur: Zaroor! 🍽️ Restaurant website mein menu, photos, location, timings, booking ya online order, aur WhatsApp/Maps hota hai. Food photos aur reels bhi bana sakte hain.

## clinic
q: website for clinic | doctor website | hospital website | dental clinic website | appointment booking for clinic | clinic ki website | doctor ki website
a: For clinics we build clean, trustworthy sites with services, doctor profiles, online appointment booking, reviews and local SEO, so patients nearby can find you on Google.
ur: Clinics ke liye hum saaf aur bharosemand websites banate hain: services, doctors, online appointment, reviews aur local SEO.

## real-estate
q: real estate website | property website | property listings | realtor website | real estate ki website | property portal
a: Real estate sites need beautiful listings with filters, photo galleries/virtual tours, maps, enquiry forms and WhatsApp buttons. We can also build an admin panel to manage properties.
ur: Real estate websites mein listings, filters, photos, maps aur enquiry forms hote hain, aur properties manage karne ka admin panel.

## school
q: school website | education website | academy website | online course website | lms | coaching website | school ki website | online course
a: For schools and academies: admissions info, courses, events, gallery, and optionally an online course platform (LMS) with student logins and payments.
ur: Schools aur academies ke liye: admissions, courses, events, gallery, aur chahein to online course platform.

## fashion-brand
q: clothing brand website | fashion store | boutique website | apparel brand | clothes online store | kapron ka brand | boutique ki website
a: Fashion brands shine with a premium Shopify store, great product photography, size guides, lookbooks and UGC try-on videos. We can handle store, photos and video content together. 👗
ur: Fashion brands ke liye premium Shopify store, achhi photos, size guide aur UGC try-on videos. Hum ye sab saath kar sakte hain. 👗

## personal-brand
q: personal website | portfolio website for me | personal brand | resume website | freelancer portfolio | apni personal website | portfolio site
a: A personal site is a great way to stand out: about you, your work or services, testimonials and a contact/booking button. It can be a fast, beautiful one-page site.
ur: Personal website aapko alag dikhati hai: aapka taaruf, kaam, reviews aur contact button. Ek fast one-page site bhi kaafi hai.

## nonprofit
q: ngo website | charity website | donation website | non profit | ngo ki website | donation lena
a: We can build NGO and charity sites with your story and impact, projects, volunteer sign-ups and online donations. [EDIT] Add any nonprofit discount here.
ur: Hum NGO websites bana sakte hain: kahani, projects, volunteers aur online donations. [EDIT] Koi discount ho to yahan likhein.

## booking-system
q: booking system | appointment booking | reservation system | online booking for my business | calendar booking | booking system chahiye | appointment wala system
a: Yes, we can add online booking: customers pick a service, date and time, get confirmations and reminders, and you manage everything from a dashboard or calendar.
ur: Ji haan, online booking add kar sakte hain: customer service, din aur time chunta hai, confirmation milti hai, aur aap dashboard se manage karte hain.

## multilingual
q: multilingual website | website in urdu and english | arabic website | two languages | translation | urdu website | do zabanon mein website | arabic mein website
a: Yes, we build multilingual sites (for example English + Urdu or Arabic), including right-to-left layouts and SEO for each language.
ur: Ji haan, hum kai zabanon wali websites banate hain (English + Urdu ya Arabic), right-to-left layout aur SEO samait.

## blog-setup
q: add a blog | blog section | can i have a blog | news section | blog banwana | blog chahiye
a: Sure! We can add a blog you can update yourself, with categories, SEO settings and nice post layouts, which is great for Google traffic.
ur: Zaroor! Blog add kar sakte hain jo aap khud update karein, SEO settings ke saath.

## integrations
q: integrate with my crm | hubspot | zoho | google sheets integration | connect my tools | mailchimp integration | integration karoge | crm se connect
a: Yes, we connect your site to tools like CRMs (HubSpot, Zoho), Google Sheets, email marketing, WhatsApp and payment gateways, so leads and orders flow automatically.
ur: Ji haan, website ko CRM, Google Sheets, email marketing aur WhatsApp se jod sakte hain taake leads khud aayen.

## whatsapp-button
q: whatsapp button on website | whatsapp chat on site | click to chat | whatsapp integration | website par whatsapp button
a: Absolutely, a WhatsApp button is one of the easiest ways to get more enquiries. We add it with a pre-filled message so customers can reach you in one tap.
ur: Bilkul, WhatsApp button se enquiries barhti hain. Hum pehle se likha message ke saath laga dete hain.

## existing-content
q: i dont have content | i dont have photos | who provides the text | do i need to provide images | content nahi hai mere paas | photos nahi hain
a: No worries! We can help write the text, use quality stock images, or do a photo/video shoot so your site looks its best.
ur: Koi masla nahi! Hum text likhne mein madad, stock images, ya photo/video shoot kar sakte hain.

## logo-needed
q: do i need a logo first | i dont have a logo | can you make the logo too | logo nahi hai | pehle logo chahiye
a: Not a problem! We can create your logo and brand identity first, then design the website to match, all in one project.
ur: Koi masla nahi! Hum pehle logo aur branding bana kar phir website usi ke mutabiq design kar dete hain.

## see-design-first
q: can i see the design before development | approve design | preview before launch | demo link | design pehle dikhaoge | approve kar sakta hun
a: Yes, always. You approve the designs in Figma before we build, and you get a preview link to review the site before it goes live.
ur: Ji haan, hamesha. Build se pehle aap Figma mein design approve karte hain, aur live hone se pehle preview link milta hai.

## changes-later
q: can i make changes later | add pages later | grow the website later | future changes | baad mein changes | baad mein pages add
a: Definitely. We build sites to grow: you can add pages, features or a store later, either yourself through the CMS or with our help.
ur: Bilkul. Website aise banti hai ke baad mein pages ya features add ho sakein, khud ya hamari madad se.

## guarantee
q: do you guarantee results | guaranteed ranking | money back guarantee | will i get sales | guarantee dete ho | sales ki guarantee
a: We can't honestly guarantee specific rankings or sales (nobody can), but we guarantee a clear scope, quality work, weekly updates and that you own everything. We focus on what actually drives results.
ur: Koi bhi imaandari se ranking ya sales ki guarantee nahi de sakta, magar hum clear scope, quality kaam, weekly updates aur malkiyat ki guarantee dete hain.

## free-work
q: can you do it for free | free website | trial | free sample | test project | free mein bana do | trial milega
a: The discovery call and quote are completely **free**. Project work itself is paid, but we can start small (like a landing page or MVP) so you can try working with us with low risk.
ur: Discovery call aur quote bilkul **free** hain. Kaam paid hai, magar chhote project se shuru kar sakte hain.

## competitor
q: is mer better than other agencies | compare with fiverr | fiverr vs mer | upwork | why not fiverr | fiverr se kyun nahi
a: Marketplaces can be great for small tasks. With MER you get a dedicated team, a custom strategy, design + development + content together, direct communication and long-term support.
ur: Choti tasks ke liye marketplaces theek hain. MER mein aapko poori team, strategy, design + development + content aur long-term support milta hai.

## demo-site
q: is this website made by you | who made this website | how was this site built | what is this site built with | ye website kisne banayi | ye site kis se bani hai
a: Yes, we designed and built this site ourselves 😊 using custom code, GSAP and Lenis for animations, and 3D effects. We can build something like it for you.
ur: Ji haan, ye site hum ne khud banayi hai 😊 custom code, GSAP animations aur 3D ke saath. Aapke liye bhi bana sakte hain.

## chatbot-own
q: how does this chatbot work | is this chatbot ai | does this bot use chatgpt | how were you made | ye chatbot kaise kaam karta hai | kya ye chatgpt hai
a: I work from a knowledge base of common questions about MER and websites, matched instantly in your browser: no data is sent anywhere. We can build a chatbot like this (or a full AI one) for your business too.
ur: Main MER ke aam sawalon ke knowledge base se kaam karta hun, sab kuch aapke browser mein. Aapke business ke liye bhi aisa chatbot bana sakte hain.

## data-safe
q: is my data safe | do you store my messages | privacy of chat | do you save this chat | mera data safe hai | chat save hoti hai
a: This chat runs in your browser and isn't sent to a server. When you use the contact form or booking, your details are only used to reply to you; see our [terms](terms.html).
ur: Ye chat aapke browser mein chalti hai, server par nahi jaati. Contact form ki details sirf jawab dene ke liye use hoti hain.

## location-meet
q: can we meet in person | office visit | meet face to face | physical meeting | can i visit your office | mil sakte hain | office aa sakta hun
a: Most of our work happens over video calls, which keeps things fast for everyone. [EDIT] If you offer in-person meetings in your city, add the details here.
ur: Zyada tar kaam video calls par hota hai. [EDIT] Agar aap shehar mein mulaqat karte hain to yahan likhein.

## after-hours
q: are you available now | is anyone online | can someone reply now | koi online hai | abhi koi hai
a: I'm here 24/7 🤖. The team usually replies within one working day; for something quick, [WhatsApp]({WA_LINK}) is fastest.
ur: Main 24/7 hazir hun 🤖. Team ek working day mein jawab deti hai; jaldi ke liye [WhatsApp]({WA_LINK}) karein.

## domain-transfer
q: transfer my domain | i already have a domain | use my existing domain | connect my domain | mera domain pehle se hai | domain connect karna
a: No problem, we'll connect your existing domain to the new site (or help transfer it), keeping your email working.
ur: Koi masla nahi, hum aapka maujooda domain nayi site se jod denge aur email bhi chalti rahegi.

## existing-hosting
q: i already have hosting | use my hosting | my own server | pehle se hosting hai
a: That's fine, we can deploy on your existing hosting if it meets the site's needs, or suggest a better option if it's too slow.
ur: Theek hai, agar aapki hosting theek hai to wahi use kar lenge, warna behtar option batayenge.

## how-pay-safe
q: is it safe to pay you | how do i know you will deliver | payment safety | trust payment | paisa safe hai | deliver karoge ya nahi
a: Fair question! We work with a written agreement, milestone payments (you pay as work progresses) and weekly preview links, so you always see real progress.
ur: Bilkul jaiz sawal! Written agreement, milestone payments aur weekly preview links ke saath kaam hota hai, taake aap progress dekhte rahein.
`;
