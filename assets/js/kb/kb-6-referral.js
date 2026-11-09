/* =====================================================================
   MER chatbot knowledge base, part 6: sharing, "not ready yet", trust.
   The website link comes from site-content.js (siteUrl).
   ===================================================================== */
(() => {
  const S = window.SITE || {};
  const url = S.siteUrl || location.href.split("#")[0].replace(/[^/]*$/, "index.html");

  window.MER_KB = (window.MER_KB || "") + `
## refer
q: refer a friend | referral | can i refer someone | recommend you to a friend | i know someone who needs a website | how can i recommend mer | referral program | do you give a referral bonus | introduce a client | kisi ko refer karna hai | dost ko recommend karna | referral bonus milta hai | mere dost ko website chahiye
a: That's really kind, thank you! 🙌 Just send them our website link (${url}) or our WhatsApp {WHATSAPP}, and they can [book a free call](#book) anytime.
ur: Bohot meherbani! 🙌 Unhe hamari website ka link (${url}) ya WhatsApp {WHATSAPP} bhej dein, woh kabhi bhi [free call book](#book) kar sakte hain.

## share-site
q: share your website | send me your link | how do i share your site | share mer | your website link | website address | link bhejo | website ka link do | share kaise karun | apni website ka link
a: Here's our link: ${url} 🔗
ur: Ye raha hamara link: ${url} 🔗

## save-contact
q: save your contact | vcard | contact card | add you to my phone | save your number | business card | number save karna hai | contact save karna | aapka contact card
a: Save us as: **MER, Creative & Digital Studio**, WhatsApp {WHATSAPP}, email {EMAIL}. 📇
ur: Is naam se save karein: **MER, Creative & Digital Studio**, WhatsApp {WHATSAPP}, email {EMAIL}. 📇

## not-ready
q: im not ready yet | maybe later | just looking | just browsing | not now but maybe in future | abhi zaroorat nahi | bas dekh raha hun | baad mein karwaunga | abhi project nahi hai
a: No problem at all! 😊 Take your time and look around our [work](work.html). Whenever you're ready, a [free call](#book) or a WhatsApp message to {WHATSAPP} is all it takes.
ur: Koi baat nahi! 😊 Aaram se hamara [kaam](work.html) dekhein. Jab tayyar hon, [free call](#book) ya {WHATSAPP} par WhatsApp kar dein.

## trust
q: why should i trust you | are you reliable | are you legit | is mer trustworthy | can i trust this agency | is this agency real | aap par bharosa kaise karun | kya ye agency theek hai | reliable ho | legit ho
a: Fair question! Here's how we work on every project:
- **Fixed quote** before we start, no surprise invoices
- **Milestone payments**, so you pay as work progresses
- **Weekly updates** with preview links
- **You own everything** once it's paid
And you can always [talk to us on a free call](#book) first.
ur: Bilkul jaiz sawal! Har project mein hum:
- Kaam se pehle **fixed quote** dete hain
- **Milestone payments** lete hain
- **Har hafte update** aur preview link dete hain
- Payment ke baad **sab kuch aapka** hota hai
Pehle [free call](#book) par baat bhi kar sakte hain.
`;
})();
