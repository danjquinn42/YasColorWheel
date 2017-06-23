//TODO create hex and rgb classes which have convertToHSL and add convertToRGB and convertToHex methods to HSL class
import Degrees from "../math/degrees.js";
import PolarCoordinates from "../math/polarcoordinates.js"

class HSL {
  constructor(h, s, l){
    this.h = h;
    this.s = s;
    this.l = l;
  }

  // TODO should throw an exception if string isn't properly formed.
  static parse(string){
    const [h, s, l] = string.match(/(\d)\w+/g).map((number) => {
      return parseInt(number)
    });
    return new HSL(h, s, l);
  };

  toXYCoordinates(){
    const angle = new Degrees(this.h).toRadians();
    const distanceFromOrigin = this.l / 100;
    const position = new PolarCoordinates(angle, distanceFromOrigin);
    return position.toXYCoordinates;
  }

  toString(){
    return `hsl(${this.h},${this.s}%,${this.l}%)`;
  }
}

export default HSL;
