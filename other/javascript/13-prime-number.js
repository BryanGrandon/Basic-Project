const primeNumber = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) count += 1;
  }
  return count < 3 ? true : false;
};

const print = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i == 1) continue;
    if (primeNumber(i)) console.log(i);
  }
};

print(100);
