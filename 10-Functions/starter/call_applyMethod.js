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

lufthansa.book(239, 'Jonas Schmedatmann');
lufthansa.book(635, 'John');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
//Does not work
//book(23,'sarah')
book.call(eurowings, 23, 'Sarah'); //Using bind keyword
console.log(eurowings);

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Marry Cooper');
//Apply method
const flightData = [583, 'george cooper'];
//book.apply(swiss, flightData);
book.call(swiss, ...flightData);
