const students = [
  {
    name: 'Sophia',
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90]
  },
  {
    name: 'Mason',
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62]
  },
  {
    name: 'Isabella',
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78]
  },
  {
    name: 'Liam',
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95]
  },
  {
    name: 'Olivia',
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62]
  }
]

function getAttendanceRate(student) {
  const totalDays = student.attendance.length;
  //presentDays that is the day he has alive :)
  const presentDays = student.attendance.filter(attended => attended).length;
  const attendanceRate = (presentDays / totalDays) * 100;
  return attendanceRate;
}

function getAvgScore(student) {
  const totalWeeks = student.testScores.length;
  const totalScore = student.testScores.reduce((score, nextScore) => score + nextScore)
  const avgScore = totalScore / totalWeeks
  return avgScore
}

function underPerformStudents(students) {
  let newStudentArr = []
  students.forEach(student => {
    const attendanceRate = getAttendanceRate(student);
    const avgScore = getAvgScore(student);
    if (attendanceRate < 80 && avgScore < 70) {
      newStudentArr.push({
        name: student.name,
        attendanceRate: attendanceRate,
        avgScore: avgScore
      }
      )
    };
  });
  return newStudentArr
}

console.log(underPerformStudents(students));



