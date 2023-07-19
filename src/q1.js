/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){

    if(typeof x !== 'number' || typeof y !=='number'){
        return -1;
    }
      [x, y] = [y, x];
    console.log("x =",x, "y=",y);
}

// Task 2: Add code here
    let x_input = 2;
    let y_input = 1;

swap(x_input,y_input)

    let x_input = "ab";
    let y_input = 1;

swap(x_input,y_input)

module.exports = swap;
