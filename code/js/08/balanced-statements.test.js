import { describe, it, expect } from 'vitest'
import { balancedStatements } from './balanced-statements'

describe('balancedStatements', () => {
  it('should throw if not string is provided as parameter', () => {
    expect(() => (balancedStatements())).throw()
  })

  it('should throw a specific error message if not string is provided as parameter', () => {
    expect(() => (balancedStatements())).throw('parameter provider must be a text string')
  })

  it('should return "true" if number provided is "[]"', () => {
    expect(balancedStatements('[]')).toBe(true)
  })

  it('should return "true" if number provided is "[ () ]"', () => {
    expect(balancedStatements('[ () ]')).toBe(true)
  })

  it('should return "false" if number provided is "[)]"', () => {
    expect(balancedStatements('[)]')).toBe(false)
  })

  it('should return "false" if number provided is "[(])"', () => {
    expect(balancedStatements('[(])')).toBe(false)
  })

  it('should return "false" if number provided is "{ a * ( c + d ) ] - 5 }"', () => {
    expect(balancedStatements('{ a * ( c + d ) ] - 5 }')).toBe(false)
  })

  it('should return "true" if number provided is "{ [ a * ( c + d ) ] - 5 }"', () => {
    expect(balancedStatements('{ [ a * ( c + d ) ] - 5 }')).toBe(true)
  })
})
