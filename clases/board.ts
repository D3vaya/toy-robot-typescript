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

  print(): void {
    console.log(`
   _____ _____ _____ _____ _____
  | 0,0 | 0,1 | 0,2 | 0,3 | 0,4 |
    ----- ----  ----  ----- -----
  | 1,0 | 1,1 | 1,2 | 1,3 | 1,4 |
    ----- ----  ----  ----- -----
  | 2,0 | 2,1 | 2,2 | 2,3 | 2,4 |
    ----- ----  ----  ----- -----
  | 3,0 | 3,1 | 3,2 | 3,3 | 3,4 |
    ----- ----  ----  ----- -----
  | 4,0 | 4,1 | 4,2 | 4,3 | 4,4 |
    ----- ----  ----  ----- -----
    `);
  }

  // print2(): void {
  //   let pipe = "|";
  //   let guion = "____";
  //   for (let i = 0; i < this.height; i++) {
  //     for (let j = 0; j < this.width; j++) {
  //       pipe += `(${i}, ${j})`;
  //     }
  //   }
  // }
}

export default Board;
