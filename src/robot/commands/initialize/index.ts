import { place } from "./../place";
import { move } from "./../move";
import { report } from "./../report";
import { left } from "./../left";
import { right } from "./../right";

import { IRobotPosition, resetPosition } from "./../../services/position";

export interface IRobotCommands {
  place: (robotPlacement: IRobotPosition) => boolean;
  report: () => IRobotPosition;
  move: () => void;
  left: () => void;
  right: () => void;
}

declare global {
  interface Window {
    robotCommands: IRobotCommands;
  }
}

export const initializeRobotCommands = () => {
  resetPosition();
  window.robotCommands = {
    place: place,
    move: move,
    report: report,
    left: left,
    right: right
  };
};
