interface Password {
  theLength: number;
  number: boolean;
  symbols: boolean;
}

const passwordGeneratorTs = (option: Password): string => {
  let alphabet: string = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
  let numbers: string = `0123456789`;
  let symbols: string = `!@#$%^&*(){}<>?`;

  option.number ? (alphabet += numbers) : null;
  option.symbols ? (alphabet += symbols) : null;

  const array: string[] = alphabet.split("");
  let password: string = "";

  for (let i = 0; i < option.theLength; i++) {
    let random = Math.floor(Math.random() * array.length);
    password += array[random];
  }
  return password;
};

console.log(
  passwordGeneratorTs({ theLength: 10, number: true, symbols: false })
);
