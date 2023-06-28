/*const bill = 275;
bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${
        bill + bill * 0.15
      }`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${
        bill + bill * 0.2
      }`
    );
    
*/
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
