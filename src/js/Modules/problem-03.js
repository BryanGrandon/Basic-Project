const d = document;
export function Problem3(input, accept, cancel) {
  const arr = [];
  d.addEventListener("click", (e) => {
    if (e.target.matches(accept)) {
      const string = d.querySelector(input);
      const value = string.value;
      arr.push(value);
      d.querySelector(input).value = "";
    }
    if (e.target.matches(cancel)) {
      alert(arr.join("-"));
    }
  });
}
