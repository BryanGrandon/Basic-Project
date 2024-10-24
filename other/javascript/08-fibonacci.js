const fibonacci = (limit = 1000) => {
  let firstIssue = 0;
  let secondIssue = 1;
  const fibonacciSuccession = [firstIssue, secondIssue];

  while (firstIssue + secondIssue < limit) {
    let response = firstIssue + secondIssue;
    firstIssue = secondIssue;
    secondIssue = response;
    fibonacciSuccession.push(response);
  }

  return fibonacciSuccession;
};

console.log(fibonacci(100000));
