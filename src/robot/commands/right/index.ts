import { getPosition, hasBeenGivenAPosition, setPosition } from "./../../services/position/";
import { newFacingDirection } from "./../../services/rotate/";

export const right = () => {
  const position = getPosition();
  if (hasBeenGivenAPosition()) {
    const newPosition = newFacingDirection("RIGHT", position);
    setPosition(newPosition);
  } else {
    console.warn("Robot has to placed before its moved");
  }
};
