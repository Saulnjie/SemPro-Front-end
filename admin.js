const strapiAccessToken = localStorage.getItem("strapi-access-token")
const form = document.querySelector("#create-album-form")

if (!strapiAccessToken) {
  console.log('There is no JWT token');
  alert("You are not a cerified superuser. Press OK to redirect!");
  window.location.replace("/login.html")
}

// // alert("You are not a cerified superuser. Redirecting!");

// if (!strapiAccessToken) {
  
//   login_btn.style.display = "none"
//   logout_btn.style.display = "inline"
// } else {
//   logout_btn.style.display = "none"
//   login_btn.style.display = "inline"
// }

// Implement logic for expired accesstokens



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
    // Handle error here
    const errorResponse = await response.json()
    console.error(errorResponse)
    throw new Error("An error occured during album creation")
  }

  console.log(await response.json())

}


