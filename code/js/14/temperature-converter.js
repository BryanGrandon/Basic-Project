export const temperatureConverter = (number, type) => {
  if (typeof number !== 'number') throw new Error('parameter provider must be a number')
  if (typeof type !== 'string') throw new Error('must be a text string')
  const types = ['C', 'F', 'K']
  const typeOfGrade = type.toUpperCase()
  if (!types.includes(typeOfGrade)) throw new Error('text string provided is not “C” (celsius), “F” (fahrenheit) or “K” (kelvin)')

  const degrees = {
    celsius: {
      F: (n) => (9 * n) / 5 + 32,
      K: (n) => n + 273.15
    },
    fahrenheit: {
      C: (n) => (5 * (n - 32)) / 9,
      K: (n) => (5 * (n - 32)) / 9 + 273.15
    },
    kelvin: {
      C: (n) => n - 273.15,
      F: (n) => (9 * (n - 273.15)) / 5 + 32
    }
  }

  let celsius = 0
  let fahrenheit = 0
  let kelvin = 0

  if (typeOfGrade === 'C') {
    celsius = number
    fahrenheit = degrees.celsius.F(number)
    kelvin = degrees.celsius.K(number)
  }

  if (typeOfGrade === 'F') {
    fahrenheit = number
    celsius = degrees.fahrenheit.C(number)
    kelvin = degrees.fahrenheit.K(number)
  }

  if (typeOfGrade === 'K') {
    kelvin = number
    celsius = degrees.kelvin.C(number)
    fahrenheit = degrees.kelvin.F(number)
  }

  const rounding = (e) => Math.round(e * 100) / 100

  return { celsius: rounding(celsius), fahrenheit: rounding(fahrenheit), kelvin: rounding(kelvin) }
}
