export const fibonacci = (lengthLimit) => {
  if (typeof lengthLimit !== 'number' || Number.isNaN(lengthLimit)) throw new Error('parameter provider must be a number')
  if (lengthLimit <= 0) throw new Error('must be a positive number')

  const output = []

  if (lengthLimit === 1) output.push(0)
  if (lengthLimit >= 2) output.push(0, 1)

  while (output.length < lengthLimit) output.push(output.at(-2) + output.at(-1))

  return output
}

const exercisesJS03 = () => {
  const array = fibonacci(50)
  array.forEach((e) => console.log(e))
}
exercisesJS03()
