import PolarCoordinates from "../scripts/math/polarcoordinates.js";
import Degrees from "../scripts/math/degrees.js";
import HSL from "../scripts/color/hsl.js";

describe("Polar Coodinates", function() {

  const angle = new Degrees(230);
  const position = new PolarCoordinates(angle, .83)

  describe("toCartesianCoordinates", function() {
    it("should return valid xy coordinates between -1 and 1", function() {
      expect(position.toCartesianCoordinates().x).toBeCloseTo(-0.533511, 2);
      expect(position.toCartesianCoordinates().y).toBeCloseTo(-0.63581, 2);
    });
  });
});
