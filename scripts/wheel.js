const PolarCoordinates = require('./math/polarcoordinates.js');
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

  static addToPage(wheelTag){
    const colorString = (wheelTag.hasAttribute("defaultColor")) ?
      wheelTag.getAttribute("defaultColor") : "hsl(60, 50%, 50%)";
    const color = HSL.parse(colorString);
    const scale = (wheelTag.style.width) ?
      wheelTag.style.width : "20%";
    const wheel = new Wheel(wheelTag, color, scale);

    wheel.render();
    wheel.watchMouse();
  }

  watchMouse(){
    this.tag.addEventListener("click", ()=> {
      const radius = event.target.clientWidth / 2;
      let x = event.offsetX;
      let y = event.offsetY;
      x = radius;
      y = radius;
      x = 1;
      y = 1;
      const position = new CartesianCoordinates(x, y);
      this.color = position.toColor(this.color.l);
      this.render()
    });
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
          <div
            style="
              position: absolute;
              margin-top: -100%;
              width: 100%;
              height: 100%;
              ${inlineBackgroundStyle(50)};
              border-radius: 50%;"
            ></div>
        ${marker.insert()}
    `);
  }
}

module.exports = Wheel;
