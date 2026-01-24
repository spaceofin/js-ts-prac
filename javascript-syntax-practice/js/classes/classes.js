// Declaration
class Rectangle {
  // Class field initializers run before the constructor.
  height = 0;
  width;

  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Getter
  get area() {
    return this.calcArea();
  }

  // Method
  calcArea() {
    return this.height * this.height;
  }

  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

// Expression; the class is anonymous but assigned to a variable
// const Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// Expression; the class has its own name
// const Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

class DefaultRectangle {
  height = 1;
  width = 1;
  constructor(height, width) {
    this.height = height;
    // if (width !== undefined) this.width = width;
  }
}

class PrivateRectangle {
  #height = 2;
  #width = 2;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }

  getHeight() {
    return this.#height;
  }

  getWidth() {
    return this.#width;
  }
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

export { Rectangle, Point, DefaultRectangle, PrivateRectangle };
export { Dog, Lion };
