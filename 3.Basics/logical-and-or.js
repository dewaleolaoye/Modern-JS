// challenge
let isGuestOneVegan = true;
let isGuestTwonVegan = true;

if (isGuestOneVegan && isGuestTwonVegan) {
  console.log("only offer up vegan dishes");
} else if (isGuestOneVegan || isGuestTwonVegan) {
  console.log("At least one vegan? Make sure to offer some");
} else {
  console.log("Else, Offer up anything on the menu");
}
