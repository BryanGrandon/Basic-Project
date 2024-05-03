const binary = (number = 0) => {
  let numberToBinary =
    typeof number == "string" || typeof number == "number"
      ? Number(number)
      : undefined;

  if (numberToBinary === undefined) {
    console.error("The value entered is not a number");
    return null;
  }

  const array = [];
  if (numberToBinary == 0) array.push(numberToBinary);

  while (numberToBinary > 0) {
    array.push(numberToBinary % 2);
    numberToBinary = Math.floor(numberToBinary / 2);
  }

  return array.reverse().join("");
};

console.log(binary(8));
console.log(binary(80));
console.log(binary(9023));
