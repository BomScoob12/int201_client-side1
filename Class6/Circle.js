//syntax sugar?

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //share method of class
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getRadius() {
    return this.radius;
  }
}

const c1 = new Circle(1);
const c2 = new Circle(2);
const c3 = new Circle(4);
console.log("object c1 : ", c1, " and Area = " + c1.area());
console.log("object c2 : ", c2, " and Area = " + c2.area());
console.log("object c3 : ", c3, " and Area = " + c3.area());
console.log(c1.getRadius())
console.log(c2.getRadius())
console.log(c3.getRadius())