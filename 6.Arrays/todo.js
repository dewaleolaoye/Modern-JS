const todos = [
  "Read the Bible",
  "Pray",
  "Study JS",
  "Read about IoT",
  "Andela Test"
];
// challenge
console.log(todos.splice(2, 1));
todos.push("I'm a Software Engineer");
console.log(todos);
todos.shift();
console.log(todos);
console.log(`You have ${todos.length} todos`);
// console.log("Todo:", todos[todos.length - 2]);
