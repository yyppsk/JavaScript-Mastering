'use strict';
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}
      flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ fight: `${this.iataCode}${this.flightNum}`, name });
  },
};
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
const bookEw = book.bind(eurowings);
bookEw(23, 'Jonas Sch.');
//further
const bookEw23 = book.bind(eurowings, 23);
bookEw23('Maria J.');

//With event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //vs call

const addTax = (rate, value) => value + value * rate;
//returns almost a new function from existing tax function
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const calcTax = function (value) {
  return function (rate) {
    return value + value * rate;
  };
};

const tax = calcTax(100);
console.log(tax(0.23));
