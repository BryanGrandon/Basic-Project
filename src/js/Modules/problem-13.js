const d = document;
export function Problem13(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let string = prompt("string");
      let stringUpperCase = string.toLocaleUpperCase();
      alert(stringUpperCase);
    }
  });
}
