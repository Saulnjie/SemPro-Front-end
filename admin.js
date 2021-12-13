const strapiAccessToken = localStorage.getItem("strapi-access-token")
const form = document.querySelector("#create-album-form")

if (!strapiAccessToken) {
  window.location.replace("/login.html")
}

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


