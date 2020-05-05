const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
      messages.push('username is required')
  }

  if(name.value !== "teacherCool101"){
     messages.push('Invalid username')
  }

  if(password.value !== "StupidPassword345"){
     messages.push('Invalid Password')
  }

  if (name.value === "teacherCool101" && password.value === "StupidPassword345" ){
  window.open("home.html");
  }


  if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
  }
  })
