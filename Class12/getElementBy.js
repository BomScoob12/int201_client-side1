// select by Html collection
//return array like can use index or lenght (cannot use array funciton e.g. filter match)
//return HTML collection it contain all file that match.
const programmingLect = document.getElementsByClassName('programming')
console.log(programmingLect)
console.log(programmingLect.length)
console.log(programmingLect.item(0)) //pichet

//select tagName
//return Html collection that tag is 'ul' all the file to collection
const ulTag = document.getElementsByTagName('ul')
console.log(ulTag)
console.log(ulTag.length)

//node lists
const coursesEle = document.querySelectorAll('.courses')
console.log(coursesEle)
//NodeList data type - array-like (can use index, length) but NodeList implements only forEach but can not use other array functions

//search by element not from root
const divElement = document.getElementById('bscit-courses')
const courseUnderDiv = divElement.querySelectorAll('.courses')
console.log('Search in div: ', courseUnderDiv)


const divElement2 = document.getElementById('exampleElement')

console.log('inner HTML',divElement.innerHTML)
console.log('inner TEXT', divElement.innerText)
console.log('Text Content', divElement.textContent)