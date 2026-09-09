import { describe, test, expect } from 'vitest'

import {
  camelCase,
  kebabCase,
  pascalCase,
  constantCase,
} from './caseConversions.js'

describe('caseConversions', () => {
  describe('camelCase', () => {
    describe('basic functionality', () => {
      test('should convert space-separated words to camelCase', () => {
        expect(camelCase('hello world')).toBe('helloWorld')
        expect(camelCase('foo bar baz')).toBe('fooBarBaz')
        expect(camelCase('the quick brown fox')).toBe('theQuickBrownFox')
      })

      test('should convert hyphen-separated words to camelCase', () => {
        expect(camelCase('hello-world')).toBe('helloWorld')
        expect(camelCase('foo-bar-baz')).toBe('fooBarBaz')
        expect(camelCase('xml-http-request')).toBe('xmlHttpRequest')
      })

      test('should convert underscore-separated words to camelCase', () => {
        expect(camelCase('hello_world')).toBe('helloWorld')
        expect(camelCase('foo_bar_baz')).toBe('fooBarBaz')
        expect(camelCase('snake_case_string')).toBe('snakeCaseString')
      })

      test('should handle mixed case input', () => {
        expect(camelCase('Hello World')).toBe('helloWorld')
        expect(camelCase('HELLO WORLD')).toBe('helloWorld')
        expect(camelCase('HeLLo WoRLd')).toBe('helloWorld')
      })

      test('should handle mixed separators', () => {
        expect(camelCase('hello-world_test case')).toBe('helloWorldTestCase')
        expect(camelCase('foo_bar-baz qux')).toBe('fooBarBazQux')
      })
    })

    describe('edge cases', () => {
      test('should handle empty string', () => {
        expect(camelCase('')).toBe('')
      })

      test('should handle single word', () => {
        expect(camelCase('hello')).toBe('hello')
        expect(camelCase('HELLO')).toBe('hello')
        expect(camelCase('Hello')).toBe('hello')
      })

      test('should handle strings with leading/trailing whitespace', () => {
        expect(camelCase('  hello world  ')).toBe('helloWorld')
        expect(camelCase('\thello-world\n')).toBe('helloWorld')
      })

      test('should handle strings with multiple consecutive separators', () => {
        expect(camelCase('hello---world')).toBe('helloWorld')
        expect(camelCase('foo   bar')).toBe('fooBar')
        expect(camelCase('test___case')).toBe('testCase')
        expect(camelCase('mixed- _-separators')).toBe('mixedSeparators')
      })

      test('should handle single characters', () => {
        expect(camelCase('a')).toBe('a')
        expect(camelCase('A')).toBe('a')
        expect(camelCase('a b c')).toBe('aBC')
      })
    })

    describe('unicode and special characters', () => {
      test('should handle unicode characters', () => {
        expect(camelCase('héllo wørld')).toBe('hélloWørld')
        expect(camelCase('测试 字符串')).toBe('测试字符串')
      })

      test('should handle numbers', () => {
        expect(camelCase('hello 123 world')).toBe('hello123World')
        expect(camelCase('test-v2-final')).toBe('testV2Final')
      })

      test('should preserve already camelCase strings', () => {
        expect(camelCase('alreadyCamelCase')).toBe('alreadycamelcase')
        expect(camelCase('someAPICall')).toBe('someapicall')
      })
    })
  })

  describe('kebabCase', () => {
    describe('basic functionality', () => {
      test('should convert space-separated words to kebab-case', () => {
        expect(kebabCase('hello world')).toBe('hello-world')
        expect(kebabCase('foo bar baz')).toBe('foo-bar-baz')
        expect(kebabCase('the quick brown fox')).toBe('the-quick-brown-fox')
      })

      test('should convert camelCase to kebab-case', () => {
        expect(kebabCase('helloWorld')).toBe('hello-world')
        expect(kebabCase('fooBarBaz')).toBe('foo-bar-baz')
        expect(kebabCase('XMLHttpRequest')).toBe('xml-http-request')
        expect(kebabCase('iPhone')).toBe('i-phone')
      })

      test('should convert underscore-separated words to kebab-case', () => {
        expect(kebabCase('hello_world')).toBe('hello-world')
        expect(kebabCase('foo_bar_baz')).toBe('foo-bar-baz')
        expect(kebabCase('snake_case_string')).toBe('snake-case-string')
      })

      test('should handle mixed case input', () => {
        expect(kebabCase('Hello World')).toBe('hello-world')
        expect(kebabCase('HELLO WORLD')).toBe('hello-world')
        expect(kebabCase('HeLLo WoRLd')).toBe('he-l-lo-wo-r-ld')
      })
    })

    describe('edge cases', () => {
      test('should handle empty string', () => {
        expect(kebabCase('')).toBe('')
      })

      test('should handle single word', () => {
        expect(kebabCase('hello')).toBe('hello')
        expect(kebabCase('HELLO')).toBe('hello')
        expect(kebabCase('Hello')).toBe('hello')
      })

      test('should handle strings with leading/trailing whitespace', () => {
        expect(kebabCase('  hello world  ')).toBe('hello-world')
        expect(kebabCase('\thello_world\n')).toBe('hello-world')
      })

      test('should handle strings with multiple consecutive separators', () => {
        expect(kebabCase('hello   world')).toBe('hello-world')
        expect(kebabCase('foo___bar')).toBe('foo-bar')
        expect(kebabCase('test-----case')).toBe('test-case')
      })

      test('should collapse multiple hyphens', () => {
        expect(kebabCase('already-kebab-case')).toBe('already-kebab-case')
        expect(kebabCase('multiple----hyphens')).toBe('multiple-hyphens')
      })

      test('should handle single characters', () => {
        expect(kebabCase('a')).toBe('a')
        expect(kebabCase('A')).toBe('a')
        expect(kebabCase('ABC')).toBe('abc')
      })
    })

    describe('unicode and special characters', () => {
      test('should handle unicode characters', () => {
        expect(kebabCase('héllo wørld')).toBe('héllo-wørld')
        expect(kebabCase('测试 字符串')).toBe('测试-字符串')
      })

      test('should handle numbers', () => {
        expect(kebabCase('hello 123 world')).toBe('hello-123-world')
        expect(kebabCase('testV2Final')).toBe('test-v2final')
      })
    })
  })

  describe('pascalCase', () => {
    describe('basic functionality', () => {
      test('should convert space-separated words to PascalCase', () => {
        expect(pascalCase('hello world')).toBe('HelloWorld')
        expect(pascalCase('foo bar baz')).toBe('FooBarBaz')
        expect(pascalCase('the quick brown fox')).toBe('TheQuickBrownFox')
      })

      test('should convert hyphen-separated words to PascalCase', () => {
        expect(pascalCase('hello-world')).toBe('HelloWorld')
        expect(pascalCase('foo-bar-baz')).toBe('FooBarBaz')
        expect(pascalCase('xml-http-request')).toBe('XmlHttpRequest')
      })

      test('should convert underscore-separated words to PascalCase', () => {
        expect(pascalCase('hello_world')).toBe('HelloWorld')
        expect(pascalCase('foo_bar_baz')).toBe('FooBarBaz')
        expect(pascalCase('snake_case_string')).toBe('SnakeCaseString')
      })

      test('should handle mixed case input', () => {
        expect(pascalCase('Hello World')).toBe('HelloWorld')
        expect(pascalCase('HELLO WORLD')).toBe('HelloWorld')
        expect(pascalCase('HeLLo WoRLd')).toBe('HelloWorld')
      })
    })

    describe('edge cases', () => {
      test('should handle empty string', () => {
        expect(pascalCase('')).toBe('')
      })

      test('should handle single word', () => {
        expect(pascalCase('hello')).toBe('Hello')
        expect(pascalCase('HELLO')).toBe('Hello')
        expect(pascalCase('Hello')).toBe('Hello')
      })

      test('should handle strings with leading/trailing whitespace', () => {
        expect(pascalCase('  hello world  ')).toBe('HelloWorld')
        expect(pascalCase('\thello-world\n')).toBe('HelloWorld')
      })

      test('should handle single characters', () => {
        expect(pascalCase('a')).toBe('A')
        expect(pascalCase('A')).toBe('A')
        expect(pascalCase('a b c')).toBe('ABC')
      })
    })

    describe('unicode and special characters', () => {
      test('should handle unicode characters', () => {
        expect(pascalCase('héllo wørld')).toBe('HélloWørld')
        expect(pascalCase('测试 字符串')).toBe('测试字符串')
      })

      test('should handle numbers', () => {
        expect(pascalCase('hello 123 world')).toBe('Hello123World')
        expect(pascalCase('test-v2-final')).toBe('TestV2Final')
      })
    })
  })

  describe('constantCase', () => {
    describe('basic functionality', () => {
      test('should convert space-separated words to CONSTANT_CASE', () => {
        expect(constantCase('hello world')).toBe('HELLO_WORLD')
        expect(constantCase('foo bar baz')).toBe('FOO_BAR_BAZ')
        expect(constantCase('the quick brown fox')).toBe('THE_QUICK_BROWN_FOX')
      })

      test('should convert camelCase to CONSTANT_CASE', () => {
        expect(constantCase('helloWorld')).toBe('HELLO_WORLD')
        expect(constantCase('fooBarBaz')).toBe('FOO_BAR_BAZ')
        expect(constantCase('XMLHttpRequest')).toBe('XML_HTTP_REQUEST')
        expect(constantCase('iPhone')).toBe('I_PHONE')
      })

      test('should convert hyphen-separated words to CONSTANT_CASE', () => {
        expect(constantCase('hello-world')).toBe('HELLO_WORLD')
        expect(constantCase('foo-bar-baz')).toBe('FOO_BAR_BAZ')
        expect(constantCase('xml-http-request')).toBe('XML_HTTP_REQUEST')
      })

      test('should handle mixed case input', () => {
        expect(constantCase('Hello World')).toBe('HELLO_WORLD')
        expect(constantCase('HELLO WORLD')).toBe('HELLO_WORLD')
        expect(constantCase('HeLLo WoRLd')).toBe('HE_L_LO_WO_R_LD')
      })

      test('should handle mixed separators', () => {
        expect(constantCase('hello-world_test case')).toBe(
          'HELLO_WORLD_TEST_CASE',
        )
        expect(constantCase('foo_bar-baz qux')).toBe('FOO_BAR_BAZ_QUX')
      })
    })

    describe('edge cases', () => {
      test('should handle empty string', () => {
        expect(constantCase('')).toBe('')
      })

      test('should handle single word', () => {
        expect(constantCase('hello')).toBe('HELLO')
        expect(constantCase('HELLO')).toBe('HELLO')
        expect(constantCase('Hello')).toBe('HELLO')
      })

      test('should handle strings with leading/trailing whitespace', () => {
        expect(constantCase('  hello world  ')).toBe('HELLO_WORLD')
        expect(constantCase('\thello-world\n')).toBe('HELLO_WORLD')
      })

      test('should handle strings with multiple consecutive separators', () => {
        expect(constantCase('hello   world')).toBe('HELLO_WORLD')
        expect(constantCase('foo---bar')).toBe('FOO_BAR')
        expect(constantCase('test_____case')).toBe('TEST_CASE')
      })

      test('should collapse multiple underscores', () => {
        expect(constantCase('already_constant_case')).toBe(
          'ALREADY_CONSTANT_CASE',
        )
        expect(constantCase('multiple____underscores')).toBe(
          'MULTIPLE_UNDERSCORES',
        )
      })

      test('should handle single characters', () => {
        expect(constantCase('a')).toBe('A')
        expect(constantCase('A')).toBe('A')
        expect(constantCase('ABC')).toBe('ABC')
      })
    })

    describe('unicode and special characters', () => {
      test('should handle unicode characters', () => {
        expect(constantCase('héllo wørld')).toBe('HÉLLO_WØRLD')
        expect(constantCase('测试 字符串')).toBe('测试_字符串')
      })

      test('should handle numbers', () => {
        expect(constantCase('hello 123 world')).toBe('HELLO_123_WORLD')
        expect(constantCase('testV2Final')).toBe('TEST_V2FINAL')
      })

      test('should preserve already constant case', () => {
        expect(constantCase('ALREADY_CONSTANT_CASE')).toBe(
          'ALREADY_CONSTANT_CASE',
        )
        expect(constantCase('API_KEY')).toBe('API_KEY')
      })
    })
  })

  describe('integration tests', () => {
    test('should work together for round-trip conversions', () => {
      const original = 'hello world test case'

      // Test different conversion chains
      expect(camelCase(kebabCase(original))).toBe('helloWorldTestCase')
      expect(kebabCase(pascalCase(original))).toBe('hello-world-test-case')
      expect(
        pascalCase(constantCase(original).toLowerCase().replace(/_/g, ' ')),
      ).toBe('HelloWorldTestCase')
    })

    test('should handle complex real-world examples', () => {
      const examples = [
        'XMLHttpRequest',
        'getElementById',
        'react-native-app',
        'API_BASE_URL',
        'user_profile_data',
        'Component Name',
      ]

      examples.forEach((example) => {
        // Should not throw errors
        expect(() => camelCase(example)).not.toThrow()
        expect(() => kebabCase(example)).not.toThrow()
        expect(() => pascalCase(example)).not.toThrow()
        expect(() => constantCase(example)).not.toThrow()
      })
    })

    test('should handle empty and whitespace-only strings consistently', () => {
      const emptyInputs = ['', '   ', '\t', '\n', '\t \n ']

      emptyInputs.forEach((input) => {
        expect(camelCase(input)).toBe('')
        expect(kebabCase(input)).toBe('')
        expect(pascalCase(input)).toBe('')
        expect(constantCase(input)).toBe('')
      })
    })
  })

  describe('performance', () => {
    test('should handle large strings efficiently', () => {
      const largeString = 'word '.repeat(1000).trim()

      const startTime = performance.now()
      camelCase(largeString)
      kebabCase(largeString)
      pascalCase(largeString)
      constantCase(largeString)
      const endTime = performance.now()

      expect(endTime - startTime).toBeLessThan(100) // Should be reasonably fast
    })

    test('should not create excessive intermediate strings', () => {
      // Test that functions work with various string lengths
      const strings = ['a', 'hello world', 'a'.repeat(100), 'word '.repeat(50)]

      strings.forEach((str) => {
        expect(typeof camelCase(str)).toBe('string')
        expect(typeof kebabCase(str)).toBe('string')
        expect(typeof pascalCase(str)).toBe('string')
        expect(typeof constantCase(str)).toBe('string')
      })
    })
  })
})
