// write the function isAnagram
var isAnagram = function(test, original) {
    test = test.toLowerCase().split("").sort().join("")
    original = original.toLowerCase().split("").sort().join("")
    return test === original
};
console.log(isAnagram("Twoo", "WooT"))
