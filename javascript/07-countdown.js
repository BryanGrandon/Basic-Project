const countdown = (limitDate) => {
  let countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime();
    let limitTime = countdownDate - now;

    let day = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((limitTime % (1000 * 60)) / 1000);

    day = day < 10 ? `0${day}` : day;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    console.log(
      `Day:${day}, Hours:${hours}, Minutes:${minutes}, Seconds:${seconds}`
    );
  }, 1000);

  if (limitTime < 0) {
    clearInterval(countdownTempo);
  }
};

countdown("5/1/2024");
