/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
// ingredients for each ingredient in the recipe and the number of pies baked

function bakePies(pieType, pieQuantity) {
  const recipe = recipes[pieType];

  for (let i = 0; i < pieQuantity; i++) {
    console.log(`Ingredients for ${pieType}: ${recipe.map(ingredient => ingredient.name).join(', ')}`);
    console.log(`Total pie's baked ${i + 1}!`);
  }
}
// Calculate the total cost of all the pies and print
function calculateCost(pieType, pieQuantity) {
  const recipe = recipes[pieType];
  const costOfPie = recipe.reduce((prev, current) => prev + current.cost, 0)
  const totalCost = costOfPie * pieQuantity;

  console.log(`Cost per pie: ${costOfPie}`);

  return totalCost;
}
// Print the total revenue calculated using the given profitMargin
function sellPies(pieQuantity, totalCost, profitMargin = 1.2) {
  const revenue = totalCost * profitMargin;
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  bakePies(pieType, pieQuantity);
  const totalCost = calculateCost(pieType, pieQuantity);
  sellPies(pieQuantity, totalCost, profitMargin);
}

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};
