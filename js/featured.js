import { getAllAlbums } from "./data.js";
import { renderAlbum } from "./album.js";

getAllAlbums().then((albums) => 
albums
.filter((albums) => albums.Featured === true)
.forEach((album) => renderAlbum(album))
);
