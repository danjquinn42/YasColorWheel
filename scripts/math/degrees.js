class Degrees {
  constructor(value){
    this.value = (value + 360) % 360;
  }

  toRadians() {
    return this.value * Math.PI / 180;
  }

  plus(operand){
    return new Degrees(this.value + operand.value);
  }

  negated() {
    return new Degrees(-this.value);
  }

  toString() {
    return `${this.value}˚`;
  }
}

module.exports = Degrees;
