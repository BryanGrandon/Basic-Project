"use strict";
const d = document, w = window, n = navigator;
function networkStatus() {
    const isOnline = () => {
        const $section = d.createElement("section");
        if (n.onLine) {
            $section.textContent = `Connection restored`;
            $section.classList.add("online");
            $section.classList.remove("offline");
        }
        else {
            $section.textContent = `Lost connection`;
            $section.classList.remove("online");
            $section.classList.add("offline");
        }
        d.body.insertAdjacentElement("afterbegin", $section);
        setTimeout(() => {
            d.body.removeChild($section);
        }, 2000);
    };
    w.addEventListener("online", (e) => isOnline());
    w.addEventListener("offline", (e) => isOnline());
}
networkStatus();
