//window.alert, window.promp, window.confirm
window.alert('Do you want to exit?')
//input
const username = window.prompt('Please enter your name')  
console.log(username)

const isExit = window.confirm(`Good bye ${username}`)
console.log('is user exit', username, isExit)