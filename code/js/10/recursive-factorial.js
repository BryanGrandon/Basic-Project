export const recursiveFactorial = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number)) throw new Error('parameter provider must be a number')
  if (number <= 0) throw new Error('must be a positive number')
  const output = (number > 1) ? number * recursiveFactorial(number - 1) : number * 1
  return output
}
