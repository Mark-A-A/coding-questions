# To Run
> node moveCar.js


## Question:
Starting with grid size, initial position, steps i.e. 
> `[3,4]`, `[3,2]`, `5`

Grid is initially all 0s. Given initial starting positon & initial direction right, move the marker based on number of steps.

## Iteration for Moving
1. rotate 90 degrees: clockwise, if on 0; counterclockwise if on 1
2. move 1 space forward
3. flip preceding space

Available markers :
* ">"
* "V"
* "<"
* "^"

### INITIAL STARTING POSITION
```
0 0 0 0
0 0 > 0
0 0 0 0
```

### #1
```
0 0 0 0
0 0 1 0
0 0 v 0
```

### #2
```
0 0 0 0
0 0 1 0
0 < 1 0
```

### #3
```
0 0 0 0
0 ^ 1 0
0 1 1 0
```

### #4
```
0 0 0 0
0 1 > 0
0 1 1 0
```

### #5
```
0 0 ^ 0
0 1 0 0
0 1 1 0
```


## My Solution
* Step 1: Initializing the grid based on rows and cols with zeroes
* Step 2: Set up initial marker position
* Step 3: Handle next position Value  
* Step 4: Handle prev position Value  
* Step 5: handle Marker Rotation with markers >,V,<,^ based on iteration number
* Step 6: Handle next position Marker Direction based on next cell value 
* Step 7: Handle setting marker on current position
* Step 8: Select next marker based direction and rotation
* Step 9 : Print Grid Matrix
* Step 10: Rinse, Repeat