const game = (userOption) => {
  const options = ["rock", "scissors", "paper"];
  const random = Math.floor(Math.random() * options.length);
  const computerOption = options[random];

  let winner;

  switch (userOption) {
    case "rock":
      if (computerOption == "paper") winner = "computer";
      else if (computerOption == "scissors") winner = "user";
      else winner = "tied game";
      break;

    case "paper":
      if (computerOption == "scissors") winner = "computer";
      else if (computerOption == "rock") winner = "user";
      else winner = "tied game";
      break;

    case "scissors":
      if (computerOption == "rock") winner = "computer";
      else if (computerOption == "paper") winner = "user";
      else winner = "tied game";
      break;
  }
  return winner;
};

console.log(game("rock"));
console.log(game("paper"));
console.log(game("scissors"));
