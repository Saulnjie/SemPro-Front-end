export async function getMeData() {
	const response = await fetch('https://cammiesrecords.herokuapp.com/albums');
	const data = await response.json();
	console.log('All results from data', data);

	let allAlbums = data;

	allAlbums.forEach(function (id) {
		// console.log('object inside', id);
		// console.log('object inside', id.ArtistName);
		document.querySelector('.albums').innerHTML += `
    <div class="album_card">
      <h1>${id.ArtistName}</h1>
      <h2>${id.AlbumName}</h2>
      <p>${id.Description}</p>
      <p>${id.Price}</p>
      </div>
    `;
	});
}

getMeData();
