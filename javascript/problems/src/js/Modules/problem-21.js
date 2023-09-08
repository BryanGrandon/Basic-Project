const d = document;
export function Problem21(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      function random(min, max) {
        let number = Math.round(Math.random() * (max - min) + min);
        return number;
      }
      let min = Number(prompt("Min")) || 1;
      let max = Number(prompt("Max")) || 100;
      let result = random(min, max);
      alert(result);
    }
  });
}
