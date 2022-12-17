let lastScrollPos = 0;

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    const nav = document.getElementsByTagName("nav")[0];

    if (scrollPos > 0) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }

    if (scrollPos < lastScrollPos && scrollPos !== 0) {
        nav.classList.add("fixed-nav-show");
    } else {
        nav.classList.remove("fixed-nav-show");
    }
    lastScrollPos = scrollPos;
})