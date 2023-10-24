const fibonacci = function(num) {
    if (num <= 0) {
        return "OOPS";
    }else if (num === 1) {
        return 1;
    }else{
        let results = [1,1]
        for (let index = 2; index < num; index++) {
            results.push((results[0] + results[1]));
            results.shift();
        };
        return results[1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
