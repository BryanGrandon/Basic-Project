export const caesarCipher = (text, scroll) => {
  if (typeof text !== 'string') throw new Error('the first parameter must be a text string')
  if (typeof scroll !== 'number' || Number.isNaN(scroll)) throw new Error('the second parameter must be a number')

  const alphabetText = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,T,U,V,W,X,Y,Z'
  const alphabet = alphabetText.split(',')
  const array = text.toUpperCase().split('')
  let output = ''

  array.forEach((letter) => {
    if (alphabet.includes(letter)) {
      const indexOf = alphabet.indexOf(letter)
      output += scroll >= 0 ? alphabet[indexOf + scroll] : alphabet[indexOf + scroll + alphabet.length]
    } else output += letter
  })
  return output
}
