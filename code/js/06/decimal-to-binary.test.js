import { describe, expect, it } from 'vitest'
import { decimalToBinary } from './decimal-to-binary'

describe('decimalToBinary', () => {
  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => decimalToBinary()).throw('parameter provider must be a number')
  })

  it('should throw a specific error message if not a number is provided', () => {
    expect(() => decimalToBinary(NaN)).throw('parameter provider must be a number')
  })

  it('should return 0 if number provided is 0', () => {
    expect(decimalToBinary(0)).toBe('0')
  })

  it('should return 1 if number provided is 1', () => {
    expect(decimalToBinary(1)).toBe('1')
  })

  it('should return 10 if number provided is 2', () => {
    expect(decimalToBinary(2)).toBe('10')
  })

  it('should return 11 if number provided is 3', () => {
    expect(decimalToBinary(3)).toBe('11')
  })

  it('should return 100 if number provided is 4', () => {
    expect(decimalToBinary(4)).toBe('100')
  })

  it('should return 101.10 if number provided is 5.2', () => {
    expect(decimalToBinary(5.2)).toBe('101.10')
  })
})
