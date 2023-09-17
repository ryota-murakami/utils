/**
 * Creates a new type that has all properties of the input type marked as required.
 * @template Type - The input type to make concrete.
 * @typedef {Object} Concrete
 * @property {Type[Property]} Property - The required property of the concrete type.
 * @example
 * // Create a concrete type from a partially defined type
 * interface PartialUser {
 *   name?: string;
 *   age?: number;
 * }
 * type User = Concrete<PartialUser>;
 * const user: User = {
 *   name: 'John',
 *   age: 30
 * };
 */
declare type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property]
}
