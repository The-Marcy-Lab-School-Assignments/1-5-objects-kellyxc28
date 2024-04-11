const coolGreeting = (person) => {
    if (person.isCool === true) {
      return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
    }
    else {
      return `Greetings ${person.name}, how have you been lately?`;
    }
};

const haveBirthday = (person) => {
    const {name, age} = person;   // similar to destructuring arrays 
    person.age += 1;  // access age, add one to it, and update the value of age with it 
};

const becomeSecretAgent = (person, spyHandle) => {
    delete person.name; 
    person.spyHandle = spyHandle; 
};

const carMaker = () => {
};

const weAreNotFriends = () => {
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
