import Wheel from "./wheel.js"

class colorPicker {
  constructor(tag, color = "hsl(20, 40%, 50%)"){
    this.tag = tag;
    this.color = color;
  }

  listenForColorChange(){
    this.tag.addEventListener("colorChange", () => {
      this.color = color;
    })
  }

  setColor(newColor){
    const colorChange =
      new CustomEvent("colorChange", { "color": this.color });
    dispatchEvent(colorChange);
  }

  initialize(){
    const wheels = this.tag.getElementsByTagName("colorwheel");
    this.placeWheels(wheels)
    this.listenForColorChange();
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
