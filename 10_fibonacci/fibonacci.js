const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }else if (num === 0) {
        return 0;
    }else{
        let results = [0,1]
        for (let index = 1; index < num; index++) {
            results.push((results[0] + results[1]));
            results.shift();
        };
        return results[1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
