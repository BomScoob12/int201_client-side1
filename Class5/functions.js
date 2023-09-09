//fn declaration
function concat(str1, str2) {
  return str1 + str2
}
//calling fn
console.log(concat('if', 'else'))
console.log('-------------------------')

//fn expresstion
const toLower = function (str) {
  return str.toLowerCase()
}
console.log(toLower('STEVEEEEEE'))

const doSomethings = toLower
console.log(doSomethings('Hey Do somethings'))
console.log('Type of dosomethings : ', typeof doSomethings)
console.log('-------------------------')

//arrow fn
const addNum = (num1, num2) => {
  return num1 + num2
}
console.log(addNum(20, 12))
console.log('-------------------------')

const doIt = function (op, str1, str2) {
    // parameter passing
    //that assign to function in parameter op = function
  return op(str1, str2)
}
console.log(doIt(concat, 'op is fn', ' so it\'s higher order function'))
console.log(doIt(toLower, 'Go Go Go', ' move it.')) // output go go go because tolower have 1 parameter
console.log('---------------------------------------')
function a() {
    // higher order function because that return function or have funciton in parameter
    return toLower
}

const repOfA = a()
console.log(repOfA('HaHaHa'))

