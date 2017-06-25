import Wheel from "./wheel.js"

class colorPicker {
  constructor(tag, color) {
    this.tag = tag;
    this.color = color;
  }

  initialize(color) {
    const wheels = this.tag.getElementsByTagName("colorwheel");
    this.placeWheels(wheels);
  }

  placeWheels(wheels) {
    for (let i = 0; i < wheels.length; ++i ) {
      Wheel.addToPage(wheels[i], this.color, this.tag);
    }
  }
}

export default colorPicker;
