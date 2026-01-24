import {
  Rectangle,
  Point,
  DefaultRectangle,
  PrivateRectangle,
  Dog,
  Lion,
} from "../classes/classes.js";

console.log("-----Rectangles-----");
const rectangle = new Rectangle(2, 3);
console.log(rectangle);
console.log(rectangle.area);
console.log([...rectangle.getSides()]);
console.log();

const square = new Rectangle(10, 10);
console.log(square);
console.log(square.area);
console.log([...square.getSides()]);
console.log();

console.log("-----Points-----");
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(p1);
console.log(p2);
console.log(p1.displayName, p1.distance, p2.displayName, p2.distance); // undefined
console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
console.log();

console.log("-----DefaultRectangle-----");
const defaultRectangle = new DefaultRectangle(4);
console.log(defaultRectangle);
console.log(defaultRectangle.height, defaultRectangle.width);
console.log();

console.log("-----PrivateRectangle-----");
const privateRectangle = new PrivateRectangle(5, 6);
console.log(privateRectangle);
console.log(privateRectangle.height, privateRectangle.width);
console.log(privateRectangle.getHeight(), privateRectangle.getWidth());
console.log();

class C {
  constructor(args) {
    this.args = args[0];
  }
}

class A extends C {}

console.log("-----A-----");
const a = new A([1, 2, 3]);
console.log("A:", a.args);
console.log();

class B extends C {
  constructor(...args) {
    super(...args);
  }
}

console.log("-----B-----");
const b = new B([1, 2, 3]);
console.log("B:", b.args);
console.log();

console.log("-----Dog-----");
const d = new Dog("Mitzie");
d.speak();
console.log();

console.log("-----Lion-----");
const l = new Lion("Fuzzy");
l.speak();
console.log();
