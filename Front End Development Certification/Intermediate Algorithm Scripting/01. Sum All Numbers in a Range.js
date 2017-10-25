/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/


function sumAll(arr) {
   let sortedArr = arr.sort( (a, b) => {
       return a - b;
   });
   let filledArray = Array.from(new Array(sortedArr[1] - sortedArr[0] + 1)
       .keys())
       .map( el => {return el + sortedArr[0]})
       .reduce( (a, b) => { return a + b}, 0);
    return(filledArray);
}

console.log(sumAll([1,4]));
console.log(sumAll([5,10]));
console.log(sumAll([10,5]));