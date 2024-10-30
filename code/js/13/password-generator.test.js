import { describe, expect, it } from 'vitest'
import { passwordGenerator } from './password-generator'

describe('password generator', () => {
  it('should throw if not number is provided as parameter', () => {
    expect(() => passwordGenerator()).throw()
  })

  it('should throw specific error message if not number is provided as the first parameter', () => {
    expect(() => passwordGenerator()).throw('parameter provider must be a number')
  })

  it('should throw a specific error message if the number provided as parameter is negative', () => {
    expect(() => passwordGenerator(-1)).throw('must be a positive number')
  })

  it('should throw a specific error message if the number provided as parameter is 0', () => {
    expect(() => passwordGenerator(0)).throw('must be a positive number')
  })

  it('should throw specific error message if not boolean is provided as the second parameter', () => {
    expect(() => passwordGenerator(12)).throw('must be a Boolean')
  })

  it('should throw specific error message if not boolean is provided as the tertiary parameter', () => {
    expect(() => passwordGenerator(12, true)).throw('must be a Boolean')
  })

  it('should return a string with a length of 12 if provided is 12, true/false, true/false', () => {
    expect(passwordGenerator(12, false, false)).lengthOf(12)
  })
})
