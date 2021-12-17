import { getStoredFavorites } from "./js/helpers.js";
import { renderAlbum } from "./js/album.js";

const favorites = getStoredFavorites()

favorites.forEach(album => renderAlbum(album))

console.log(favorites)
let numOr0 = n => isNaN(n) ? 0 : n
let totalPrices = favorites
    .map(favorite => favorite.Price)
    .reduce((a, b) => numOr0(a) + numOr0(b))

console.log(totalPrices)

document.querySelector(".actual_price_container")

const priceResults =   document.createElement("reults")

priceResults.innerHTML = `
    <p>daddadadada<p>
    `;
    document.querySelector('.priceResults').appendChild(".actual_price_container")


    
// var total =  0
// $(favorites).each(function(index,item) {
//     total += item.price;
// });
// $("#result").html(total);


// else {
//     document.querySelector('.cart').innerHTML = `
//     <h2 class="cart_alert">Your cart is empty!</h2>`
// }

// Eksempel 1

// function calculatePrice((favorites) {
//     let y = favorites.Price.value;
//     let z = ${album.Price}.value;
//     let x = y + z;
//     document.getElementsByClassName(".total_price_container").innerHTML = +;
//   });


// Eksempel 1 forklart

// let i=2;  
// let j=3;  
// let k = Number(i) + Number(j);
// console.log(k);

// export const cartHTML = (array, domElm) => {
//     let tempPrice = 0;
//     let totalPrice = 0;
//     document.querySelector(domElm).innerHTML = '';
//     document.querySelector('.ammountContainer__total').innerHTML = '';
//     document.querySelector('.ammountContainer').innerHTML = '';
  
//     if (array.length === 0) {
//       alert('warning', 'Your cart is empty');
//       console.log('HELLO');
//     }


// Eksempel 2

// var data = [
//     { product_id: 34, product_name: "Coca-Cola", price: 0.7 },
//     { product_id: 24, product_name: "Shredded Beef Steak Wrap", price: 2.99 }
// ]

// var total =  0
// $(data).each(function(index,item) {
//     total += item.price;
// });
// $("#result").html(total);


// Eksempel 4 
// console.log(
//     ["hi", 1, 2, "frog"].reduce((a, b) => a + b)
//   )
  
//   let numOr0 = n => isNaN(n) ? 0 : n
  
//   console.log(
//     ["hi", 1, 2, "frog"].reduce((a, b) => 
//       numOr0(a) + numOr0(b))
//   )
