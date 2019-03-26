import * as subject from "./index";

describe("Rotate service", () => {
  it("faces east when turning left from south", () => {
    expect(
      subject.newFacingDirection("LEFT", { x: 0, y: 0, facing: "SOUTH" })
    ).toEqual({ facing: "EAST", x: 0, y: 0 });
  });

  it("faces west when turning right from south", () => {
    expect(
      subject.newFacingDirection("RIGHT", { x: 1, y: 3, facing: "SOUTH" })
    ).toEqual({ facing: "WEST", x: 1, y: 3 });
  });

  it("faces west when turning left from north", () => {
    expect(
      subject.newFacingDirection("LEFT", { x: 1, y: 3, facing: "NORTH" })
    ).toEqual({ x: 1, y: 3, facing: "WEST" });
  });

  it("faces north when turning left from north", () => {
    expect(
      subject.newFacingDirection("RIGHT", { x: 3, y: 4, facing: "WEST" })
    ).toEqual({ facing: "NORTH", x: 3, y: 4 });
  });
});
