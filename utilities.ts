/**
* Exclude Type = Allows you to exclude certain types from a union.
e.g
**/
type Human = {
  name: string
  age: number
}
type Goat = {
  legs: number
  arms: number
}

type A = Exclude<Human | Goat, Human> // Goat

/**
 * Extract Type = Allows you to extract certain types from a union.
 * Extract is useful for obtaining some sub-part of a type that is assignable to some other type.
 */

// type B = Extract<Human | Goat, Goat> // Goat
// type FavoriteColors =
//   | 'dark sienna'
//   | 'van dyke brown'
//   | 'yellow ochre'
//   | 'sap green'
//   | 'titanium white'
//   | 'phthalo green'
//   | 'prussian blue'
//   | 'cadium yellow'
//   | [number, number, number]
//   | { red: number; green: number; blue: number }

// type StringColors = Extract<FavoriteColors, string>
// type ObjectColors = Extract<FavoriteColors, { red: number }>
// type TupleColors = Extract<FavoriteColors, [number, number, number]>

/**
 * Exclude from T those types that are assignable to U
 */
// type ExcludeType<T, U> = T extends U ? never : T
// /**
//  * Extract from T those types that are assignable to U
//  */
// type Extract<T, U> = T extends U ? T : never

/**
 * Mapped types
 */
// type Fruit = {
//   name: string
//   color: string
//   mass: number
// }

// type Dict<T> = { [k: string]: T } // <- index signature

// const fruitCatalog: Dict<Fruit> = {
//   names: {
//     color: 'sds',
//     mass: 30,
//     name: 'edrer',
//   },
// }
// fruitCatalog.apple

/**
 * Omit Type = Allows you to omit certain properties from an interface.
 */
type D = Omit<Human, 'name'> // {age: number}
/**
 *  Pick Type = Allows you to pick certain properties from an interface.
 */

type P = Pick<Human, 'age'> // {age: number}

/**
 * Record Type = Allows you to create a new type from a set of keys and a type.
 */

type R = Record<string, Human> // {a: Human, b: Human}

/**
 * Partial Type = Allows you to make all properties of an interface optional.
 **/

type PartialHuman = Partial<Human> // {name?: string, age?: number}

/** Lowercase type = Allows you to make all properties of an interface lowercase.  */
type LowercaseHuman = Lowercase<'HELLO'> // 'hello'

/** Uppercase type = Allows you to make all properties of an interface uppercase.  */
type UppercaseHuman = Uppercase<'hello'> // 'HELLO'
