/* @typeof guard */

// function isString(value: unknown): value is string {
//   return typeof value === 'string'
// }

// let value = 'Hello, world!'
// if (isString(value)) {
//   value.toUpperCase()
// }

/* @instance of  guard */

// class MyClass {
//   myMethod() {
//     console.log('Hello, world!')
//   }
// }

// function isMyClass(value: unknown): value is MyClass {
//   return value instanceof MyClass
// }

// let value = new MyClass()
// if (isMyClass(value)) {
//   value.myMethod()
// }

/* @instance of  guard */

// class MyClass {}

// function isMyClass(value: any): value is MyClass {
//   return value instanceof MyClass
// }

// let value = new MyClass()
// if (isMyClass(value)) {
//   value.myMethod()
// }

/* @in   guard */

// interface MyInterface {
//   myProp: any
// }

// function isMyInterface(value: any): value is MyInterface {
//   return 'myProp' in value
// }

// let value = { myProp: 'Hello, world!' }
// if (isMyInterface(value)) {
//   console.log(value.myProp)
// }

// interface MyInterface {
//     myProp: any;
// }

// function isMyInterface(value: any): value is MyInterface {
//     return value.hasOwnProperty('myProp');
// }

// let value = { myProp: 'Hello, world!' };
// if (isMyInterface(value)) {
//     console.log(value.myProp);
// }
