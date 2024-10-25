export const anagram = (text1, text2) => {
  if (typeof text1 !== 'string') throw new Error('The first parameter must be a text string')
  if (typeof text2 !== 'string') throw new Error('The second parameter must be a text string')
  if (text1 === text2 || text1.length !== text2.length) return false

  let output = true
  text1.split('').forEach((letter) => {
    if (!text2.includes(letter)) output = false
  })

  return output
}
