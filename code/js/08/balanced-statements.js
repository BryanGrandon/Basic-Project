export const balancedStatements = (text) => {
  if (typeof text !== 'string') throw new Error('parameter provider must be a text string')

  const arr = []
  const open = ['[', '{', '(']

  const close = (string) => {
    if (arr.at(-1) === string) arr.pop()
    else if (arr.at(-1) !== string) arr.push(' ')
  }

  text.split('').forEach((e) => {
    if (open.includes(e)) arr.push(e)
    if (e === ']') close('[')
    if (e === ')') close('(')
    if (e === '}') close('{')
  })
  return arr.length === 0
}
