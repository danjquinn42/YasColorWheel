import Wheel from "./wheel.js"

class colorPicker {
  constructor(tag, color = "hsl(20, 40%, 50%)"){
    this.tag = tag;
    this.color = color;
  }

  getColor(){
    return this.color;
  }

  setColor(newColor){
    this.color = newColor;
  }

  initialize(){
    const wheels = this.tag.getElementsByTagName("colorwheel");
    const hueSliders =
      this.tag.getElementsByTagName("hue-slider");
    const saturationSliders =
      this.tag.getElementsByTagName("saturation-slider");
    const lightnessSliders =
      this.tag.getElementsByTagName("lightness-slider");
    this.placeWheels(wheels)
    // this.placeHueSliders(wheels)
    // this.placeWheels(wheels)
  }

  placeWheels(wheels){
    if (wheels.length > 0){
      for (let i = 0; i < wheels.length; ++i){
        const wheel = Wheel.addToPage(wheels[i], this.color);
      }
    }
  }

}

export default colorPicker;
