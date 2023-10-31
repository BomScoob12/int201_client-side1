function op1(fn) {
  return fn();
}
function op2(fn) {
  return fn;
}
function greeting() {
  return 'Hello';
}
function goodbye() {
  return 'Bye Bye';
}
const a = greeting;
const b = greeting();
console.log(a); //[Function: greeting]
console.log(b); //'Hello'
console.log(a()); //string, 'Hello'
// console.log(b()) //error:b is not a function
const result1 = op1(greeting);
console.log(typeof result1); //String
console.log(result1); //'Hello'
const result2 = op1(goodbye);
console.log(typeof result2); //String
console.log(result2); //'Bye Bye'
const result3 = op2(greeting);
console.log(typeof result3); //function
console.log(result3); //greeting function
const result4 = op2(goodbye);
console.log(typeof result4); //function
console.log(result4); //goodbye function
