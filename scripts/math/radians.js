class Radians {
  constructor(x, hypotenuse){
    this.value = Math.acos(x / hypotenuse);;
  }

  toDegrees() {
    return this.value * (180 / Math.PI);
  }
}

module.exports = Radians;
