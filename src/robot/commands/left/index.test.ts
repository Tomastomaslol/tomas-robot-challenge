import * as subject from "./index";
import * as positionService from "./../../services/position/index";
import { IRobotPosition } from "./../../services/position/index";

const VALID_POSITION :IRobotPosition = { x: 1, y: 2, facing: "SOUTH" };

describe("Commands Left", () => {
  describe("Given no position has been set", () => {
    beforeEach(() => {
      jest.spyOn(positionService, 'getPosition').mockReturnValue({} as IRobotPosition);
      jest.spyOn(positionService, 'hasBeenGivenAPosition').mockReturnValue(false);
      jest.spyOn(positionService, 'setPosition');
    });

    it("does not try to set position", () => {
      subject.left();
      expect(positionService.setPosition).toHaveBeenCalledTimes(0);
    });
  });

  describe("Give a position has been set", () => {
    beforeEach(() => {
      jest.spyOn(positionService, 'getPosition').mockReturnValue(VALID_POSITION);
      jest.spyOn(positionService, 'setPosition');
      jest.spyOn(positionService, 'hasBeenGivenAPosition').mockReturnValue(true);
    });

    it("invokes set position when called", () => {
      subject.left();
      expect(positionService.setPosition).toHaveBeenCalledTimes(1);
    });
  });
});
