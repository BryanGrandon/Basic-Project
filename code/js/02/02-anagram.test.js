import { describe, expect, it } from 'vitest'
import { anagram } from './02-anagram'

describe('anagram', () => {
  it('should throw if not string provided as the first parameter', () => {
    expect(() => anagram()).throw()
  })

  it('should throw a specific error message if not string provided as the first parameter', () => {
    expect(() => anagram()).throw('The first parameter must be a text string')
  })

  it('should throw a specific error message if not string provided as the second parameter', () => {
    expect(() => anagram('a')).throw('The second parameter must be a text string')
  })

  it('should return false if the first and the second parameters are exactly equal', () => {
    expect(anagram('', '')).toBe(false)
    expect(anagram('a', 'a')).toBe(false)
  })

  it('should return false if the first and the second parameters are not of the same length', () => {
    expect(anagram('a', 'ab')).toBe(false)
  })

  it('should return false if the first and the second parameters do not contain the same letters', () => {
    expect(anagram('abc', 'efg')).toBe(false)
  })

  it('should return true if the first and the second parameter do contain the same letters', () => {
    expect(anagram('abc', 'cba')).toBe(true)
    expect(anagram('cat', 'act')).toBe(true)
  })
})
