import PolarCoordinates from './math/polarcoordinates.js';
import CartesianCoordinates from './math/cartesiancoordinates.js';
import inlineBackgroundStyle from './inline_background_style';
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

  // origin() {
  //   const offset = cumulativeOffset();
  //   const x = offset.top + radius();
  //   const y = offset.left + radius();
  //   return { x: x, y: y };
  // }
  //
  // cumulativeOffset() {
  //   let top = 0;
  //   let left = 0;
  //   let element = this.scrim;
  //   while (element) {
  //       top += element.offsetTop  || 0;
  //       left += element.offsetLeft || 0;
  //       element = element.offsetParent;
  //   }
  //
  //   return { top: top, left: left };
  // }

  radius(){
    return this.innerWheel.clientWidth / 2;
  }


  coordinateFromMousePosition(offset){
    let coordinate = offset;
    coordinate = (coordinate / this.radius()) - 1;
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
