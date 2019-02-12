let numRows = prompt("Enter number of rows desired.");
let board = "";
let size = 8;

for (let i = 0; i < numRows; i++){
  for (let x = 0; x < size; x++) {
    if ((x + i) % 2 == 0) board += " ";
    else board += "#";
  }
  board += "\n";
}

console.log(board);
