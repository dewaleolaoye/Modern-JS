let myAccount = {
  name: "Andrew Mead",
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount;
};

let addIncome = function(account, income) {
  account.income = account.income + income;
};

let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `${account.name}'s new balance is $${balance}. He earns $${
    account.income
  } and spent $${account.expenses} in expenses`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 20.5);

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
