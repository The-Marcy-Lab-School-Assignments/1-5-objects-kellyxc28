/** FEEDBACK: Great job! You have all test cases passing! */
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

const listHobbies = (person) => {
    for (let i = 0; i < person.hobbies.length; i++) {
      console.log(`${person.name} likes ${person.hobbies[i]}.`);
    }
};

const getNextOpponent = (team) => {
    if (team.matches.length === 0) {
      return null;
    }
    return team.matches[0].teamName;
};

const listAllKeys = (object) => {
    return Object.keys(object);
};

const listAllValues = (object) => {
    return Object.values(object);
};

const convertToMatrix = (arr) => {
    const matrixArr = [];

    if (arr.length === 0) {
      return [];
    }

    // since the key names are the same for all entries, just take the ones from the first entry  
    const keys = Object.keys(arr[0]);
    matrixArr.push(keys);   // first array in matrix - the keys 

    for (let i = 0; i < arr.length; i++) {  // iterate through the entries 
        /* values (temporary array): holds the values of current entry being accessed, returns back to 
        an empty array at the start of next iteration */ 
        // Object.values() --> already returns values in an array format 
        let values = Object.values(arr[i]);
        
        // push these values into the matrix before starting all over for the next entry 
        matrixArr.push(values);
    }

    return matrixArr;
}

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
