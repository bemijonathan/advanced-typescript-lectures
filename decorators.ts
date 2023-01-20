//  class Decorator

/** @classDecorator */
// The decorator function can then modify the class
// definition by modifying its properties and methods,
// or by returning a new class constructor.

// adds a new property to the class:
// function Version(version: string) {
//   return function (target: any) {
//     target.prototype.version = version
//   }
// }

// @Version('1.0.0')
// class MyClass {
//   // class definition
// }
// console.log(new MyClass().version) // output: "1.0.0"

// adds a new method to the class:
// function Logger() {
//   return function (target: Function) {
//     target.prototype.log = function (message: string) {
//       console.log(`[${target.name}] ${message}`)
//     }
//   }
// }

// @Logger()
// class MyClass {
//   // class definition
// }

// const myClass = new MyClass()
// myClass.log('Hello, world!') // output: "[MyClass] Hello, world!"

/** @method decorator */
// function LogMethod() {
//   return function (
//     target: any,
//     methodName: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     const originalMethod = descriptor.value
//     descriptor.value = function (...args: any[]) {
//       console.log(`Calling ${methodName} with args: ${args}`)
//       const result = originalMethod.apply(this, args)
//       console.log(`Called ${methodName} and returned ${result}`)
//       return result
//     }
//   }
// }

// class MyClass {
//   @LogMethod()
//   myMethod(arg: number) {
//     return arg + arg
//   }
// }

// const myClass = new MyClass()
// myClass.myMethod(10)

/** @property decorator */

// function LogProperty() {
//   return function (target: any, propertyName: string) {
//     let _val = target[propertyName]

//     const getter = () => {
//       console.log(`Getting value of ${propertyName}`)
//       return _val
//     }

//     const setter = (newVal: any) => {
//       console.log(`Setting value of ${propertyName} to ${newVal}`)
//       _val = newVal
//     }

//     Object.defineProperty(target, propertyName, {
//       get: getter,
//       set: setter,
//       enumerable: true,
//       configurable: true,
//     })
//   }
// }

// class MyClass {
//   @LogProperty()
//   myProp: any
// }

// const myClass = new MyClass()
// myClass.myProp = 'Hello, world!' // output: "Setting value of myProp to 'Hello, world!'"
// console.log(myClass.myProp) // output: "Getting value of myProp" and "Hello, world!"
