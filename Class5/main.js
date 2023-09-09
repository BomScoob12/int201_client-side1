//array can contain different data type in one array
const x = [1, true, 'A']
const y = []
let z

console.log('Type of x :', typeof x)
console.log('Type of y :', typeof y)
console.log('Type of z :', typeof z)
console.log('---------------------------')
// how to check that is array
if (y.length === 0) console.log(' Y is an empty array')
else console.log(' Y is not an empty array')

//if z error. it will assign undefined
if (z?.length === 0) console.log(' z is an empty array')
else console.log(' z is not an empty array')

console.log('---------------------------')

console.log(x)
console.log('Array length : ', x.length)

console.log(x[0]) // first index
console.log([x.length - 1]) // last index

console.log('---------------------------')
// input to element array
x[x.length] = 'Last'
console.log('using index to input : ', x)

x.push('newPush')
console.log('using push : ', x)
