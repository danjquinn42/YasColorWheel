import CartesianCoordinates from '../math/cartesiancoordinates.js';
import HSL from '../color/hsl.js';
import InnerWheelStyle from './inner_wheel_style.js';
import Marker from './marker.js';

//TODO Remove this.scale and repalce scaling with clientWidth;
class Wheel {
  constructor(tag, scale, picker, lightness) {
    this.wheelTag = tag;
    this.scale = scale;
    this.picker = picker;
    this.lightness = lightness;
    this.drag = this.drag.bind(this);
    this.subscribeToColorChange =
      this.subscribeToColorChange.bind(this);
  }

  // TODO extract into a factory
  static createWheel(wheelTag, color) {
    const scale = (wheelTag.style.width) ?
      wheelTag.style.width : "20%";
    const picker = wheelTag.parentElement;
    const wheel = new Wheel(wheelTag, scale, picker, color.lightnessPercentage);
    wheel.initialize(picker, color);
    wheel.clickAndDragMarker();
    wheel.subscribeToColorChange();
  }

  //TODO extract into a factory
  initialize(picker, color) {
    this.wheelTag.setAttribute("style", `
      position: absolute; border-radius: 50%;
      background: hsl(0, 0%, ${this.lightness}%);
      width: 100%; padding-top: 100%; margin: 0 auto;`);

    this.innerWheelTag = document.createElement("inner-wheel");
    this.innerWheelTag.setAttribute("style",
      InnerWheelStyle(this.lightness));
    this.wheelTag.appendChild(this.innerWheelTag);

    const markerDiv = document.createElement("marker");

    this.marker = new Marker(markerDiv, color, picker);
    this.marker.setPosition(this.scale, this.totalOffset());
    this.updateWheel(this.lightness);
  }

  clickAndDragMarker() {
    this.innerWheelTag.addEventListener("mousedown", (event) => {
      this.drag(event);
      document.addEventListener(
        "mousemove", this.drag, false);
      document.addEventListener("mouseup", () => {
        document.removeEventListener(
          "mousemove", this.drag, false);
      });
    });
  }

  subscribeToColorChange() {
    this.picker.addEventListener("colorChange", (event) => {
      const lightness = event.detail.lightnessPercentage;
      this.updateWheel(lightness);
    });
  }

  updateWheel(lightness) {
    this.lightness = lightness;
    this.innerWheelTag.innerHTML = this.marker.tag.outerHTML;
    this.innerWheelTag.setAttribute("style",
      InnerWheelStyle(lightness));
    this.wheelTag.setAttribute("style", `position: absolute;
      border-radius: 50%; background: hsl(0, 0%, ${this.lightness}%);
      width: 100%; padding-top: 100%; margin: 0 auto;`);
  }

  drag(event) {
    event.preventDefault();
    const origin = this.origin()
    const mouseLeft = (event.pageX - origin.x) / this.radius();
    const mouseTop = (event.pageY - origin.y) / this.radius();
    const position = new CartesianCoordinates(mouseLeft, mouseTop);
    const color = position.toColor(this.lightness);
    color.dispatchUpdate(this.picker);
  }

  origin() {
    const offset = this.totalOffset();
    const x = offset.left + this.radius();
    const y = offset.top + this.radius();
    return { x: x, y: y };
  }

  totalOffset() {
    let [top, left, element] = [0, 0, this.innerWheelTag];
    while (element) {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    }
    return { top: top, left: left };
  }

  radius() {
    return this.innerWheelTag.clientHeight / 2;
  }
}

export default Wheel;
