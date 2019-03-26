import {
  getPosition,
  hasBeenGivenAPosition,
  setPosition
} from "./../../services/position/";
import { getNextPosition } from "./../../services/move/";

export const move = () => {
  const position = getPosition();
  if (hasBeenGivenAPosition()) {
    const newPosition = getNextPosition(position);
    setPosition(newPosition);
  } else {
    console.warn("Robot has to placed before its moved");
  }
};
