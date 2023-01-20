/**
 * Generics
 */

function identity<T>(arg: T): T {
  return arg
}

/**
 * can be used to create custom dynamic types
 */
// interface IArray<T> {
//     [index: number]: T & {
//         createdAt:  Date,
//         updatedAt: Date
//     };
// }

// const t:  IArray<{hello: "dfdfdf"}> = [
//     {
//         hello: "dfdfdf",
//         createdAt: new Date(),
//         updatedAt: new Date()
//     }
// ]

// class GenericNumber<T> {
//     zeroValue: T | undefined;
//     add: ((x: T, y: T) => T) | undefined;
// }

// const b = new GenericNumber<{name: string}[]>

// b.zeroValue = [
//     {name:"me"}
// ]
