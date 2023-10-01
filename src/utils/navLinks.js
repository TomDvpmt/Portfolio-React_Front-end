/** Remove the "active-anchor" class from navigation link elements
 *
 * @param {HTMLCollection} links
 */

export function removeActiveClass(links) {
    Array.from(links).forEach((link) => link.classList.remove("active-anchor"));
}

/** Add the "active-anchor" class to the active navigation link element
 *
 * @param {HTMLElement} link
 * @param {HTMLCollection} links
 */

export function addActiveClass(link, links) {
    if (!link.classList.contains("active-anchor")) {
        removeActiveClass(links);
        link.classList.add("active-anchor");
    }
}

// See https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// and https://css-tricks.com/scroll-triggered-animation-vanilla-javascript/

/** Create an observer (with the Intersection Observer API) on a section of the page, and add a class to the related nav link
 *
 * @param {HTMLElement} target
 * @param {HTMLElement} navLink
 */

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
