'use strict';
//Scope chaining
//Level 1
/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  console.log(firstName);
  return age;
}
const firstName = 'Pranjal';
calcAge(1999);
*/

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    //age tries to find age varible in printAge -> CalcAge
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    //Block scoping
    if (birthYear >= 1991 && birthYear <= 1999) {
      var millenial = true;
      const firstName = 'Steven'; //Nearest variable finding
      const str = `Oh, You are a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str) not valid because of block scope of const
    console.log(millenial); //var variable are function scoped so can be accessed inside the function
    // add(2, 3); //block scoped only for strict mode
  }
  printAge();
  return age;
}
const firstName = 'Pranjal';
calcAge(1999);
//console.log(age) //Outer Scope, child scope can not be accessed here
//printAge(); //Nope, same with this

//Hoisting and TDZ with Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Pranjal';
// let job = 'Engineer';
// const year = 1991;

//Function Hoisting

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
//console.log(addArrow) -> Undefined
//like calling undefine(2,3)
function addDecl(a, b) {
  return a + b;
}
//TDZ
// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;
// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

console.log(undefined); //-> a false value, triggers next line
//declare all the functions first before using
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
//Example
function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 2;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

//console.log(this); Window object
const stuff = function (stuff) {
  console.log(2037 - stuff);
  console.log(this); //Regular function call is undefined in strict mode
};

stuff(2000);
//In the Arrow function
const stuffArrow = stuff => {
  console.log(2037 - stuff);
  console.log(this); //Arrow function call is Window in strict mode because it does not have its own this keyword, uses lexical stuff, window in this case
};

stuffArrow(2000);

const pranjal = {
  year: 1999,
  stuffAge: function () {
    console.log(this);
  },
};

pranjal.stuffAge();

const matilda = {
  year: 2027,
};
matilda.stuffAge = pranjal.stuffAge;
matilda.stuffAge(); //its own this stuff

const f = pranjal.stuffAge;
//if f(); then undefined this
