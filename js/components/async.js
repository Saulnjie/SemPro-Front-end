import {renderAlbum } from "../album.js" 
import {getAllAlbums } from "../data.js" 

getAllAlbums().then(albums => albums.forEach(renderAlbum));


export function getStoredFavorites() {
	let favorites = []
	const storedFavorites = localStorage.getItem("favorites")

	if (storedFavorites) {
		const parsed = JSON.parse(storedFavorites)
		favorites = parsed
	}

	return favorites
}

