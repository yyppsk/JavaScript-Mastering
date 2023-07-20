'use strict';
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
};

//console.log(restaurant.openingHours?.open);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; //nullish coalescing
  console.log(open);
}
//methods if exist or not then call it
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//optional chaining works on array too
const users = [
  {
    name: 'jonas',
    email: 'stuff@gmail.com',
  },
];
console.log(users[0]?.name ?? 'User array empty');

//Traversing through object keys, values and entries
const properties = Object.keys(openingHours);
for (const day of properties) {
  console.log(day);
}
//same for values

for (const [i, { open, close }] of Object.entries(openingHours)) {
  console.log(`On the ${i} we open at ${open} and close at ${close}`);
}
