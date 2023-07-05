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
