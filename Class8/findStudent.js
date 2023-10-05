const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'DAVID', score: 79 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
  { name: 'david', score: 85 },
]

function findStudentByName(studentArray, nameParam) {
  const findName = studentArray.filter(
    (student) => student.name.toLowerCase() == nameParam.toLowerCase()
  )
  return findName
}

function findStudentByNameAndPassing(studentArray, nameParam) {
    const findName = studentArray.filter(
      (student) => student.name.toLowerCase() == nameParam.toLowerCase() && student.score > 75
    )
    return findName
  }
console.log(findStudentByName(studentScores, 'david'))
console.log(findStudentByNameAndPassing(studentScores, 'david'))
