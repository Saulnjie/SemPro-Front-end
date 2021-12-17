import { getAllAlbums } from "./data.js";
import { renderAlbum } from "./album.js";

getAllAlbums().then(albums => albums.forEach((album) => renderAlbum(album)))
