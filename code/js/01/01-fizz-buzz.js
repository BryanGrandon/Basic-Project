export const fizzBuzz = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number)) throw new Error('parameter provider must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })

  return output === '' ? number : output
}

const exercisesJS01 = () => {
  const number = 100
  for (let i = 0; i <= number; i++) console.log(fizzBuzz(i))
}
exercisesJS01()
