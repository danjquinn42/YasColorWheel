class PolarCoordinates {


      degreesToRadians(degrees){
        degrees * Math.PI / 180
      }

      radiansToDegrees(radians){
        return radians * (180 / Math.PI);
      }
  //
  //   distanceFromOrigin(x, y) {
  //     return Math.sqrt(x*x + y*y);
  //   }

    toXYCoordinates(degrees, distanceFromOrigin) {
      degrees = degreesToRadians(degrees)
    }

  //   hueToX(hue, saturation) {
  //     saturation = saturation / 100;
  //     hue = hue * Math.PI / 180;
  //     return ((Math.cos(hue) * saturation) + 1 ) / 2 * 100;
  //   }
  //   hueToY(hue, saturation) {
  //     saturation = saturation / 100;
  //     hue = hue * Math.PI / 180;
  //     return ((Math.sin(hue) * saturation) + 1 ) / 2 * -100 + 100;
  //   }
  //   XYtoHueAndSaturation(x, y) {
  //     const hypotenuse =  this.distanceFromOrigin(x, y);
  //     const angle = this.toDegrees(Math.acos( x / hypotenuse));
  //     const saturation = Math.min( hypotenuse * 100, 100 );
  //     const hue = ( 0 > y ) ? angle : -(angle - 180) + 180;
  //     return { hue: hue, saturation: saturation };
  //   }
}

export default PolarCoordinates;
