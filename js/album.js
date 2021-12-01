import { getStoredFavorites } from "./helpers.js"

export function renderAlbum(album, withDescription = false) {
	const buttonId = `heart-button-${album.id}`

	const albumCard = document.createElement("div")

	albumCard.classList.add("album_card")
	albumCard.innerHTML = `
		<h1>${album.ArtistName}</h1>
		<h2>${album.AlbumName}</h2>
		<p>${album.Price}</p>
		${withDescription === true ? `<p>${album.Description}</p>` : ""}
		<a href="/detailed.html?id=${album.id}">
		View album
		</a>
		<button id="${buttonId}">
		<i class="far fa-heart" data-name="${album.ArtistName}" data-album="${album.AlbumName}" data-price="${album.Price}"></i>
		</button>
	`

	document.querySelector('.albums').appendChild(albumCard)


	const heartButton = document.getElementById(buttonId);
	heartButton.onclick = () => {
		
		let favorites = getStoredFavorites()
		const isAdded = favorites.some(item => item.id === album.id)

		if (isAdded) {
			const index = favorites.indexOf(album)
			favorites.splice(index, 1)
			favorites = favorites;
		} else {
			favorites.push(album)
		}

		localStorage.setItem("favorites", JSON.stringify(favorites))
	}
}