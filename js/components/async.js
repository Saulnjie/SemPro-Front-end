export async function getMeData() {
	const response = await fetch('https://cammiesrecords.herokuapp.com/albums');
	const data = await response.json();
	console.log('All results from data', data);
	return data;
}

getMeData().then(albums => albums.forEach(renderAlbum));



export function renderAlbum(album) {
	const buttonId = `heart-button-${album.id}`

	const albumCard = document.createElement("div")

	albumCard.classList.add("album_card")
	albumCard.innerHTML = `
		<h1>${album.ArtistName}</h1>
		<h2>${album.AlbumName}</h2>
		<p>${album.Description}</p>
		<p>${album.Price}</p>
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


export function getStoredFavorites() {
	let favorites = []
	const storedFavorites = localStorage.getItem("favorites")

	if (storedFavorites) {
		const parsed = JSON.parse(storedFavorites)
		favorites = parsed
	}

	return favorites
}

