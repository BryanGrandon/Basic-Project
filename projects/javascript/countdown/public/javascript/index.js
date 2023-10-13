"use strict";
const d = document;
function createStructure() {
    const time = ["days", "hours", "minutes", "seconds"];
    const $fragment = d.createDocumentFragment();
    time.forEach((e) => {
        const $section = d.createElement("section");
        let importantClass = `n-${e}`;
        const content = `
    <p class="n-countdown ${importantClass}"></p>
    <p class="t-countdown">${e}</p>
    `;
        $section.innerHTML = content;
        $fragment.appendChild($section);
        const $span = d.createElement("span");
        $span.textContent = ":";
        $span.classList.add("n-countdown");
        if (e !== "seconds")
            $fragment.appendChild($span);
    });
    const $sectionMain = d.createElement("section");
    $sectionMain.classList.add("container-countdown");
    $sectionMain.appendChild($fragment);
    return $sectionMain;
}
function countdown(id, date, message) {
    const $container = d.getElementById(id);
    const $sectionMain = createStructure();
    $container.appendChild($sectionMain);
    const $days = d.querySelector(".n-days");
    const $hours = d.querySelector(".n-hours");
    const $minutes = d.querySelector(".n-minutes");
    const $seconds = d.querySelector(".n-seconds");
    const countdownTempo = setInterval(() => {
        const countdownDate = new Date(date).getTime();
        let now = new Date().getTime(), limitTime = countdownDate - now;
        let days = Math.floor(limitTime / (1000 * 60 * 60 * 24)), hours = Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), minutes = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60)), seconds = Math.floor((limitTime % (1000 * 60)) / 1000);
        let day = days.toString(), hour = hours.toString(), minute = minutes.toString(), second = seconds.toString();
        if (days < 10)
            day = `0${day}`;
        if (hours < 10)
            hour = `0${hour}`;
        if (minutes < 10)
            minute = `0${minute}`;
        if (seconds < 10)
            second = `0${second}`;
        $days.textContent = `${day}`;
        $hours.textContent = `${hour}`;
        $minutes.textContent = `${minute}`;
        $seconds.textContent = `${second}`;
        if (limitTime < 0) {
            clearInterval(countdownTempo);
            let info = `<section class="m-countdown"><p>${message}</p></section>`;
            $container.insertAdjacentHTML("beforeend", info);
            $days.textContent = `00`;
            $hours.textContent = `00`;
            $minutes.textContent = `00`;
            $seconds.textContent = `00`;
        }
    }, 1000);
}
d.addEventListener("DOMContentLoaded", () => {
    let test = new Date().getTime() + 10000; // 08 seconds
    //   countdown("countdown", test, "Hello world");
    countdown("countdown", "Sep 18 2023 14:30:00", "Message");
});
