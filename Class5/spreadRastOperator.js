// spread operator like copy element using '...' in front of array object
const x = [1, 5, 8]
const y = ['1', 'b', 'c']

//using spread operator to copy element
const z = [...x, ...y]
console.log(z)

const a = [9, ...y, 'Stringgggg']
console.log(a[2]) //5
console.log(a)

console.log('-----------------------------')
//using rast operater to destructure array
//[] in the left side is destructuring syntax
let arr1 = [1,2,3,4,5,6]
let arr2 = ['a', 'b', 'c']
const [temp1, ...temp2] = arr1 //temp1[0] , temp2[1,2,3,4,5]
console.log(temp1) //1
console.log(temp2) //2,3,4,5,6
console.log()
const [temp3, temp4, ...temp5] = arr2
console.log(temp3)// a
console.log(temp4)//b
console.log(temp5)// ['c']
console.log()
//destructuring with skip
const [ , , , four, ,six] = arr1
console.log(four)
console.log(six)
console.log('------------------------------')
const str = 'Hello world'
const collectStr = [...str]
console.log(collectStr) //collection of string

console.log('--------------------------')

for (const temp of collectStr) console.log(temp)
