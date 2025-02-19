import { getStoredFavorites } from "./helpers.js"

export function renderAlbum(album, withDescription = false, withDeleteButton = false) {
	const buttonId = `heart-button-${album.id}`
	const id = `album-${album.id}`

	const albumCard = document.createElement("div")
	albumCard.id = id
	let favorites = getStoredFavorites();
	const isFavorited = favorites.some(item => item.id === album.id)


	console.log("DB",withDeleteButton)
	albumCard.classList.add("album_card")
	albumCard.innerHTML = `
		<img class="album-cover" src="${album.Albumcover}" alt="${album.Covertag}">
		<div class="card_container">
			<div class="card_wrapper">
				<div class="card_info_container">
				<h1>${album.ArtistName}</h1>
				<h2>${album.AlbumName}</h2>
			<p class="album_price">${album.Price}$</p>
				</div>
				<div class="card_btn_container">
				<div class="view_album_btn">
				${withDeleteButton  ? `<button class="delete-album">Delete</button>` : `<a href="/detailed.html?id=${album.id}">View album</a>`}
				</div>
				<div class="like_btn" id="${buttonId}">
				<i class="far fa-heart" data-name="${album.ArtistName}" data-album="${album.AlbumName}" data-price="${album.Price}"></i>
				<i class="fas fa-heart" data-name="${album.ArtistName}" data-album="${album.AlbumName}" data-price="${album.Price}"></i
				</div>
			</div>
			<div class="description_container">${withDescription === true ? `<p>${album.Description}</p>` : ""}</div>
			</div>
			`
			
	document.querySelector('.albums').appendChild(albumCard)

	const filledHeart = document.querySelector(`#${id} .fas.fa-heart`)
	const outlinedHeart = document.querySelector(`#${id} .far.fa-heart`)
	
	if (isFavorited)  {
		filledHeart.style.display = "inline"
		outlinedHeart.style.display = "none"
	} else {
		filledHeart.style.display = "none"
		outlinedHeart.style.display = "inline"
	}

	const heartButton = document.querySelector(`#${id} #${buttonId}`);
	heartButton.onclick = () => {
		favorites = getStoredFavorites()
		const existingAlbum = favorites.find(item => item.id === album.id)

		if (existingAlbum) {
			const index = favorites.indexOf(existingAlbum)
			favorites.splice(index, 1)

			favorites = favorites;
			filledHeart.style.display = "none"
			outlinedHeart.style.display = "inline"
		} else {
			filledHeart.style.display = "inline"
			outlinedHeart.style.display = "none"
			favorites.push(album)
		}

		localStorage.setItem("favorites", JSON.stringify(favorites))
	}


	if (withDeleteButton) {
		const deleteButton = document.querySelector(`#${id} .delete-album`)
	
		deleteButton.onclick = async () => {
			const confirmed = confirm(`Are you sure you want to delete album "${album.AlbumName}"?`)
	
			if (confirmed) {
				const strapiAccessToken = localStorage.getItem("strapi-access-token")
	
				if (!strapiAccessToken) {
					window.location.replace("/login.html")
				}
	
				if (!strapiAccessToken.startsWith("ey")) {
					window.location.replace("/login.html")
				}
	
				const response = await fetch(`https://cammiesrecords.herokuapp.com/albums/${album.id}`, {
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${strapiAccessToken}`
					}
				})

				if (!response.ok) {
					console.error(await response.json())
					alert("Failed to delete album")
				}

				albumCard.remove()

			}
		}
	}
}


