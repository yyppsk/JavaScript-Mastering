//32. Activating Strict Mode
"use strict";
/*

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} applea and ${oranges} oranges.`;
  return juice;
}
console.log(fruitProcessor(5, 2));
 */

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
