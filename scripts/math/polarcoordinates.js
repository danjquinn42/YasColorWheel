import Degrees from "./degrees.js";
const Radians = require("./radians.js");
const HSL = require("../color/hsl.js");
const CartesianCoordinates = require("./cartesiancoordinates.js");


class PolarCoordinates {
  constructor(angle, distanceFromOrigin){
    this.angle = angle;
    this.distanceFromOrigin = distanceFromOrigin;
  }

  toColor(lightness) {
    const hue = this.angle.toDegrees().value;
    const saturation = this.distanceFromOrigin * 100;
    return new HSL(hue, saturation, lightness);
  }

  toCartesianCoordinates() {
    const x = this.angle.cos() * this.distanceFromOrigin;
    const y = this.angle.sin() * this.distanceFromOrigin;
    return new CartesianCoordinates(x, y);
  }

}

export default PolarCoordinates;
// module.exports = PolarCoordinates;
