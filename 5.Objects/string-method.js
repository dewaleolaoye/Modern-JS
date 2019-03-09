// let name = " Adewale Olaoye ";
// console.log(name.length);
// console.log(name.toUpperCase());

// let password = "dewaleolaoye23afjadkdan";
// console.log(password.includes("love"));

// console.log(name.trim());

// Challenge
// isValid password
// length is more than 8 and it doesn't contain the word password

function isValidPassword(password) {
  return password.length > 8 && !password.includes("password");
}

console.log(isValidPassword("asdfp")); // false
console.log(isValidPassword("ade123@£sdsfs")); // true
console.log(isValidPassword("wewillbefinepassword")); // false
