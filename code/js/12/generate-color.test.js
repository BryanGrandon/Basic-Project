import { describe, expect, it } from 'vitest'
import { generateColor } from './generate-color'

describe('Generate color', () => {
  it('should throw if not boolean is provided as parameter', () => {
    expect(() => generateColor('a')).throw()
  })

  it('should throw specific error message if not boolean is provided as parameter', () => {
    expect(() => generateColor(2)).throw('must be a Boolean')
  })

  it('should return a string with a length of 7 if provided is false', () => {
    expect(generateColor()).lengthOf(7)
  })

  it('should return a string with a length of 9 if provided is true', () => {
    expect(generateColor(true)).lengthOf(9)
  })
})
