class LightnessSlider {

  constructor(tag, color, picker) {
    this.tag = tag;
    this.color = color;
    this.picker = picker;
  }

  static addToPage(tag, color, picker){
    const lightnessSlider = new LightnessSlider(tag, color, picker);
    lightnessSlider.initialize();
  }

  //TODO set DEFAULT styles - remove  inline styling which does not support functionality
  initialize(){
    const slider = document.createElement("input");
    slider.setAttribute("type", "range");
    slider.setAttribute("max", "100");
    slider.setAttribute("min", "0");
    slider.setAttribute("value", `${this.color.lightnessPercentage}`);
    this.setStyle(slider);
    this.tag.appendChild(slider);
    this.adjustLightness(slider);
    this.subscribeToColorChange(slider);
  }

  adjustLightness(slider){
    slider.addEventListener("input", (event) => {
      const newColor = this.color;
      newColor.lightnessPercentage = slider.value;
      newColor.dispatchUpdate(this.picker);
    });
  }

  setStyle(slider){
    const color = this.color;
    const black = color;
    black.lightnessPercentage = 0;
    const white = color;
    black.lightnessPercentage = 100;
    slider.setAttribute("style",
    `position: relative;
    width: 100%;
    margin-top: 105%;
    position: absolute;`);
  }

  subscribeToColorChange(slider){
    this.picker.addEventListener("colorChange", (event) => {
      this.color = event.detail;
      this.setStyle(slider);
      slider.setAttribute("value", `${this.color.lightnessPercentage}`);
    });
  }
}

export default LightnessSlider;
