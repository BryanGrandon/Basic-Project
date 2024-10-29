import { describe, expect, it } from 'vitest'
import { palindrome } from './palindrome'

describe('palindrome', () => {
  it('should throw if not string is provided as parameter', () => {
    expect(() => palindrome()).toThrow()
  })

  it('should throw specific error message if not string is provided as parameter', () => {
    expect(() => palindrome()).toThrow('parameter provider must be a text string')
  })

  it('should return "true" if string provided is "level"', () => {
    expect(palindrome('level')).toBe(true)
  })

  it('should return "true" if string provided is "radar"', () => {
    expect(palindrome('radar')).toBe(true)
  })

  it('should return "false" if string provided is "example"', () => {
    expect(palindrome('example')).toBe(false)
  })

  it('should return "true" if string provided is "Evil olive"', () => {
    expect(palindrome('Evil olive')).toBe(true)
  })
})
