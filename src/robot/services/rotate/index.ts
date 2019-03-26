import { TCompassPoints, IRobotPosition } from "./../position";

type TDirection = "LEFT" | "RIGHT";
const DIRECTIONAL_MAP: Array<TCompassPoints> = [
  "NORTH",
  "EAST",
  "SOUTH",
  "WEST"
];

const getTurn = (direction: TDirection): number =>
  direction === "LEFT" ? -1 : 1;

const getNewIndexPosition = (
  currentPosition: TCompassPoints,
  direction: TDirection
): number => DIRECTIONAL_MAP.indexOf(currentPosition) + getTurn(direction);

const determineOutOfBoundsFacing = (newIndexPosition: number): TCompassPoints =>
  newIndexPosition < 0
    ? DIRECTIONAL_MAP[DIRECTIONAL_MAP.length - 1]
    : DIRECTIONAL_MAP[0];

export const newFacingDirection = (
  direction: TDirection,
  currentPosition: IRobotPosition
): IRobotPosition => {
  const newIndexPosition = getNewIndexPosition(
    currentPosition.facing,
    direction
  );

  const nowFacing =
    typeof DIRECTIONAL_MAP[newIndexPosition] !== "undefined"
      ? DIRECTIONAL_MAP[newIndexPosition]
      : determineOutOfBoundsFacing(newIndexPosition);

  return { ...currentPosition, facing: nowFacing };
};
