export function getStoredFavorites() {
	let favorites = []
	const storedFavorites = localStorage.getItem("favorites")

	if (storedFavorites) {
		const parsed = JSON.parse(storedFavorites)
		favorites = parsed
	}

	return favorites
}
