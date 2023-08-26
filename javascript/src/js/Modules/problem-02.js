const d = document;

export function Problem2(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      const value = prompt("What is your grade? ( 0 - 10 )");
      const checkValue = value == Number(value) && value <= 10 && value >= 0;

      if (checkValue) {
        if (value < 3) alert("Very Poor");
        else if (value < 5) alert("Insufficient");
        else if (value < 6) alert("Sufficient");
        else if (value < 7) alert("Good");
        else if (value < 9) alert("Remarkable");
        else if (value >= 9) alert("Outstanding");
      } else {
        alert("The value is invalid");
      }
    }
  });
}
