import { describe, expect, it } from 'vitest'
import { fibonacci } from './fibonacci'

describe('Fibonacci', () => {
  it('should throw if not number is provided as parameter', () => {
    expect(() => fibonacci()).throw()
  })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fibonacci()).throw('parameter provider must be a number')
  })

  it('should throw a specific error message if not a number is provided', () => {
    expect(() => fibonacci(NaN)).throw('parameter provider must be a number')
  })

  it('should throw a specific error message if the number provided as parameter is negative', () => {
    expect(() => fibonacci(-1)).throw('must be a positive number')
  })

  it('should throw a specific error message if the number provided as parameter is 0', () => {
    expect(() => fibonacci(0)).throw('must be a positive number')
  })

  it('should return [0] if number provided is 1', () => {
    expect(fibonacci(1)).toStrictEqual([0])
  })

  it('should return [0, 1] if number provided is 2', () => {
    expect(fibonacci(2)).toStrictEqual([0, 1])
  })

  it('should return [0, 1, 1] if number provided is 3', () => {
    expect(fibonacci(3)).toStrictEqual([0, 1, 1])
  })

  it('should return [0, 1, 1, 2] if number provided is 4', () => {
    expect(fibonacci(4)).toStrictEqual([0, 1, 1, 2])
  })

  it('should return length of 50 if number provided is 50', () => {
    expect(fibonacci(50)).toHaveLength(50)
  })
})
