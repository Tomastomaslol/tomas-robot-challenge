import * as subject from "./index";

describe("Move Service", () => {
  describe("getPosition", () => {
    
    it("returns a new south position of given position when called facing south", () => {
      expect(subject.getNextPosition({ x: 1, y: 2, facing: "SOUTH" })).toEqual({
        x: 1,
        y: 1,
        facing: "SOUTH"
      });
    });

    it("returns a new north position of given position when called facing north", () => {
      expect(subject.getNextPosition({ x: 1, y: 2, facing: "NORTH" })).toEqual({
        x: 1,
        y: 3,
        facing: "NORTH"
      });
    });

    it("returns a new east position of given position when called facing east", () => {
      expect(subject.getNextPosition({ x: 1, y: 2, facing: "EAST" })).toEqual({
        x: 2,
        y: 2,
        facing: "EAST"
      });
    });

    it("returns a new east position of given position when called facing east", () => {
      expect(subject.getNextPosition({ x: 1, y: 2, facing: "WEST" })).toEqual({
        x: 0,
        y: 2,
        facing: "WEST"
      });
    });
  });
});
