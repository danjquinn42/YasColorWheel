import Wheel from "./wheel.js";
import LightnessSlider from "./lightness_slider.js";

class colorPicker {
  constructor(tag, color) {
    this.tag = tag;
    this.color = color;
  }

  initialize() {
    if (this.tag.styles.position === undefined) {
      this.tag.setAttribute("style", "position: absolute");
    }
    const wheels = this.fetch("color-wheel");
    const lightnessSliders = this.fetch("lightness-slider");
    if (wheels.length === 0 && lightnessSliders.length === 0){
      this.applyDefaults();
    } else {
      this.placeWheels(wheels);
      this.placeLightnessSliders(lightnessSliders);
    }
  }

  applyDefaults(){
    const colorWheel = document.createElement("color-wheel");
    const lightnessSlider = document.createElement("lightness-slider");
    this.tag.appendChild(colorWheel);
    this.tag.appendChild(lightnessSlider);
    this.initialize();
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
