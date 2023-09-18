const d = document;
export function Problem15(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let text = prompt("insert Text").toLocaleLowerCase();
      const arr = [];
      for (let i = 0; i < text.length; i++) {
        if (
          text[i].includes("a") ||
          text[i].includes("e") ||
          text[i].includes("i") ||
          text[i].includes("o") ||
          text[i].includes("u")
        ) {
          arr.push(text[i]);
        }
      }
      let vowels = arr.length;
      alert(vowels);
    }
  });
}
