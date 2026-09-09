import { betterTypeof } from './betterTypeof.js'

// Custom classes for testing
class CustomClass {
  name = 'CustomClass'
}

class AnotherClass extends Date {
  name = 'AnotherClass'
}

describe('betterTypeof', () => {
  describe('number handling', () => {
    test('should return "NaN" for NaN values', () => {
      expect(betterTypeof(NaN)).toBe('NaN')
      expect(betterTypeof(Number.NaN)).toBe('NaN')
      expect(betterTypeof(parseInt('invalid', 10))).toBe('NaN')
    })

    test('should return "integer" for integer numbers', () => {
      expect(betterTypeof(0)).toBe('integer')
      expect(betterTypeof(1)).toBe('integer')
      expect(betterTypeof(-1)).toBe('integer')
      expect(betterTypeof(42)).toBe('integer')
      expect(betterTypeof(-999)).toBe('integer')
      expect(betterTypeof(Number.MAX_SAFE_INTEGER)).toBe('integer')
      expect(betterTypeof(Number.MIN_SAFE_INTEGER)).toBe('integer')
    })

    test('should return "number" for non-integer numbers', () => {
      expect(betterTypeof(3.14)).toBe('number')
      expect(betterTypeof(-2.5)).toBe('number')
      expect(betterTypeof(0.1)).toBe('number')
      expect(betterTypeof(Number.POSITIVE_INFINITY)).toBe('number')
      expect(betterTypeof(Number.NEGATIVE_INFINITY)).toBe('number')
    })
  })

  describe('object handling', () => {
    test('should return "array" for arrays', () => {
      expect(betterTypeof([])).toBe('array')
      expect(betterTypeof([1, 2, 3])).toBe('array')
      expect(betterTypeof(new Array())).toBe('array')
      expect(betterTypeof(new Array(5))).toBe('array')
      expect(betterTypeof(Array.from([1, 2, 3]))).toBe('array')
    })

    test('should return "null" for null', () => {
      expect(betterTypeof(null)).toBe('null')
    })

    test('should return constructor name for objects with custom prototypes', () => {
      expect(betterTypeof(new Date())).toBe('Date')
      expect(betterTypeof(new RegExp('test'))).toBe('RegExp')
      expect(betterTypeof(new Error('test'))).toBe('Error')
      expect(betterTypeof(new CustomClass())).toBe('CustomClass')
      expect(betterTypeof(new AnotherClass())).toBe('AnotherClass')
      expect(betterTypeof(new Map())).toBe('Map')
      expect(betterTypeof(new Set())).toBe('Set')
      expect(betterTypeof(new WeakMap())).toBe('WeakMap')
      expect(betterTypeof(new WeakSet())).toBe('WeakSet')
    })

    test('should return "object" for plain objects', () => {
      expect(betterTypeof({})).toBe('object')
      expect(betterTypeof({ key: 'value' })).toBe('object')
      expect(betterTypeof(Object.create(null))).toBe('object')
      expect(betterTypeof(Object.create(Object.prototype))).toBe('object')
    })

    test('should handle objects with no constructor property', () => {
      const objWithoutConstructor = Object.create(null)
      objWithoutConstructor.someProperty = 'value'
      expect(betterTypeof(objWithoutConstructor)).toBe('object')
    })
  })

  describe('primitive types fallback', () => {
    test('should return "string" for strings', () => {
      expect(betterTypeof('')).toBe('string')
      expect(betterTypeof('hello')).toBe('string')
      expect(betterTypeof('123')).toBe('string')
      expect(betterTypeof(String('test'))).toBe('string')
    })

    test('should return "boolean" for booleans', () => {
      expect(betterTypeof(true)).toBe('boolean')
      expect(betterTypeof(false)).toBe('boolean')
      expect(betterTypeof(Boolean(1))).toBe('boolean')
      expect(betterTypeof(Boolean(0))).toBe('boolean')
    })

    test('should return "undefined" for undefined', () => {
      expect(betterTypeof(undefined)).toBe('undefined')
      expect(betterTypeof(void 0)).toBe('undefined')
    })

    test('should return "function" for functions', () => {
      expect(betterTypeof(() => {})).toBe('function')
      expect(betterTypeof(function () {})).toBe('function')
      expect(betterTypeof(async function () {})).toBe('function')
      expect(betterTypeof(function* () {})).toBe('function')
      expect(betterTypeof(Math.abs)).toBe('function')
      expect(betterTypeof(console.log)).toBe('function')
    })

    test('should return "symbol" for symbols', () => {
      expect(betterTypeof(Symbol())).toBe('symbol')
      expect(betterTypeof(Symbol('test'))).toBe('symbol')
      expect(betterTypeof(Symbol.iterator)).toBe('symbol')
    })

    test('should return "bigint" for bigints', () => {
      expect(betterTypeof(123n)).toBe('bigint')
      expect(betterTypeof(BigInt(456))).toBe('bigint')
      expect(betterTypeof(BigInt('789'))).toBe('bigint')
    })
  })

  describe('edge cases', () => {
    test('should handle built-in constructors consistently', () => {
      expect(betterTypeof(new String('test'))).toBe('String')
      expect(betterTypeof(new Number(42))).toBe('Number')
      expect(betterTypeof(new Boolean(true))).toBe('Boolean')
    })

    test('should handle objects created with different patterns', () => {
      // Constructor function
      function MyConstructor() {}
      expect(betterTypeof(new (MyConstructor as any)())).toBe('MyConstructor')

      // Class with custom name
      const obj = new CustomClass()
      expect(betterTypeof(obj)).toBe('CustomClass')
    })

    test('should handle inheritance correctly', () => {
      const customDate = new AnotherClass()
      expect(betterTypeof(customDate)).toBe('AnotherClass')
    })
  })

  describe('return type consistency', () => {
    test('should always return a string', () => {
      const testValues = [
        null,
        undefined,
        true,
        false,
        0,
        1,
        3.14,
        NaN,
        'string',
        Symbol(),
        BigInt(123),
        [],
        {},
        new Date(),
        () => {},
      ]

      testValues.forEach((value) => {
        const result = betterTypeof(value)
        expect(typeof result).toBe('string')
        expect(result.length).toBeGreaterThan(0)
      })
    })
  })
})
