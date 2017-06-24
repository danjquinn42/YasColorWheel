const HSL = require("../scripts/color/hsl.js");

describe("HSL", function() {
  beforeEach(function() {
    const blue = new HSL(230, 83, 40);
  });

  describe("toString", function(){
    it("should return css formatted color value", function(){
      expect(blue.toString()).toEqual("hsl(230,83%,40%)")
    });
  });
});

// const Degrees = require("../scripts/math/degrees.js");
// const DegreesEquality = function(first, second) {
//   if(typeof first === "Degrees" && typeof second === "Degrees") {
//     return first.equals(second);
//   }
// };
//
// describe("Degrees", function() {
//
//   beforeEach(function() {
//     degreeEighty = new Degrees(80);
//     degreeThreeHundred = new Degrees(300);
//   });
//
//   it("should set the modulo of numbers over 360", function() {
//     expect(new Degrees(370)).toEqual(new Degrees(10));
//   });
//
//   it("should set the modulo of negative numbers", function() {
//     expect(new Degrees(-60)).toEqual(degreeThreeHundred);
//   });
//
//   describe("toRadians", function() {
//     it("should return a Radians object of correct value", function() {
//       expect(degreeEighty.toRadians().value).toBeCloseTo(1.39626, 3);
//     });
//   });
//
//   describe("minus", function() {
//     it("should return the difference of two degrees objects", function() {
//       expect(degreeThreeHundred.minus(degreeEighty)).toEqual(new Degrees(220))
//     });
//   });
//
//   describe("negated", function() {
//     it("should be 180˚ differnet from the original value", function(){
//       expect(degreeEighty.negated())
//         .toEqual((new Degrees(360)).minus(degreeEighty));
//     });
//   });
//
//   describe("toString", function() {
//     it("should return a stringified degree with ˚ notation", function(){
//       expect(degreeEighty.toString()).toEqual("80˚");
//     });
//   });
// });
