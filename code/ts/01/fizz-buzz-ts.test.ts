import { describe, expect, it } from 'vitest'
import { fizzBuzzTs } from './fizz-buzz-ts'

describe('fizz-buzz-ts', () => {
  describe('should throw a specific error message', () => {
    it('if not number is provided as parameter', () => {
      expect(() => fizzBuzzTs(undefined)).toThrow('the parameter provided must be a number')
    })

    it('if NaN is provided', () => {
      expect(() => fizzBuzzTs(NaN)).toThrow('the parameter provided must not be NaN')
    })
  })

  it('should return "fizz if number provided is multiple of 3', () => {
    const fizz:number[] = [3, 6, 9]
    fizz.forEach((number) => expect(fizzBuzzTs(number)).toBe('fizz'))
  })

  it('should return "buzz" if number provided is multiple of 5', () => {
    const buzz:number[] = [5, 10, 20]
    buzz.forEach((number) => expect(fizzBuzzTs(number)).toBe('buzz'))
  })

  it('should return "fizzbuzz" if number provided is multiple of 15', () => {
    const fizzBuzz:number[] = [15, 30, 45]
    fizzBuzz.forEach((number) => expect(fizzBuzzTs(number)).toBe('fizzbuzz'))
  })

  it('must return the same number provided if it is not a multiple of 3 or 5', () => {
    const otherNumbers:number[] = [1, 2, 4, 7, 8, 11]
    otherNumbers.forEach((number) => expect(fizzBuzzTs(number)).toBe(number))
  })
})
