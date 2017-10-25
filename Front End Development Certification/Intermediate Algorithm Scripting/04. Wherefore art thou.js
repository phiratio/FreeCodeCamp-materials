/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

    For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
    let arr = [];
    let sourceKeys = Object.keys(source);

    collection.forEach(singleObject => {
        let flag = true;
        sourceKeys.forEach(singleKey => {
            if (source[singleKey] !== singleObject[singleKey]) {
                flag = false;
            }
        });
        if(flag) {arr.push(singleObject);}
    });
    console.log(arr);
    return arr;
}

function whatIsInANameV2(collection, source) {
    let sourceKeys = Object.keys(source);

    return collection.filter(singleObject => {
        return sourceKeys
            .map(singleKey => {
                return source[singleKey] === singleObject[singleKey]
            })
            .reduce((a, b) => {
                return a && b;
            })
    });
}

function whatIsInAName1(collection, source) {
    var srcKeys = Object.keys(source);
    return collection.filter(function (obj) {
        return srcKeys.every(function (key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}

function whatIsInAName2(collection, source) {
    var srcKeys = Object.keys(source);
    return collection.filter(function (obj) {
        return srcKeys
            .map(function(key) {
                return obj.hasOwnProperty(key) && obj[key] === source[key];
            })
            .reduce(function(a, b) {
                return a && b;
            });
    });
}

whatIsInANameV2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInANameV2([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });