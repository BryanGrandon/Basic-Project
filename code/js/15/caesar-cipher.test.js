import { describe, expect, it } from 'vitest'
import { caesarCipher } from './caesar-cipher'

describe('caesar cipher', () => {
  it('should throw if not string is provided as parameter', () => {
    expect(() => caesarCipher()).throw()
  })

  it('should throw specific error message if not string is provided as the first parameter', () => {
    expect(() => caesarCipher()).throw('the first parameter must be a text string')
  })

  it('should throw specific error message if not string is provided as the second parameter', () => {
    expect(() => caesarCipher('A')).throw('the second parameter must be a number')
  })

  it('should throw a specific error message if not a number is provided', () => {
    expect(() => caesarCipher('A', NaN)).throw('the second parameter must be a number')
  })

  it('should return "Y" if provided is "Y", -2', () => {
    expect(caesarCipher('A', -2)).toBe('Y')
  })

  it('should return "Z" if provided is "Z", -1', () => {
    expect(caesarCipher('A', -1)).toBe('Z')
  })

  it('should return "A" if provided is "A", 0', () => {
    expect(caesarCipher('A', 0)).toBe('A')
  })

  it('should return "B" if provided is "A", 1', () => {
    expect(caesarCipher('A', 1)).toBe('B')
  })

  it('should return "C" if provided is "A", 2', () => {
    expect(caesarCipher('A', 2)).toBe('C')
  })

  it('should return "CD" if provided is "AB", 2', () => {
    expect(caesarCipher('AB', 2)).toBe('CD')
  })

  it('should return "DEF" if provided is "ABC", 3', () => {
    expect(caesarCipher('ABC', 3)).toBe('DEF')
  })

  it('should return "XYZ" if provided is "ABC", -3', () => {
    expect(caesarCipher('ABC', -3)).toBe('XYZ')
  })
})
