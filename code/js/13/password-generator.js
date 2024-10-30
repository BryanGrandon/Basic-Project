export const passwordGenerator = (characters, withNumbers, withSymbols) => {
  if (typeof characters !== 'number') throw new Error('parameter provider must be a number')
  if (characters <= 0) throw new Error('must be a positive number')
  if (typeof withNumbers !== 'boolean' || typeof withSymbols !== 'boolean') throw new Error('must be a Boolean')

  let alphabet = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'
  const numbers = '0123456789'
  const symbols = '!@#$%^&*(){}<>?'

  if (withNumbers) alphabet += numbers
  if (withSymbols) alphabet += symbols

  let output = ''
  for (let i = 0; i < characters; i++) output += alphabet.split('')[Math.floor(Math.random() * alphabet.length)]

  return output
}
