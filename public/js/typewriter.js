const typingSpeedMS = 50;

window.addEventListener("load", async () => {
    const line1 = document.getElementById("typewriter-line-1");
    const line2 = document.getElementById("typewriter-line-2");

    await sleep(50);
    line1.classList.add("caret");
    await typeElement(line1);
    line1.classList.remove("caret");
    await sleep(300);
    line2.classList.add("caret");
    await typeElement(line2);
});

/**
 *
 * @param elem HTMLElement
 */
async function typeElement(elem) {
    const text = elem.innerHTML;
    elem.innerHTML = text.slice(0, 1);
    elem.classList.add("visible");

    return new Promise(async (resolve) => {
        for (let i = 0; i < text.length; i++) {
            elem.innerHTML = text.slice(0, i + 1);

            if (text.charAt(i + 1) === ",") {
                await sleep(500);
            } else {
                await sleep(typingSpeedMS);
            }
        }
        resolve();
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}