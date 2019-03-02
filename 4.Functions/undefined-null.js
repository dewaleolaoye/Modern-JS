// undefined is use in JavaScript to represents abscence of a value
// undefined for variable
// let name;
// console.log(name);

let name = "wale";
if (name === undefined) {
  console.log("Please provide a name");
} else {
  console.log(name);
}

// undefined for function arguments
let square = function(num) {
  console.log(num);
};
square();
