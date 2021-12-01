import { renderAlbum } from "./album.js";
import { getAlbum } from "./data.js";


const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get('id'); 


getAlbum(id).then((album) => renderAlbum(album, true))
