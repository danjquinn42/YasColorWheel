import Wheel from "./wheel.js";
import LightnessSlider from "./lightness_slider.js";

class ColorPicker {
  constructor(tag, color) {
    this.tag = tag;
    this.color = color;
  }

  placeChildren() {
    this.placeWheels(this.fetch("color-wheel"));
    this.placeLightnessSliders(this.fetch("lightness-slider"));
  }

  applyDefaults() {
    if (this.tagIsEmpty()) {
      this.tag.appendChild(document.createElement("color-wheel"));
      this.tag.appendChild(document.createElement("lightness-slider"));
    }
  }

  tagIsEmpty() {
    return (this.fetch("color-wheel").length === 0
    && this.fetch("lightness-slider").length === 0);
  }

  fetch(tagName) {
    return this.tag.getElementsByTagName(tagName);
  }

  placeWheels(wheelTags) {
    for (let i = 0; i < wheelTags.length; ++i) {
      Wheel.createWheel(wheelTags[i], this.color);
    }
  }

  placeLightnessSliders(sliderTags) {
    for (let i = 0; i < sliderTags.length; ++i) {
      LightnessSlider.createSlider(sliderTags[i], this.color, this.tag);
    }
  }
}

export default ColorPicker;
