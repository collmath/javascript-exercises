const reverseString = function(input) {
let string = input.split('');
let reversedString = "";
for (let index = 1; index <= string.length; index++ ){
    reversedString += string.at(-(index))
}
return reversedString
};

// Do not edit below this line
module.exports = reverseString;
