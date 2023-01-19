/**
 * unions
 */
type gender = "male" | "female"

function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
}
/**
 * intersections
 */

interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
   
type ColorfulCircle = Colorful & Circle;


/**
 * discriminated Unions
 */

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
    // s.height as Rectangle

    if("height" in s){
        s.height
    }
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

interface Cat {
    weight: number;
    whiskers: number;
  }
  interface Dog {
    weight: number;
    friendly: boolean;
  }

type Animal = Dog | Cat 

function getAnimal (animal:Animal) {
    // animal.friendly
    if ("friendly" in animal) {
    console.log(animal.friendly);
    } else {
    console.log(animal.whiskers);
    }
}

