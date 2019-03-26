

import { diff } from "deep-object-diff";
import { initializeRobotCommands, IRobotCommands } from "./robot/commands/initialize";


const compareOutcome = (
  scenario: string,
  expected: object,
  outcome: object
) => {
  if (Object.keys(diff(expected, outcome)).length === 0) {
    console.log(`%c ✓ ${scenario} Passed`, " color: #bada55");
  } else {
    console.warn(
      "FAILED ",
      scenario,
      "expected :",
      expected,
      "outcome :",
      outcome
    );
  }
};

initializeRobotCommands();

/*
Scenario 1

PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
*/

const EXPECTED_OUTCOME_SCENARIO_1 = { x: 0, y: 1, facing: "NORTH" };

window.robotCommands.place({ x: 0, y: 0, facing: "NORTH" });
window.robotCommands.move();
window.robotCommands.report();

compareOutcome("Scenario 1", EXPECTED_OUTCOME_SCENARIO_1, window.robotCommands.report());

/*
Scenario 2

PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST
*/

const EXPECTED_OUTCOME_SCENARIO_2 = { x: 0, y: 0, facing: "WEST" };

window.robotCommands.place({ x: 0, y: 0, facing: "NORTH" });
window.robotCommands.left();
window.robotCommands.report();

compareOutcome("Scenario 2", EXPECTED_OUTCOME_SCENARIO_2, window.robotCommands.report());

/*
Scenario 3

PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
*/

const EXPECTED_OUTCOME_SCENARIO_3 = { x: 3, y: 3, facing: "NORTH" };

window.robotCommands.place({ x: 1, y: 2, facing: "EAST" });
window.robotCommands.move();
window.robotCommands.move();
window.robotCommands.left();
window.robotCommands.move();
window.robotCommands.report();

compareOutcome("Scenario 3", EXPECTED_OUTCOME_SCENARIO_3, window.robotCommands.report());
