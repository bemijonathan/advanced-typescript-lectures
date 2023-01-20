/**
 * type of
 */

// let obj = {
//     a: 1,
//     b: 2
// }
// type objKeys = typeof obj // type of objKeys is 'a' | 'b'

/**
 * keyof
 */

// let obj2 = { a: '1', b: 2 }
// type objKeys2 = keyof typeof obj2

// type DatePropertyNames = keyof Date
// // Not all keys are strings, so we can separate out those keys that are symbols and those that are strings using the intersection operator (&).
// type DateStringPropertyNames = keyof Date & string

// type DateSymbolPropertyNames = DatePropertyNames & symbol

/**
 * Return Type of
 */

// function GetTeam() {
//   return {
//     name: 'team1',
//     members: ['a', 'b'],
//   }
// }

// type GetTeamFunction = ReturnType<typeof GetTeam>

// Limitations
// TypeScript intentionally limits the sorts of expressions you can use typeof on.

// Specifically, it’s only legal to use typeof on identifiers (i.e. variable names) or their properties. This helps avoid the confusing trap of writing code you think is executing, but isn’t:

/**
 * Indexed Access Types
 */

// type People = [{ age: number; name: string; alive: boolean }]
// type Person = People[number] // person
// type Age = People[number]['age'] //number

/**
 * conditional types
 */

// interface Animals {
//   live(): void
// }
// interface Dog extends Animals {
//   woof(): void
// }
// type Example1 = Dog extends Animal ? number : string

// type IdLabel = {
//   id: number /* some fields */
// }
// type NameLabel = {
//   name: string /* other fields */
// }

// type NameOrId<T> = T extends number ? IdLabel : NameLabel

// function createLabel<T>(idOrName: T): NameOrId<T> {
//   throw 'unimplemented'
// }

// const a = createLabel(34)

// type Flatten<T> = T extends any[] ? T[number] : T

// type Str = Flatten<string[]>
// type Num = Flatten<number>

// class Grill {
//   startGas() {}
//   stopGas() {}
// }
// class Oven {
//   setTemperature(degrees: number) {}
// }

// type CookingDevice<T> = T extends 'grill' ? Grill : Oven

// let device1: CookingDevice<'grill'>
// let device2: CookingDevice<'oven'>
/**
 * Template literals
 */
// type EmailLocaleIDs = "welcome_email" | "email_heading";
// type FooterLocaleIDs = "footer_title" | "footer_sendoff";

// type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
