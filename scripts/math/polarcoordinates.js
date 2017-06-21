
class PolarCoordinates {
  static degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  static radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
  }

  static radiansFromSidesOfTriangle(x, hypotenuse) {
    return Math.acos(x / hypotenuse);
  }

  static hypotenuse(x, y) {
    return Math.sqrt(x*x + y*y);
  }

  static toXYCoordinates(degrees, distanceFromOrigin) {
    const radians = this.degreesToRadians(degrees)
    const x = Math.cos(radians) * distanceFromOrigin;
    const y = Math.sin(radians) * distanceFromOrigin;
    return [x, y]
  }

  static fromXYCoordinates(x, y) {
    const distanceFromOrigin = this.hypotenuse(x, y);
    const angleInRadians = PolarCoordinates.radiansFromSidesOfTriangle(x, distanceFromOrigin);
    let degrees = this.radiansToDegrees(angleInRadians);
    degrees = ( y < 0 ) ? degrees : 360 - degrees;
    return [degrees, distanceFromOrigin];
  }
}

module.exports = PolarCoordinates;

// class PolarCoordinates {
//       //TODO verify output is in the form [0-360, 0-1]
//
//   degreesToRadians(degrees){
//     return degrees * Math.PI / 180
//   }
//
//   radiansToDegrees(radians){
//     return radians * (180 / Math.PI);
//   }
//
//   radiansFromSidesOfTriangle(x, hypotenuse){
//     return Math.acos( x / hypotenuse);
//   }
//
//   hypotenuse(x, y) {
//     return Math.sqrt(x*x + y*y);
//   }
//
//   toXYCoordinates(degrees, distanceFromOrigin) {
//     const radians = degreesToRadians(degrees)
//     const x = Math.cos(radians) * distanceFromOrigin;
//     const y = Math.sin(radians) * distanceFromOrigin;
//     return [x, y]
//   }
//
//   fromXYCoordinates(x, y) {
//     const distanceFromOrigin =  this.hypotenuse(x, y);
//     const angleInRadians = radiansFromSidesOfTriangle(x, hypotenuse)
//     let degrees = this.radiansToDegrees(angleInRadians);
//     degrees = ( y < 0 ) ? degrees : 360 - degrees;
//     return [degrees, distanceFromOrigin];
//   }
// }
//
// module.exports = PolarCoordinates;
