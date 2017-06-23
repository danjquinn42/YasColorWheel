const Degree = require("../scripts/math/degrees.js");
const DegreeEquality = function(first, second) {
  if(typeof first === "Degree" && typeof second === "Degree") {
    return first.equals(second);
  }
};

describe("Degree", function() {

  beforeEach(function() {
    degreeEighty = new Degree(80);
    degreeThreeHundred = new Degree(300);
  });

  it("should set the modulo of numbers over 360", function() {
    expect(new Degree(370)).toEqual(new Degree(10));
  });

  it("should set the modulo of negative numbers", function() {
    expect(new Degree(-60)).toEqual(degreeThreeHundred);
  });

  describe("toRadians", function() {
    it("should return a Radians object of correct value", function() {
      expect(degreeEighty.toRadians().value).toBeCloseTo(1.39626, 3);
    });
  });

  describe("minus", function() {
    it("should return the difference of two degrees objects", function() {
      expect(degreeThreeHundred.minus(degreeEighty)).toEqual(new Degree(220))
    });
  });

  describe("negated", function() {
    it("should be 180˚ differnet from the original value", function(){
      expect(degreeEighty.negated())
        .toEqual((new Degree(360)).minus(degreeEighty));
    });
  });

  describe("toString", function() {
    it("should return a stringified degree with ˚ notation", function(){
      expect(degreeEighty.toString()).toEqual("80˚");
    });
  });
});
