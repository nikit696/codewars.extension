
function gridIndex(grid, indices) {
  let newGrid = [].concat.apply([], grid)
  return indices.reduce((acc, curr) =>{
    return acc + newGrid[curr - 1]
  }, "")
 }