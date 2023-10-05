function getPassingNames(students) {
  const filterStudents = students
    .filter((student) => student.score >= 70)
    .map((student) => student.name.toUpperCase())
  // Example usage:
  const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 },
  ]
  const passingNames = getPassingNames(studentScores)
  console.log(passingNames)
  // Output should be: ["ALICE", "BOB", "EVE"]
  return studentNames
}
