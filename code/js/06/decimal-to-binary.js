export const decimalToBinary = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number)) throw new Error('parameter provider must be a number')
  if (number === 0) return String(number)
  const numbers = String(number).split('.')
  const output = []
  numbers.forEach((e) => {
    const binary = []
    while (e > 0) {
      binary.push(e % 2)
      e = Math.floor(e / 2)
    }
    output.push(binary.reverse().join(''))
  })
  return output.join('.')
}
