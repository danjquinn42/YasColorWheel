import Degrees from "../scripts/math/degrees.js";

const DegreesEquality = function (first, second) {
  if (typeof first === "Degrees" && typeof second === "Degrees") {
    return first.equals(second);
  }
};

describe("Degrees", function () {

  const degreeEighty = new Degrees(80);
  const degreeThreeHundred = new Degrees(300);

  it("should set the modulo of numbers over 360", function () {
    expect(new Degrees(370)).toEqual(new Degrees(10));
  });

  it("should set the modulo of negative numbers", function () {
    expect(new Degrees(-60)).toEqual(degreeThreeHundred);
  });

  describe("toRadians", function () {
    it("should return a Radians object of correct value", function () {
      expect(degreeEighty.toRadians().value).toBeCloseTo(1.39626, 3);
    });
  });

  describe("toString", function () {
    it("should return a stringified degree with ˚ notation", function () {
      expect(degreeEighty.toString()).toEqual("80˚");
    });
  });
});
