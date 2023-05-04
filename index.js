const coffeeMenu = require("./coffee_data.js");


//Print an array of all the drinks on the menu.
const drinks = (item) => {
    return item.name;
}
console.table(coffeeMenu.map(drinks));

//Print an array of drinks that cost 5 and under
const underFive = (item) => {
    return item.price <= 5;
}
const drinksUnderFive = coffeeMenu.filter(underFive);
console.table(drinksUnderFive);


// 4. Print an array of drinks that are priced at an even number.
const evenNumber = (item) => {
    return item.price % 2 == 0;
}
const even = coffeeMenu.filter(evenNumber);
console.table(even);



// 5. Print the total if you were to order one of every drink.
const drinkPrice = (array) => {
    return array.price;
}
const priceArray = coffeeMenu.map(drinkPrice);

const total = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalPrice = priceArray.reduce(total);
console.table(totalPrice);

//const totalCost = coffeeMenu.reduce(
    //total, drinkObject) => total += drinkObject.price),
    //0
    //;
//)

// 6. Print an array with all the drinks that are seasonal.
const seasonalDrinks = (item) => {
    return item.seasonal === true;
}
const seasonal_ = coffeeMenu.filter(seasonalDrinks);
console.table(seasonal_);


// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const drinks_beans = coffeeMenu
.filter((drinkObject) => drinkObject.seasonal)
.map((drinkObject) =>{
    return drinkObject.name + " with imported beans";
});
console.table(drinks_beans);
