var cookie = document.querySelector('.cookie');
var cake = document.querySelector('.cake');
var icecream = document.querySelector('.icecream');
var brownie = document.querySelector('.brownie');
var messageSpace = document.querySelector('.message');

cookie.addEventListener('click', cookie_recipes);
cake.addEventListener('click', cake_recipes);
icecream.addEventListener('click', icecream_recipes);
brownie.addEventListener('click', brownie_recipes);


cookie_recipes = ["https://www.allrecipes.com/recipe/10281/chewy-chocolate-cookies-ii/", "https://mygluten-freekitchen.com/flourless-chocolate-mudslide-cookies-gluten-free-dairy-free/", "https://www.cookingclassy.com/white-chocolate-dipped-peppermint-chocolate-cookies/"];
cake_recipes = ["https://www.bonappetit.com/recipe/blackout-cake", "https://beyondfrosting.com/2019/01/17/chocolate-cake-recipe/", "https://www.foodnetwork.com/recipes/food-network-kitchen/chocolate-blackout-cake-recipe-2109975"];
icecream_recipes = ["https://glutenfreeonashoestring.com/easy-chocolate-mousse-gluten-free-ice-cream/", "http://www.goudalife.ca/2018/11/27/no-churn-peppermint-mocha-dark-chocolate-ice-cream/", "https://www.allrecipes.com/recipe/56803/very-chocolate-ice-cream/"];
brownie_recipes = ["https://celebratingsweets.com/peanut-butter-swirl-brownies/", "https://www.foodandwine.com/recipes/hazelnut-brown-butter-brownies", "https://tasty.co/recipe/ultimate-brownies"];

function cookie_recipes() {
  var num = Math.floor(Math.random() * cookie_recipes.length);
  var message = cookie_recipes[num];
  messageSpace.innerText = message;
}

function cake_recipes() {
  var num = Math.floor(Math.random() * cake_recipes.length);
  var message = cake_recipes[num];
  messageSpace.innerText = message;
}

function icecream_recipes() {
  var num = Math.floor(Math.random() * icecream_recipes.length);
  var message = icecream_recipes[num];
  messageSpace.innerText = message;
}

function brownie_recipes() {
  var num = Math.floor(Math.random() * brownie_recipes.length);
  var message = brownie_recipes[num];
  messageSpace.innerText = message;
}
