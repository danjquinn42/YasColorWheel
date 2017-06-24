import PolarCoordinates from './math/polarcoordinates.js';
const CartesianCoordinates = require('./math/cartesiancoordinates.js');
const inlineBackgroundStyle = require('./inline_background_style');
const HSL = require('./color/hsl.js');
const Marker = require('./marker.js');

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

      this.scrim.addEventListener("mousemove",
        drag,
        false);

      const that = this;

      document.addEventListener("mouseup", () => {
        this.scrim.removeEventListener("mousemove",
        drag,
        false);
      });
    });
  }

  colorFromMousePosition(event){
    let x = this.coordinateFromMousePosition(event.offsetX);
    let y = this.coordinateFromMousePosition(event.offsetY);
    const position = new CartesianCoordinates(x, y);
    this.color = position.toColor(this.color.l);
    this.updateMarkerPosition();
  }

  coordinateFromMousePosition(offset){
    const radius = this.innerWheel.clientWidth / 2;
    let coordinate = offset;
    coordinate = (coordinate / radius) - 1;
    if (coordinate > 1) {
      return 1;
    }else if (coordinate < -1) {
      return -1;
    }
    return coordinate;
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
