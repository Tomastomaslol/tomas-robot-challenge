import { IRobotPosition } from "./../position";

export const getNextPosition = (position: IRobotPosition): IRobotPosition => {
  switch (position.facing) {
    case "SOUTH":
      return { ...position, y: position.y - 1 };
      break;
    case "NORTH":
      return { ...position, y: position.y + 1 };
      break;
    case "EAST":
      return { ...position, x: position.x + 1 };
      break;
    case "WEST":
      return { ...position, x: position.x - 1 };
      break;
    default:
      throw new Error("unexpected outcome while moving");
      break;
  }
};
