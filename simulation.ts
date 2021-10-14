import Board from "./clases/board";
import { Orientation } from "./clases/robot";
import Robot from "./clases/robot";
import Point from "./clases/point";

const board = new Board();
board.generate();

const p = new Point(0, 0);
const robot = new Robot(p, Orientation.SOUTH);
board.print(robot.position, robot.orietation);
robot.move();
robot.left();
robot.move();
robot.move();
robot.move();
robot.move();
robot.right();
robot.right();
robot.report();
board.print(robot.position, robot.orietation, true);
