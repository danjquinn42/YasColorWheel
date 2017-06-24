const Degrees = require("./degrees.js");
const Radians = require("./radians.js");
const CartesianCoordinates = require("./cartesiancoordinates.js");

class PolarCoordinates {

  constructor(angle, distanceFromOrigin){
    this.angle = angle;
    this.distanceFromOrigin = distanceFromOrigin;
  }


  toCartesianCoordinates() {
    const x = this.angle.cos() * this.distanceFromOrigin;
    const y = this.angle.sin() * this.distanceFromOrigin;
    return new CartesianCoordinates(x, y);
  }
}

module.exports = PolarCoordinates;
