/* ==========================================================
   BCF GUIDE: a friendly FAQ avatar for the website.
   Add <script src="avatar.js"></script> just before </body>.
   Everything (styles + chat window) is created by this file.
   Edit the CONFIG and INTENTS sections below to change answers.
========================================================== */
(function () {
    "use strict";

    /* ================= EDIT THIS PART ================= */

    var CONFIG = {
        name: "Virtue",
        subtitle: "BCF guide, ask me anything",
        greeting: "Hii! I'm Virtue, your BCF guide. Ask me about services, events, departments, or how to reach us. Tap a question below or type your own.",
        bubble: "Hii! I'm Virtue",
        bubbleMessages: [                                // the avatar rotates through these
            "Hii! I'm Virtue, welcome to BCF",
            "Ask me anything about the fellowship",
            "Want our service times? Just ask me",
            "Hii again! It's Virtue, I'm right here if you need me"
        ],
        sound: true,                                     // a soft chime with each "hii" (only after the visitor has tapped the page)
        soundVolume: 0.12,                               // 0 to 1, keep it low
        voice: true,                                     // Virtue says "Hii, I am Virtue..." out loud once (after the visitor's first tap)
        voiceFile: "",                                   // BEST: a recording of a real girl's voice, e.g. "audio/virtue-hii.mp3"
        voiceText: "Hii, I am Virtue. Welcome to Baze Christian Fellowship. Ask me anything.",
        talkAnswers: true,                               // Virtue reads every answer out loud (the speaker button in the chat mutes her)
        voiceName: "Microsoft Zira - English (United States)",
voicePitch: 2,
voiceFallbackPitch: 2,
voiceRate: 1,                                  // speed: 1 = normal, a little faster sounds younger
        voiceFallbackPitch: 2,                           // same idea, used when the device only has a male voice
        voiceFilePitch: 1,                               // for a recording: 1 = as recorded, 1.25 = higher, cuter, a bit faster
        bubbleFirstDelay: 1500,                          // ms after the pop-ups close
        bubbleEvery: 18000,                              // ms between each "hii"
        bubbleStay: 6000,                                // ms each message stays
        bubbleMaxTimes: 6,                               // stops after this many, or once the chat is opened
        whatsapp: "2348126725841",                       // Secretary WhatsApp (no + or spaces)
        email: "bazechristianfellowship@gmail.com",
        groupLink: "https://chat.whatsapp.com/BudRLYwGvZM6FBNCrhBqAm",
        instagram: "https://www.instagram.com/bazechristianfellowship/",
        tiktok: "https://www.tiktok.com/@baze.christian.fe",
        youtube: "https://www.youtube.com/@Bazechristianfellowship",
        avatarLayout: "full",                             // "full" = whole body standing in the corner, "circle" = round face button
        avatarStyle: "guide",                             // "guide" (inspired by the photo), "girl" or "boy"
        avatarImage: "images/guide-body.png",                  // the picture that stands in the corner
        avatarHandImage: "images/guide-hand.png",         // his hand, as its own picture so it can really wave ("" = no waving hand)
        avatarHandBox: "left:0.00%;top:55.99%;width:17.65%;height:20.05%",
        avatarHandPivot: "94.4% 74.0%",                 // the wrist, where the hand turns
        avatarHeadImage: "images/guide-face.jpg",        // close-up of the face for the chat header (optional)
        prayerFormLink: "https://forms.gle/se6wFpaeUaVq842EA"                               // paste your Google Form link here later
    };

    function wa(message) {
        return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(message);
    }

    var AVATARS = {
        girl:
            '<svg class="bcfa-face" viewBox="0 0 100 100" aria-hidden="true" focusable="false">' +
            '<ellipse cx="50" cy="36" rx="27" ry="25" fill="#1a1018"/>' +
            '<circle cx="26" cy="46" r="9" fill="#1a1018"/><circle cx="74" cy="46" r="9" fill="#1a1018"/>' +
            '<path d="M10 104 Q12 79 36 74 L50 82 L64 74 Q88 79 90 104 Z" fill="#f2b84b"/>' +
            '<rect x="43" y="64" width="14" height="16" rx="5" fill="#7f4f32"/>' +
            '<path d="M39 74 L50 88 L61 74 Z" fill="#9a6340"/>' +
            '<ellipse cx="50" cy="49" rx="19" ry="22" fill="#9a6340"/>' +
            '<path d="M31 45 Q33 26 50 25 Q67 26 69 45 Q60 34 50 34 Q40 34 31 45 Z" fill="#1a1018"/>' +
            '<path d="M37 41 Q42 38.5 47 41" stroke="#1a1018" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
            '<path d="M53 41 Q58 38.5 63 41" stroke="#1a1018" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
            '<ellipse cx="42" cy="48" rx="2.4" ry="3" fill="#1a1018"/><ellipse cx="58" cy="48" rx="2.4" ry="3" fill="#1a1018"/>' +
            '<circle cx="42.8" cy="46.9" r="0.9" fill="#fff"/><circle cx="58.8" cy="46.9" r="0.9" fill="#fff"/>' +
            '<path d="M50 50 Q48.5 55 50.5 55.5" stroke="#6b3d26" stroke-width="1.3" fill="none" stroke-linecap="round"/>' +
            '<circle cx="37" cy="56" r="4" fill="#ff8a7a" opacity="0.3"/><circle cx="63" cy="56" r="4" fill="#ff8a7a" opacity="0.3"/>' +
            '<path d="M41.5 58 Q50 66 58.5 58 Q50 61.5 41.5 58 Z" fill="#fff" stroke="#5a2a1a" stroke-width="1.4" stroke-linejoin="round"/>' +
            '<circle cx="31" cy="55" r="2.2" fill="#ffe08a"/><circle cx="69" cy="55" r="2.2" fill="#ffe08a"/>' +
            '</svg>',
        boy:
            '<svg class="bcfa-face" viewBox="0 0 100 100" aria-hidden="true" focusable="false">' +
            '<ellipse cx="50" cy="38" rx="21" ry="17" fill="#1a1018"/>' +
            '<path d="M10 104 Q12 79 36 74 L50 82 L64 74 Q88 79 90 104 Z" fill="#f8f7f3"/>' +
            '<rect x="43" y="64" width="14" height="16" rx="5" fill="#7f4f32"/>' +
            '<path d="M39 74 L50 88 L61 74 Z" fill="#9a6340"/>' +
            '<path d="M36 75 L48 88 L40 93 L29 80 Z" fill="#ffffff" stroke="#d9d4cc" stroke-width="1"/>' +
            '<path d="M64 75 L52 88 L60 93 L71 80 Z" fill="#ffffff" stroke="#d9d4cc" stroke-width="1"/>' +
            '<circle cx="31" cy="50" r="3.5" fill="#9a6340"/><circle cx="69" cy="50" r="3.5" fill="#9a6340"/>' +
            '<ellipse cx="50" cy="49" rx="19" ry="22" fill="#9a6340"/>' +
            '<path d="M31 44 Q31 26 50 25 Q69 26 69 44 Q62 35 50 35 Q38 35 31 44 Z" fill="#1a1018"/>' +
            '<path d="M37 42 Q42 39.5 47 42" stroke="#1a1018" stroke-width="1.9" fill="none" stroke-linecap="round"/>' +
            '<path d="M53 42 Q58 39.5 63 42" stroke="#1a1018" stroke-width="1.9" fill="none" stroke-linecap="round"/>' +
            '<ellipse cx="42" cy="48.5" rx="2.4" ry="3" fill="#1a1018"/><ellipse cx="58" cy="48.5" rx="2.4" ry="3" fill="#1a1018"/>' +
            '<circle cx="42.8" cy="47.4" r="0.9" fill="#fff"/><circle cx="58.8" cy="47.4" r="0.9" fill="#fff"/>' +
            '<path d="M50 50 Q48.5 55 50.5 55.5" stroke="#6b3d26" stroke-width="1.3" fill="none" stroke-linecap="round"/>' +
            '<circle cx="37" cy="56" r="4" fill="#ff8a7a" opacity="0.25"/><circle cx="63" cy="56" r="4" fill="#ff8a7a" opacity="0.25"/>' +
            '<path d="M41.5 58 Q50 66 58.5 58 Q50 61.5 41.5 58 Z" fill="#fff" stroke="#5a2a1a" stroke-width="1.4" stroke-linejoin="round"/>' +
            '</svg>'
    };

    var FULL = CONFIG.avatarLayout !== "circle";

    var FULL_BODY = {
        girl:
            '<svg class="bcfa-body" viewBox="0 0 120 230" aria-hidden="true" focusable="false">' +
            '<ellipse cx="60" cy="224" rx="30" ry="5" fill="rgba(0,0,0,0.35)"/>' +
            '<rect x="46" y="170" width="11" height="48" rx="5.5" fill="#9a6340"/>' +
            '<rect x="64" y="170" width="11" height="48" rx="5.5" fill="#9a6340"/>' +
            '<ellipse cx="50.5" cy="220" rx="10" ry="5" fill="#1a1018"/>' +
            '<ellipse cx="69.5" cy="220" rx="10" ry="5" fill="#1a1018"/>' +
            '<path d="M38 124 Q60 132 82 124 L96 178 Q60 190 24 178 Z" fill="#1b1260" stroke="#f2b84b" stroke-width="1.6"/>' +
            '<rect x="54" y="56" width="12" height="18" rx="5" fill="#7f4f32"/>' +
            '<path d="M40 76 Q40 68 52 68 L68 68 Q80 68 80 76 L82 128 Q60 136 38 128 Z" fill="#f2b84b"/>' +
            '<path d="M52 68 L60 80 L68 68 Z" fill="#9a6340"/>' +
            '<path d="M42 74 Q28 98 31 126" stroke="#9a6340" stroke-width="9" fill="none" stroke-linecap="round"/>' +
            '<path d="M42 74 Q36 84 34 92" stroke="#f2b84b" stroke-width="10" fill="none" stroke-linecap="round"/>' +
            '<circle cx="31" cy="131" r="5.5" fill="#9a6340"/>' +
            '<g transform="translate(12.5 -6.6) scale(0.95)">' +
            '<ellipse cx="50" cy="36" rx="27" ry="25" fill="#1a1018"/>' +
            '<circle cx="26" cy="46" r="9" fill="#1a1018"/>' +
            '<circle cx="74" cy="46" r="9" fill="#1a1018"/>' +
            '<ellipse cx="50" cy="49" rx="19" ry="22" fill="#9a6340"/>' +
            '<path d="M31 45 Q33 26 50 25 Q67 26 69 45 Q60 34 50 34 Q40 34 31 45 Z" fill="#1a1018"/>' +
            '<path d="M37 41 Q42 38.5 47 41" stroke="#1a1018" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
            '<path d="M53 41 Q58 38.5 63 41" stroke="#1a1018" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
            '<ellipse cx="42" cy="48" rx="2.4" ry="3" fill="#1a1018"/>' +
            '<ellipse cx="58" cy="48" rx="2.4" ry="3" fill="#1a1018"/>' +
            '<circle cx="42.8" cy="46.9" r="0.9" fill="#fff"/>' +
            '<circle cx="58.8" cy="46.9" r="0.9" fill="#fff"/>' +
            '<path d="M50 50 Q48.5 55 50.5 55.5" stroke="#6b3d26" stroke-width="1.3" fill="none" stroke-linecap="round"/>' +
            '<circle cx="37" cy="56" r="4" fill="#ff8a7a" opacity="0.3"/>' +
            '<circle cx="63" cy="56" r="4" fill="#ff8a7a" opacity="0.3"/>' +
            '<path d="M41.5 58 Q50 66 58.5 58 Q50 61.5 41.5 58 Z" fill="#fff" stroke="#5a2a1a" stroke-width="1.4" stroke-linejoin="round"/>' +
            '<circle cx="31" cy="55" r="2.2" fill="#ffe08a"/>' +
            '<circle cx="69" cy="55" r="2.2" fill="#ffe08a"/>' +
            '</g>' +
            '<g class="bcfa-wave" style="transform-origin:78px 74px">' +
            '<path d="M78 74 Q98 70 101 46" stroke="#9a6340" stroke-width="9" fill="none" stroke-linecap="round"/>' +
            '<path d="M78 74 Q88 72 93 66" stroke="#f2b84b" stroke-width="10" fill="none" stroke-linecap="round"/>' +
            '<circle cx="101" cy="41" r="6" fill="#9a6340"/>' +
            '</g>' +
            '</svg>',
        boy:
            '<svg class="bcfa-body" viewBox="0 0 120 230" aria-hidden="true" focusable="false">' +
            '<ellipse cx="60" cy="224" rx="30" ry="5" fill="rgba(0,0,0,0.35)"/>' +
            '<path d="M38 130 L60 130 L58 214 L44 214 Z" fill="#1b1260"/>' +
            '<path d="M60 130 L82 130 L76 214 L62 214 Z" fill="#1b1260"/>' +
            '<ellipse cx="50" cy="218" rx="10" ry="5" fill="#1a1018"/>' +
            '<ellipse cx="70" cy="218" rx="10" ry="5" fill="#1a1018"/>' +
            '<rect x="54" y="56" width="12" height="18" rx="5" fill="#7f4f32"/>' +
            '<path d="M40 76 Q40 68 52 68 L68 68 Q80 68 80 76 L82 134 L38 134 Z" fill="#f8f7f3"/>' +
            '<rect x="38" y="127" width="44" height="6" fill="#f2b84b"/>' +
            '<path d="M52 68 L60 80 L68 68 Z" fill="#9a6340"/>' +
            '<path d="M52 68 L48 84 L40 76 Z" fill="#ffffff" stroke="#d9d4cc" stroke-width="1"/>' +
            '<path d="M68 68 L72 84 L80 76 Z" fill="#ffffff" stroke="#d9d4cc" stroke-width="1"/>' +
            '<path d="M57 72 L63 72 L65 84 L60 114 L55 84 Z" fill="#f2b84b"/>' +
            '<path d="M42 74 Q28 96 31 118" stroke="#f8f7f3" stroke-width="11" fill="none" stroke-linecap="round"/>' +
            '<circle cx="31" cy="125" r="6" fill="#9a6340"/>' +
            '<g transform="translate(12.5 -6.6) scale(0.95)">' +
            '<ellipse cx="50" cy="38" rx="21" ry="17" fill="#1a1018"/>' +
            '<circle cx="31" cy="50" r="3.5" fill="#9a6340"/>' +
            '<circle cx="69" cy="50" r="3.5" fill="#9a6340"/>' +
            '<ellipse cx="50" cy="49" rx="19" ry="22" fill="#9a6340"/>' +
            '<path d="M31 44 Q31 26 50 25 Q69 26 69 44 Q62 35 50 35 Q38 35 31 44 Z" fill="#1a1018"/>' +
            '<path d="M37 42 Q42 39.5 47 42" stroke="#1a1018" stroke-width="1.9" fill="none" stroke-linecap="round"/>' +
            '<path d="M53 42 Q58 39.5 63 42" stroke="#1a1018" stroke-width="1.9" fill="none" stroke-linecap="round"/>' +
            '<ellipse cx="42" cy="48.5" rx="2.4" ry="3" fill="#1a1018"/>' +
            '<ellipse cx="58" cy="48.5" rx="2.4" ry="3" fill="#1a1018"/>' +
            '<circle cx="42.8" cy="47.4" r="0.9" fill="#fff"/>' +
            '<circle cx="58.8" cy="47.4" r="0.9" fill="#fff"/>' +
            '<path d="M50 50 Q48.5 55 50.5 55.5" stroke="#6b3d26" stroke-width="1.3" fill="none" stroke-linecap="round"/>' +
            '<circle cx="37" cy="56" r="4" fill="#ff8a7a" opacity="0.25"/>' +
            '<circle cx="63" cy="56" r="4" fill="#ff8a7a" opacity="0.25"/>' +
            '<path d="M41.5 58 Q50 66 58.5 58 Q50 61.5 41.5 58 Z" fill="#fff" stroke="#5a2a1a" stroke-width="1.4" stroke-linejoin="round"/>' +
            '</g>' +
            '<g class="bcfa-wave" style="transform-origin:78px 74px">' +
            '<path d="M78 74 Q98 70 101 52" stroke="#f8f7f3" stroke-width="11" fill="none" stroke-linecap="round"/>' +
            '<circle cx="101" cy="45" r="6.5" fill="#9a6340"/>' +
            '</g>' +
            '</svg>'
    };

    AVATARS.guide =
            '<svg class="bcfa-face" viewBox="0 0 100 100" aria-hidden="true" focusable="false">' +
            '<ellipse cx="50" cy="40" rx="25" ry="26" fill="#140d12"/>' +
            '<path d="M10 104 Q12 79 36 74 L50 82 L64 74 Q88 79 90 104 Z" fill="#16121c"/>' +
            '<path d="M36 74 L50 83 L64 74" stroke="#f2b84b" stroke-width="1.5" fill="none"/>' +
            '<rect x="43" y="64" width="14" height="16" rx="5" fill="#603920"/>' +
            '<path d="M39.5 74 L50 87 L60.5 74 Z" fill="#7b4a2c"/>' +
            '<path d="M24 42 Q16 76 24 102 L38 98 L35 50 Z" fill="#140d12"/>' +
            '<path d="M76 42 Q84 76 76 102 L62 98 L65 50 Z" fill="#140d12"/>' +
            '<ellipse cx="50" cy="49" rx="19" ry="22" fill="#7b4a2c"/>' +
            '<path d="M30 40 Q31 22 50 21 Q69 22 70 40 Q50 24 30 40 Z" fill="#140d12"/>' +
            '<path d="M29 41 Q50 15 71 41" stroke="#f8f7f3" stroke-width="9" fill="none"/>' +
            '<path d="M32 44 Q50 20 68 44" stroke="#e3ded2" stroke-width="1.2" fill="none"/>' +
            '<path d="M37 41.5 Q42 39 47 41.5" stroke="#140d12" stroke-width="1.7" fill="none" stroke-linecap="round"/>' +
            '<path d="M53 41.5 Q58 39 63 41.5" stroke="#140d12" stroke-width="1.7" fill="none" stroke-linecap="round"/>' +
            '<ellipse cx="42" cy="50.5" rx="2.3" ry="2.8" fill="#140d12"/>' +
            '<ellipse cx="58" cy="50.5" rx="2.3" ry="2.8" fill="#140d12"/>' +
            '<circle cx="42.7" cy="49.5" r="0.8" fill="#fff"/>' +
            '<circle cx="58.7" cy="49.5" r="0.8" fill="#fff"/>' +
            '<rect x="33.5" y="44" width="15" height="13" rx="4" fill="rgba(255,255,255,0.10)" stroke="#f0c2a6" stroke-width="1.7"/>' +
            '<rect x="51.5" y="44" width="15" height="13" rx="4" fill="rgba(255,255,255,0.10)" stroke="#f0c2a6" stroke-width="1.7"/>' +
            '<path d="M48.5 49 H51.5 M33.5 49 L30.5 47.5 M66.5 49 L69.5 47.5" stroke="#f0c2a6" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
            '<path d="M50 52 Q48.7 56 50.5 56.5" stroke="#4a2a18" stroke-width="1.2" fill="none" stroke-linecap="round"/>' +
            '<circle cx="37" cy="58" r="4" fill="#ff8a6a" opacity="0.22"/>' +
            '<circle cx="63" cy="58" r="4" fill="#ff8a6a" opacity="0.22"/>' +
            '<path d="M42 60 Q50 67 58 60 Q50 63 42 60 Z" fill="#fff" stroke="#3d1f12" stroke-width="1.4" stroke-linejoin="round"/>' +
            '<circle cx="31" cy="56" r="2.2" fill="#ffffff" stroke="#cfd3e8" stroke-width="0.8"/>' +
            '<circle cx="69" cy="56" r="2.2" fill="#ffffff" stroke="#cfd3e8" stroke-width="0.8"/>' +
            '</svg>';

    FULL_BODY.guide =
            '<svg class="bcfa-body" viewBox="0 0 120 230" aria-hidden="true" focusable="false">' +
            '<ellipse cx="60" cy="224" rx="30" ry="5" fill="rgba(0,0,0,0.35)"/>' +
            '<rect x="46" y="170" width="11" height="48" rx="5.5" fill="#7b4a2c"/>' +
            '<rect x="64" y="170" width="11" height="48" rx="5.5" fill="#7b4a2c"/>' +
            '<ellipse cx="50.5" cy="220" rx="10" ry="5" fill="#140d12"/>' +
            '<ellipse cx="69.5" cy="220" rx="10" ry="5" fill="#140d12"/>' +
            '<path d="M38 124 Q60 132 82 124 L96 178 Q60 190 24 178 Z" fill="#1b1260" stroke="#f2b84b" stroke-width="1.6"/>' +
            '<rect x="54" y="56" width="12" height="18" rx="5" fill="#603920"/>' +
            '<path d="M40 76 Q40 68 52 68 L68 68 Q80 68 80 76 L82 128 Q60 136 38 128 Z" fill="#16121c"/>' +
            '<path d="M52 68 L60 80 L68 68 Z" fill="#7b4a2c"/>' +
            '<path d="M52 68 L60 80 L68 68" stroke="#f2b84b" stroke-width="1.3" fill="none"/>' +
            '<path d="M42 74 Q28 98 31 126" stroke="#7b4a2c" stroke-width="9" fill="none" stroke-linecap="round"/>' +
            '<path d="M42 74 Q36 84 34 92" stroke="#16121c" stroke-width="10" fill="none" stroke-linecap="round"/>' +
            '<circle cx="31" cy="131" r="5.5" fill="#7b4a2c"/>' +
            '<g transform="translate(12.5 -6.6) scale(0.95)">' +
            '<ellipse cx="50" cy="40" rx="25" ry="26" fill="#140d12"/>' +
            '<path d="M24 42 Q16 76 24 102 L38 98 L35 50 Z" fill="#140d12"/>' +
            '<path d="M76 42 Q84 76 76 102 L62 98 L65 50 Z" fill="#140d12"/>' +
            '<ellipse cx="50" cy="49" rx="19" ry="22" fill="#7b4a2c"/>' +
            '<path d="M30 40 Q31 22 50 21 Q69 22 70 40 Q50 24 30 40 Z" fill="#140d12"/>' +
            '<path d="M29 41 Q50 15 71 41" stroke="#f8f7f3" stroke-width="9" fill="none"/>' +
            '<path d="M32 44 Q50 20 68 44" stroke="#e3ded2" stroke-width="1.2" fill="none"/>' +
            '<path d="M37 41.5 Q42 39 47 41.5" stroke="#140d12" stroke-width="1.7" fill="none" stroke-linecap="round"/>' +
            '<path d="M53 41.5 Q58 39 63 41.5" stroke="#140d12" stroke-width="1.7" fill="none" stroke-linecap="round"/>' +
            '<ellipse cx="42" cy="50.5" rx="2.3" ry="2.8" fill="#140d12"/>' +
            '<ellipse cx="58" cy="50.5" rx="2.3" ry="2.8" fill="#140d12"/>' +
            '<circle cx="42.7" cy="49.5" r="0.8" fill="#fff"/>' +
            '<circle cx="58.7" cy="49.5" r="0.8" fill="#fff"/>' +
            '<rect x="33.5" y="44" width="15" height="13" rx="4" fill="rgba(255,255,255,0.10)" stroke="#f0c2a6" stroke-width="1.7"/>' +
            '<rect x="51.5" y="44" width="15" height="13" rx="4" fill="rgba(255,255,255,0.10)" stroke="#f0c2a6" stroke-width="1.7"/>' +
            '<path d="M48.5 49 H51.5 M33.5 49 L30.5 47.5 M66.5 49 L69.5 47.5" stroke="#f0c2a6" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
            '<path d="M50 52 Q48.7 56 50.5 56.5" stroke="#4a2a18" stroke-width="1.2" fill="none" stroke-linecap="round"/>' +
            '<circle cx="37" cy="58" r="4" fill="#ff8a6a" opacity="0.22"/>' +
            '<circle cx="63" cy="58" r="4" fill="#ff8a6a" opacity="0.22"/>' +
            '<path d="M42 60 Q50 67 58 60 Q50 63 42 60 Z" fill="#fff" stroke="#3d1f12" stroke-width="1.4" stroke-linejoin="round"/>' +
            '<circle cx="31" cy="56" r="2.2" fill="#ffffff" stroke="#cfd3e8" stroke-width="0.8"/>' +
            '<circle cx="69" cy="56" r="2.2" fill="#ffffff" stroke="#cfd3e8" stroke-width="0.8"/>' +
            '</g>' +
            '<g class="bcfa-wave" style="transform-origin:78px 74px">' +
            '<path d="M78 74 Q98 70 101 46" stroke="#7b4a2c" stroke-width="9" fill="none" stroke-linecap="round"/>' +
            '<path d="M78 74 Q88 72 93 66" stroke="#16121c" stroke-width="10" fill="none" stroke-linecap="round"/>' +
            '<ellipse cx="100.5" cy="51" rx="5.2" ry="1.9" fill="none" stroke="#e8e8f5" stroke-width="1.6"/>' +
            '<circle cx="101" cy="41" r="6" fill="#7b4a2c"/>' +
            '</g>' +
            '</svg>';

    function avatarHTML(kind) {
        var whole = FULL && kind === "fab";
        if (CONFIG.avatarImage) {
            var src = whole ? CONFIG.avatarImage : (CONFIG.avatarHeadImage || CONFIG.avatarImage);
            if (whole && CONFIG.avatarHandImage) {
                return '<span class="bcfa-figure">' +
                    '<img class="bcfa-handlayer" src="' + CONFIG.avatarHandImage + '" alt="" style="' + CONFIG.avatarHandBox + ';transform-origin:' + CONFIG.avatarHandPivot + '">' +
                    '<img class="bcfa-bodyimg" src="' + src + '" alt="">' +
                    '</span>';
            }
            return '<img class="' + (whole ? "bcfa-bodyimg" : "bcfa-face") + '" src="' + src + '" alt="">';
        }
        var who = AVATARS[CONFIG.avatarStyle] ? CONFIG.avatarStyle : "guide";
        return whole ? FULL_BODY[who] : AVATARS[who];
    }

    // Each intent: label (button text), keywords (what visitors might type), text, links
    var INTENTS = [
        {
            id: "greeting",
            keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "shalom", "peace"],
            text: "Hii and welcome! I'm Virtue. You can ask me about our services, events, departments, or how to contact us."
        },
        {
            id: "name",
            keywords: ["your name", "what is your name", "whats your name", "who are you", "who is virtue", "are you virtue", "introduce yourself"],
            text: "I'm Virtue, the guide on this website. I can tell you about our services, events and departments, and help you get in touch with the BCF team."
        },
        {
            id: "about",
            label: "What is BCF?",
            keywords: ["what is bcf", "about bcf", "about", "baze christian fellowship", "fellowship", "what is this"],
            text: "Baze Christian Fellowship is a chapel open to all students in Baze University to come and fellowship with God and grow spiritually."
        },
        {
            id: "service",
            label: "When is Sunday service?",
            keywords: ["sunday service", "service", "church service", "when is church", "sunday", "what time", "when do you meet", "when do you"],
            text: "Sunday Service is every Sunday at 8:30 AM in Auditorium D. Come to hear the Word, praise and worship, give testimony, and fellowship."
        },
        {
            id: "programs",
            label: "Weekly programs",
            keywords: ["weekly programs", "programs", "program", "schedule", "timetable", "activities", "meetings", "what do you do", "this week"],
            text: "Here is our week:\nSunday Service: Sunday, 8:30 AM, Auditorium D\nPrayer Meeting: Tuesday, 8:00 PM, Multi-Purpose Hall\nBible Study: Wednesday, 6:30 PM, Multi-Purpose Hall\nWorship Circle: Sunday, 6:30 PM, Multi-Purpose Hall\nCell Meeting: varies by hostel/cell",
            links: [{ label: "See programs", href: "#programs" }]
        },
        {
            id: "prayerMeeting",
            keywords: ["prayer meeting", "tuesday", "pray together"],
            text: "Prayer Meeting is on Tuesdays at 8:00 PM in the Multi-Purpose Hall. Spend time with God, dwell in His presence, and seek His will."
        },
        {
            id: "bibleStudy",
            keywords: ["bible study", "wednesday", "bible class", "study the word", "materials"],
            text: "Bible Study holds on Wednesdays at 6:30 PM in the Multi-Purpose Hall. You can also read our Bible study materials online.",
            links: [{ label: "Bible study materials", href: "bible-study.html" }]
        },
        {
            id: "worshipCircle",
            keywords: ["worship circle", "worship", "sunday evening"],
            text: "Worship Circle is on Sundays at 6:30 PM in the Multi-Purpose Hall. A time to worship God in spirit and in truth."
        },
        {
            id: "cell",
            keywords: ["cell meeting", "cell", "hostel meeting", "hostel"],
            text: "Cell Meetings hold in the hostels, and the time varies by hostel/cell. Brethren come together to learn God's Word and grow in fellowship. Message the Secretary to find the cell nearest you.",
            links: [{ label: "Ask about cells", href: "wa", msg: "Hello, I would like to know the cell meeting for my hostel." }]
        },
        {
            id: "events",
            label: "Upcoming events",
            keywords: ["events", "event", "upcoming", "coming up", "what's happening", "whats happening", "conference"],
            text: "Coming up: Prayer Retreat on Saturday 24 and Sunday 25 October 2026.\nOur regular events include Drama Night, African Praise Night and Sunday Unusual. Follow us on Instagram for dates and venues.",
            links: [{ label: "See events", href: "#events" }]
        },
        {
            id: "prayerRetreat",
            keywords: ["prayer retreat", "retreat"],
            text: "The Prayer Retreat holds on Saturday 24 and Sunday 25 October 2026. Follow us on Instagram and WhatsApp for the venue and updates.",
            links: [{ label: "Join the WhatsApp group", href: "ext", url: "groupLink" }]
        },
        {
            id: "eventsAnnual",
            keywords: ["drama night", "african praise", "praise night", "sunday unusual", "unusual"],
            text: "Drama Night is held occasionally depending on the fellowship schedule. African Praise Night and Sunday Unusual are annual events. African Praise Night celebrates African culture and worships God through praise, and on Sunday Unusual students dress up unusually and fellowship with God in an unusual way."
        },
        {
            id: "departments",
            label: "Departments",
            keywords: ["departments", "department", "serve", "volunteer", "units", "ministry", "get involved", "where can i serve", "choir", "ushering", "usher", "media", "drama", "sound", "technical", "welfare", "sanctuary", "evangelism", "follow-up", "follow up"],
            text: "You can serve in Drama, Choir, Evangelism / Follow-up, Ushering, Cell, Welfare, Sanctuary, Sound / Technical, Media, Prayer, or Bible Study. There is a place for everyone.",
            links: [
                { label: "See departments", href: "#departments" },
                { label: "Join a department", href: "wa", msg: "Hello, I want to join a department.\nName: \nDepartment: \nWhy I want to join: " }
            ]
        },
        {
            id: "joinDept",
            label: "How do I join a department?",
            keywords: ["join a department", "join department", "join choir", "join drama", "join media", "join ushering", "join the choir", "sign up", "register", "become a member", "be a member"],
            text: "To join a department, message our Secretary on WhatsApp with your name, the department you want, and why you want to join. The Secretary will connect you to the department leader.",
            links: [{ label: "Message the Secretary", href: "wa", msg: "Hello, I want to join a department.\nName: \nDepartment: \nWhy I want to join: " }]
        },
        {
            id: "joinFellowship",
            keywords: ["new here", "first time", "newcomer", "visit", "attend", "how do i join", "join bcf", "join the fellowship", "who can join", "open to all", "become part"],
            text: "You are welcome! BCF is open to all Baze students. Just come to Sunday Service at 8:30 AM in Auditorium D. No registration is needed. You can also join our WhatsApp group for updates.",
            links: [{ label: "Join the WhatsApp group", href: "ext", url: "groupLink" }]
        },
        {
            id: "location",
            label: "Where do you meet?",
            keywords: ["where", "location", "venue", "auditorium", "hall", "address", "find you", "directions"],
            text: "Sunday Service holds in Auditorium D. Prayer Meeting, Bible Study and Worship Circle hold in the Multi-Purpose Hall. Cell Meetings hold in the hostels."
        },
        {
            id: "leadership",
            keywords: ["leaders", "leadership", "pastor", "president", "vice president", "secretary", "who leads", "executives", "executive"],
            text: "Our leadership:\nPastor Daniel Ameh, Pastor\nMama Nicole, Fellowship President\nBro David-Daniel, Vice President\nSis Andiyanga, General Secretary",
            links: [{ label: "See leadership", href: "#leadership" }]
        },
        {
            id: "prayerReq",
            label: "Prayer request",
            keywords: ["prayer request", "pray for me", "request prayer", "need prayer", "prayer need", "pray for"],
            text: "We would love to pray with you. Send us your prayer request and our prayer team will pray with you.",
            links: "prayer"
        },
        {
            id: "contact",
            label: "Contact us",
            keywords: ["contact", "phone", "number", "call", "email", "reach", "message", "enquiries", "enquiry", "inquiry"],
            text: "You can reach us here:\nVice President: +234 708 098 7672\nSecretary: +234 812 672 5841 or +234 706 861 2233\nEmail: " + CONFIG.email,
            links: [
                { label: "WhatsApp the Secretary", href: "wa", msg: "Hello, I have an enquiry." },
                { label: "Send an email", href: "mail" }
            ]
        },
        {
            id: "social",
            label: "Social media",
            keywords: ["instagram", "tiktok", "youtube", "social media", "whatsapp group", "group", "follow", "photos", "gallery", "pictures"],
            text: "Follow and connect with us:",
            links: [
                { label: "WhatsApp group", href: "ext", url: "groupLink" },
                { label: "Instagram", href: "ext", url: "instagram" },
                { label: "TikTok", href: "ext", url: "tiktok" },
                { label: "YouTube", href: "ext", url: "youtube" }
            ]
        },
        {
            id: "sermons",
            keywords: ["sermon", "sermons", "messages", "listen", "watch", "preaching"],
            text: "You can find our sermons online and keep growing beyond the meetings.",
            links: [{ label: "View sermons", href: "sermons.html" }]
        },
        {
            id: "testimonies",
            keywords: ["testimony", "testimonies"],
            text: "Read what God has done in the lives of BCF members.",
            links: [{ label: "View testimonies", href: "testimonies.html" }]
        },
        {
            id: "salvation",
            keywords: ["give my life", "born again", "salvation", "accept jesus", "saved", "give my life to christ"],
            text: "That is wonderful. Jesus loves you (John 3:16) and wants a relationship with you. Our team would love to talk and pray with you. Send us a message and someone will respond.",
            links: [{ label: "Talk to someone", href: "wa", msg: "Hello, I would like to talk to someone about giving my life to Christ." }]
        },
        {
            id: "thanks",
            keywords: ["thanks", "thank you", "god bless", "amen", "bye"],
            text: "You are welcome! God bless you. Come fellowship with us."
        }
    ];

    var FALLBACK = {
        text: "I am not sure about that one yet. You can ask our Secretary directly and you will get a reply.",
        links: [
            { label: "WhatsApp the Secretary", href: "wa", msg: "Hello, I have a question." },
            { label: "Send an email", href: "mail" }
        ]
    };

    var START_CHIPS = ["service", "programs", "events", "joinDept", "prayerReq", "contact"];
    var MORE_CHIPS = ["programs", "events", "departments", "location", "prayerReq", "contact", "social", "service"];

    /* ================= END OF EDIT AREA ================= */

    var CSS = "" +
        ".bcfa-fab{position:fixed;right:18px;bottom:calc(18px + env(safe-area-inset-bottom,0px));z-index:1500;width:64px;height:64px;border:0;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:28px;color:#1a0505;background:linear-gradient(135deg,#f8cd6e,#d99a2b);box-shadow:0 10px 28px rgba(0,0,0,.45),0 0 0 0 rgba(242,184,75,.6);animation:bcfaPulse 2.6s ease-out infinite}" +
        "@keyframes bcfaPulse{0%{box-shadow:0 10px 28px rgba(0,0,0,.45),0 0 0 0 rgba(242,184,75,.55)}70%{box-shadow:0 10px 28px rgba(0,0,0,.45),0 0 0 18px rgba(242,184,75,0)}100%{box-shadow:0 10px 28px rgba(0,0,0,.45),0 0 0 0 rgba(242,184,75,0)}}" +
        ".bcfa-fab:hover{transform:scale(1.06)}" +
        ".bcfa-bubble{position:fixed;right:92px;bottom:calc(34px + env(safe-area-inset-bottom,0px));z-index:1500;max-width:220px;padding:12px 16px;border-radius:16px 16px 4px 16px;font-size:14px;font-weight:700;line-height:1.35;color:#f8f7f3;cursor:pointer;background:linear-gradient(165deg,#1b1260,#0b0720);border:1px solid rgba(242,184,75,.6);box-shadow:0 12px 30px rgba(0,0,0,.45);opacity:0;transform:translateY(8px);transition:opacity .35s ease,transform .35s ease;pointer-events:none}" +
        ".bcfa-bubble.bcfa-on{opacity:1;transform:none;pointer-events:auto}" +
        ".bcfa-panel{position:fixed;right:18px;bottom:calc(94px + env(safe-area-inset-bottom,0px));z-index:1500;width:370px;max-width:calc(100vw - 24px);height:min(560px,calc(100vh - 130px));display:flex;flex-direction:column;overflow:hidden;color:#f8f7f3;font-family:inherit;background:linear-gradient(165deg,#1b1260,#0b0720 75%);border:1px solid rgba(242,184,75,.55);border-top:4px solid #f2b84b;border-radius:20px;box-shadow:0 0 40px rgba(124,58,237,.35),0 24px 70px rgba(0,0,0,.6);opacity:0;transform:translateY(16px) scale(.97);transform-origin:bottom right;transition:opacity .3s ease,transform .3s ease}" +
        ".bcfa-panel[hidden]{display:none}" +
        ".bcfa-panel.bcfa-on{opacity:1;transform:none}" +
        ".bcfa-head{display:flex;align-items:center;gap:12px;padding:14px 16px;background:rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.1)}" +
        ".bcfa-avatar{flex:0 0 42px;width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:19px;color:#1a0505;background:linear-gradient(135deg,#f8cd6e,#d99a2b);box-shadow:0 0 0 4px rgba(242,184,75,.2)}" +
        ".bcfa-title{flex:1;min-width:0}" +
        ".bcfa-title strong{display:block;font-size:16px;color:#fff}" +
        ".bcfa-title span{font-size:12px;color:#c9c4ee}" +
        ".bcfa-x{width:34px;height:34px;border:0;border-radius:50%;background:rgba(255,255,255,.1);color:#fff;font-size:22px;line-height:1;cursor:pointer}" +
        ".bcfa-x:hover{background:rgba(255,255,255,.22)}" +
        ".bcfa-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}" +
        ".bcfa-m{max-width:86%;padding:10px 14px;border-radius:16px;font-size:14.5px;line-height:1.5;white-space:pre-line;word-wrap:break-word}" +
        ".bcfa-bot{align-self:flex-start;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.1);border-bottom-left-radius:4px;color:#f1efff}" +
        ".bcfa-me{align-self:flex-end;background:linear-gradient(135deg,#f8cd6e,#d99a2b);color:#1a0505;font-weight:700;border-bottom-right-radius:4px}" +
        ".bcfa-links{align-self:flex-start;display:flex;flex-wrap:wrap;gap:8px;max-width:95%}" +
        ".bcfa-link{display:inline-block;padding:8px 14px;border-radius:999px;font-size:13px;font-weight:700;text-decoration:none;color:#1a0505;background:linear-gradient(135deg,#f8cd6e,#d99a2b)}" +
        ".bcfa-link:hover{filter:brightness(1.1)}" +
        ".bcfa-chips{align-self:flex-start;display:flex;flex-wrap:wrap;gap:8px}" +
        ".bcfa-chip{padding:8px 13px;border-radius:999px;font-size:13px;font-family:inherit;color:#ffe08a;cursor:pointer;background:rgba(255,255,255,.06);border:1px solid rgba(242,184,75,.55);transition:background .2s ease}" +
        ".bcfa-chip:hover{background:rgba(242,184,75,.18)}" +
        ".bcfa-typing{align-self:flex-start;display:flex;gap:5px;padding:12px 14px;border-radius:16px;background:rgba(255,255,255,.09)}" +
        ".bcfa-typing i{width:7px;height:7px;border-radius:50%;background:#c9c4ee;animation:bcfaDot 1s ease-in-out infinite}" +
        ".bcfa-typing i:nth-child(2){animation-delay:.15s}.bcfa-typing i:nth-child(3){animation-delay:.3s}" +
        "@keyframes bcfaDot{0%,80%,100%{opacity:.3;transform:translateY(0)}40%{opacity:1;transform:translateY(-4px)}}" +
        ".bcfa-foot{display:flex;gap:8px;padding:12px;border-top:1px solid rgba(255,255,255,.1);background:rgba(0,0,0,.2)}" +
        ".bcfa-input{flex:1;min-width:0;padding:11px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;font-size:15px;font-family:inherit;outline:none}" +
        ".bcfa-input::placeholder{color:#b7b2dd}" +
        ".bcfa-input:focus{border-color:#f2b84b}" +
        ".bcfa-send{flex:0 0 44px;height:44px;border:0;border-radius:50%;cursor:pointer;font-size:16px;color:#1a0505;background:linear-gradient(135deg,#f8cd6e,#d99a2b)}" +
        "@media (max-width:600px){.bcfa-panel{right:12px;bottom:calc(90px + env(safe-area-inset-bottom,0px));height:min(540px,calc(100vh - 120px))}.bcfa-fab{right:14px}.bcfa-bubble{right:86px}}" +
        "@media (prefers-reduced-motion:reduce){.bcfa-fab{animation:none}.bcfa-typing i{animation:none}.bcfa-panel,.bcfa-bubble{transition:none}}" +
        ".bcfa-fab{width:68px;height:68px;padding:0;overflow:hidden;border:3px solid #f2b84b;background:linear-gradient(160deg,#6a4cff,#2a1a8a)}" +
        ".bcfa-avatar{overflow:hidden;padding:0;border:2px solid #f2b84b;background:linear-gradient(160deg,#6a4cff,#2a1a8a)}" +
        ".bcfa-face{width:100%;height:100%;display:block;object-fit:cover}" +
        ".bcfa-fab.bcfa-full{width:92px;height:176px;border:0;border-radius:0;padding:0;overflow:visible;background:transparent;box-shadow:none;animation:none;filter:drop-shadow(0 8px 14px rgba(0,0,0,.55))}" +
        ".bcfa-fab.bcfa-full::before{content:\"\";position:absolute;left:50%;bottom:4px;width:100px;height:100px;transform:translateX(-50%);border-radius:50%;background:radial-gradient(circle,rgba(242,184,75,.38),transparent 70%);z-index:-1}" +
        ".bcfa-fab.bcfa-full:hover{transform:scale(1.05)}" +
        ".bcfa-body,.bcfa-bodyimg{width:100%;height:100%;display:block;overflow:visible;object-fit:contain;animation:bcfaFloat 3.2s ease-in-out infinite}" +
        "@keyframes bcfaFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}" +
        ".bcfa-wave{animation:bcfaWave 3.4s ease-in-out infinite}" +
        "@keyframes bcfaWave{0%,55%,100%{transform:rotate(0)}10%{transform:rotate(14deg)}20%{transform:rotate(-8deg)}30%{transform:rotate(14deg)}40%{transform:rotate(-8deg)}50%{transform:rotate(10deg)}}" +
        ".bcfa-bubble.bcfa-bfull{right:112px;bottom:calc(128px + env(safe-area-inset-bottom,0px))}" +
        ".bcfa-panel.bcfa-pfull{bottom:calc(206px + env(safe-area-inset-bottom,0px));height:min(520px,calc(100vh - 240px))}" +
        "@media (max-width:600px){.bcfa-fab.bcfa-full{width:74px;height:142px;right:10px}" +
        ".bcfa-bubble.bcfa-bfull{right:90px;bottom:calc(100px + env(safe-area-inset-bottom,0px))}" +
        ".bcfa-panel.bcfa-pfull{bottom:calc(168px + env(safe-area-inset-bottom,0px));height:min(480px,calc(100vh - 200px))}}" +
        "@media (prefers-reduced-motion:reduce){.bcfa-body,.bcfa-bodyimg,.bcfa-wave{animation:none}}" +
        ".bcfa-snd{width:34px;height:34px;border:0;border-radius:50%;background:rgba(255,255,255,.1);color:#fff;font-size:14px;cursor:pointer;margin-right:6px}" +
        ".bcfa-snd:hover{background:rgba(255,255,255,.22)}" +
        ".bcfa-figure{position:relative;display:block;width:100%;height:100%;animation:bcfaFloat 3.2s ease-in-out infinite}" +
        ".bcfa-figure img{position:absolute;display:block;max-width:none}" +
        ".bcfa-figure .bcfa-bodyimg{left:0;top:0;width:100%;height:100%;animation:none}" +
        ".bcfa-handlayer{will-change:transform}" +
        ".bcfa-fab.bcfa-hi .bcfa-handlayer{animation:bcfaHandWave .9s ease-in-out 3}" +
        "@keyframes bcfaHandWave{0%,100%{transform:rotate(0)}20%{transform:rotate(18deg)}45%{transform:rotate(-12deg)}70%{transform:rotate(18deg)}}" +
        ".bcfa-fab.bcfa-hi>.bcfa-bodyimg,.bcfa-fab.bcfa-hi .bcfa-figure{animation:bcfaSway 1s ease-in-out 3;transform-origin:50% 100%}" +
        "@keyframes bcfaSway{0%,100%{transform:rotate(0)}25%{transform:rotate(-3deg)}75%{transform:rotate(3deg)}}" +
        "@media (prefers-reduced-motion:reduce){.bcfa-fab.bcfa-hi .bcfa-handlayer,.bcfa-fab.bcfa-hi .bcfa-figure,.bcfa-fab.bcfa-hi>.bcfa-bodyimg,.bcfa-figure{animation:none}}" +
        ".bcfa-fab.bcfa-talk .bcfa-figure,.bcfa-fab.bcfa-talk>.bcfa-bodyimg{animation:bcfaTalk .55s ease-in-out infinite;transform-origin:50% 100%}" +
        "@keyframes bcfaTalk{0%,100%{transform:scale(1)}50%{transform:scale(1.04,.98)}}" +
        "@media (prefers-reduced-motion:reduce){.bcfa-fab.bcfa-talk .bcfa-figure,.bcfa-fab.bcfa-talk>.bcfa-bodyimg{animation:none}}" +
        ".bcfa-bubble.bcfa-on{animation:bcfaHi .7s ease}" +
        "@keyframes bcfaHi{0%{transform:translateY(10px) scale(.92)}60%{transform:translateY(-4px) scale(1.04)}100%{transform:none}}" +
        "@media (prefers-reduced-motion:reduce){.bcfa-bubble.bcfa-on{animation:none}}" +
        ".bcfa-fab.bcfa-full.bcfa-photo{width:120px;height:113px}" +
        ".bcfa-fab.bcfa-full.bcfa-photo::before{width:96px;height:96px;bottom:2px}" +
        ".bcfa-bubble.bcfa-bfull.bcfa-bphoto{right:142px;bottom:calc(58px + env(safe-area-inset-bottom,0px))}" +
        ".bcfa-panel.bcfa-pfull.bcfa-pphoto{bottom:calc(146px + env(safe-area-inset-bottom,0px));height:min(520px,calc(100vh - 180px))}" +
        "@media (max-width:600px){.bcfa-fab.bcfa-full.bcfa-photo{width:96px;height:90px;right:8px}" +
        ".bcfa-bubble.bcfa-bfull.bcfa-bphoto{right:112px;bottom:calc(46px + env(safe-area-inset-bottom,0px))}" +
        ".bcfa-panel.bcfa-pfull.bcfa-pphoto{bottom:calc(120px + env(safe-area-inset-bottom,0px));height:min(480px,calc(100vh - 150px))}}";

    function byId(id) {
        for (var i = 0; i < INTENTS.length; i++) {
            if (INTENTS[i].id === id) return INTENTS[i];
        }
        return null;
    }

    function findIntent(input) {
        var q = " " + input.toLowerCase().replace(/[^a-z0-9' -]/g, " ").replace(/\s+/g, " ").trim() + " ";
        var best = null, bestScore = 0;
        INTENTS.forEach(function (it) {
            var score = 0;
            it.keywords.forEach(function (k) {
                var hit = q.indexOf(" " + k + " ") > -1 || (k.length > 4 && q.indexOf(k) > -1);
                if (hit) score += k.length;
            });
            if (score > bestScore) { best = it; bestScore = score; }
        });
        return best;
    }

    function init() {
        var style = document.createElement("style");
        style.textContent = CSS;
        document.head.appendChild(style);

        var fab = document.createElement("button");
        fab.type = "button";
        fab.className = "bcfa-fab" + (FULL ? " bcfa-full" : "") + (FULL && CONFIG.avatarImage ? " bcfa-photo" : "");
        fab.setAttribute("aria-label", "Open chat: " + CONFIG.name);
        fab.setAttribute("aria-expanded", "false");
        fab.innerHTML = avatarHTML("fab");

        var bubble = document.createElement("div");
        bubble.className = "bcfa-bubble" + (FULL ? " bcfa-bfull" : "") + (FULL && CONFIG.avatarImage ? " bcfa-bphoto" : "");
        bubble.textContent = CONFIG.bubble;

        var panel = document.createElement("div");
        panel.className = "bcfa-panel" + (FULL ? " bcfa-pfull" : "") + (FULL && CONFIG.avatarImage ? " bcfa-pphoto" : "");
        panel.hidden = true;
        panel.setAttribute("role", "dialog");
        panel.setAttribute("aria-label", CONFIG.name);
        panel.innerHTML =
            '<div class="bcfa-head">' +
                '<div class="bcfa-avatar">' + avatarHTML("head") + '</div>' +
                '<div class="bcfa-title"><strong></strong><span></span></div>' +
                '<button type="button" class="bcfa-snd" aria-label="Turn sound off" aria-pressed="false"><i class="fa-solid fa-volume-high" aria-hidden="true"></i></button>' +
                '<button type="button" class="bcfa-x" aria-label="Close chat">&times;</button>' +
            '</div>' +
            '<div class="bcfa-msgs" aria-live="polite"></div>' +
            '<div class="bcfa-foot">' +
                '<input type="text" class="bcfa-input" placeholder="Type your question..." aria-label="Type your question" maxlength="200">' +
                '<button type="button" class="bcfa-send" aria-label="Send"><i class="fa-solid fa-paper-plane" aria-hidden="true"></i></button>' +
            '</div>';

        document.body.appendChild(panel);
        document.body.appendChild(bubble);
        document.body.appendChild(fab);

        // Safety net: if a picture file is missing or in the wrong folder, show the drawn figure
        // instead of an empty space (and hide only the hand if just the hand picture is missing).
        var drawnKey = AVATARS[CONFIG.avatarStyle] ? CONFIG.avatarStyle : "guide";
        var fellBack = false;
        function useDrawnFigure() {
            if (fellBack) return;
            fellBack = true;
            fab.innerHTML = FULL_BODY[drawnKey];
            fab.classList.remove("bcfa-photo");
            bubble.classList.remove("bcfa-bphoto");
            panel.classList.remove("bcfa-pphoto");
            if (window.console && console.warn) console.warn("BCF avatar: picture not found, check the images folder (" + CONFIG.avatarImage + ")");
        }
        function onFabImageError(e) {
            var t = e && e.target;
            if (t && /bcfa-handlayer/.test(t.className)) { t.style.display = "none"; } else { useDrawnFigure(); }
        }
        var fabImgs = fab.querySelectorAll("img");
        for (var fi = 0; fi < fabImgs.length; fi++) fabImgs[fi].addEventListener("error", onFabImageError);

        var headImgs = panel.querySelectorAll(".bcfa-avatar img");
        for (var hi2 = 0; hi2 < headImgs.length; hi2++) {
            headImgs[hi2].addEventListener("error", function (e) {
                if (e.target.parentNode) e.target.parentNode.innerHTML = AVATARS[drawnKey];
            });
        }

        panel.querySelector(".bcfa-title strong").textContent = CONFIG.name;
        panel.querySelector(".bcfa-title span").textContent = CONFIG.subtitle;

        var msgs = panel.querySelector(".bcfa-msgs");
        var input = panel.querySelector(".bcfa-input");
        var started = false;
        var hiOpened = false;

        // ---- Sound: a soft chime made in the browser (no audio file needed) ----
        // Browsers only allow sound after the visitor has tapped or pressed something on the page.
        var audioCtx = null;
        var muted = false;
        try { muted = localStorage.getItem("bcfaMuted") === "1"; } catch (e) {}

        function unlockAudio() {
            activated = true;
            if (pendingVoice) { pendingVoice = false; setTimeout(speakNow, 400); }
            try {
                if (!audioCtx) {
                    var AC = window.AudioContext || window.webkitAudioContext;
                    if (AC) audioCtx = new AC();
                }
                // phones (especially iPhones) keep audio paused until a tap resumes it
                if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
            } catch (e) { audioCtx = null; }
        }
        ["pointerdown", "touchstart", "touchend", "click", "keydown"].forEach(function (ev) {
            document.addEventListener(ev, unlockAudio, { passive: true });
        });

        function playChime() {
            if (!CONFIG.sound || muted || !audioCtx || document.visibilityState !== "visible") return;
            try {
                if (audioCtx.state === "suspended") audioCtx.resume();
                var t = audioCtx.currentTime;
                [[659.25, 0], [880, 0.16], [1318.5, 0.32]].forEach(function (n) {
                    var o = audioCtx.createOscillator();
                    var g = audioCtx.createGain();
                    o.type = "sine";
                    o.frequency.value = n[0];
                    g.gain.setValueAtTime(0.0001, t + n[1]);
                    g.gain.exponentialRampToValueAtTime(Math.max(CONFIG.soundVolume, 0.001), t + n[1] + 0.03);
                    g.gain.exponentialRampToValueAtTime(0.0001, t + n[1] + 0.55);
                    o.connect(g);
                    g.connect(audioCtx.destination);
                    o.start(t + n[1]);
                    o.stop(t + n[1] + 0.6);
                });
            } catch (e) {}
        }

        // ---- Voice ----
        // Best: a short recording (voiceFile). Otherwise the visitor's device voice is used,
        // and a female-sounding voice is chosen when the device has one.
        var activated = false;
        var pendingVoice = false;
        var voiceList = [];
        function loadVoices() {
            try { if (window.speechSynthesis) voiceList = window.speechSynthesis.getVoices() || []; } catch (e) {}
        }
        loadVoices();
        try {
            if (window.speechSynthesis && window.speechSynthesis.addEventListener) {
                window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
            }
        } catch (e) {}

        function pickFemaleVoice() {
            if (CONFIG.voiceName) {
                var wanted = String(CONFIG.voiceName).toLowerCase();
                for (var k = 0; k < voiceList.length; k++) {
                    if ((voiceList[k].name || "").toLowerCase().indexOf(wanted) > -1) return voiceList[k];
                }
            }
            var best = null, bestScore = 0;
            voiceList.forEach(function (v) {
                if (!/^en/i.test(v.lang || "")) return;
                var n = v.name || "", score = 0;
                if (/en[-_]NG/i.test(v.lang) && /ezinne/i.test(n)) score += 10;      // Nigerian English, female
                if (/\bfemale\b/i.test(n)) score += 6;
                if (/aria|jenny|zira|sonia|libby|hazel|susan|samantha|karen|tessa|moira|fiona|victoria|serena|allison|joanna|kendra|salli|emma|amy|nicole|ezinne/i.test(n)) score += 5;
                if (/google us english/i.test(n)) score += 3;
                if (/\b(david|mark|james|guy|george|daniel|fred|abeo|ryan|thomas|oliver|male)\b/i.test(n)) score -= 10;
                if (score > bestScore) { best = v; bestScore = score; }
            });
            return best;
        }

        var talkToken = 0;
        function stopTalking(token) {
            if (token === undefined || token === talkToken) fab.classList.remove("bcfa-talk");
        }

        function speakWithBrowserVoice(text) {
            if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) return;
            try {
                window.speechSynthesis.cancel();
                var words = text || CONFIG.voiceText;
                var u = new SpeechSynthesisUtterance(words);
                var v = pickFemaleVoice();
                if (v) { u.voice = v; u.lang = v.lang; }
                u.pitch = v ? CONFIG.voicePitch : Math.min(Math.max(CONFIG.voiceFallbackPitch, CONFIG.voicePitch), 2);   // no female voice found: raise the pitch
                u.rate = CONFIG.voiceRate || 1;
                u.volume = 0.9;
                var token = ++talkToken;
                u.onstart = function () { fab.classList.add("bcfa-talk"); };
                u.onend = function () { stopTalking(token); };
                u.onerror = function () { stopTalking(token); };
                window.speechSynthesis.speak(u);
                setTimeout(function () { stopTalking(token); }, Math.min(String(words).length * 110 + 2500, 30000));   // safety
            } catch (e) {}
        }

        // Reads an answer aloud: line breaks become pauses, very long answers are shortened
        function speakAnswer(text) {
            if (!CONFIG.talkAnswers || muted || !activated) return;
            var clean = String(text).split("\n").map(function (l) { return l.trim(); }).filter(Boolean)
                .map(function (l) { return /[.!?:]$/.test(l) ? l : l + "."; }).join(" ");
            if (clean.length > 450) {
                var cut = clean.slice(0, 450).replace(/[^.!?]*$/, "");
                clean = cut || clean.slice(0, 450);
            }
            speakWithBrowserVoice(clean);
        }

        function speakNow() {
            if (muted) return;
            if (CONFIG.voiceFile) {
                var fellBackToBrowser = false;
                var useBrowser = function () {
                    if (fellBackToBrowser) return;
                    fellBackToBrowser = true;
                    speakWithBrowserVoice();
                };
                try {
                    var a = new Audio(CONFIG.voiceFile);
                    a.volume = 0.9;
                    if (CONFIG.voiceFilePitch && CONFIG.voiceFilePitch !== 1) {
                        a.playbackRate = CONFIG.voiceFilePitch;          // raises pitch and speed together
                        a.preservesPitch = false;
                        a.mozPreservesPitch = false;
                        a.webkitPreservesPitch = false;
                    }
                    a.addEventListener("error", useBrowser);
                    var pr = a.play();
                    if (pr && pr.catch) pr.catch(useBrowser);
                } catch (e) { useBrowser(); }
                return;
            }
            speakWithBrowserVoice();
        }

        function speakHi() {
            if (!CONFIG.voice || muted) return;
            if (!activated) { pendingVoice = true; return; }   // browsers only allow sound after a tap
            speakNow();
        }

        var sndBtn = panel.querySelector(".bcfa-snd");
        function showMuted() {
            sndBtn.setAttribute("aria-pressed", muted ? "true" : "false");
            sndBtn.setAttribute("aria-label", muted ? "Turn sound on" : "Turn sound off");
            sndBtn.innerHTML = '<i class="fa-solid ' + (muted ? "fa-volume-xmark" : "fa-volume-high") + '" aria-hidden="true"></i>';
        }
        showMuted();
        if (!CONFIG.sound && !CONFIG.voice) sndBtn.style.display = "none";
        sndBtn.addEventListener("click", function () {
            muted = !muted;
            if (muted) { try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {} }
            try { localStorage.setItem("bcfaMuted", muted ? "1" : "0"); } catch (e) {}
            showMuted();
            if (!muted) { unlockAudio(); playChime(); }
        });

        function scrollDown() {
            msgs.scrollTop = msgs.scrollHeight;
        }

        function addMsg(role, text) {
            var d = document.createElement("div");
            d.className = "bcfa-m " + (role === "me" ? "bcfa-me" : "bcfa-bot");
            d.textContent = text;
            msgs.appendChild(d);
            scrollDown();
        }

        function resolveLinks(list) {
            if (list === "prayer") {
                if (CONFIG.prayerFormLink) {
                    return [{ label: "Send a prayer request", url: CONFIG.prayerFormLink, ext: true }];
                }
                return [{ label: "Send a prayer request", url: wa("Hello, I have a prayer request: "), ext: true }];
            }
            return (list || []).map(function (l) {
                if (l.href === "wa") return { label: l.label, url: wa(l.msg || "Hello"), ext: true };
                if (l.href === "mail") return { label: l.label, url: "mailto:" + CONFIG.email, ext: false };
                if (l.href === "ext") return { label: l.label, url: CONFIG[l.url], ext: true };
                return { label: l.label, url: l.href, ext: false, local: true };
            });
        }

        function addLinks(list) {
            var links = resolveLinks(list);
            if (!links.length) return;
            var wrap = document.createElement("div");
            wrap.className = "bcfa-links";
            links.forEach(function (l) {
                var a = document.createElement("a");
                a.className = "bcfa-link";
                a.textContent = l.label;
                a.href = l.url;
                if (l.ext) { a.target = "_blank"; a.rel = "noopener"; }
                if (l.local) {
                    a.addEventListener("click", function (e) {
                        if (l.url.charAt(0) === "#") {
                            var target = document.querySelector(l.url);
                            e.preventDefault();
                            closePanel();
                            if (target) {
                                target.scrollIntoView({ behavior: "smooth" });
                            } else {
                                window.location.href = "index.html" + l.url;
                            }
                        }
                    });
                }
                wrap.appendChild(a);
            });
            msgs.appendChild(wrap);
            scrollDown();
        }

        function removeChips() {
            var old = msgs.querySelectorAll(".bcfa-chips");
            for (var i = 0; i < old.length; i++) old[i].remove();
        }

        function addChips(ids, skip) {
            removeChips();
            var wrap = document.createElement("div");
            wrap.className = "bcfa-chips";
            ids.forEach(function (id) {
                if (id === skip) return;
                var it = byId(id);
                if (!it || !it.label) return;
                var b = document.createElement("button");
                b.type = "button";
                b.className = "bcfa-chip";
                b.textContent = it.label;
                b.addEventListener("click", function () { ask(it.label, it); });
                wrap.appendChild(b);
            });
            msgs.appendChild(wrap);
            scrollDown();
        }

        function reply(it) {
            removeChips();
            var typing = document.createElement("div");
            typing.className = "bcfa-typing";
            typing.innerHTML = "<i></i><i></i><i></i>";
            msgs.appendChild(typing);
            scrollDown();

            setTimeout(function () {
                typing.remove();
                var answer = it || FALLBACK;
                addMsg("bot", answer.text);
                speakAnswer(answer.text);
                addLinks(answer.links);
                addChips(MORE_CHIPS, it ? it.id : null);
            }, 550);
        }

        function ask(text, intent) {
            var q = (text || "").trim();
            if (!q) return;
            try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
            addMsg("me", q);
            input.value = "";
            reply(intent || findIntent(q));
        }

        function openPanel() {
            panel.hidden = false;
            requestAnimationFrame(function () { panel.classList.add("bcfa-on"); });
            fab.setAttribute("aria-expanded", "true");
            hiOpened = true;
            fab.classList.remove("bcfa-hi");
            fab.setAttribute("aria-label", "Close chat");
            bubble.classList.remove("bcfa-on");
            if (!started) {
                started = true;
                addMsg("bot", CONFIG.greeting);
                addChips(START_CHIPS, null);
            }
            if (window.matchMedia && window.matchMedia("(pointer:fine)").matches) input.focus();
        }

        function closePanel() {
            try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
            stopTalking();
            panel.classList.remove("bcfa-on");
            fab.setAttribute("aria-expanded", "false");
            fab.setAttribute("aria-label", "Open chat: " + CONFIG.name);
            setTimeout(function () { if (!panel.classList.contains("bcfa-on")) panel.hidden = true; }, 300);
        }

        fab.addEventListener("click", function () {
            if (panel.hidden || !panel.classList.contains("bcfa-on")) openPanel(); else closePanel();
        });
        bubble.addEventListener("click", openPanel);
        panel.querySelector(".bcfa-x").addEventListener("click", closePanel);
        panel.querySelector(".bcfa-send").addEventListener("click", function () { ask(input.value); });
        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") { e.preventDefault(); ask(input.value); }
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && panel.classList.contains("bcfa-on")) closePanel();
        });

        // The avatar says "hii" now and then, until someone opens the chat.
        // It waits while the welcome pop-ups are open, so it never talks behind them.
        var hiCount = 0;
        function overlayOpen() {
            return document.documentElement.classList.contains("no-scroll");
        }
        function sayHi() {
            if (hiOpened || hiCount >= CONFIG.bubbleMaxTimes) return;
            if (panel.classList.contains("bcfa-on") || overlayOpen()) {
                setTimeout(sayHi, 1500);
                return;
            }
            var list = CONFIG.bubbleMessages && CONFIG.bubbleMessages.length ? CONFIG.bubbleMessages : [CONFIG.bubble];
            bubble.textContent = list[hiCount % list.length];
            bubble.classList.remove("bcfa-on");
            void bubble.offsetWidth;                 // restart the little pop-in animation
            bubble.classList.add("bcfa-on");
            hiCount++;
            fab.classList.add("bcfa-hi");
            playChime();
            if (hiCount === 1) setTimeout(speakHi, 700);
            setTimeout(function () { fab.classList.remove("bcfa-hi"); }, CONFIG.bubbleStay);
            setTimeout(function () { bubble.classList.remove("bcfa-on"); }, CONFIG.bubbleStay);
            setTimeout(sayHi, CONFIG.bubbleEvery);
        }
        setTimeout(sayHi, CONFIG.bubbleFirstDelay);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
