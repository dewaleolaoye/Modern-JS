let myBook = {
  title: "Maximize Destiny",
  author: "David Oyedepo",
  pageCount: 220
};

let otherBook = {
  title: "E-Motions",
  author: "T.D. Jakes",
  pageCount: 260
};

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    PageCountSummary: `${book.title} has ${book.pageCount} pages`
  };
};

let bookSummary = getSummary(myBook);
let otherSummary = getSummary(otherBook);
// console.log(bookSummary.PageCountSummary);
// console.log(otherSummary.summary);

// challenge
let converter = function(fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celcius: (fahrenheit - 32) * (5 / 9)
  };
};

let result = converter(32);
console.log(result);
