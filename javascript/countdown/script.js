const d = document;
const time = ["days", "hours", "minutes", "seconds"];

function createStructure() {
  const $fragment = d.createDocumentFragment();
  time.forEach((e) => {
    const $section = d.createElement("section");
    let classUpdater = `${e}-updater`;
    let content = `
    <p class="updater ${classUpdater}"></p>
    <p class="time-text">${e}</p>
    `;
    $section.innerHTML = content;
    $fragment.appendChild($section);

    const $span = d.createElement("span");
    $span.textContent = ":";
    $span.classList.add("updater");
    if (e !== time.at(-1)) $fragment.appendChild($span);
  });
  const $sectionMain = d.createElement("section");
  $sectionMain.classList.add("container-countdown");
  $sectionMain.appendChild($fragment);
  return $sectionMain;
}

function countdown(id, date, message, time) {
  const $container = d.getElementById(id);
  const $sectionMain = createStructure(time);
  $container.appendChild($sectionMain);

  const $days = d.querySelector(".days-updater");
  const $hours = d.querySelector(".hours-updater");
  const $minutes = d.querySelector(".minutes-updater");
  const $seconds = d.querySelector(".seconds-updater");

  const countdownTempo = setInterval(() => {
    const countdownDate = new Date(date).getTime();
    let now = new Date().getTime(),
      limitTime = countdownDate - now;
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = Math.floor(
        (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((limitTime % (1000 * 60)) / 1000);

    $days.textContent = days < 10 ? (days = `0${days}`) : days;
    $hours.textContent = hours < 10 ? (hours = `0${hours}`) : hours;
    $minutes.textContent = minutes < 10 ? (minutes = `0${minutes}`) : minutes;
    $seconds.textContent = seconds < 10 ? (seconds = `0${seconds}`) : seconds;
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
  countdown("countdown", test, "Hello world");
  // countdown("countdown", "Sep 18 2023 14:30:00", "Message");
});
