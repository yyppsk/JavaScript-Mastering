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
*/
