export function getStoredFavorites() {
	let favorites = []
	const storedFavorites = localStorage.getItem("favorites")

	if (storedFavorites) {
		const parsed = JSON.parse(storedFavorites)
		favorites = parsed
	} 
	// else {
	// 	document.querySelector('.cart').innerHTML = `
	// 	<h2 class="cart_alert">Your cart is empty!</h2>`
	// }

	return favorites
}
