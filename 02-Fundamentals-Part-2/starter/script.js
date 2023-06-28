//32. Activating Strict Mode
"use strict";
/*
 */
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} applea and ${oranges} oranges.`;
  return juice;
}
console.log(fruitProcessor(5, 2));
