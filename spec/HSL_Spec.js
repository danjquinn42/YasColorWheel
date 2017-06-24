const HSL = require("../scripts/color/hsl.js");

describe("HSL", function() {

  beforeEach(function() {
    blue = new HSL(230, 83, 40);
    red = new HSL(0, 100, 50);
  });

  describe("toString", function(){
    it("should return css formatted color value", function(){
      expect(blue.toString()).toEqual("hsl(230,83%,40%)");
      expect(red.toString()).toEqual("hsl(0,100%,50%)");
    });
  });

  describe("parse", function(){
    it("should return an HSL matching the css value", function(){
      expect(HSL.parse("hsl(230,83%,40%)")).toEqual(blue);
      expect(HSL.parse("hsl(230,83%,40%)")).not.toEqual(red);
    });
  });

  describe("toXYCoordinates", function(){
    it("should return x and y values between -1 and 1", function(){
      expect(blue.toXYCoordinates().x).toBeCloseTo(-0.53351, 3);
      expect(blue.toXYCoordinates().y).toBeCloseTo(-0.63581, 3);
      expect(red.toXYCoordinates().x).toBeCloseTo(1, 3);
      expect(red.toXYCoordinates().y).toBeCloseTo(0, 3);
    });
  });
});
