const d = document;
export function Problem5(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let pyramid = ``;

      for (let i = 0; i <= 30; i++) {
        for (let n = 0; n < i; n++) {
          pyramid = pyramid + i;
        }
        pyramid = pyramid + "\n";
      }

      console.log(pyramid);
      alert(pyramid);
    }
  });
}
