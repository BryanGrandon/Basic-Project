const countdownTs = (limit: string) => {
  const countdownDate: number = new Date(limit).getTime();

  if (isNaN(countdownDate)) {
    console.error("Invalid value");
    return null;
  }

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime();
    let limitTime = countdownDate - now;

    let day = Math.floor(limitTime / (1000 * 60 * 60 * 60));
    let hours = Math.floor(
      (limitTime % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((limitTime % (1000 * 60)) / 1000);

    if (limitTime < 0) clearInterval(countdownTempo);
    console.log({ day, hours, minutes, seconds });
  }, 1000);
};

console.log(countdownTs("2024/09/17 19:40"));
