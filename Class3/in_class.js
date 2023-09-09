//x is a global scope
let x = 1
console.log(x)
{
  //x is a block scope
  let x = 5
  console.log(x)
  var y = 111
}
console.log(y) //var has no block scope, so y is a global scope
x = 10
console.log(x)

function doIt() {
  if (1) {
    //?block scope
    let x = 555
    console.log(x)
  } else console.log(`not 1`)
  console.log(`x: ${x}`)
}
doIt()
console.log(x) //? global scope x of line#2

function doSomething() {
  let x = 'A' //function scope
  console.log(x) //? 'A'
}
doSomething()
console.log(x) //?  global scope x of line#2

// ----------------------
// optional chaining used for variable that can not predict. that is null or it have value
// ?. is optional chaining

