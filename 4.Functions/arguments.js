// let add = function(a, b, c) {
//   return a + b + c;
// };

// let result = add(10, 1, -10);
// console.log(result);
// using default values
// Challenge

let getTip = function(total, tipPercent = 0.2) {
  return total * tipPercent;
};

let tip = getTip(100, 0.4);
console.log(tip + "%");
