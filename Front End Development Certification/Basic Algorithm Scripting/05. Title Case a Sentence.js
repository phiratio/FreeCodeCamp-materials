/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
    return str.toLowerCase().split(" ").map( el => {
        return el[0].toUpperCase() + el.slice(1);
    }).join(" ");
}

titleCase("I'm a little tea pot");