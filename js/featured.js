import { getAllAlbums } from "./data.js";
import { renderAlbum } from "./album.js";

getAllAlbums().then((albums) => 
albums
.filter((albums) => albums.Featured === true)
.forEach(renderAlbum)
);



// getAllAlbums().then(albums => {
//     albums.forEach(album => { if(album.Featured === true) renderAlbum(album) } )
// } ) 