'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log('B737', [0]);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); //End - Beggining

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are the middle seats
  if (seat.slice(-1) === 'E' || seat.slice(-1) === 'B') {
    console.log('Middle Seat');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//working with cases

console.log(airline.toLowerCase());

//fix passenger name
const passenger = 'jOnAS';
const passengerLow = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLow.slice(1);
console.log(passengerLow);
console.log(passengerCorrect);

//comparing mails
const loginEmail = 'Hello@Jonas.IO';
const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);

const textReplace = '989,244';
console.log(textReplace.replace(',', '.'));

//RegEX
const announcement =
  'All passengers come to the boarding door 23. Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('New');
}

//practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('NOT ALLOWED!!');
  else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Sock and camera');
checkBaggage('Got some snacks and a gun for protection');

//Join and split stuff

console.log('a+very+nice+string'.split('+'));
console.log('Pranjal Singh'.split(' '));
const [firstName, lastName] = 'Pranjal Singh'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];
  for (const n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameUpper.join(' '));
  //namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
};

capitalizeName('pranjal pratap singh');
capitalizeName('jessica jones');
capitalizeName('robert downy jr.');

//padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));

//credit card example
const maskCreditCard = function (number) {
  const str = number + ''; //number of one operands of + sign is a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4337875491288));
console.log(maskCreditCard('333535888199'));

//Repeat method

const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));
