const findTheOldest = function(people) {
  let current, oldest = people[0];
  for (let person of people) {
    current = person;
    let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

    if (currentAge > oldestAge) oldest = current;
  }
  return oldest.name;
};

function getAge(birth, death) { 
  if (!death) {
    return (new Date().getFullYear()) - birth;
  } else {
    return death - birth;
  };
};

// Do not edit below this line
module.exports = findTheOldest;
