class LightnessSlider {

  constructor(tag, color, width, picker) {
    this.tag = tag;
    this.color = color;
    this.width = width;
    this.picker = picker;
  }

  static addToPage(tag, color, width, picker){
    const lightnessSlider = new LightnessSlider(tag, color, width, picker);
    lightnessSlider.initialize();
  }

  //TODO set DEFAULT styles - remove  inline styling which does not support functionality
  initialize(){
    const slider = document.createElement("input");
    slider.setAttribute("type", "range");
    slider.setAttribute("style", `width: ${this.width};
      margin-top: ${this.width}; background: ${this.color.toString()}`);
    slider.setAttribute("max", "100");
    slider.setAttribute("min", "0");
    slider.setAttribute("value", `${this.color.lightnessPercentage}`);
    this.tag.appendChild(slider);
    this.adjustLightness(slider);
    this.subscribeToColorChange()
  }

  adjustLightness(slider){
    slider.addEventListener("input", (event) => {
      console.log("calledit");
      const newColor = this.color;
      console.log( newColor);
      newColor.lightnessPercentage = slider.value;
      newColor.dispatchUpdate(this.picker);
    });
  }

  subscribeToColorChange(){
    this.picker.addEventListener("colorChange", (event) => {
      this.color = event.detail;
    });
  }
}

export default LightnessSlider;
