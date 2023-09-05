const d = document;
export function Problem14(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let text = prompt("Text");
      let arr = [];
      for (let i = 0; i < text.length; i++) arr.push(text[i]);
      let result = arr.join("-");
      alert(result);
    }
  });
}
