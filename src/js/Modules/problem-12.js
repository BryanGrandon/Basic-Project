const d = document;
export function Problem12(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      const random = () => {
        return Math.round(Math.random() * 99) + 1;
      };
      let num1 = random();
      let num2 = random();
      let num3 = random();

      if (num1 === num2) num1 = random();
      if (num2 === num3) num2 = random();
      if (num3 === num1) num3 = random();

      let numbers = `${num1}\n${num2}\n${num3}`;

      alert(numbers);
    }
  });
}
