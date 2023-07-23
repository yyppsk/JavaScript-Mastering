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

const orderSet = new Set(['Pasta', 'Pasta', 'Risotto', 'Pizza', 'Pizza']);
console.log(orderSet);

console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread');
orderSet.delete('Pizza');
console.log(orderSet);
//set is used for checking if a value if exist or not // orderSet.clear();
for (const order of orderSet) {
  console.log(order);
}
//Remove the duplicates from the array

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const stuffUnique = [...new Set(staff)];
console.log(stuffUnique);

const rest = new Map();

rest.set('name', 'Classico');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'We are close');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('Open') && time < rest.get('close')));
//check if a map has a certain key
console.log(rest.has('categories'));
//rest.delete(2);
//slow operator is delete
const arr = [1, 2];
rest.set(arr, 'Test'); // it will not be retrieved directly this has different object memory
console.log(rest.get(arr));

const question = new Map([
  ['question', 'Best language in the world?'],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'Python'],
  [4, 'JavaScript'],
  ['correct', 4],
  [true, 'Correct 💦'],
  [false, 'Try again'],
]);
console.log(question);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
//already an existing object to Map

//iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
//console.log(question.get(question.get('correct') === answer));
//MAP TO ARRAY CONVERSION

console.log(...question);
console.log(...question.entries());
console.log([...question.values()]);
console.log([...question.keys()]);
