import Point from "./point";
import { Orientation } from "./robot";

class Board {
  height: number;
  width: number;

  constructor(height = 5, width = 5) {
    this.height = height;
    this.width = width;
  }

  generate(): void {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        // console.log(`${i}, ${j}`);
      }
    }
  }

  private generateLine(width: number): string {
    let close = "";
    const line = " _______";
    for (let i = 0; i < width; i++) {
      close += line;
    }
    return close;
  }

  print(
    position: Point,
    orintation: Orientation,
    visual: boolean = false
  ): void {
    let row = "";
    const line = this.generateLine(this.width);
    let aux = 0;
    const cutRow = Number(this.width - 1);
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (visual) {
          row +=
            i === position.x && j === position.y
              ? `|  🤖${this.oriantationRobot(orintation)}  `
              : `|       `;
        } else {
          row += `|  ${i}, ${j} `;
        }

        if (aux > 0 && aux % cutRow === 0) {
          row += `|  \n${line}\n`;
          aux = 0;
        } else {
          aux++;
        }
      }
    }
    console.log(`${line}\n${row}`);
  }
  private oriantationRobot(orientation: Orientation): String | undefined {
    const arrow: Map<string, String> = new Map();
    arrow.set("NORTH", "↑");
    arrow.set("SOUTH", "↓");
    arrow.set("EAST", "→");
    arrow.set("WEST", "←");
    return arrow.get(orientation);
  }
}
export default Board;
