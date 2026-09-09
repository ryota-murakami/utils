import { describe, test, expect } from 'vitest'

import snakeToCameledSpace from './snakeToCameledSpace.js'

describe('snakeToCameledSpace', () => {
  test('should convert simple kebab-case to title case', () => {
    expect(snakeToCameledSpace('hello-world')).toBe('Hello World')
    expect(snakeToCameledSpace('test-case')).toBe('Test Case')
    expect(snakeToCameledSpace('api-key')).toBe('Api Key')
  })

  test('should handle single words', () => {
    expect(snakeToCameledSpace('single')).toBe('Single')
    expect(snakeToCameledSpace('word')).toBe('Word')
    expect(snakeToCameledSpace('test')).toBe('Test')
  })

  test('should handle multiple hyphens', () => {
    expect(snakeToCameledSpace('one-two-three')).toBe('One Two Three')
    expect(snakeToCameledSpace('my-long-component-name')).toBe(
      'My Long Component Name',
    )
    expect(snakeToCameledSpace('very-long-string-with-many-words')).toBe(
      'Very Long String With Many Words',
    )
  })

  test('should handle the example from the documentation', () => {
    const input =
      'code-piece-of-complete-guide-to-react-client-rendering-behavior'
    const expected =
      'Code Piece Of Complete Guide To React Client Rendering Behavior'
    expect(snakeToCameledSpace(input)).toBe(expected)
  })

  test('should handle empty string', () => {
    expect(snakeToCameledSpace('')).toBe('')
  })

  test('should handle strings without hyphens', () => {
    expect(snakeToCameledSpace('nohyphens')).toBe('Nohyphens')
    expect(snakeToCameledSpace('UPPERCASE')).toBe('UPPERCASE')
    expect(snakeToCameledSpace('lowercase')).toBe('Lowercase')
  })

  test('should handle strings with numbers', () => {
    expect(snakeToCameledSpace('item-1-test')).toBe('Item 1 Test')
    expect(snakeToCameledSpace('version-2-0-1')).toBe('Version 2 0 1')
    expect(snakeToCameledSpace('api-v1-endpoint')).toBe('Api V1 Endpoint')
  })

  test('should handle consecutive hyphens', () => {
    expect(snakeToCameledSpace('double--hyphen')).toBe('Double  Hyphen')
    expect(snakeToCameledSpace('triple---hyphen')).toBe('Triple   Hyphen')
  })

  test('should handle hyphens at the beginning and end', () => {
    expect(snakeToCameledSpace('-leading-hyphen')).toBe(' Leading Hyphen')
    expect(snakeToCameledSpace('trailing-hyphen-')).toBe('Trailing Hyphen ')
    expect(snakeToCameledSpace('-both-ends-')).toBe(' Both Ends ')
  })

  test('should preserve existing capitalization in the middle of words', () => {
    expect(snakeToCameledSpace('iPhone-app')).toBe('IPhone App')
    expect(snakeToCameledSpace('JSON-api')).toBe('JSON Api')
    expect(snakeToCameledSpace('HTML-css')).toBe('HTML Css')
  })

  test('should handle special characters within words', () => {
    expect(snakeToCameledSpace('user@domain-test')).toBe('User@domain Test')
    expect(snakeToCameledSpace('price$-calculation')).toBe('Price$ Calculation')
    expect(snakeToCameledSpace('file.txt-backup')).toBe('File.txt Backup')
  })

  test('should handle mixed case input', () => {
    expect(snakeToCameledSpace('MiXeD-CaSe')).toBe('MiXeD CaSe')
    expect(snakeToCameledSpace('camelCase-kebab-case')).toBe(
      'CamelCase Kebab Case',
    )
  })

  test('should handle real-world component names', () => {
    expect(snakeToCameledSpace('button-primary')).toBe('Button Primary')
    expect(snakeToCameledSpace('nav-menu-item')).toBe('Nav Menu Item')
    expect(snakeToCameledSpace('form-input-field')).toBe('Form Input Field')
    expect(snakeToCameledSpace('modal-dialog-box')).toBe('Modal Dialog Box')
  })

  test('should handle file names and paths', () => {
    expect(snakeToCameledSpace('my-component.tsx')).toBe('My Component.tsx')
    expect(snakeToCameledSpace('user-profile-page')).toBe('User Profile Page')
    expect(snakeToCameledSpace('api-client-service')).toBe('Api Client Service')
  })

  test('should handle edge cases with only hyphens', () => {
    expect(snakeToCameledSpace('-')).toBe(' ')
    expect(snakeToCameledSpace('--')).toBe('  ')
    expect(snakeToCameledSpace('---')).toBe('   ')
  })

  test('should be consistent with multiple calls', () => {
    const input = 'test-string-conversion'
    const result1 = snakeToCameledSpace(input)
    const result2 = snakeToCameledSpace(input)
    expect(result1).toBe(result2)
    expect(result1).toBe('Test String Conversion')
  })

  test('should handle Unicode characters', () => {
    expect(snakeToCameledSpace('café-résumé')).toBe('Café Résumé')
    expect(snakeToCameledSpace('naïve-approach')).toBe('Naïve Approach')
    expect(snakeToCameledSpace('piñata-party')).toBe('Piñata Party')
  })
})
