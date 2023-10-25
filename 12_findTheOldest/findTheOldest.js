const findTheOldest = function(people) {
    return people.reduce((first, next) => {
        if((next.yearOfDeath || new Date().getFullYear()) - next.yearOfBirth 
        > (first.yearOfDeath || new Date().getFullYear()) - first.yearOfBirth) {
            return next;
        };
        return first
    });
};

// Do not edit below this line
module.exports = findTheOldest;
