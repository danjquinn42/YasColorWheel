import PolarCoordinates from './math/polarcoordinates.js';
import CartesianCoordinates from './math/cartesiancoordinates.js';
import inlineBackgroundStyle from './background_style';
import HSL from './color/hsl.js';
import Marker from './marker.js';

class Wheel{
  constructor(tag, color, scale) {
    this.tag = tag;
    this.color = color;
    this.scale = scale;
    this.mousePosition;
  }

  static addToPage(wheelTag, cssColor){
    const color = HSL.parse(cssColor);
    const scale = (wheelTag.style.width) ?
      wheelTag.style.width : "20%";
    const wheel = new Wheel(wheelTag, color, scale);

    wheel.render();
    wheel.clickAndDragMarker();
  }

  clickAndDragMarker(){
    this.scrim.addEventListener("mousedown", () => {
      const drag = this.colorFromMousePosition.bind(this);
      this.colorFromMousePosition(event);
      document.addEventListener("mousemove",
        drag,
        false);
      const that = this;
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove",
        drag,
        false);
      });
    });
  }

  colorFromMousePosition(event){
    const origin = this.origin()
    const mouseLeft = (event.pageX - origin.x) / this.radius();
    const mouseTop = (event.pageY - origin.y) / this.radius();
    const position = new CartesianCoordinates(mouseLeft, mouseTop);
    this.color = position.toColor(this.color.l);
    this.updateMarkerPosition();
  }

  origin() {
    const offset = this.totalOffset();
    const x = offset.left + this.radius();
    const y = offset.top - this.radius();
    return { x: x, y: y };
  }

  totalOffset() {
    let top = 0;
    let left = 0;
    let element = this.scrim;
    while (element) {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    }
    return { top: top, left: left };
  }

  radius(){
    return this.innerWheel.clientHeight / 2;
  }

  updateMarkerPosition(){
    const marker = new Marker(this.color, this.scale);
    this.innerWheel.innerHTML = marker.insert();
  }

  render(){
    const marker = new Marker(this.color, this.scale);
    this.tag.style = `
      position: absolute;
      border-radius: 50%;
      background: white;
      width: ${this.scale};
      padding-top: ${this.scale};`
    this.tag.innerHTML = (`
      <div>
          <div
            draggable="true;"
            style="
              position: absolute;
              margin-top: -100%;
              width: 100%;
              height: 100%;
              ${inlineBackgroundStyle(50)};
              border-radius: 50%;">
            ${marker.insert()}
          </div>

        <div
          draggable="false";
          style="
            position: absolute;
            margin-top: -100%;
            width: 100%;
            height: 100%;
            border-radius: 50%;">
        </div>
        `);
    this.innerWheel = this.tag.firstElementChild.firstElementChild;
    this.scrim = this.tag.lastChild;
  }
}

export default Wheel;
