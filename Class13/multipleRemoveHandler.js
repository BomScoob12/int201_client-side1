//1. select target HTML object
const submitButton = document.querySelector('button')
// console.log(submitButton)
// 2 register handler function on a target HtML object
// * add multiple handler functions on the same event type and HTML object

const doSomething = (e) => {
  console.log(`Good bye, ${e.target.id}`)
}

// ? event working by order
// order 1
submitButton.addEventListener('click', (e) => {
  console.log(`hello, ${e.target.id}`)
})
// order 2
submitButton.addEventListener('click', doSomething)

//remove event listener
// ! remove should be function named, not an anonymouse function
submitButton.removeEventListener('click', doSomething)