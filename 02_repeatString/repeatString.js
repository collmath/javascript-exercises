const repeatString = function(string, num) {
    let stringArray = [];
    if (num < 0) {
        return "ERROR";
        brake;
    }
    
    for (let index = 0; index < num; index++) {
        stringArray.push(string);
    }
    return stringArray.join('')


};

// Do not edit below this line
module.exports = repeatString;
