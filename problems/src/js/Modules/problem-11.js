const d = document;
export function Problem11(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let numberRandom = Math.round(Math.random() * 99) + 1;
      alert(numberRandom);
    }
  });
}
