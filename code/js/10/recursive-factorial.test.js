import { describe, expect, it } from 'vitest'
import { recursiveFactorial } from './recursive-factorial'

describe('recursive factorial', () => {
  it('should throw if not number is provided as parameter', () => {
    expect(() => recursiveFactorial()).throw()
  })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => recursiveFactorial()).throw('parameter provider must be a number')
  })

  it('should throw a specific error message if not a number is provided', () => {
    expect(() => recursiveFactorial(NaN)).throw('parameter provider must be a number')
  })

  it('should throw a specific error message if the number provided as parameter is negative', () => {
    expect(() => recursiveFactorial(-1)).throw('must be a positive number')
  })

  it('should return 1 if number provided is 1', () => {
    expect(recursiveFactorial(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(recursiveFactorial(2)).toBe(2)
  })

  it('should return 6 if number provided is 3', () => {
    expect(recursiveFactorial(3)).toBe(6)
  })

  it('should return 24 if number provided is 4', () => {
    expect(recursiveFactorial(4)).toBe(24)
  })

  it('should return 120 if number provided is 5', () => {
    expect(recursiveFactorial(5)).toBe(120)
  })
})
