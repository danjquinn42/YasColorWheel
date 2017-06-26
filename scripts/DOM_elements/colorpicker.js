import Wheel from "./wheel.js";
import LightnessSlider from "./lightness_slider.js";

class colorPicker {
  constructor(tag, color) {
    this.tag = tag;
    this.color = color;
  }

  initialize(color) {
    const wheels = this.fetch("color-wheel");
    this.placeWheels(wheels);

    const lightnessSliders = this.fetch("lightness-slider");
    this.placeLightnessSliders(lightnessSliders);
  }

  fetch(tagName){
    return this.tag.getElementsByTagName(tagName);
  }

  placeWheels(wheels) {
    for (let i = 0; i < wheels.length; ++i ) {
      Wheel.addToPage(wheels[i], this.color);
    }
  }

  placeLightnessSliders(sliders) {
    for (let i = 0; i < sliders.length; ++i ) {
      LightnessSlider.addToPage(sliders[i], this.color, this.tag);
    }
  }
}

export default colorPicker;
