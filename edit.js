import { getAllAlbums } from "./js/data.js";
import { renderAlbum } from "./js/album.js";

getAllAlbums().then(albums => albums.forEach((album) => renderAlbum(album, false, true)))




const loginButton = document.querySelector(".login_button")
const logoutButton = document.querySelector(".logout_button")


logoutButton.onclick = () => {
    localStorage.removeItem("strapi-access-token")
    window.location.replace("/")
  }
  
  
  
  if (strapiAccessToken) {
    loginButton.style.display = "none";
  } else {
    logoutButton.style.display = "none";
  }