let form = document.querySelector('form');
let letsCookButton = document.querySelector('.lets-cook');
let cookpot = document.querySelector('.cookpot');
let suggestionHeader = document.querySelector('#suggestion');
let dinnerSuggestion = document.querySelector('.dinner-suggestion');
let clearButton = document.querySelector(".clear-btn");

let sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"
];

let mains = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza"
];

let desserts = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs"
];
form.addEventListener('submit', function(e) {
  let radioValue = new FormData(form);
  let selectedOption = '';
  for (const entry of radioValue) {
    selectedOption = entry[1];
  };
  if (selectedOption !== '') {
    clearButton.removeAttribute('id', "hide-button");
  }
  e.preventDefault();
  displaySuggestedDish(selectedOption);
});
clearButton.addEventListener('click', function clearMealSuggestion() {
  dinnerSuggestion.innerText = '';
  suggestionHeader.style.display = 'none';
  cookpot.style.display = "initial";
  clearButton.setAttribute('id', "hide-button");
});

function randomSide() {
  let sideItem = Math.floor(Math.random()*sides.length);
  return sides[sideItem];
};
function randomDessert() {
  let dessertItem = Math.floor(Math.random()*desserts.length);
  return desserts[dessertItem];
};
function randomMainDish() {
  let mainDishItem = Math.floor(Math.random()*mains.length);
  return mains[mainDishItem];
};
function randomEntireMeal() {
  let side = randomSide();
  let main = randomMainDish();
  let dessert = randomDessert();
  let entireMeal = `${main} with a side of ${side} and ${dessert} for dessert!`
  return entireMeal;
};
function displaySuggestedDish(selectedOption) {
  cookpot.style.display = 'none';
  suggestionHeader.style.display = 'inherit';

  if (selectedOption === 'side') {
    dinnerSuggestion.innerText = randomSide();
  } else if (selectedOption === 'main-dish') {
    dinnerSuggestion.innerText = randomMainDish();
  } else if (selectedOption === 'dessert') {
    dinnerSuggestion.innerText = randomDessert();
  } else {
    dinnerSuggestion.innerText = randomEntireMeal();
  };
};
