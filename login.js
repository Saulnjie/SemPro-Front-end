const form = document.getElementById("login-form")
const loggedInContent = document.querySelector("#logged-in-content")


form.onsubmit = async (event) => {
  event.preventDefault()

  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value

  const body = {
    identifier: email,
    password,
  }

  const headers = {
    "Content-Type": "application/json"
  }

  const response = await fetch("https://cammiesrecords.herokuapp.com/auth/local", {
      method: "POST",
      body: JSON.stringify(body),
      headers,
  })

  if (!response.ok) {
    console.log(await response.text())
  }


  const { jwt } = await response.json()
  localStorage.setItem("strapi-access-token", jwt)

  window.location.assign("/admin.html")
}