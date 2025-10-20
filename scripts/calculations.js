let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let expenseEntry of expenseEntries) {
  totalExpensesValue += expenseEntry[1];
  console.log(`${expenseEntry[0]} = ${expenseEntry[1]}`);
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  let totalExpensesValue = 0;
  for (let expenseEntry of expenseEntries) {
    totalExpensesValue += expenseEntry[1];
  }

  let averageExpense = totalExpensesValue / expenseEntries.length;
  return averageExpense;
}

function calculateBalance() {
  let balance = budgetValue - totalExpensesValue;
  return balance;
}

let balanceColor = "green";
budgetValue = 250;

function updateBalanceColor() {
  let balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(expense) {
  let expenseTotal = 0;
  for (let expenseEntry of expenseEntries) {
    if (expenseEntry[0] === expense) {
      expenseTotal += expenseEntry[1];
    }
  }
  return expenseTotal;
} // Me causó mucha confusión y honestamente pude crear esta función con apoyo de alumnos y la plataforma, pero sigo sin entender cómo "expenseEntry[0] === expense" funciona.
//Agradecería mucho retroalimentación y otra perspectiva sobre cómo es que funciona.

function calculateLargestCategory() {
  let categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let categoriesData = [];

  for (let category of categories) {
    let total = calculateCategoryExpenses(category);
    categoriesData.push([category, total]);

    let largestCategory = "";
    let largestExpense = 0;

    for (let categoryData of categoriesData) {
      let categoryTitle = categoryData[0];
      let categoryTotal = categoryData[1];

      if (categoryTotal > largestExpense) {
        largestExpense = categoryTotal;
        largestCategory = categoryTitle;
      }
    }

    return largestCategory;
  }
} //Es erróneo porque me pone el mayor gasto "Comida", cuando claramente no lo es, pero la verdad por más intentos, no veo mi error.

function addExpenseEntry(values) {
  totalExpensesValue += values[1];
  expenseEntries.push(values);
}
