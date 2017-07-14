import Radians from "./radians.js";

class Degrees {
  constructor(value) {
    this.value = (value + 360) % 360;
  }

  toRadians() {
    return new Radians(this.value * Math.PI / 180);
  }

  toDegrees() {
    return this;
  }

  cos() {
    return this.toRadians().cos();
  }

  sin() {
    return this.toRadians().sin();
  }

  toString() {
    return `${this.value}˚`;
  }
}

export default Degrees;
