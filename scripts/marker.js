class Marker {
  constructor(tag){
    this.tag = tag;
  }

  setColorAndPosition(color, wheelScale) {
    this.color = color;
    this.wheelScale = wheelScale
    const position = this.color.toXYCoordinates();

    const x = position.x * 50 + 46;
    const y = position.y * 50 + 46;

    this.tag.setAttribute("style", `position: absolute;
        left: ${position.x}%; top: ${position.y}%;
        width: ${this.scale()}${this.scaleType()};
        padding-top: ${this.scale()}${this.scaleType()};
        background: ${this.color.toString()};
        border: 1px solid black; border-radius: 50%;
        -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;`);
  }

  percentSize() {
    if (this.scaleType() === "%") {
      return scale();
    }
    return (parseInt(this.wheelScale.match(/\d+/)) / scale()) * 100;
  }

  scaleType() {
    if (this.wheelScale.slice(-1) === 'x') {
      return 'px';
    }
    return '%';
  }

  scale() {
    const scaleType = this.wheelScale.slice(-1)
    if (scaleType === "x") {
      return parseInt(this.wheelScale.slice(0, -2))/12.5;
    } else if (scaleType === "%") {
      return 8;
    }
  }
}

export default Marker;
