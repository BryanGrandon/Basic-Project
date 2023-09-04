const d = document;

function Problem1(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      const ageUser = prompt("How old are you?");
      const checkAge = Number(ageUser) == ageUser;

      if (checkAge) {
        isLegalAge(ageUser) ? alert("You can drive") : alert("you can't drive");
      } else {
        alert("Invalid value");
      }
    }
  });
}

function isLegalAge(age = 0) {
  const AGE_LEGAL = 18;
  return age >= AGE_LEGAL;
}

export { Problem1 };
