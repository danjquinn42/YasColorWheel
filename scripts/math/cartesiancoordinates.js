class CartesianCoordinates {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }


  hypotenuse() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

module.exports = CartesianCoordinates;
