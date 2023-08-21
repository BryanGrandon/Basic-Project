const d = document;
export function Problem8(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      const maxNumber = 500;
      let string = "";
      for (let number = 1; number < maxNumber; number++) {
        if (number % 4 === 0) {
          if (number % 9 === 0) string += `${number} Multiple of 4 and 9 \n`;
          else string += `${number} Multiple of 4\n`;
          if (number % 5 === 0) string += `----------------\n`;
        } else if (number % 5 === 0) string += `${number}\n-------------\n`;
        else if (number % 9 === 0) string += `${number} Multiple of 9\n`;
        else string += `${number}\n`;
      }
      console.log(string);
      alert(string);
    }
  });
}
