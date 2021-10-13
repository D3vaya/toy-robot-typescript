"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orientation = exports.Command = void 0;
var Command;
(function (Command) {
    Command["MOVE"] = "MOVE";
    Command["LEFT"] = "LEFT";
    Command["RIGHT"] = "RIGHT";
    Command["PLACE"] = "PLACE";
    Command["REPORT"] = "RREPORT";
})(Command = exports.Command || (exports.Command = {}));
var Orientation;
(function (Orientation) {
    Orientation["NORTH"] = "NORTH";
    Orientation["EAST"] = "EAST";
    Orientation["WEST"] = "WEST";
    Orientation["SOUTH"] = "SOUTH";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
var Robot = /** @class */ (function () {
    function Robot(initialPosition, orientation) {
        this.commands = [];
        this.position = initialPosition;
        this.orietation = orientation;
    }
    Robot.prototype.place = function (postion, orientation) {
        this.position = postion;
        this.orietation = orientation;
        this.commands.push(Command.PLACE);
    };
    Robot.prototype.move = function () {
        switch (this.orietation) {
            case "NORTH":
                this.position.x--;
                break;
            case "EAST":
                this.position.y++;
                break;
            case "WEST":
                this.position.y--;
                break;
            case "SOUTH":
                this.position.x++;
                break;
        }
    };
    Robot.prototype.left = function () {
        this.commands.push(Command.);
        switch (this.orietation) {
            case "NORTH":
                this.orietation = Orientation.WEST;
                break;
            case "EAST":
                this.orietation = Orientation.NORTH;
                break;
            case "WEST":
                this.orietation = Orientation.SOUTH;
                break;
            case "SOUTH":
                this.orietation = Orientation.EAST;
                break;
        }
    };
    Robot.prototype.right = function () {
        switch (this.orietation) {
            case "NORTH":
                this.orietation = Orientation.EAST;
                break;
            case "EAST":
                this.orietation = Orientation.SOUTH;
                break;
            case "WEST":
                this.orietation = Orientation.NORTH;
                break;
            case "SOUTH":
                this.orietation = Orientation.WEST;
                break;
        }
    };
    Robot.prototype.report = function () {
        console.log("(" + this.position.x + ", " + this.position.y + ", " + this.orietation + ")");
    };
    return Robot;
}());
exports.default = Robot;
