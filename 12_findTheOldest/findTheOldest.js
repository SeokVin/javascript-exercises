const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        const oldestPersonAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson;
    });
};

const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
