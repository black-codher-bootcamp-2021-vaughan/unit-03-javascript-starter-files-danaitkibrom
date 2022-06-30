// ****************************************************TASK 1 - OBJECTS****************************************************

// console.log("hello how are you")

// function danaitFunction(){
//     const potatoes = 3;
//     return potatoes;
// }

const personA = {
    name: 'Danait',
    age: '23',
    location: 'Birmingham',
    likes: 'running',
};
const personB = {
    name: 'Latisha',
    age: '21',
    location: 'Walsall',
    likes: 'dancing',
};
const personC = {
    name: 'Aisha',
    age: '24',
    location: 'London',
    likes: 'singing',
};
const personD = {
    name: 'Holly',
    age: '19',
    location: 'Bristol',
    likes: 'writing',
};

function biography(person) {
    // Can be used this way too: >  const {name, age, likes, location} = person
    const name = person.name;
    const age = person.age;
    const location = person.location;
    const likes = person.likes;
    return (`Hi, my name is ${name}. I am ${age} years old, I live in ${location} and I like ${likes}.`);
 }


console.log(biography(personA))
console.log(biography(personB))
console.log(biography(personC))
console.log(biography(personD))

// example console.log complete above

// example operators and false/true complete below

const age = 25
const minimumAge = 21

 const isOld = age >= minimumAge

 console.log('Are you old enough? ' + isOld)


// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***
// Homework task(Calculator):
// Create a calculator object that has 4 methods: add, subtract, multiply, and divide. Each method accepts two numbers and returns the result

// funtionAdd() {
//     const x = 6;
//     const y = 4;
// }

function whoIsOlder(person1, person2) {
    var age = person1.age > person2.age;
    var ageDifference = person1.age - person2.age;
    return "Is " + person1.name + " older than " + person2.name + "? " + age + "." + "   The difference of age is " + ageDifference + ".";

    console.log(whoIsOlder)personA, personC))
}


// const addition = x + y;

// console.log("Addition: x + y " + addition);

// const subtraction = x - y;

// console.log("Subtraction: x - y " + subtraction);

// const multiplication = x * y;

// console.log("multiplication: x * y " + multiplication);

// const division = x * y;

// console.log("Division: x + y " + division);










// ****************************************************TASK 3****************************************************















