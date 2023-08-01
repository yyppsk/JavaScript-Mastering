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

//129. How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schme.',
  passport: 2732882484,
};
const checkIn = function (flightNum, passenger) {
  //changed flight number
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  //   if (passenger.passport === 2732882484) alert('Check i');
  //   else alert('Wrong Passport');
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`og : ${str}`);
  console.log(`Transformed : ${fn(str)}`);
  console.log(`og : ${fn.name}`);
};
transformer('Javascript is cool!', oneWord);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('hey');
greetHey('Pranjal');
greet('hello')('Jonas');

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
const greetHey2 = greet2;
greetHey2('hi')('ppsk');

var expect = function (val) {
  const obj1 = {
    toBe: function (val2) {
      return val === val2 ? true : 'Not Equal';
    },
    notToBe: function (val3) {
      return val3 !== val ? true : 'Equal';
    },
  };
  return obj1;
};
// expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"
console.log(expect(5).toBe(null));
let initial = 0;
var createCounter = function (init) {
  initial = init;
  const ans = {
    increment: function () {
      ++initial;
      return initial;
    },
    decrement: function () {
      --initial;
      return initial;
    },
    reset: function () {
      initial = init;
      return initial;
    },
  };
  return ans;
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset()); // 5
console.log(counter.decrement());

// counter.decrement(); // 4
//2635. Apply Transform Over Each Element in Array

// const fn = function plusone(n) {
//   return n + 1;
// };
// const fn3 = function plusI(n, i) {
//   return n + i;
// };
// const fn4 = function constant() {
//   return 42;
// };
var map = function (arr, fn) {
  const result = [];
  for (const [index, value] of arr.entries()) {
    result.push(fn(value, index));
  }
  if (fn.name === 'plusone') {
    for (let i = 0; i < arr.length; i++) {
      //console.log(fn(arr[i]));
      arr[i] = fn(arr[i]);
    }
    return arr;
  } else if (fn.name === 'constant') {
    for (let i = 0; i < arr.length; i++) {
      //console.log(fn(arr[i]));
      arr[i] = fn(arr[i], i);
    }
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      //console.log(fn(arr[i]));
      arr[i] = fn(arr[i], i);
    }
    return arr;
  }
};

console.log(
  map([-10, 0, 10], function plus10(n) {
    return n + 10;
  })
);
