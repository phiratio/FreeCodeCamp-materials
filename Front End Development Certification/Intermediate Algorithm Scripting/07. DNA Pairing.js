// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// // //
// // //     Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// // //
// // //     Return the provided character as the first element in each array.
// // //
// // //     For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]


function pairElement(str) {
    return str.split("").map( el => {
        if(el == "G" || el == "C"){
            return (el == "G")? ["G", "C"]:["C", "G"];
        }
        return (el == "A")? ["A", "T"]:["T", "A"];
    });
}

function pairElement2(str) {
    // Return each strand as an array of two elements, the original and the pair.
    let paired = [];

    // Function to check with strand to pair.
    let search = function(char) {
        switch (char) {
            case 'A':
                paired.push(['A', 'T']);
                break;
            case 'T':
                paired.push(['T', 'A']);
                break;
            case 'C':
                paired.push(['C', 'G']);
                break;
            case 'G':
                paired.push(['G', 'C']);
                break;
        }
    };

    // Loops through the input and pair.
    for (let i = 0; i < str.length; i++) {
        search(str[i]);
    }console.log(pairElement("GCG"))}

function pairElement3(str) {
    //define a map object with all pair possibilities
    var map = {T:'A', A:'T', G:'C', C:'G'};
    //split str into a char Array
    strArr = str.split('');
    //replace each Array item with a 2d Array using map
    for (var i=0;i<strArr.length;i++){
        strArr[i]=[strArr[i], map[strArr[i]]];
    }
    return strArr;
}