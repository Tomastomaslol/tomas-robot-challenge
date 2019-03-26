import {
  IRobotPosition,
  setPosition
} from "./../../services/position/index";

export const place = (robotPlacement: IRobotPosition) :boolean => (
  setPosition(robotPlacement)
);
