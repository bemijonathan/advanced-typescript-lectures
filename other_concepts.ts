// Declarative Merging
// interface Fruit {
//   name: string
//   mass: number
//   color: string
// }

// class Fruit {
//   getName() {}
//   getColor() {}
//   getmass() {}
// }

// const fruit = new Fruit()

// const fruits: Fruit[] = [
//   {
//     name: 'fer',
//     mass: 9,
//     color: 'erewr',
//     getName() {},
//     getColor() {},
//     getmass() {},
//   },
// ]

// Importing non-TS things

/**
 * Make all properties in T optional
 */
// type Partial<T> = {
//     [P in keyof T]?: T[P]
//   }
//   /**
//    * Make all properties in T required
//    */
//   type Required<T> = {
//     [P in keyof T]-?: T[P]
//   }
//   /**
//    * Make all properties in T readonly
//    */
//   type Readonly<T> = {
//     readonly [P in keyof T]: T[P]
//   }
//   There is no built-in TypeScript “utility type” for readonly removal, but you could implement one if you needed to (not necessarily a good idea though)

//   type NotReadonly<T> = {
//     -readonly [P in keyof T]: T[P]
//   }
