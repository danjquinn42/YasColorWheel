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
  }

  static addToPage(wheelTag, cssColor){
    const color = HSL.parse(cssColor);
    const scale = (wheelTag.style.width) ?
      wheelTag.style.width : "20%";
    const wheel = new Wheel(wheelTag, color, scale);

    wheel.render();
    wheel.moveMarkerToMousePosition();
  }

  moveMarkerToMousePosition(){
    this.innerWheel.addEventListener("click", ()=> {
      const radius = event.target.clientWidth / 2;
      let x = event.offsetX;
      let y = event.offsetY;
      x = (x / radius) - 1;
      y = (y / radius) - 1;
      const position = new CartesianCoordinates(x, y);
      this.color = position.toColor(this.color.l);
      this.updateMarkerPosition();
    });
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
            id="inner-wheel"
            style="
              position: absolute;
              margin-top: -100%;
              width: 100%;
              height: 100%;
              ${inlineBackgroundStyle(50)};
              border-radius: 50%;">
        ${marker.insert()}
        </div>
      </div>
        `);
    this.innerWheel = this.tag.firstElementChild.firstElementChild;
    this.slider = this.tag.lastChild;
  }
}

export default Wheel;
