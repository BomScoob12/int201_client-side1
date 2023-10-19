const animals = ['ant', 'dogs', 'cats', 'Bird', 'Birds']
const message = 'Practices make perfect'
//string includes - includes substring (case sensitive)
console.log(message.includes('ice')) //true
console.log(message.includes('make')) //true
//array includes - includes string in array elements (case sensitive)
console.log(animals.includes('ats')) //false
console.log(animals.includes('cats')) //true

console.log(animals)
console.log(animals.reverse())
//array change
console.log(animals)
console.log('----------sort-----------')
//sort A-Z to a-z
//[Bird, ant, ....]
// if it short it will be first
console.log(animals.sort())
console.log(animals)
