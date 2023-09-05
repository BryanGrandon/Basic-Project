const d = document;
export function Problem16(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let text = prompt("Text ( )");
      const arr = [];
      for (let i = 0; i < text.length; i++) {
        if (text[i] === "(") {
          i++;
          for (i; i < text.length; i++) {
            if (text[i] === ")") break;
            arr.push(text[i]);
          }
        }
      }
      let contain = arr.join("");
      alert(contain);
    }
  });
}
