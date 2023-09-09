function getFullName(fname, lname){
    return `${fname} ${lname}`
}

console.log(getFullName('Bom', 'Sarawit'), 'get type of:', typeof getFullName)

//global scope
let a = 50
let b = 20

//function scope
function add() {
    let a = 10
    let b = 20
    return a + b
    //when it has done all of this variable will disappear
}

//block scope
{
    let x = 2
    const y = 2
    var z = 2

    // These are variables that can be access in block only
    //when it has done all of this variable will disappear
}
// console.log(x, y) output x, y is not defined
console.log(z) // var can use outside block scope (except case)


if(1) {
    //block scope (block if)
    let a = 500
    console.log(a, 'in function')
} else console.log('not 1')
//this is a from global
console.log(a)
