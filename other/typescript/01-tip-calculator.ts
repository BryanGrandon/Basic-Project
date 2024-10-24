const tipCalculatorTs = (netValue: number, percentage: number): number => {
  return (netValue * percentage) / 100 + netValue;
};

console.log(tipCalculatorTs(20000, 5.5));
console.log(tipCalculatorTs(Number("20000"), Number("5.5")));
