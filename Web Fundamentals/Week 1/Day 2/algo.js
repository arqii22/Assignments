/**
 * Concatenate three given strings together in this order:
 * 3rd string, 1st string, 2nd string.
 * @returns {string} The three given strings combined (concatenated).
 */
 function combineStrings(/* Replace this comment with the needed parameters. What info does this function need? */) {
    // Replace this comment with the code needed to make this function work.
 }

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(string1, string2){
if (string1.length>string2.length){
    return string2+string1;
}
else if (string2.length>string1.length){
    return string1+string2;
}
}
combineSmallerStringFirst ('phone call','coffeebeans');

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @param {string} text The given string to be repeated.
 * @param {number} num The number of times to repeat the given string.
 * @returns {string} The given string repeated the specified amount of times.
 */
 function stringRepeat( text, num ) {

 }

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);


function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];

    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); 
    }
      
    console.log("the total is: " + sum);
      
  }
      
  getTotal([1, 3, 5]);
  