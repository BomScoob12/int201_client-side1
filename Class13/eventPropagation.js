//1. select target HTML object
const submitButton = document.querySelector('button')
// console.log(submitButton)
// 2 register handler function on a target HtML object

//default target is bubbling
const doSomething = (e) => {
  console.log('submit button is clicked')
//   console.log(e)
//   console.log(e.target.id)
//   console.log(e.type)
//   console.log(e.target)
//   console.log(e.currentTarget)
//   console.log(e.eventPhase)
  console.log('------------------')
}
submitButton.addEventListener('click', doSomething)
// -----------------------
// inner-div
const innerDiv = document.getElementById('inner-div')
// console.log(innerDiv)

// current target true = not bubbling (capturing)
innerDiv.addEventListener('click', (event) => {
  console.log(event.target.id)
  console.log(event.target)
  console.log(event.currentTarget)
  console.log(event.eventPhase)
}, true)