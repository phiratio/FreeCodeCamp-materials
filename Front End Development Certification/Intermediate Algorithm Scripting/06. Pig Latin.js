/*
Translate the provided string to pig latin.
    Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
    If a word begins with a vowel you just add "way" to the end.
    Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let output = [];
    if(vowels.includes(str[0])){return str.concat('way')}

    str.split('').forEach( char => {
        if(vowels.includes(char)) {
            output.push(str.slice(str.indexOf(char)).concat(str.slice(0,str.indexOf(char))).concat('ay'));
        }
    });

    return output[0];
}

function translatePigLatin1(str) {
    // Create variables to be used
    var pigLatin = '';
    var regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str[0].match(regex)) {
        pigLatin = str + 'way';

    } else {

        // Find how many consonants before the first vowel.
        var vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }

    return pigLatin;
}

function translatePigLatin2(str) {
    function check(obj) {
        return ['a','i','u','e','o'].indexOf(str.charAt(obj)) === -1 ? check(obj + 1) : obj;
    }

    return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

function translatePigLatin3(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
    // convert array to string and concatenate "ay" at the end
    return strArr.join("")+"ay";
}


console.log(translatePigLatin2("cnnsonant"));