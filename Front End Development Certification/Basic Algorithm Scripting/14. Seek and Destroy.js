/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
*/

//jshint esversion:6
function destroyer(arr) {
    let args = Array.from(arguments).slice(1);
    return arr.filter( el => {
        return !args.includes(el);
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
