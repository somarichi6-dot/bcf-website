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
        name: "BCF Guide",
        subtitle: "Ask me about the fellowship",
        greeting: "Hi, I'm the BCF Guide. Ask me about services, events, departments, or how to reach us. Tap a question below or type your own.",
        bubble: "Hi! Ask me anything about BCF",
        whatsapp: "2348126725841",                       // Secretary WhatsApp (no + or spaces)
        email: "bazechristianfellowship@gmail.com",
        groupLink: "https://chat.whatsapp.com/BudRLYwGvZM6FBNCrhBqAm",
        instagram: "https://www.instagram.com/bazechristianfellowship/",
        tiktok: "https://www.tiktok.com/@baze.christian.fe",
        youtube: "https://www.youtube.com/@Bazechristianfellowship",
        prayerFormLink: ""                               // paste your Google Form link here later
    };

    function wa(message) {
        return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(message);
    }

    // Each intent: label (button text), keywords (what visitors might type), text, links
    var INTENTS = [
        {
            id: "greeting",
            keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "shalom", "peace"],
            text: "Hello and welcome! You can ask me about our services, events, departments, or how to contact us."
        },
        {
            id: "about",
            label: "What is BCF?",
            keywords: ["what is bcf", "about bcf", "about", "who are you", "baze christian fellowship", "fellowship", "what is this"],
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
        "@media (prefers-reduced-motion:reduce){.bcfa-fab{animation:none}.bcfa-typing i{animation:none}.bcfa-panel,.bcfa-bubble{transition:none}}";

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
        fab.className = "bcfa-fab";
        fab.setAttribute("aria-label", "Open chat: " + CONFIG.name);
        fab.setAttribute("aria-expanded", "false");
        fab.innerHTML = '<i class="fa-solid fa-dove" aria-hidden="true"></i>';

        var bubble = document.createElement("div");
        bubble.className = "bcfa-bubble";
        bubble.textContent = CONFIG.bubble;

        var panel = document.createElement("div");
        panel.className = "bcfa-panel";
        panel.hidden = true;
        panel.setAttribute("role", "dialog");
        panel.setAttribute("aria-label", CONFIG.name);
        panel.innerHTML =
            '<div class="bcfa-head">' +
                '<div class="bcfa-avatar"><i class="fa-solid fa-dove" aria-hidden="true"></i></div>' +
                '<div class="bcfa-title"><strong></strong><span></span></div>' +
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

        panel.querySelector(".bcfa-title strong").textContent = CONFIG.name;
        panel.querySelector(".bcfa-title span").textContent = CONFIG.subtitle;

        var msgs = panel.querySelector(".bcfa-msgs");
        var input = panel.querySelector(".bcfa-input");
        var started = false;

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
                addLinks(answer.links);
                addChips(MORE_CHIPS, it ? it.id : null);
            }, 550);
        }

        function ask(text, intent) {
            var q = (text || "").trim();
            if (!q) return;
            addMsg("me", q);
            input.value = "";
            reply(intent || findIntent(q));
        }

        function openPanel() {
            panel.hidden = false;
            requestAnimationFrame(function () { panel.classList.add("bcfa-on"); });
            fab.setAttribute("aria-expanded", "true");
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

        // Friendly nudge once per visit, after the pop-ups have had time to finish
        var nudged = false;
        try { nudged = sessionStorage.getItem("bcfAvatarNudge") === "1"; } catch (e) {}
        if (!nudged) {
            setTimeout(function () {
                if (!panel.classList.contains("bcfa-on")) bubble.classList.add("bcfa-on");
                try { sessionStorage.setItem("bcfAvatarNudge", "1"); } catch (e) {}
                setTimeout(function () { bubble.classList.remove("bcfa-on"); }, 9000);
            }, 12000);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
