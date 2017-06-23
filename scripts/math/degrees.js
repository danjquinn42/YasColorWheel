import Radians from "./radians.js";

class Degrees {
  constructor(value){
    this.value = (value + 360) % 360;
  }

  toRadians() {
    return new Radians (this.value * Math.PI / 180);
  }

  plus(degree){
    return new Degrees(this.value + degree.value);
  }

  minus(degree){
    return new Degrees(this.value - degree.value);
  }

  negated() {
    return new Degrees(-this.value);
  }

  equals(degree) {
    return this.value === degree.value;
  }

  toString() {
    return `${this.value}˚`;
  }
}

export default Degrees;
