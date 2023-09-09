//create with empty patameter
const x = new Array() // x=[]
console.log(x)
console.log(x.length)
console.log('---------------------------')
const y = new Array(5) // y=[5 empty items]
console.log(y)
console.log(y.length)
console.log('---------------------------')
const z = new Array(1, 2, 3, 4, 5) // z=initialze value [1,2,3,4,5]
console.log(z)
console.log(z.length)
console.log('---------------------------')
const xx = Array.of(10) // 10 is element in array(array of 10)
console.log(xx)
console.log(xx.length)
console.log('---------------------------')
const yy = Array.of(xx) // 10 is element in array (array of x) 2 dimention array
console.log(yy)
console.log(yy.length)
console.log('---------------------------')
const zz = Array.from(xx) // reference element array x initialze to this array
console.log(zz) //[10] //It copy array like '...' spread array\

console.log('----------------------------')
const aa = [1,2,3,4,5]
const bb = Array.from(aa)
console.log(aa)
console.log(bb)
console.log(bb.length)
//memory address reference to difference.
if(aa === bb) console.log('aa === bb')
else console.log('aa !== bb')