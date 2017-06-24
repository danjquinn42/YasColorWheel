// TODO getCurrentColor()
//  returns {HEX: "#193843",
// HSL: "251,50,50",
// RGB: "143,143,413",
// }
// TODO setColor(colorFormat, num or string [, num, num])
// TODO slider for lightness
// TODO set defaults if user does not pass in width or default color

const PolarCoordinates = require('./math/polarcoordinates.js');
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
      wheelTag.getAttribute("defaultColor") : "hsl(215, 50%, 50%)";
    const color = HSL.parse(colorString);
    const scale = (wheelTag.style.width) ?
      wheelTag.style.width : "20%";
    const wheel = new Wheel(wheelTag, color, scale);

    wheel.render();
  }



  render(){
    const marker = new Marker(this.color, this.scale);
    this.tag.style = `
      position: absolute;
      border-radius: 50%;
      background: white;
      width: ${this.scale};
      height: ${this.scale};`
    this.tag.innerHTML = (`
          <div
            style="
              position: absolute;
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
