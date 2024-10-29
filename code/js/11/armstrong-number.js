export const armstrongNumber = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number)) throw new Error('parameter provider must be a number')
  if (number <= 0) throw new Error('must be a positive number')

  const arr = String(number).split('')
  let output = 0
  arr.forEach((e) => {
    let num = e
    for (let i = 1; i < arr.length; i++) num *= Number(e)
    output += num
  })

  return number === output
}
