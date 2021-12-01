export async function getAlbum(id) {
	const response = await fetch('https://cammiesrecords.herokuapp.com/albums/' + id);
  return await response.json();
}

export async function getAllAlbums() {
	const response = await fetch('https://cammiesrecords.herokuapp.com/albums');
  return await response.json();
}