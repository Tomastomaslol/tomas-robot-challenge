;
import * as subject from "./index";
import { place } from "./../place";
import { move } from "./../move";
import { report } from "./../report";
import { left } from "./../left";
import { right } from "./../right";
import * as positionService from "./../../services/position/index";


describe("Commands initialize", () => {
    beforeEach(() => {
        jest.spyOn(positionService, "resetPosition");
        jest.spyOn(positionService, "resetPosition");
    });

    it('resets the robot position when called', () => {
        subject.initializeRobotCommands();
        expect(positionService.resetPosition).toHaveBeenCalledTimes(1);
    });

    it('adds function place to window robot commands', () => {
        subject.initializeRobotCommands();
        expect(window.robotCommands.place).toBe(place);
    });

    it('adds function move to window robot commands', () => {
        subject.initializeRobotCommands();
        expect(window.robotCommands.move).toBe(move);
    });

    it('adds function report to window robot commands', () => {
        subject.initializeRobotCommands();
        expect(window.robotCommands.report).toBe(report);
    });

    it('adds function left to window robot commands', () => {
        subject.initializeRobotCommands();
        expect(window.robotCommands.left).toBe(left);
    });

    it('adds function right to window robot commands', () => {
        subject.initializeRobotCommands();
        expect(window.robotCommands.right).toBe(right);
    });

});
