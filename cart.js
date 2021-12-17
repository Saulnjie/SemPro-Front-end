import { getStoredFavorites } from "./js/helpers.js";
import { renderAlbum } from "./js/album.js";

const favorites = getStoredFavorites()

favorites.forEach(album => renderAlbum(album))

console.log(favorites)
let numOr0 = n => isNaN(n) ? 0 : n
let totalPrices = favorites
    .reduce((totalPrice, currentValue) => totalPrice += currentValue.Price, 0)

console.log(totalPrices)

document.querySelector(".actual_price_container")

const priceContainer = document.querySelector(".actual_price_container")
priceContainer.innerText = "$" + totalPrices