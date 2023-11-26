"use strict";
const d = document;
const w = window;
const n = navigator;

const networkStatus = () => {
  const isOnline = () => {
    const $section = d.createElement("section");
    if (n.onLine) {
      $section.textContent = `Connection restored`;
      $section.classList.remove("offline");
      $section.classList.add("online");
    } else {
      $section.textContent = `Lost connection`;
      $section.classList.remove("online");
      $section.classList.add("offline");
    }
    d.body.insertAdjacentElement("afterbegin", $section);
    setTimeout(() => {
      d.body.removeChild($section);
    }, 1000);
  };
  w.addEventListener("online", (e) => isOnline());
  w.addEventListener("offline", (e) => isOnline());
};
networkStatus();

console.log("ddd");
