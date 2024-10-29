export const palindrome = (str1) => {
  if (typeof str1 !== 'string') throw new Error('parameter provider must be a text string')
  const main = []
  str1.split('').forEach((e) => { if (e !== ' ') main.push(e.toLowerCase()) })
  const reverse = [...main].reverse()
  const output = main.join('') === reverse.join('')
  return output
}
