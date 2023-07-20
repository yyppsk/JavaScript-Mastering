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
