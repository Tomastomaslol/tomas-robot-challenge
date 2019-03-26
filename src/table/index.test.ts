import * as subject from "./index";

describe("getTableSize", () => {
  it("returns an x value of 5", () => {
    expect(subject.getTableSize().x).toBe(5);
  });
  it("returns an y value of 5", () => {
    expect(subject.getTableSize().y).toBe(5);
  });
});
