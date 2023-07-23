'use strict';

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
