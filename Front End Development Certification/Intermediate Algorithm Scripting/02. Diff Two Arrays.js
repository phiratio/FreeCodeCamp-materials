/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/


function diffArray(arr1, arr2) {
    let newArr = [];
    arr1.forEach( el => {
        if (arr2.indexOf(el) === -1) newArr.push(el)
    });
    arr2.forEach( el => {
        if(arr1.indexOf(el) === -1) newArr.push(el)
    });
    return newArr;
}

diffArray([1,2,3,5],[1,2,3,4,5]);

function diff(arr1, arr2) {
    let newArr = arr1.concat(arr2);

    function check(item) {
        if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
            return item;
        }
    }

    return newArr.filter(check);
}

function diffArray(arr1, arr2) {
    return arr1
        .filter(el => !arr2.includes(el))
        .concat(
            arr2.filter(el => !arr1.includes(el))
        )
}