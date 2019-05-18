

function carGrid(rowsColsArr, initialPosition, steps){
  //for number of steps, drive car  and print matrix
  const markerPositionsDirections = {
    "down": {
      "marker": "V",
      "clockwise": "<",
      "counterclockwise": ">",
      "nextDirection": {
        "clockwise": "left",
        "counterclockwise": "right",
      },
    },
    "right":  {
      "marker": ">",
      "clockwise": "V",
      "counterclockwise": "^",
      "nextDirection": {
        "clockwise": "down",
        "counterclockwise": "up",
      }
    },
    "left":  {
      "marker": "<",
      "clockwise": "^",
      "counterclockwise": "V",
      "nextDirection": {
        "clockwise": "up",
        "counterclockwise": "down",
      },
    },
    "up":  {
      "marker": "^",
      "clockwise": ">",
      "counterclockwise": "<",
      "nextDirection": {
        "clockwise": "right",
        "counterclockwise": "left",
      }
    },
  }
  const [ row, col ]  = initialPosition
  
  const initialDirection = "right" //initially point right
  const firstMarker = markerPositionsDirections[initialDirection]
  
  let {
    grid,
    currentPosition,
    currentMarker,
    direction
  } = initGrid(
    rowsColsArr,
    [row-1, col-1],
    firstMarker,
    initialDirection
  )
 
  let [ row1, row2, row3] = grid
  console.log('..................')
  console.log(row1)
  console.log(row2)
  console.log(row3)
  console.log('..................')
  
  // Drive car with Steps
  for (let i = 1; i <= steps; i++){
    // [matrix, position, markerObj, direction]
    let {
      grid: newGrid, 
      currentPosition: newPosition,
      currentMarker: newMarker,
      direction: newDirection,
    } = moveCar(
      grid,
      markerPositionsDirections,
      currentPosition,
      direction  
      )
      
      
      let [row1, row2, row3] = newGrid
      console.log('..................')
      console.log(row1)
      console.log(row2)
      console.log(row3)
      console.log('..................')
      
      currentPosition = newPosition
      currentMarker = newMarker
      direction = newDirection
      
    }
  }

function moveCar(grid, markers, position, direction ) {

  const numRows = grid.length
  const numColumns = grid[0].length
  
  const [
    currentPositionRow,
    currentPositionColumn
  ] = position
  
  
  let nextRow = currentPositionRow
  let nextCol = currentPositionColumn

  // Incrementing or decrementing rows based on direction
  // turn if on grid boundary - WIP
  if (direction === "down" && currentPositionRow < numRows) {
    nextRow = currentPositionRow +  1

    
  } else if (direction === "up" && currentPositionRow > 0){
    nextRow = currentPositionRow - 1
  } else if (direction === "left" && currentPositionColumn < numColumns) {
    nextCol = currentPositionColumn - 1
    
  } else if (direction === "right" && currentPositionRow > 0){
    nextCol = currentPositionColumn + 1
  }
  
  let nextPosition = [nextRow ,nextCol]

  const nextValue = grid[nextRow][nextCol]
  
  let nextRotation = nextValue ? "counterclockwise" : "clockwise"

  let currentMarkerObj = markers[direction]

  const { marker: nextMarkerValue} = currentMarkerObj

  let nextDirection = currentMarkerObj.nextDirection[nextRotation]

  const nextMarker = markers[nextDirection]

  
  //determine next position
  //Determine Direction based on next position
  grid[currentPositionRow][currentPositionColumn] = 1
  grid[nextRow][nextCol] = nextMarkerValue

  return {
    grid,
    currentPosition: nextPosition,
    currentMarker: nextMarker,
    direction: nextDirection
  }
}

function initGrid( [rows, cols], position, markerObj, direction ){
  let matrix = [] //set up empty matrix
   //starting dir RIGHT
  let [startingRow, startingCol] = position
  

  for (let i = 0; i < rows; i++) {
    let row = []

    for (let j = 0; j < cols; j++) {

      if (i === startingRow && j === startingCol) {
        
        row.push(markerObj.marker)
      } else {
        row.push(0)
      }
    }
    matrix.push(row)
  }  
  return { 
    grid: matrix,
    currentPosition: [startingRow, startingCol],
    currentMarker: markerObj,
    direction: markerObj.nextDirection.clockwise
  }
}

carGrid([3,4],[2,3], 5)