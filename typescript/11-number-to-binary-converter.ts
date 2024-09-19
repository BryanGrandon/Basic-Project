const wholeNumberTs = (number: number = 0): number => {
  const binary: number[] = [];
  if (number == 0) binary.push(number);
  while (number > 0) {
    binary.push(number % 2);
    number = Math.floor(number / 2);
  }
  return Number(binary.reverse().join(""));
};

const decimalNumberTs = (number: number): string => {
  const decimal = String(number).split(".");
  const binary = [];
  for (let i = 0; decimal.length > i; i++) {
    let result = wholeNumberTs(Number(decimal[i]));
    binary.push(result);
  }
  return binary.join(".");
};

const binaryTs = (number: number): number | string => {
  if (isNaN(number)) {
    console.error("The value entered is NaN");
    return 0;
  }
  const isDecimal = String(number).split(".").length > 1;
  return isDecimal ? decimalNumberTs(number) : wholeNumberTs(number);
};

console.log(binaryTs(5));
console.log(binaryTs(21.5));
