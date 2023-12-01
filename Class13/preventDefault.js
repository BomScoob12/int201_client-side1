const submitButton = document.querySelector('button')
// console.log(submitButton)

// * add event for button when click.
submitButton.addEventListener('click', (e) => {
    // * prevent data for "default value" to send it to server
  e.preventDefault()
  const allInputElements = document.querySelectorAll('input')
  console.log(allInputElements)

  // * check every input require more than 1
  //! if 1 of them has 0 input return false
  const isComplete = Array.from(allInputElements).every(
    (input) => input.value.length > 0
  )
  //get tag name 'p' at the first of element only
  const pElement = document.getElementsByTagName('p')[0]
  if (isComplete) {
    pElement.textContent = 'Your input are complete'
  } else {
    pElement.innerHTML =
      '<span style="color:red"> Missing some value, plese enter</span>'
  }
})