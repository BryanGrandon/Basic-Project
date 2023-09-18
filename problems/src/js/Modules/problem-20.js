const d = document;
export function Problem20(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      function pc() {
        const arr = ["rock", "paper", "scissors"];
        let random = Math.round(Math.random() * 2);
        return arr[random];
      }
      let option = prompt("Rock, Paper, Scissors").toLocaleLowerCase();
      let pcOption = pc();
      console.log(`PC = ${pcOption}`);
      console.log(`USER  = ${option}`);
      if (option === "rock" || option === "paper" || option === "scissors") {
        let userOption = option;
        if (userOption === pcOption) alert(`tie`);
        else if (pcOption === "rock" && userOption === "scissors")
          alert(`Lose`);
        else if (pcOption === "scissors" && userOption === "paper")
          alert(`Lose`);
        else if (pcOption === "paper" && userOption === "rock") alert(`Lose`);
        else alert(`Win`);
      } else alert("Value Invalid");
    }
  });
}
