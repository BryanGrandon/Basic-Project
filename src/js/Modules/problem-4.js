const d = document;
export function Problem4(input, accept, cancel) {
  const arr = [];
  d.addEventListener("click", (e) => {
    if (e.target.matches(accept)) {
      const number = d.querySelector(input);
      const value = number.value;

      if (value == Number(value)) {
        arr.push(Number(value));
        d.querySelector(input).value = "";
      } else {
        alert("The value entered is not a number");
        d.querySelector(input).value = "";
      }
    }
    if (e.target.matches(cancel)) {
      let result = 0;

      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result = result + element;
      }
      alert(`The addition = ${result}`);
    }
  });
}
