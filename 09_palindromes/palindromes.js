const palindromes = function (text) {
    return text.split(/[\s\W]*/).join("").toLowerCase()
     === text.split(/[\s\W]*/).reverse().join("").toLowerCase()
};

// Do not edit below this line
module.exports = palindromes;
