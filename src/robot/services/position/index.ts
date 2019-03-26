import { getTableSize } from "./../../../table/index";

export type TCompassPoints = "SOUTH" | "NORTH" | "WEST" | "EAST";

export interface IRobotPosition {
  x: number;
  y: number;
  facing: TCompassPoints;
}


let currentRobotPosition: IRobotPosition = {} as IRobotPosition;

const invalidPositionX = (x: number): boolean =>
  !(x >= 0 && x <= getTableSize().x);

const invalidPositionY = (y: number): boolean =>
  !(y >= 0 && y <= getTableSize().y);

const validatePosition = (robotPlacement: IRobotPosition) => {
  const { x, y } = robotPlacement;
  return (!invalidPositionX(x) && !invalidPositionY(y)) ? true : false;
};

export const hasBeenGivenAPosition = () : boolean =>
  Object.getOwnPropertyNames(currentRobotPosition).length > 0;

export const getPosition = (): IRobotPosition => {
  return currentRobotPosition;
};

export const setPosition = (robotPosition: IRobotPosition) :boolean => {
  if (validatePosition(robotPosition)) {
    currentRobotPosition = robotPosition;
    return true;
  } else {
    console.error('The robot has not been given a new position. Current position is:', getPosition());
    return false;
  }
};
