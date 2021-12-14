import { getStoredFavorites } from "./js/helpers.js";
import { renderAlbum } from "./js/album.js";

const favorites = getStoredFavorites()

favorites.forEach(album => renderAlbum(album))


// else {
//     document.querySelector('.cart').innerHTML = `
//     <h2 class="cart_alert">Your cart is empty!</h2>`
// }

