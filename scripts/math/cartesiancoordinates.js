import Radians from "./radians.js";
import PolarCoordinates from "./polarcoordinates.js";

class CartesianCoordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toColor(lightness) {
    const position = this.toPolarCoordinates();
    return position.toColor(lightness);
  }

  toPolarCoordinates() {
    let distanceFromOrigin = this.hypotenuse();
    if (distanceFromOrigin > 1) {
      distanceFromOrigin = 1;
    }
    const angle = new Radians(Math.atan2(this.y, this.x));
    return new PolarCoordinates(angle, distanceFromOrigin);
  }

  hypotenuse() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

export default CartesianCoordinates;
