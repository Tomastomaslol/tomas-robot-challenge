import * as subject from "./index";
import { IRobotPosition } from "./index";
const VALID_POSITION_COMMAND :IRobotPosition = { x: 5, y: 5, facing: "SOUTH" };
const INVALID_Y_POSITION_COMMAND :IRobotPosition = { x: 1, y: 55, facing: "SOUTH" };
const INVALID_X_POSITION_COMMAND :IRobotPosition = { x: -1, y: 3, facing: "SOUTH" };

describe("Position Service", () => {

  describe("getPosition", () => {

    it("returns an empty object when no robot position is set", () => {
      expect(subject.getPosition()).toEqual({});
    });

    it("returns the position if a position has been set", () => {
      subject.setPosition(VALID_POSITION_COMMAND);
      expect(subject.getPosition()).toEqual(VALID_POSITION_COMMAND);
    });
  });

  describe("setPosition", () => {

    it("accepts a valid position", () => {
      expect(subject.setPosition(VALID_POSITION_COMMAND)).toEqual(true);
    });

    it("rejects an invalid Y position", () => {
      expect(subject.setPosition(INVALID_Y_POSITION_COMMAND)).toEqual(false);
    });

    it("rejects an invalid X position", () => {
      expect(subject.setPosition(INVALID_X_POSITION_COMMAND)).toEqual(false);
    });
  });
});
