import Degrees from "./degrees.js";

class Radians {
  constructor(value) {
    this.value = value;
  }

  static from(x, hypotenuse) {
    return new Radians(Math.acos(x / hypotenuse));
  }

  toDegrees() {
    return new Degrees(this.value * (180 / Math.PI));
  }

  toRadians() {
    return this;
  }

  cos() {
    return Math.cos(this.value);
  }

  sin() {
    return Math.sin(this.value);
  }
}

export default Radians;
