//CRUD DOM
//1. create element li
const newLiElement = document.createElement('li')
//2. create attribute <li class = "devOps" name = "devopsLect"></li>
newLiElement.setAttribute('class', 'devOps')
newLiElement.setAttribute('name', 'devopsLect')
//3. add text value
//text content it not render HTML tag (ignore them)
// newLiElement.textContent = 'Siam yamsangsung'
newLiElement.innerHTML = '<span style= "color:red">Siam yamsangsung </span>'

//4.add new li element to parent node
const lecturers = document.querySelector('div.lecturers > ul')
console.log(lecturers)
// append child in lecturers UL
lecturers.appendChild(newLiElement)