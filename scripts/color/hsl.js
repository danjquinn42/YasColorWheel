//TODO create hex and rgb classes which have convertToHSL and add convertToRGB and convertToHex methods to HSL class
import Degrees from "../math/degrees.js";
import PolarCoordinates from "../math/polarcoordinates.js";

class HSL {
  constructor(hue, saturationPercentage, lightnessPercentage) {
    this.hue = hue;
    this.saturationPercentage = saturationPercentage;
    this.lightnessPercentage = lightnessPercentage;
  }

  // TODO should throw an exception if string isn't properly formed.
  static parse(colorString) {
    const [hue, saturationPercentage, lightnessPercentage] = colorString.match(/\d+/g).map((number) => {
      return parseInt(number)
    });
    return new HSL(hue, saturationPercentage, lightnessPercentage);
  };

  // TODO create Percentages class to handle s and l values
  toXYCoordinates() {
    const angle = new Degrees(this.hue)
    const distanceFromOrigin = this.saturationPercentage / 100;
    const position = new PolarCoordinates(angle, distanceFromOrigin);
    return position.toCartesianCoordinates();
  }

  dispatchUpdate(domElement) {
    const colorChange = new CustomEvent("colorChange",
      { "detail": this });
    domElement.dispatchEvent(colorChange);
  }

  toString() {
    console.log[this.hue, ", ", this.saturationPercentage, " ", this.lightnessPercentage, " "];
    return `hsl(${this.hue}, ${
        this.saturationPercentage}%, ${
        this.lightnessPercentage}%)`;
  }
}

export default HSL;
