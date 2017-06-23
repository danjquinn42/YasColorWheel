// TODO getCurrentColor()
//  returns {HEX: "#193843",
// HSL: "251,50,50",
// RGB: "143,143,413",
// }
// TODO setColor(colorFormat, num or string [, num, num])
// TODO slider for lightness
// TODO set defaults if user does not pass in width or default color

import PolarCoordinates from './math/polarcoordinates.js';
import inlineBackgroundStyle from './inline_background_style';
import HSL from './color/hsl.js';

class Wheel{
  constructor(tag, image, color, scale) {
    this.tag = tag;
    this.image = image;
    this.color = color;
    this.scale = scale;
  }

  static addToPage(wheelTag){
    const image = (wheelTag.hasAttribute("src")) ?
      wheelTag.getAttribute("src") : './assets/HSL_Wheel.png';
    const colorString = (wheelTag.hasAttribute("defaultColor")) ?
      wheelTag.getAttribute("defaultColor") : "hsl(215, 50%, 50%)";
    const color = HSL.parse(colorString);
    const scale = (wheelTag.style.width) ?
      wheelTag.style.width : "20%";
    const wheel = new Wheel(wheelTag, image, color, scale);

    wheel.render();
    wheel.watchMouse();
  }

  marker(){
    const markerScale = this.markerScale();
    return(`
      <div style="
          width: ${markerScale};
          padding-top: ${markerScale};
          background: ${this.color.toString(this.color)};
          border: 2px solid black;
          position: absolute;
          ${this.unselectableCircle()}">
      </div>
      `);
  }

  markerScale(){
    const scaleType = this.scale.slice(-1)
    if (scaleType === "x") {
      return `${parseInt(this.scale.slice(0, -2))/12}px`;
    } else if (scaleType === "%"){
      return '6%';
    }
    throw "Width of Wheel must be defined in pixels or percentage"
  }

  unselectableCircle(){
    return `border-radius: 50%;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;`
  }
  watchMouse(){
    this.tag.addEventListener("mousemove", () => {
      const colorWheel = event.target.offsetParent;
      const radius = colorWheel.clientWidth / 2;
      const coord = PolarCoordinates.from(event.pageX - radius, event.pageY + radius);
      const originX = colorWheel.offsetLeft + radius;
      const originY = colorWheel.offsetTop + radius;
      const origin = [originX, originY];
    });
  }

  render(){
    this.tag.innerHTML = (`
      <div
        style="
          position: relative;
          border-radius: 50%;
          width: ${this.scale};
          padding-top: ${this.scale}%;">
          <div
            style="
              position: absolute;
              display: inline-block;
              width: 100%;
              height: 100%;
              padding-top: ${this.scale};
              ${inlineBackgroundStyle(50)};
              border-radius: 50%;"
            ></div>
        ${this.marker()}
      </div>
    `);
  }
}

module.exports = Wheel;
