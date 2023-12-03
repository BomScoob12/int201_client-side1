const userElement = document.getElementById('input-user')
const pswElement = document.getElementById('input-psw')
userElement.addEventListener('focus', () => {
  console.log('Your focus is on username')
})
userElement.addEventListener('blur', () => {
  console.log('Your username input textbox is blured')
})

pswElement.addEventListener('focus', () => {
  console.log('Your focus is on password')
})
pswElement.addEventListener('blur', () => {
  console.log('Your password input textbox is blured')
})
