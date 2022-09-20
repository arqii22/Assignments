function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza={}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("detroit style", "spicy", "mozzarella", ["jalapenos", "onions", "olives"]);
var p4 = pizzaOven("thin crust", "alfredo", ["mozzarella, provolone"], ["spinach", "artichoke",]);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);