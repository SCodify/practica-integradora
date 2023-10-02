const form = document.getElementById("createUserForm")
const response = document.getElementById("response")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const data = Object.fromEntries(new FormData(form))
  
  /* //Otra forma
  const data = new FormData(form)

  const obj = {}

  data.forEach((value, key) => {
      obj[key] = value
  }) */
  
  fetch('/users', {
    headers:{
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    response.innerHTML = data.message
  })
  .catch(error => console.error(error.message))
})