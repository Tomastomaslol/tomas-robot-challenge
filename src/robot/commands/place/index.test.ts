import * as subject from "./index";
import * as positionService from "./../../services/position/index";
import { IRobotPosition } from "./../../services/position/index";

const VALID_PLACE_COMMAND: IRobotPosition = { x: 1, y: 2, facing: "SOUTH" };

describe("place", () => {
  beforeEach(() => {
    jest.spyOn(positionService, "setPosition");
  });

  it("invokes set position when called", () => {
    subject.place(VALID_PLACE_COMMAND);
    expect(positionService.setPosition).toHaveBeenCalledTimes(1);
  });

  it("invokes set position when called", () => {
    subject.place(VALID_PLACE_COMMAND);
    expect(positionService.setPosition).toBeCalledWith(VALID_PLACE_COMMAND);
  });
});
