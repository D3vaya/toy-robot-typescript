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
    Board.prototype.print = function () {
        console.log("\n   _____ _____ _____ _____ _____\n  | 0,0 | 0,1 | 0,2 | 0,3 | 0,4 |\n    ----- ----  ----  ----- -----\n  | 1,0 | 1,1 | 1,2 | 1,3 | 1,4 |\n    ----- ----  ----  ----- -----\n  | 2,0 | 2,1 | 2,2 | 2,3 | 2,4 |\n    ----- ----  ----  ----- -----\n  | 3,0 | 3,1 | 3,2 | 3,3 | 3,4 |\n    ----- ----  ----  ----- -----\n  | 4,0 | 4,1 | 4,2 | 4,3 | 4,4 |\n    ----- ----  ----  ----- -----\n    ");
    };
    return Board;
}());
exports.default = Board;
