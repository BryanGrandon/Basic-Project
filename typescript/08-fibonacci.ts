const fibonacciTs = (limit: number) => {
  let first = 0;
  let second = 1;
  const fibonacciSuccession: number[] = [first, second];

  while (first + second < limit) {
    let response = first + second;
    first = second;
    second = response;
    fibonacciSuccession.push(response);
  }
  return fibonacciSuccession;
};

console.log(fibonacciTs(1000));
