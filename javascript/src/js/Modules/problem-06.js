const d = document;
export function Problem6(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let number = prompt("Number");
      const isANumber = number == Number(number);
      let pyramid = ``;

      if (isANumber) {
        for (let i = 0; i < number; number--) {
          for (let n = 1; n <= number; n++) {
            pyramid = pyramid + number;
          }
          pyramid = pyramid + "\n";
        }
        alert(pyramid);
      } else alert("The value is invalid");
    }
  });
}
