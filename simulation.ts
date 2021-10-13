import Board from "./clases/board";
import { Orientation } from "./clases/robot";
import Robot from "./clases/robot";
import Point from "./clases/point";

const board = new Board();
board.generate();

const p = new Point(2, 2);
const robot = new Robot(p, Orientation.WEST);
// board.print();
robot.report();
robot.move();
robot.left();
robot.left();
robot.report();
robot.move();
robot.report();
