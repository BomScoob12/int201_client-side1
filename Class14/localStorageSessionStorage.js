let counter = localStorage.getItem('count')
if( counter === null) {
    counter = 1
    localStorage.setItem('count', counter)
}
else localStorage.setItem('count', ++counter)
alert(`counter = ${counter}`)

//clear
localStorage.removeItem('count')
localStorage.clear()

//when close browser is reset
let counter2 = sessionStorage.getItem('count')
if( counter2 === null) {
    counter2 = 1
    localStorage.setItem('count', counter2)
}
else localStorage.setItem('count', ++counter2)
console.log(`counter2 = ${counter2}`)

//clear
sessionStorage.removeItem('count')
sessionStorage.clear()