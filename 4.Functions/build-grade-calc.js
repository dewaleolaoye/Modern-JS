// students score, total score
// 15/20 -> You got a C (75%)
// A 90-100 , B 80-89, C 70-79, D 60-69, E 0 - 59

// let gradeCalc = function(sScore, tScore) {
//   let percent = (sScore / tScore) * 100;
//   if (percent >= 90) {
//     return `You got a A (${percent}%)`;
//   } else if (percent >= 80) {
//     return `You got a B (${percent}%)`;
//   } else if (percent >= 70) {
//     return `You got a C (${percent}%)`;
//   } else if (percent >= 60) {
//     return `You got a D (${percent}%)`;
//   } else if (percent <= 59) {
//     return `You got a B (${percent}%)`;
//   } else {
//     console.log("values does not exist");
//   }
// };

// let result = gradeCalc(10, 20);
// console.log(result);

let gradeCalc = function(sScore, tScore) {
  let percent = (sScore / tScore) * 100;
  let letterGrade = "";

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return `You got a ${letterGrade} (${percent}%)`;
};
let result = gradeCalc(13, 20);
console.log(result);
