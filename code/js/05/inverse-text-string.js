export const inverseTextString = (text) => {
  if (typeof text !== 'string') throw new Error('parameter provider must be a string')
  const array = []
  text.split('').forEach((letter) => array.unshift(letter))
  return array.join('')
}

console.log(inverseTextString('Hello world'))
