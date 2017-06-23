const Degrees = require("./degrees.js");
const Radians = require("./radians.js");

class PolarCoordinates {

  constructor(angle, distanceFromOrigin){
    this.angle = angle;
    this.distanceFromOrigin = distanceFromOrigin;
  }

  static hypotenuse(x, y) {
    return Math.sqrt(x*x + y*y);
  }

  static toXYCoordinates(degrees, distanceFromOrigin) {
    const angle = new Degrees(degrees);
    const radians = angle.toRadians();
    const x = Math.cos(radians) * distanceFromOrigin;
    const y = Math.sin(radians) * distanceFromOrigin;
    return [x, y]
  }

  static from(x, y) {
    const distanceFromOrigin = this.hypotenuse(x, y);
    let angle = Radians.from(x, distanceFromOrigin);
    angle = angle.toDegrees();
    angle = ( y < 0 ) ? angle : angle.negated();
    return new PolarCoordinates(angle, distanceFromOrigin);
  }
}

module.exports = PolarCoordinates;
