//* event type in dom tree. (builded first then loaded)
document.addEventListener('DOMContentLoaded', () => {
  console.log('Your DOM tree built')
})

//* loadded is event for load window
window.addEventListener('load', () => {
  console.log('Your Applciation Loaded')
  //?  localStorage.setItem('myCat', 'Tom')
})

//* beforeunload is event for close window
window.addEventListener('beforeunload', () => {
  localStorage.setItem('myCat', 'Tom')
  //? localStorage.removeItem('myCat')
})

const newDiv = document.createElement('div')
//* mousemove is event for mouse move
window.addEventListener('mousemove', (e) => {
  console.log(`x:${e.screenX}, y:${e.screenY}`)
newDiv.style.width = '10px'
newDiv.style.height = '10px'
newDiv.style.borderRadius = '50%'
newDiv.style.backgroundColor = 'blue'
document.body.appendChild(newDiv)
})
