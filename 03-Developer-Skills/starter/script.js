// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== "number") continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
const tempuratures = [12, 14, "error", 24, 17, 36];
const amplitude = calcTempAmplitude(tempuratures);
console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degree celcius:")),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/
const printForecast = function (arr) {
  //to print
  //"... 17*C in 1 days ... 21*C in 2 days ... 23* C in 3 days ..."
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result = result + `${arr[i]}*C in ${i + 1} days ...`;
  }
  return result;
};
console.log("..." + printForecast([17, 21, 23]));
