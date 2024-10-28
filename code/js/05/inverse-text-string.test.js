import { describe, expect, it } from 'vitest'
import { inverseTextString } from './inverse-text-string'

describe('inverseTextString', () => {
  it('should throw if not number is provided as parameter', () => {
    expect(() => inverseTextString()).throw()
  })

  it('should throw a specific error message if not string is provided as parameter', () => {
    expect(() => inverseTextString()).throw('parameter provider must be a string')
  })

  it('should return "ba" if number provided is "ab', () => {
    expect(inverseTextString('ab')).toBe('ba')
  })

  it('should return "era" if number provided is "are', () => {
    expect(inverseTextString('are')).toBe('era')
  })
})
