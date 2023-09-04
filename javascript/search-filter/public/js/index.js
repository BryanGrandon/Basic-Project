"use strict";
const d = document;
function searchFilter(input, selector) {
    d.addEventListener("keyup", (event) => {
        const target = event.target;
        if (target.matches(input)) {
            if (event.key === "Escape") {
                target.value = "";
            }
            const allSelector = d.querySelectorAll(selector);
            allSelector.forEach((el) => {
                var _a;
                ((_a = el.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(target.value))
                    ? el.classList.remove("filter")
                    : el.classList.add("filter");
            });
        }
    });
}
d.addEventListener("DOMContentLoaded", () => {
    searchFilter(".card-filter", ".card");
});
