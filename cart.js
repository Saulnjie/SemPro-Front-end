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
