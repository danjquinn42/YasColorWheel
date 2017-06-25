import Wheel from "./wheel.js"

class colorPicker {
  constructor(tag, color) {
    this.tag = tag;
    this.color = color;
  }

  initialize(color) {
    const wheels = this.fetch("colorwheel");
    this.placeWheels(wheels);

    const lightnessSliders = this.fetch("lightness-slider");
      this.placeLightnessSliders(lightnessSliders);
  }

  fetch(tagName){
    return this.tag.getElementsByTagName(tagName);
  }

  placeWheels(wheels) {
    for (let i = 0; i < wheels.length; ++i ) {
      Wheel.addToPage(wheels[i], this.color, this.tag);
    }
  }

    placeLightnessSliders(sliders) {
    for (let i = 0; i < sliders.length; ++i ) {
      // Slider.addToPage(sliders[i], this.color, this.tag);
    }
  }
}

export default colorPicker;
