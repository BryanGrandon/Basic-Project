const wholeNumber = (number = 0) => {
  const binary = [];
  if (number == 0) binary.push(number);
  while (number > 0) {
    binary.push(number % 2);
    number = Math.floor(number / 2);
  }
  return binary.reverse().join("");
};

const decimalNumber = (number) => {
  const decimal = String(number).split(".");
  let binary = [];
  let result = [];
  for (let i = 0; decimal.length > i; i++) {
    while (decimal[i] > 0) {
      result.push(decimal[i] % 2);
      decimal[i] = Math.floor(decimal[i] / 2);
    }
    binary.push(result.reverse().join(""));
    result = [];
  }
  return binary.join(".");
};

const binary = (number = 0) => {
  let numberToBinary;
  if (typeof number == "number") numberToBinary = number;
  else if (typeof number == "string") {
    let string = Number(number);
    numberToBinary = string == number ? string : number;
  } else numberToBinary = null;

  if (typeof numberToBinary != "number") {
    console.error(`The value entered "${numberToBinary}" is not a number`);
    return null;
  }

  const isDecimal = String(numberToBinary).split(".").length > 1;

  return isDecimal
    ? decimalNumber(numberToBinary)
    : wholeNumber(numberToBinary);
};

const example = {
  5: binary(5),
  80: binary("80"),
  21.5: binary(21.5),
  string: binary("string"),
};

console.table(example);
