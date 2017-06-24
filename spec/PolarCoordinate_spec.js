const PolarCoordinates = require("../scripts/math/cartesiancoordinates.js");
const Radians = require("../scripts/math/radians.js");

describe("Polar Coodinates", function() {
  beforeEach(function() {
    angle = new Radians(4.01426)
    position = new PolarCoordinates(angle, .415)
  });

  describe("toCartesianCoordinates", function() {
    it("should return valid xy coordinates between -1 and 1", function() {
      expect(position.toCartesianCoordinates().x).toBeCloseTo(-0.533511, 2);
      expect(position.toCartesianCoordinates().y).toBeCloseTo(-0.63581, 2);
    });
  });
});
