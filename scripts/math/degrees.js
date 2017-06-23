const Radians = require("./radians.js")

class Degree {
  constructor(value){
    this.value = (value + 360) % 360;
  }

  toRadians() {
    return new Radians (this.value * Math.PI / 180);
  }

  plus(degree){
    return new Degree(this.value + degree.value);
  }

  minus(degree){
    return new Degree(this.value - degree.value);
  }

  negated() {
    return new Degree(-this.value);
  }

  equals(degree) {
    return this.value === degree.value;
  }

  toString() {
    return `${this.value}˚`;
  }
}

module.exports = Degree;
