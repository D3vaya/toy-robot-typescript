"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board = /** @class */ (function () {
    function Board(height, width) {
        if (height === void 0) { height = 5; }
        if (width === void 0) { width = 5; }
        this.height = height;
        this.width = width;
    }
    Board.prototype.generate = function () {
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                // console.log(`${i}, ${j}`);
            }
        }
    };
    Board.prototype.generateLine = function (width) {
        var close = "";
        var line = " _______";
        for (var i = 0; i < width; i++) {
            close += line;
        }
        return close;
    };
    Board.prototype.print = function (position, orintation, visual) {
        if (visual === void 0) { visual = false; }
        var row = "";
        var line = this.generateLine(this.width);
        var aux = 0;
        var cutRow = Number(this.width - 1);
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                if (visual) {
                    row +=
                        i === position.x && j === position.y
                            ? "|  \uD83E\uDD16" + this.oriantationRobot(orintation) + "  "
                            : "|       ";
                }
                else {
                    row += "|  " + i + ", " + j + " ";
                }
                if (aux > 0 && aux % cutRow === 0) {
                    row += "|  \n" + line + "\n";
                    aux = 0;
                }
                else {
                    aux++;
                }
            }
        }
        console.log(line + "\n" + row);
    };
    Board.prototype.oriantationRobot = function (orientation) {
        var arrow = new Map();
        arrow.set("NORTH", "↑");
        arrow.set("SOUTH", "↓");
        arrow.set("EAST", "→");
        arrow.set("WEST", "←");
        return arrow.get(orientation);
    };
    return Board;
}());
exports.default = Board;
