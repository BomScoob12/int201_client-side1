//1. create array by literal
const x = [1, 3, 5, 7, 9]
//elements are object data types
const students = [
  { id: 64500101, name: 'Somchai' },
  { id: 64500102, name: 'John' },
  { id: 64500111, name: 'Somsak' },
]
console.log(students.length) //3
console.log(students[0]) // { id: 64500101, name: 'Somchai' }
//element are array data types
const studentIds = [
  [1001, 1002, 1005],
  [645001, 6450019],
  [634102, 635111],
  [123],
]
console.log(studentIds.length) //4
console.log(studentIds[1]) // [645001, 6450019]
console.log(studentIds[studentIds.length - 1]) // [123]
console.log(studentIds[0][1]) // [1002]

//just delete array at index and set empty
delete x[1]
console.log(x) // [ 1, <1 empty item>, 5, 7, 9 ]
console.log(x.length)
