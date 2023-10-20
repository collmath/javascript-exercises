const sumAll = function(start, end) {
    if (typeof(start) !== 'number' || start < 0 || 
        end < 0 || typeof(end) !== 'number'){
        return 'ERROR';
    };
    let argCopy = Array.from(arguments).sort()
    let result = 0;
    for (let index = argCopy[0]; index <= argCopy[1]; index++){
    result += index};
    return result;
};


// Do not edit below this line
module.exports = sumAll;
