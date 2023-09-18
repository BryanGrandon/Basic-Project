const d = document;
export function Problem7(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let pyramid = ``;
      const number = prompt("Number");
      const isANumber = number == Number(number) && number <= 50 && number >= 0;

      if (isANumber) {
        for (let i = 0; i <= number; i++) {
          for (let n = 1; n <= i; n++) {
            pyramid = pyramid + n;
          }
          pyramid = pyramid + "\n";
        }
        console.log(pyramid);
        alert(pyramid);
      } else {
        alert("The value is invalid");
      }
    }
  });
}
