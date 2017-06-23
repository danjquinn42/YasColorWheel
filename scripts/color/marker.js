class Marker {
  constructor(color, wheelScale){
    this.color = color;
    this.scale = this.scale(wheelScale);
  }

  print(){
    return(`
      <div style="
          width: ${this.scale};
          padding-top: ${this.scale};
          background: ${this.color.toString()};
          border: 2px solid black;
          position: absolute;
          border-radius: 50%;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;">
      </div>
      `);
  }

  scale(wheelScale){
    const scaleType = wheelScale.slice(-1)
    if (scaleType === "x") {
      return `${parseInt(wheelScale.slice(0, -2))/13}px`;
    } else if (scaleType === "%"){
      return '6%';
    }
  }
}

export default Marker;
