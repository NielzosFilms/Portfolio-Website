window.addEventListener("scroll", fadeIn);

window.addEventListener("load", () => {
    fadeIn()

    setTimeout(() => {
        const fadeInTitleParagraph = document.querySelectorAll(".fade-in-title-paragraph");
        fadeInTitleParagraph.forEach(elem => {
            elem.classList.add("fade-in-visible");
        })
    }, 3000);
});

function fadeIn() {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach(elem => {
        const windowHeight = window.innerHeight;
        const elementTop = elem.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            elem.classList.add("fade-in-visible");
        }
    });
}