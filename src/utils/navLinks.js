// See https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// and https://css-tricks.com/scroll-triggered-animation-vanilla-javascript/

export function addActiveClass(link, links) {
    if (!link.classList.contains("active-anchor")) {
        Array.from(links).forEach((link) =>
            link.classList.remove("active-anchor")
        );
        link.classList.add("active-anchor");
    }
}

export function createObserver(target, navLink) {
    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const navLinks =
                        document.getElementById("nav-links").children;

                    addActiveClass(navLink, navLinks);
                }
            });
        },
        {
            root: null, // because we watch the visibility in the viewport
            rootMargin: "-200px",
            threshold: 0.1,
        }
    );

    observer.observe(target);
}
