var x = 5;

function setX(newValue) {
    x = newValue;
}

console.log(x); // x = 5
setX(15); // go back up to function and set newValue as 15
console.log(x); // now x = 15



var x = 5

function addToX(amount) {
    return x + amount; // 5 + -10 = -5
    console.log("hello there");
}

console.log(x); // x = 5
var result = addToX(-10); // go back to function and input amount as -10
console.log(result); // -5
console.log(x); // x = 5



function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
