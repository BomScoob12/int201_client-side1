const userElement = document.getElementById('input-user')
const pswElement = document.getElementById('input-psw')
const submitBtn = document.querySelector('button')
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
})
//using keydown and keypress only to detect number characters 0-9
userElement.addEventListener('keydown', (e) => {
  console.log(`${e.key}, ${e.code}`)
  if (e.key >= 0 && e.key <= 9) {
    e.preventDefault()
  }
})
//* when user release enter key, text value on username will show at <p> element
userElement.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const pElement = document.querySelector('p')
    pElement.textContent = e.target.value
  }
})
//* realtime text value on username will show at <p> element
userElement.addEventListener('input', (e) => {
  const pElement = document.querySelector('p')
  pElement.textContent = e.target.value
})

//using keydown and keypress only to detect number characters 0-9
// pswElement.addEventListener('keydown', (e) => {
//   console.log(`${e.key}, ${e.code}`)
//   if (e.key >= 0 && e.key <= 9) {
//     e.preventDefault()
//   }
// })
// when user release enter key, text value on password will show at <p> element
// pswElement.addEventListener('keyup', (e) => {
//   if (e.key === 'Enter') {
//     const pElement = document.querySelector('p')
//     pElement.textContent = e.target.value
//   }
// })