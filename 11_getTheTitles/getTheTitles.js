const getTheTitles = function(books) {
    let results = []
    for (let key in Object.keys(books)) {
        results.push(books[key].title);
    };
    return results;
};

// Do not edit below this line
module.exports = getTheTitles;
