'use strict';
// 128. Default Parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //es 6 ways
  //ES 5 way ugly way
  //numPassengers = numPassengers || 1; //falsy values results to true value
  //price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
//

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schme.',
  passport: 2732882484,
};
const checkIn = function (flightNum, passenger) {
  //changed flight number
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2732882484) alert('Check i');
  else alert('Wrong Passport');
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
