import {
  getPosition,
  hasBeenGivenAPosition,
  setPosition
} from "./../../services/position/";
import { newFacingDirection } from "./../../services/rotate/";

export const left = () => {
  const position = getPosition();
  if (hasBeenGivenAPosition()) {
    const newPosition = newFacingDirection("LEFT", position);
    setPosition(newPosition);
  } else {
    console.warn("Robot has to placed before its rotated");
  }
};
