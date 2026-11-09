/* =====================================================================
   MER chatbot knowledge base, part 6: referrals, sharing, trust.
   The reward and link come from site-content.js (referral + siteUrl).
   ===================================================================== */
(() => {
  const S = window.SITE || {};
  const R = S.referral || {};
  const url = S.siteUrl || location.href.split("#")[0].replace(/[^/]*$/, "index.html");
  const reward = R.reward ? ` If they start a project with us, we'll thank you with **${R.reward}**.` : "";
  const rewardUr = R.reward ? ` Agar woh project shuru karein to hum shukriye mein **${R.reward}** denge.` : "";

  window.MER_KB = (window.MER_KB || "") + `
## refer
q: refer a friend | referral | can i refer someone | recommend you to a friend | i know someone who needs a website | how can i recommend mer | referral program | do you give a referral bonus | referral reward | commission for referral | introduce a client | kisi ko refer karna hai | dost ko recommend karna | referral bonus milta hai | kisi aur ko bhejna hai | mere dost ko website chahiye
a: That's really kind! 🙌 You can [introduce a friend here](#refer) (we'll mention you sent them) or share our website on WhatsApp in one tap.${reward}
ur: Bohot meherbani! 🙌 Aap [yahan dost ka taaruf karwa dein](#refer) (hum batayenge ke aap ne bheja), ya ek click mein WhatsApp par website share karein.${rewardUr}

## share-site
q: share your website | send me your link | how do i share your site | share mer | your website link | website address | link bhejo | website ka link do | share kaise karun | apni website ka link
a: Here's our link to share: ${url} 🔗 You can also use the share buttons in the [Spread the word](#refer) section (WhatsApp, LinkedIn, Facebook, X or copy link).
ur: Ye raha hamara link: ${url} 🔗 [Spread the word](#refer) section mein WhatsApp, LinkedIn aur Facebook ke share buttons bhi hain.

## save-contact
q: save your contact | vcard | contact card | add you to my phone | save your number | business card | number save karna hai | contact save karna | aapka contact card
a: Tap **[Save our contact](#refer)** and MER is added to your phone in one click, so it's easy to share with friends later. 📇
ur: **[Save our contact](#refer)** dabayein, MER ek click mein aapke phone mein save ho jaayega, taake baad mein doston ko bhej sakein. 📇

## not-ready
q: im not ready yet | maybe later | just looking | just browsing | not now but maybe in future | abhi zaroorat nahi | bas dekh raha hun | baad mein karwaunga | abhi project nahi hai
a: No problem at all! 😊 Feel free to look around. If you know anyone who needs a website, store, app or videos, [share us with them](#refer). And [save our contact](#refer) for whenever you're ready.
ur: Koi baat nahi! 😊 Aaram se dekhein. Kisi ko website, store, app ya videos chahiye hon to [unhe share kar dein](#refer), aur [hamara contact save kar lein](#refer).

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
