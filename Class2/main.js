
function greeting(someone) {
  return `hello, ${someone}`
}
console.log(greeting('BomScoob'))

//set timeout for delays (ms)
// async (multitasks in single time)
setTimeout(() => {
    console.log('Task1: Hey a complex task was done.')
  }, 10000)

console.log('My name is Sarawit Kraukham')


//set timeout is higher order function
// and function in parametor is callback function
setTimeout(() => { //this is callback function (anonymous function and arrow function)
    console.log('Task2: Hey a complex task was done.')
  }, 2000) // this task has done before task1

console.log('Good bye.')



//let can change
//const (constant) can't change after initialize primary
let name = 'Sarawit'
console.log('before : ', name)

const totalNumber = 70
name = totalNumber //dynamic and weakly type
console.log('after : ', name)

//object is a collection of a properties
//one property contain key and value (key : value)
// (object in js use constant variable) can not change reference after initialize
//but still can change properties.
const std1 = {
  id: 65130500083,
  name: 'Somsri',
}
console.log(std1)
// array
const nums = [5, 3, 1, 3, 2, 44]
console.log(nums)


let a
console.log(a)
if( a === undefined || a ===null) (console.log('no value'))
// == compare value
// === compare type and value