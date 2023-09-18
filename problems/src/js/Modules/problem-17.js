const d = document;
export function Problem17(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let text = prompt("Text");
      const arr = text.split("");
      let backward = arr.reverse().join("").toString();
      alert(backward);
    }
  });
}
