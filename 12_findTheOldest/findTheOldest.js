const findTheOldest = function(people) {
    let currentOldestPerson;
    let currentOldestAge = 0;
    
    for (let personIndex = 0; personIndex < people.length; personIndex++) {
        let personChecking = people[personIndex];
        age = getAge(personChecking);

        if (age > currentOldestAge) {
            currentOldestPerson = people[personIndex];
            currentOldestAge = age;
        }
    }
    return currentOldestPerson;
};

function getAge(personChecking) {
        if (!personChecking.yearOfDeath) {
            // If no death date, use current date to find age
            const date = new Date();
            return date.getFullYear() - personChecking.yearOfBirth;
        } else {
            return personChecking.yearOfDeath - personChecking.yearOfBirth;
        }
}

// Do not edit below this line
module.exports = findTheOldest;
