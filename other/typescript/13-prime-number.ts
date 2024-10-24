const primeNumberTs = (limit: number) => {
  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    let count: number = 0;
    let variable: number = 1;

    while (variable <= i) {
      if (i % variable == 0) count += 1;
      variable += 1;
    }
    if (count < 3) primes.push(i);
  }
  return primes;
};

console.log(primeNumberTs(100));
