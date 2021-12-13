// 1. Redirect til /edit.html?id=${id}
// 2. Hent id fra query params og hent album detaljer (id, name, description...)
// 3. Fyll inn form values per felt document.querySelector("input[name="album-name"]").value = album.AlbumName (steg 2)
// 4. PUT /albums/:id 


import { getAllAlbums } from "./js/data.js";
import { renderAlbum } from "./js/album.js";

getAllAlbums().then(albums => albums.forEach(renderAlbum))