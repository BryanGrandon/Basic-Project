import { describe, expect, it } from 'vitest'
import { armstrongNumber } from './armstrong-number'

describe('armstrong number', () => {
  it('should throw if not number is provided as parameter', () => {
    expect(() => armstrongNumber()).throw()
  })

  it('should throw specific error message if not number is provided as parameter', () => {
    expect(() => armstrongNumber()).throw('parameter provider must be a number')
  })

  it('should throw a specific error message if not a number is provided', () => {
    expect(() => armstrongNumber(NaN)).throw('parameter provider must be a number')
  })

  it('should throw a specific error message if the number provided as parameter is negative', () => {
    expect(() => armstrongNumber(-1)).throw('must be a positive number')
  })

  it('should throw a specific error message if the number provided as parameter is 0', () => {
    expect(() => armstrongNumber(0)).throw('must be a positive number')
  })

  it('should return false if number provided is 1', () => {
    expect(armstrongNumber(1)).toBe(false)
  })

  it('should return false if number provided is 10', () => {
    expect(armstrongNumber(10)).toBe(false)
  })

  it('should return false if number provided is 100', () => {
    expect(armstrongNumber(100)).toBe(false)
  })

  it('should return true if number provided is 153', () => {
    expect(armstrongNumber(153)).toBe(true)
  })

  it('should return true if number provided is 1634', () => {
    expect(armstrongNumber(1634)).toBe(true)
  })
})
