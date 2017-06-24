const PolarCoordinates = require("./polarcoordinates.js").default;

class CartesianCoordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toColor(lightness) {
    const position = this.toPolarCoordinates();
    return position.toColor(lightness);
  }

  toPolarCoordinates(){
    const distanceFromOrigin = this.hypotenuse;
    const angle = Math.atan(this.y / this.x);
    debugger;
    return new PolarCoordinates(angle, distanceFromOrigin);
  }

  hypotenuse() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

module.exports = CartesianCoordinates;
