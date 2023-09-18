const d = document;
export function Problem19(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let number = prompt("Number for fibonacci");
      const arr = [];
      if (number >= 1 && number <= 100) {
        let x = 0;
        let y = 1;
        let z;
        arr.push(x);
        for (let i = 0; i < number - 1; i++) {
          z = x + y;
          arr.push(z);
          y = x;
          x = z;
        }
        console.log(arr);
      } else {
        alert("Number Error");
      }
    }
  });
}
