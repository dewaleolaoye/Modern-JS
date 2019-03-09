// let num = 123.956;
// console.log(num.toFixed(2));

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.random(1));

// let random = Math.ceil(Math.random() * 6);
// console.log(random);

// let min = 10;
// let max = 20;
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + 10;
// console.log(randomNum);

// challenge area
// 1-5 - true, if correct and false if not correct

//
// console.log(makeGuess(4));

function makeGuess(number) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNum);
  //   if (number === randomNum) {
  //     console.log(randomNum);
  //     return true;
  //   } else {
  //     return false;
  //   }
  return number === randomNum;
}
console.log(makeGuess(2));
