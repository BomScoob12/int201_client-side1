//get by id
const ulStudent = document.getElementById('students')
console.log(ulStudent)

//get by (CSS selector), query selector
//can query base on parent node
//return first element
const courseClass = document.querySelector('div.courses')
console.log(courseClass)

//get by CSS selector, query selector [all]
//return all of element that it found
const allElementDiv = document.querySelectorAll('div')
console.log(allElementDiv)

//example find all of programming class
//but just 1 element
const programmingClass = document.querySelector('.programming')
//if you need all element of query
const allProgrammingLacturers = document.querySelectorAll('.programming')
console.log('programming just first : ', programmingClass)
console.log('All programming lecturers : ', allProgrammingLacturers)

//tag with attribut selector
const tagSelector = document.querySelector('ul[id = students]')
console.log(tagSelector)
//ul that have div parent
const ulDivParent = document.querySelector('div>ul')
console.log('Ul has div parent -> Result is lecturers' ,ulDivParent)
console.log('--------------------------------')

//it will find first answer that match and use that to output
//can using more than one query but JS will be find first element that match to output
const programmingLect = document.querySelector(
    '.programming',
    'std-655000888',
    '#int101'
)
console.log(programmingLect)
//same as the query selector
const programmingLectAll = document.querySelectorAll(
    '#int101',
    '.programming',
    'std-655000888',
)
console.log(programmingLectAll)