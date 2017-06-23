//TODO create hex and rgb classes which have convertToHSL and add convertToRGB and convertToHex methods to HSL class

const parsingException

class HSL {
  constructor(hue, saturation, lighness){
    this.h = h;
    this.s = s;
    this.l = l;
  }

  // TODO should throw an exception if string isn't properly formed.
  static parse(string){
    const [h, s, l] = string.match(/(\d)\w+/g).map((number) => {
      return parseInt(number)
    });
    return new HSL(h, s, l);
  };

  toString(){
    return `hsl(${this.h},${this.s}%,${this.l}%)`;
  }
}

  export defualt HSL;
