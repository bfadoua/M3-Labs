/* 1. Type Coercion */

console.log("" + 1 + 0);
console.log(typeof("" + 1 + 0));

console.log(true + false);
console.log(typeof(true + false));

console.log(6 / "3");
console.log(typeof(6 / "3"));

console.log(4 + 5 + "px");
console.log(typeof(4 + 5 + "px"));

console.log("$" + 4 + 5);
console.log(typeof("$" + 4 + 5));

console.log("4" - 2);
console.log(typeof("4" - 2));

console.log("4px" - 2);
console.log(typeof("4px" - 2));

console.log("  -9  " + 5);
console.log(typeof("  -9  " + 5));

console.log("  -9  " - 5);
console.log(typeof("  -9  " - 5));

console.log(null + 1);
console.log(typeof(null + 1));

console.log(undefined + 1);
console.log(typeof(undefined + 1));

console.log(" \t \n" - 2);
console.log(typeof(" \t \n" - 2));

console.log(undefined == null);
console.log(typeof(undefined == null));

console.log(undefined === null); 
console.log(typeof(undefined === null));

// 2. String vs. Number Operations 

let three = "3";
let four = "4";
let thirty = "30";

let addition = three + four; 
let multiplication = three * four;
let division = three / four;
let subtraction = parseInt(three) - parseInt(four);
let lessThan1 = three < four;
let lessThan2 = thirty < four;   // I am getting true because the strings are being compared 3 is less than 4. To get false 
                                 // I should convert thirty and forty to integers 

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2); 

// 3. Truthy and Falsy Values. 

if (0) {
  console.log("#1: zero is true"); // false - not logged
}

if ("0") {
  console.log("#2: zero string is true"); // true
}

if (null) {
  console.log("#3: null is true"); // false - not logged 
}

if (-1) {
  console.log("#4: negative is true"); // true
}

if (1) {
  console.log("#5: positive is true"); // true
} 

// 4. The Ternary Operator

// += anything that comes after the equal sign will be added to the left side  of it 

let a = 2,
    b = 3;
let result = ( (a + b) < 10  ? "less than 10" : "greater than 10");
console.log((a + b) + " "  + result); 
 
// 5. Function Syntax

function getGreeting(name) {
  return `Hello, ${name}!`;
};
const getGreetingExpression =  function (name) {
    return `Hello, ${name}`;
};

const getGreetingArrow = name => `Hello, ${name}`;

// 6. Objects and `this`

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName:  "Jones",
  greeting(person) {
    let greeting = `Hello, ${person.name}. My name is ${this.firstName} ${this.lastName}.`;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6 ? (console.log(greeting) ): console.log("Nice to meet you."),
}; 

// 7. Method Chaining

const basketballGame = {
  score: 0,
  
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log(`Halftime score is ${this.score}.`);
  },

  fullTime() {
    console.log(`FullTime score is ${this.score}`);
    return this;
  },

  // c) Add a method to increment fouls
  foul() {
    this.fouls += 1;
    return this;
  },

  halfTime() {
    console.log(`Half Time`);
    console.log(`Score: ${this.score} ${this.fouls}`);
    return this;
  },

  fullTime() {
    console.log(`Full Time`);
    console.log(`Final Score: ${this.totalScore} ${this.fouls}`);
    return this;
  },
}; 

// 8. Iterating Over Objects

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

for (let key in sydney){
    console.log(key + ":" + sydney[key]);
}

const rabat = {
  name: "Rabat",
  population: 515_619,
  state: "NSW",
  founded: "1150",
  timezone: "Rabat/Morocco",
};

for (let key in rabat){
    console.log(key + ":" + rabat[key]);
}

// 9. Primitives vs. Reference Types

let teamSports = ["Hockey", "Cricket", "Volleyball"];
// More sports
const moreSports = ['Taekwondo', 'Zumba', 'Diving'];
//const sports = teamSports.concat(moreSports);
const sports = [...teamSports, ...moreSports];
console.log(sports);

let dog1 = "Bingo";
console.log(dog1);
let dog2 = "Pluto";

let cat1 = { name: "Fluffy", breed: "Siberian" };
console.log(cat1);

let cat2 = { name: "Pepper" , breed: "Ragdoll"}; 

// 10. Constructor Functions vs. Classes

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

const person1 = new Person("Mickey", 80);
const person2 = new Person("Daisy", 75);

class personClass {
    constructor(name, age){
        this.name = "Minnie";
        this.age = 60;
    }
}
Person.prototype.canDrive = function() {
    return this.age > 16;
};