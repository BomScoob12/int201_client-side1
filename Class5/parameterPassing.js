function doubleNum(a) {
  return a * 2
}
let m = 5
console.log('on function ',doubleNum(m))
console.log('on primitive :',m, 'is not change')

function updateAge(person){
    return person.age += 1
}

const person = { id: '1001', name: 'Bom', age: 14 }
console.log(person)
console.log(updateAge(person))
console.log(person)
