const Degrees = require("./degrees.js");
const Radians = require("./radians.js");

class PolarCoordinates {

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

  static fromXYCoordinates(x, y) {
    const distanceFromOrigin = this.hypotenuse(x, y);
    let angle = new Radians(x, distanceFromOrigin);
    angle = angle.toDegrees();
    angle = ( y < 0 ) ? angle : 360 - angle;
    return [angle, distanceFromOrigin];
  }
}

module.exports = PolarCoordinates;
