const passwordGenerator = (characteristics) => {
  let alphabet = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
  let numbers = `0123456789`;
  let symbols = `!@#$%^&*(){}<>?`;

  characteristics.withNumbers == true ? (alphabet += numbers) : null;
  characteristics.withSymbols == true ? (alphabet += symbols) : null;

  const array = alphabet.split("");
  let password = "";

  for (let i = 0; i < characteristics.characterLength; i++) {
    let random = Math.floor(Math.random() * array.length);
    password += array[random];
  }
  return password;
};

const object = {
  characterLength: 12,
  withNumbers: true,
  withSymbols: true,
};

console.log(passwordGenerator(object));
