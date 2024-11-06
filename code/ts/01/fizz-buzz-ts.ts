type FizzBuzz = number | string

export const fizzBuzzTs = (number:number) :FizzBuzz => {
  if (typeof number !== 'number') throw new Error('the parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('the parameter provided must not be NaN')

  const multiplies = { 3: 'fizz', 5: 'buzz' }
  let text = ''

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % Number(multiplier) === 0) text += word
    })

  return text === '' ? number : text
}
