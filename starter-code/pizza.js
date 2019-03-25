// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};
const mushroomBtn = document.querySelector(".btn-mushrooms");
const greenPepperBtn = document.querySelector(".btn-green-peppers");
const sauceBtn = document.querySelector(".btn-sauce");
const crustBtn = document.querySelector(".btn-crust");
const allBtns = document.querySelectorAll(".controls button");
const finalCost = document.querySelector(".panel strong");

const allMushrooms = document.querySelectorAll(".mushroom");
const allGpeppers = document.querySelectorAll(".green-pepper");
const aLotOfSauce = document.querySelector(".sauce-white");
const crusty = document.querySelector(".crust");
const pricePanel = document.querySelector(".price ul");

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  pricePanel.innerHTML = "";
  finalCost.innerHTML = "";

  for (let item in state) {
    if (state[item]) {
      pricePanel.innerHTML += `<li>${ingredients[item].name} ${ingredients[item].price}</li>`;
      totalPrice += ingredients[item].price;
    }
  }

  finalCost.innerHTML = `$${totalPrice}`;
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  // renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  allMushrooms.forEach(function($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  allGpeppers.forEach(function($gpep) {
    if (state.greenPeppers) {
      $gpep.style.visibility = "visible";
    } else {
      $gpep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove text class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    aLotOfSauce.classList.add("sauce-white");
  } else {
    aLotOfSauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    crusty.classList.add("crust-gluten-free");
  } else {
    crusty.classList.remove("crust-gluten-free");
  }
}

// This loops over all buttons in controls and toggle active class
allBtns.forEach(button => {
  button.addEventListener("click", e => {
    e.target.classList.toggle("active");
  });
});

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
mushroomBtn.addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
greenPepperBtn.addEventListener("click", () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
sauceBtn.addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
crustBtn.addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
