import { describe, expect, it } from 'vitest'
import { temperatureConverter } from './temperature-converter'

describe('Temperature converter', () => {
  it('should throw if not number is provided as parameter', () => {
    expect(() => temperatureConverter()).throw()
  })

  it('should throw specific error message if not number is provided as the first parameter', () => {
    expect(() => temperatureConverter()).throw('parameter provider must be a number')
  })

  it('should throw specific error message if not string is provided as the second parameter', () => {
    expect(() => temperatureConverter(12)).throw('must be a text string')
  })

  it('should throw a specific error message if the text string provided as the second parameter is not “C”, “F” and “K”', () => {
    expect(() => temperatureConverter(12, 's')).throw('text string provided is not “C” (celsius), “F” (fahrenheit) or “K” (kelvin)')
  })

  it('should return a { celsius: 50, fahrenheit: 122, kelvin: 323.15 } if provided is 50, "C"', () => {
    expect(temperatureConverter(50, 'C')).toEqual({ celsius: 50, fahrenheit: 122, kelvin: 323.15 })
  })

  it('should return a string with a length of 12 if provided is 12, true/false, true/false', () => {
    expect(temperatureConverter(32, 'F')).toEqual({ celsius: 0, fahrenheit: 32, kelvin: 273.15 })
  })
})
