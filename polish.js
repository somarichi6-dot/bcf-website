// BCF polish: scroll-in animations + highlight the current menu link
(function () {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var hasObserver = "IntersectionObserver" in window;

    if (!hasObserver) return;

    // 1. Scroll-in animation
    if (!reduceMotion) {
        var targets = document.querySelectorAll(
            ".section-heading, .section-text, .program-card, .department-card, " +
            ".event-card, .leader-card, .gallery-item, .upcoming, " +
            ".join-department, .gallery-more, .social-logos, .enquiry"
        );

        var reveal = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                el.classList.add("in");
                reveal.unobserve(el);

                // Remove the helper classes afterwards so normal hover effects work again
                setTimeout(function () {
                    el.classList.remove("reveal", "in");
                    el.style.transitionDelay = "";
                }, 1100);
            });
        }, { threshold: 0.12 });

        targets.forEach(function (el, i) {
            el.classList.add("reveal");
            el.style.transitionDelay = (i % 4) * 80 + "ms";
            reveal.observe(el);
        });
    }

    // 2. Highlight the menu link for the section you are viewing
    var links = document.querySelectorAll(".nav-links a");
    var sections = document.querySelectorAll("section[id]");

    var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            links.forEach(function (a) {
                a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
            });
        });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (s) { spy.observe(s); });
})();
