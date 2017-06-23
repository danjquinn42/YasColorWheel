class Marker {
  constructor(color, wheelScale){
    this.color = color;
    this.wheelScale = wheelScale;
  }

  position(){
    return this.color.toXYCoordinates;
  }

  insert(){
    return(`
      <div style="
          top: 20%;
          left: 20%;
          width: ${this.scale()};
          padding-top: ${this.scale()};
          background: ${this.color.toString()};
          border: 2px solid black;
          position: relative;
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

export default Marker;
