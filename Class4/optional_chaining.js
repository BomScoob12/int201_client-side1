//handle error
//if not have a data, variable = null, undefind or blabla
// optional chaining will handle it with undefinded
let str = null
console.log(str?.toLowerCase())

let nums
console.log(nums?.[0]);

let obj
console.log(obj?.id)


//nullish coalescing
// if on the left side is not null or undefinded, it will return on the left
// else is null or undefined will be return right side.
let arr // null
arr = arr ?? [1,2,3,4] //return right side
console.log(arr)

let arrNotNull = ['sco', 'bom'] // notnull
arrNotNull = arrNotNull ?? [1,1,1,1] // return left side
console.log(arrNotNull)

let temp = 10 //not null
arr = temp ?? arrNotNull //return left
console.log(arr)
