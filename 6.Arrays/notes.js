const note = ["Note 1", "Note 2", "Note 3"];
// console.log(note[2]);
// console.log(note.length);
// console.log(note[note.length - 1]);

// console.log(note.pop());
// note.push("Adding a New Note");
// console.log(note.shift());
// console.log(note.unshift("Manipulating Arrays"));
// console.log(note.shift());
// note.splice(0, 3);
note[3] = "Note 4";
note.forEach(function(item, index) {
  console.log(index + " " + item);
});
