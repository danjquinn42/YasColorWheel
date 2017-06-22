const Degrees = require("./degrees.js")
class Radians {
  constructor(value){
    this.value = value;
  }

  static from(x, hypotenuse){
    return new Radians(Math.acos(x / hypotenuse));
  }

  toDegrees() {
    return new Degrees(this.value * (180 / Math.PI));
  }
}

module.exports = Radians;
