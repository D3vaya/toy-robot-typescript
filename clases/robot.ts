import Point from "./point";

export enum Command {
  MOVE = "MOVE",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  PLACE = "PLACE",
  REPORT = "RREPORT",
}
export enum Orientation {
  NORTH = "NORTH",
  EAST = "EAST",
  WEST = "WEST",
  SOUTH = "SOUTH",
}
class Robot {
  position: Point;
  orietation: Orientation;
  commands: Array<Command> = [];

  constructor(initialPosition: Point, orientation: Orientation) {
    this.position = initialPosition;
    this.orietation = orientation;
  }

  place(postion: Point, orientation: Orientation) {
    this.position = postion;
    this.orietation = orientation;
    this.commands.push(Command.PLACE);
  }

  move(): void {
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
    this.commands.push(Command.MOVE);
  }

  left(): void {
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
    this.commands.push(Command.LEFT);
  }

  right(): void {
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
    this.commands.push(Command.RIGHT);
  }

  report(): void {
    console.log(`(${this.position.x}, ${this.position.y}, ${this.orietation})`);
    this.commands.push(Command.REPORT);
  }
}

export default Robot;
