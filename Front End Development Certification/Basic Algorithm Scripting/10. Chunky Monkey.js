/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

//jshint esversion:6
function chunkArrayInGroups(arr, size) {
    let answer = [];
    for(let i = 0; i < arr.length; i += size){
        answer.push(arr.slice(i,i+size));
    }
    return answer;
}

chunkArrayInGroups(["a", "b", "c", "d"], 3);