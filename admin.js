const strapiAccessToken = localStorage.getItem("strapi-access-token")
const form = document.querySelector("#create-album-form")


const loginButton = document.querySelector(".login_button")
const logoutButton = document.querySelector(".logout_button")

if (!strapiAccessToken) {
  console.log('There is no JWT token');
  alert("You are not a cerified superuser. Press OK to redirect!");
  window.location.replace("/login.html")
}



form.onsubmit = async (event) => {
  event.preventDefault();

  const data = new FormData(document.querySelector("#create-album-form"))

  const albumName = data.get("album-name")
  const artistName = data.get("artist-name")
  const coverTag = data.get("cover-tag")
  const coverLink = data.get("cover-link")
  const price = parseInt(data.get("price"))
  const description = data.get("description")
  const featured = Boolean(data.get("featured"))


  const response = await fetch(`https://cammiesrecords.herokuapp.com/albums`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${strapiAccessToken}`
    },
    body: JSON.stringify({
      AlbumName: albumName,
      ArtistName: artistName,
      Covertag: coverTag,
      Albumcover: coverLink,
      Price: price,
      Description: description,
      Featured: featured,
    })
  })

  if (!response.ok) {
    const errorResponse = await response.json()
    console.error(errorResponse)
    throw new Error("An error occured during album creation")
  }

  console.log(await response.json())
}


logoutButton.onclick = () => {
  localStorage.removeItem("strapi-access-token")
  window.location.replace("/")
}



if (strapiAccessToken) {
  loginButton.style.display = "none";
} else {
  logoutButton.style.display = "none";
}