import { describe, test, expect } from 'vitest'

import {
  assertCast,
  safeAssign,
  assertIsDefined,
  assertIsDefinedWithError,
} from './typeHelpers.js'

describe('typeHelpers', () => {
  describe('assertCast', () => {
    test('should not throw for any value (type assertion only)', () => {
      expect(() => assertCast<string>(123)).not.toThrow()
      expect(() => assertCast<number>('hello')).not.toThrow()
      expect(() => assertCast<boolean>(null)).not.toThrow()
      expect(() => assertCast<object>(undefined)).not.toThrow()
    })

    test('should be a no-op function for runtime', () => {
      const value = 'test'
      assertCast<string>(value)
      expect(value).toBe('test') // value unchanged
    })

    test('should work with complex types', () => {
      const obj = { name: 'Alice', age: 30 }
      expect(() => assertCast<{ name: string; age: number }>(obj)).not.toThrow()

      const arr = [1, 2, 3]
      expect(() => assertCast<number[]>(arr)).not.toThrow()
    })

    test('should handle edge cases', () => {
      expect(() => assertCast<any>(null)).not.toThrow()
      expect(() => assertCast<never>(undefined)).not.toThrow()
      expect(() => assertCast<unknown>('anything')).not.toThrow()
    })
  })

  describe('safeAssign', () => {
    test('should assign properties to target object', () => {
      const target = { name: '', age: 0, active: false }
      safeAssign(target, { name: 'Alice' }, { age: 30 })

      expect(target).toEqual({ name: 'Alice', age: 30, active: false })
    })

    test('should handle multiple source objects', () => {
      const target = { a: 1, b: 2, c: 3 }
      safeAssign(target, { a: 10 }, { b: 20 }, { c: 30 })

      expect(target).toEqual({ a: 10, b: 20, c: 30 })
    })

    test('should overwrite properties from left to right', () => {
      const target = { value: 0 }
      safeAssign(target, { value: 1 }, { value: 2 }, { value: 3 })

      expect(target.value).toBe(3)
    })

    test('should handle empty assignment', () => {
      const target = { name: 'test' }
      safeAssign(target)

      expect(target).toEqual({ name: 'test' }) // unchanged
    })

    test('should handle partial assignments', () => {
      const target = { name: 'Alice', age: 30, email: 'alice@example.com' }
      safeAssign(target, { age: 31 }) // only update age

      expect(target).toEqual({
        name: 'Alice',
        age: 31,
        email: 'alice@example.com',
      })
    })

    test('should add new properties', () => {
      const target = { name: 'Alice' } as any
      safeAssign(target, { age: 30, email: 'alice@example.com' })

      expect(target).toEqual({
        name: 'Alice',
        age: 30,
        email: 'alice@example.com',
      })
    })

    test('should handle nested objects (shallow assignment)', () => {
      const target = { user: { name: 'Alice' }, settings: { theme: 'dark' } }
      const newUser = { name: 'Bob' }
      safeAssign(target, { user: newUser })

      expect(target.user).toBe(newUser) // reference replaced, not merged
      expect(target.settings).toEqual({ theme: 'dark' }) // unchanged
    })

    test('should work with various object types', () => {
      const target = { count: 0, items: [] as string[], metadata: {} }
      safeAssign(target, {
        count: 5,
        items: ['a', 'b', 'c'],
        metadata: { version: '1.0' },
      })

      expect(target.count).toBe(5)
      expect(target.items).toEqual(['a', 'b', 'c'])
      expect(target.metadata).toEqual({ version: '1.0' })
    })
  })

  describe('assertIsDefined', () => {
    test('should not throw for defined values (compile-time check only)', () => {
      expect(() => assertIsDefined('test')).not.toThrow()
      expect(() => assertIsDefined(123)).not.toThrow()
      expect(() => assertIsDefined(true)).not.toThrow()
      expect(() => assertIsDefined([])).not.toThrow()
      expect(() => assertIsDefined({})).not.toThrow()
    })

    test('should not throw for undefined (no runtime checking)', () => {
      expect(() => assertIsDefined(undefined)).not.toThrow()
    })

    test('should be a no-op function for runtime', () => {
      const value = 'test'
      assertIsDefined(value)
      expect(value).toBe('test') // value unchanged
    })

    test('should handle falsy values that are not undefined', () => {
      expect(() => assertIsDefined(null)).not.toThrow()
      expect(() => assertIsDefined(0)).not.toThrow()
      expect(() => assertIsDefined('')).not.toThrow()
      expect(() => assertIsDefined(false)).not.toThrow()
    })
  })

  describe('assertIsDefinedWithError', () => {
    test('should not throw for defined values', () => {
      expect(() => assertIsDefinedWithError('test')).not.toThrow()
      expect(() => assertIsDefinedWithError(123)).not.toThrow()
      expect(() => assertIsDefinedWithError(true)).not.toThrow()
      expect(() => assertIsDefinedWithError([])).not.toThrow()
      expect(() => assertIsDefinedWithError({})).not.toThrow()
    })

    test('should not throw for falsy values that are not null or undefined', () => {
      expect(() => assertIsDefinedWithError(0)).not.toThrow()
      expect(() => assertIsDefinedWithError('')).not.toThrow()
      expect(() => assertIsDefinedWithError(false)).not.toThrow()
      expect(() => assertIsDefinedWithError(NaN)).not.toThrow()
    })

    test('should throw for null values', () => {
      expect(() => assertIsDefinedWithError(null)).toThrow(
        'null is not defined',
      )
    })

    test('should throw for undefined values', () => {
      expect(() => assertIsDefinedWithError(undefined)).toThrow(
        'undefined is not defined',
      )
    })

    test('should throw with correct error message', () => {
      try {
        assertIsDefinedWithError(null)
        expect.fail('Should have thrown')
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect((error as Error).message).toBe('null is not defined')
      }

      try {
        assertIsDefinedWithError(undefined)
        expect.fail('Should have thrown')
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect((error as Error).message).toBe('undefined is not defined')
      }
    })

    test('should work in practical scenarios', () => {
      const getValue = (flag: boolean): string | null => (flag ? 'value' : null)

      const validValue = getValue(true)
      expect(() => assertIsDefinedWithError(validValue)).not.toThrow()

      const nullValue = getValue(false)
      expect(() => assertIsDefinedWithError(nullValue)).toThrow()
    })

    test('should handle objects with null/undefined properties', () => {
      const obj = {
        validProp: 'test',
        nullProp: null,
        undefinedProp: undefined,
      }

      expect(() => assertIsDefinedWithError(obj.validProp)).not.toThrow()
      expect(() => assertIsDefinedWithError(obj.nullProp)).toThrow()
      expect(() => assertIsDefinedWithError(obj.undefinedProp)).toThrow()
    })

    test('should work with array elements', () => {
      const arr = ['valid', null, undefined, 'also-valid']

      expect(() => assertIsDefinedWithError(arr[0])).not.toThrow()
      expect(() => assertIsDefinedWithError(arr[1])).toThrow()
      expect(() => assertIsDefinedWithError(arr[2])).toThrow()
      expect(() => assertIsDefinedWithError(arr[3])).not.toThrow()
    })
  })

  describe('integration scenarios', () => {
    test('should work together in complex type scenarios', () => {
      interface User {
        name: string
        age: number
        email?: string
      }

      const partialUser: Partial<User> = { name: 'Alice' }
      const userUpdate: Partial<User> = { age: 30, email: 'alice@example.com' }

      // Use safeAssign to merge
      safeAssign(partialUser, userUpdate)

      // Use assertCast to type it
      assertCast<User>(partialUser)

      // Use assertIsDefinedWithError for runtime check
      expect(() => assertIsDefinedWithError(partialUser)).not.toThrow()

      expect(partialUser).toEqual({
        name: 'Alice',
        age: 30,
        email: 'alice@example.com',
      })
    })

    test('should handle real-world API response scenarios', () => {
      interface ApiResponse {
        data: any
        status: number
        message: string
      }

      const baseResponse: Partial<ApiResponse> = { status: 200, message: 'OK' }
      const responseData = { users: ['Alice', 'Bob'] }

      safeAssign(baseResponse, { data: responseData })
      assertCast<ApiResponse>(baseResponse)
      assertIsDefinedWithError(baseResponse.data)

      expect(baseResponse.data).toEqual({ users: ['Alice', 'Bob'] })
    })
  })
})
