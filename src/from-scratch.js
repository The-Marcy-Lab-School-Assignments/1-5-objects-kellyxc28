const coolGreeting = (person) => {
    if (person.isCool === true) {
      return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
    }
    else {
      return `Greetings ${person.name}, how have you been lately?`;
    }
};

const haveBirthday = (person) => {
    // const {name, age} = person;   // similar to destructuring arrays 
    person.age += 1;  // access age, add one to it, and update the value of age with it 
};

const becomeSecretAgent = (person, spyHandle) => {
    delete person.name; 
    person.spyHandle = spyHandle;
};

const carMaker = (name, maker, year) => {
    const car = {
      name: name,
      maker: maker,
      year: year,
    }
    car.needsOilChange = false;
    return car;
};

const weAreNotFriends = (person) => {
    const lastFriend = person.friends.pop();
    return lastFriend;
};

const listHobbies = () => {
};

const getNextOpponent = () => {
};

const listAllKeys = () => {
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
