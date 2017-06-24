class Marker {
  constructor(color, wheelScale){
    this.color = color;
    this.wheelScale = wheelScale;
  }


  insert(){
    const position = this.color.toXYCoordinates();
    position.x = position.x * 50 + 50;
    position.y = position.y * 50 + 50;

    return(`
      <div style="
        position: relative;
        left: ${position.x}%;
        top: ${position.y}%;
        width: ${this.scale()};
        padding-top: ${this.scale()};
        background: ${this.color.toString()};
        border: 2px solid black;
        border-radius: 50%;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;">
      </div>
      `);
  }

  scale(){
    const scaleType = this.wheelScale.slice(-1)
    if (scaleType === "x") {
      return `${parseInt(this.wheelScale.slice(0, -2))/13}px`;
    } else if (scaleType === "%"){
      return '6%';
    }
  }
}

module.exports =  Marker;
