class Board {
  height: number;
  width: number;

  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  create(): void {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        console.log(`${i}, ${j}`);
      }
    }
  }
}

const t = new Board(5, 5);
t.create();
