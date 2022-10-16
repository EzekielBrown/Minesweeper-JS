const minesweeper = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0]
]

// declare 'x' as the mine character
const mineChar = 'x'

// count all the 'mines' present in neighboring cells
// slice from the current row, ranging from the previous column (col-1) to the next (col+2)
// add the total number of 'mines' found via filtering to the running total
function neighborCount(playField, rowIndex, colIndex) {
  let minesFound = 0;

  playField.slice(Math.max(0, rowIndex-1), Math.min(rowIndex+2, playField.length+1)).forEach(i => {
      minesFound += i.slice(Math.max(0, colIndex-1), Math.min(i.length+1, colIndex+2)).filter(x => x === 1).length
      })
      return minesFound
}

// resolve the playField array
function resolveField(playField) {
  return playField.map((row, rowIndex) => {
    return row.map((item, colIndex) => {
      return item === 1 ? mineChar : neighborCount(playField, rowIndex, colIndex)
    })
  })
}

console.log(resolveField(minesweeper))