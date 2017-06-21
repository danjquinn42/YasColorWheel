class Degrees {
  constructor(value){
    this.value = value;
  }

  toRadians() {
    return this.value * Math.PI / 180;
  }
}

module.exports = Degrees;
