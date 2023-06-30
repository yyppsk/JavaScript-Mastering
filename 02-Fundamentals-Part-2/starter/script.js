//32. Activating Strict Mode
"use strict";
/*

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} applea and ${oranges} oranges.`;
  return juice;
}
console.log(fruitProcessor(5, 2));
 

//Function Declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(1999);
console.log(age1);
//Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1999);
console.log(age2);


const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearUntilRetirement(1999, "Jonas"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}
console.log(fruitProcessor(5, 2));

//function decaration
function calcAge(birthYear) {
  return 2037 - birthYear;
}
//expression
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

//arrow
const calcAge = (birthYear) => 2037 - birthYear;

// 39. Introduction to Arrays

const friends = ["Michael", "Steve", "Peter"];
console.log(friends);
const year = new Array(1991, 1992, 1993);
friends[2] = "Jay";
console.log(friends);

const lenReturned = friends.push("Peter"); //Returns length too
console.log(friends);
friends.unshift("John");
console.log(friends);
//Remove stuff use pop and returns popped element
const popped = friends.pop();
friends.shift(); //first removal and catch
console.log("Popped Stuff " + popped);
console.log(friends);
console.log(friends.indexOf("Steve"));
//ES6 Method
console.log(friends.includes("Bob"));
if (friends.includes("Jay")) {
  console.log("You have a Jay");
}

//42. Introduction to Objects
const peterArray = [
  "Peter",
  "Parker",
  2037 - 1991,
  "teacher",
  ["Mary Jane", "Harry Osbborn"],
];
//object literal syntax
const peter = {
  firstName: "Peter",
  lastName: "Parker",
  job: "SpiderMan",
  friends: ["Mary Jane", "Harry Osbborn"],
};
console.log(peter);
//43. Dot vs Bracket Notation
console.log(peter.firstName);
console.log(peter["job"]); //add any operation or expression too
const nameKey = "Name";
console.log(peter["first" + nameKey]); //any expression

const interestedIn = prompt("Choose between firstName, lastName, job");
console.log(peter.interestedIn); //undefined by .
if (peter[interestedIn]) {
  console.log(peter[interestedIn]);
} else {
  console.log("Wrong request!");
}
peter.location = "Queens, NY";
peter["Team"] = "Avengers";
console.log(peter);
//challange
console.log(
  `${peter["firstName"]} has ${peter["friends"].length} friends and his best friend is called ${peter.friends[1]}`
);

const peter = {
  firstName: "Peter",
  lastName: "Parker",
  birthYear: 1991,
  job: "SpiderMan",
  friends: ["Mary Jane", "Harry Osbborn"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   //method
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, he is an avenger${
      this.hasDriversLicense
        ? " and has a driver's license."
        : " and doesn't have a driver's license."
    }`;
  },
};
console.log(peter.calcAge());
console.log(peter.age);

//challange summary
//"Peter is a age year spiderman and he is an avenger, and has a driver's license";
console.log(peter.getSummary());

//46. Iteration: The for Loop


for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights rep ${rep} 🏋️‍♀️🏋️‍♂️`);
}

//47. Looping Arrays, Breaking and Continuing

const peter = [
  "Peter",
  "Parker",
  2037 - 1991,
  "Spiderman",
  ["Mary Jane", "Harry Osbborn"],
  true,
];
const types = [];

for (let i = 0; i < peter.length; i++) {
  //types[i] = typeof peter[i];
  types.push(typeof peter[i]);
}
console.log("---Only Strings---");
for (let i = 0; i < peter.length; i++) {
  if (typeof peter[i] != "string") continue;
  console.log(peter[i]);
}
*/
//48. Nested for loops
//49. The While loop
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolle a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
