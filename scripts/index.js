const API_URL = '/coffee.json';
let coffeeOrderArray = [];

console.log(API_URL);

// Draw all the email addresses associated with the coffee orders to the page in a list
// fetch data from api url and return as object

fetch(API_URL)
.then (function(response) {
    return response.json();
})
.then (function(coffeeOrderData) { 
    coffeeOrderArray = coffeeOrderData;
    console.log(coffeeOrderArray)
})





