/*
Convert the given number into a roman numeral.
    All roman numerals answers should be provided in upper-case.
*/

function convertToRoman1(num) {
//                         0     1   2     3   4      5     6    7     8     9   10    11   12
    let decimalValue = [ 1000, 900, 500, 400, 100,   90,   50,  40,   10,   9,   5,     4,  1 ];
    let romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

    let romanized = '';

    for (let index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }

    return romanized;
};

function convertToRoman2(num) {
    let romans = ["I", "V", "X", "L", "C", "D", "M"],
        ints = [],
        romanNumber = [],
        numeral = "";
    while (num) {
        ints.push(num % 10);
        num = Math.floor(num/10);
    }
    for (var i=0; i<ints.length; i++){
        units(ints[i]);
    }
    function units(){
        numeral = romans[i*2];
        switch(ints[i]) {
            case 1:
                romanNumber.push(numeral);
                break;
            case 2:
                romanNumber.push(numeral.concat(numeral));
                break;
            case 3:
                romanNumber.push(numeral.concat(numeral).concat(numeral));
                break;
            case 4:
                romanNumber.push(numeral.concat(romans[(i*2)+1]));
                break;
            case 5:
                romanNumber.push(romans[(i*2)+1]);
                break;
            case 6:
                romanNumber.push(romans[(i*2)+1].concat(numeral));
                break;
            case 7:
                romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral));
                break;
            case 8:
                romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral));
                break;
            case 9:
                romanNumber.push(romans[i*2].concat(romans[(i*2)+2]));
        }
    }
    return romanNumber.reverse().join("").toString();
}

function convertToRoman3(num) {
    var romans = [
            // 10^i 10^i*5
            ["I", "V"], // 10^0
            ["X", "L"], // 10^1
            ["C", "D"], // 10^2
            ["M"]       // 10^3
        ],
        digits = num.toString()
            .split('')
            .reverse()
            .map(function(item, index) {
                return parseInt(item);
            }),
        numeral = "";

    // Loop through each digit, starting with the ones place
    for (var i=0; i<digits.length; i++) {
        // Make a Roman numeral that ignores 5-multiples and shortening rules
        numeral = romans[i][0].repeat(digits[i]) + numeral;
        // Check for a Roman numeral 5-multiple version
        if (romans[i][1]) {
            numeral = numeral
            // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
                .replace(romans[i][0].repeat(5), romans[i][1])
                // Shorten occurrences of 9 * 10^i
                .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0])
                // Shorten occurrences of 4 * 10^i
                .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
        }
    }

    return numeral;
}

convertToRoman1(321);