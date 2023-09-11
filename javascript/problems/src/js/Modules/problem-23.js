const d = document;
export function Problem23(btn) {
  d.addEventListener("click", (e) => {
    let now = new Date();
    let year = now.getFullYear();
    let day = now.getDate();
    let dayOfTheWeek = now.getDay();
    let month = now.getMonth();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    const arrDayOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const arrMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    alert(
      `Today is ${arrDayOfTheWeek[dayOfTheWeek]}, ${arrMonth[month]}, ${day}, ${year} and the time is ${hours}:${minutes} hours `
    );
  });
}
