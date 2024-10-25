import { describe, expect, it } from 'vitest'
import { primeNumber } from './prime-number'

describe('primeNumber', () => {
  it('should be a function', () => {
    expect(typeof primeNumber).toBe('function')
  })

  it('should throw if not number is provided as parameter', () => {
    expect(() => primeNumber()).throw()
  })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => primeNumber()).throw('parameter provider must be a number')
  })

  it('should throw a specific error message if not a number is provided', () => {
    expect(() => primeNumber(NaN)).throw('parameter provider must be a number')
  })

  it('should throw a specific error message if the number provided as parameter is negative', () => {
    expect(() => primeNumber(-1)).throw('must be a positive number')
  })

  it('should throw a specific error message if the number provided as parameter is 0', () => {
    expect(() => primeNumber(0)).throw('must be a positive number')
  })

  it('should return false if number provided is 1', () => {
    expect(primeNumber(1)).toBe(false)
  })

  it('should return true if number provided is 2', () => {
    expect(primeNumber(2)).toBe(true)
  })

  it('should return true if number provided is 3', () => {
    expect(primeNumber(3)).toBe(true)
  })

  it('should return true if number provided is 5', () => {
    expect(primeNumber(5)).toBe(true)
  })

  it('should return true if number provided is 6', () => {
    expect(primeNumber(6)).toBe(false)
  })
})
