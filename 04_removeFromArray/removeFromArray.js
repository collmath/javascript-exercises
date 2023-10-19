const removeFromArray = function(array, args) {
    let argCopy = Array.from(arguments);
    let resultArray = argCopy[0]
    argCopy.slice(1).forEach(element => {
        resultArray = resultArray.filter((item) => item !== element);
    });
    return resultArray
};

// Do not edit below this line
module.exports = removeFromArray;
