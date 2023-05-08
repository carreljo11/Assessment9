function unroll(squareArray) {
    const square = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ];
  // Define the boundaries of the square array
  let top = 0;
  let bottom = squareArray.length - 1;
  let left = 0;
  let right = squareArray[0].length - 1;

  // Define the direction of traversal and initialize the current position
  let direction = "right";
  let row = 0;
  let col = 0;

  // Traverse the array in a spiral pattern
  while (top <= bottom && left <= right) {
    result.push(squareArray[row][col]);

    // Update the current position based on the current direction of traversal
    if (direction === "right") {
      if (col === right) {
        direction = "down";
        top++;
        row++;
      } else {
        col++;
      }
    } else if (direction === "down") {
      if (row === bottom) {
        direction = "left";
        right--;
        col--;
      } else {
        row++;
      }
    } else if (direction === "left") {
      if (col === left) {
        direction = "up";
        bottom--;
        row--;
      } else {
        col--;
      }
    } else if (direction === "up") {
      if (row === top) {
        direction = "right";
        left++;
        col++;
      } else {
        row--;
      }
    }

}
  return square;

}

module.exports = unroll;
