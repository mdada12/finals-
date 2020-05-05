const name = document.getElementById('name')
const password = document.getElementById('grade')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []

  if (name.value !== null && grade.value !== null ){
    document.getElementById('name').innerHTML = name.value;
    document.getElementById('grade').innerHTML = name.value;
  }

  })