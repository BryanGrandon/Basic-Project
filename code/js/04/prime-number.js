export const primeNumber = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number)) throw new Error('parameter provider must be a number')
  if (number <= 0) throw new Error('must be a positive number')

  let count = 0
  for (let i = 1; i <= number; i++) if (number % i === 0) count += 1

  return count === 2
}

const exercisesJS04 = (max) => {
  for (let i = 1; i <= max; i++) {
    if (primeNumber(i)) console.log(i)
  }
}
exercisesJS04(100)
