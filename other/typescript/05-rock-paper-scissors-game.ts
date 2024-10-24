const gameTs = (option: string): string => {
  const options: string[] = ["rock", "scissors", "paper"];
  let random: number = Math.floor(Math.random() * options.length);
  let pc: string = options[random];
  let winner: string;

  switch (option.toLowerCase()) {
    case "rock":
      winner =
        pc === "paper" ? "computer" : pc === "scissors" ? "user" : "tied game";
      break;

    case "paper":
      winner =
        pc === "scissors" ? "computer" : pc === "rock" ? "user" : "tied game";
      break;

    case "scissors":
      winner =
        pc === "rock" ? "computer" : pc === "paper" ? "user" : "tied game";
      break;

    default:
      return "Invalid value";
  }

  return `Winner: ${winner}`;
};

console.log(gameTs("roc"));
console.log(gameTs("rock"));
console.log(gameTs("paper"));
