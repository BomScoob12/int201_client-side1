function ops(n1, n2, ...n3) {
  console.log(arguments.length, 'length');
  for (const arg of arguments) {
    console.log(arg);
  }
  console.log(n1, n2, n3)
  console.log('-----');
}
//arguments is an array-like object
//so what is array-like object?
//ans: an object that has length property and indexed elements inside it
//but it is not an array

//arguments is collect data before function is called
ops(1, 2, false);
ops(1, true);
ops(1, 2, 3, 4, 5, 6);
console.log('=====================');

//example for rest parameter
function sum(...num){
    return num.reduce((prev, next) => prev+next)
}
console.log(sum(1,2,3,4,5,6,7,8,9,10))