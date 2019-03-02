// let square = function(num) {
//   let result = num * num;
//   console.log("Assigned Functions = " + result);
// };

// square(3);

// function square2(num) {
//   let result = num * num;
//   console.log(result);
// }
// square2(5);

// Challenge
// convert fahrenheit to celcius formula
// Tc = (Tf-32) * 5/9

// let converter = function(fahrenheit) {
//   let celcius = (fahrenheit - 32) * (5 / 9);
//   return celcius;
// };

// let firstResult = converter(32);
// let secondResult = converter(68);

// console.log(firstResult);
// console.log(secondResult);

function converter(fahrenheit) {
  let celcius = (fahrenheit - 32) * (5 / 9);
  return celcius;
}

let result = converter(32);
let result2 = converter(68);
console.log(result);
console.log(result2);
