/*
Return the length of the longest word in the provided sentence.
    Your response should be a number.
*/

function findLongestWord(str) {
    let longest = str.split(" ").reduce( (a,b) => {
        return (a.length > b.length ? a : b);
    });

    return longest.length;
}

findLongestWord("Google do a barrel roll");