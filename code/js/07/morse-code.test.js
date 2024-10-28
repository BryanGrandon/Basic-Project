import { describe, expect, it } from 'vitest'
import { morseCode } from './morse-code'

describe('morseCode', () => {
  it('should throw if not string is provided as parameter', () => {
    expect(() => (morseCode())).throw()
  })

  it('should throw a specific error message if not string is provided as parameter', () => {
    expect(() => (morseCode())).throw('parameter provider must be a text string')
  })

  it('should return ".-" if number provided is a', () => {
    expect(morseCode('a')).toBe('.-')
  })

  it('should return "a" if number provided is ".-', () => {
    expect(morseCode('.-')).toBe('a')
  })

  it('should return "....." if number provided is "5"', () => {
    expect(morseCode('5')).toBe('.....')
  })

  it('should return "5" if number provided is ".....', () => {
    expect(morseCode('.....')).toBe('5')
  })

  it('should return ".... . .-.. .-.. --- / .-- --- .-. .-.. -.." if number provided is hello world', () => {
    expect(morseCode('hello world')).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')
  })

  it('should return "hello world" if number provided is .... . .-.. .-.. --- / .-- --- .-. .-.. -..', () => {
    expect(morseCode('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')).toBe('hello world')
  })
})
