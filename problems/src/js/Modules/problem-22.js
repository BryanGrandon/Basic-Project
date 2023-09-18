const d = document;
export function Problem22(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      const random = (min, max) => {
        let number = Math.round(Math.random() * (max - min) + min);
        return number;
      };
      const arr = [];

      for (let i = 0; i < 100; i++) {
        let copy;
        let temp;
        do {
          copy = true;
          temp = random(1, 1000);
          for (let j = 0; j < arr.length; j++) {
            if (temp == arr[j]) {
              copy = false;
            }
          }
        } while (copy == false);
        arr[i] = temp;
      }
      arr.sort(function (a, b) {
        return a - b;
      });
      console.log(arr);
      alert(arr);
    }
  });
}
