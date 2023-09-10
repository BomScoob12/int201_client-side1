//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.studentList = {}
  }
  roster() {
    //JSON string and parst to JavaScript object again
    return JSON.parse(JSON.stringify(this.studentList))
  }

  add(name, _grade) {
    if (!this.studentList[_grade]) {
      this.studentList[_grade] = []
    }
    this.checkDuplicate(name)
    this.studentList[_grade].push(name)
    this.studentList[_grade].sort()
  }
  checkDuplicate(name){
    for (let grade in this.studentList){
      const indexOfname = this.studentList[grade].indexOf(name)
      if (indexOfname !== -1){
        this.studentList[grade].splice(indexOfname, 1)
      }
    }
  }

  grade(_grade) {
    if (!this.studentList[_grade]) return []
    return JSON.parse(JSON.stringify(this.studentList[_grade]))
  }
}


