class Person {
  constructor(firstname, lastname, DOB) {
    (this.firstname = firstname),
      (this.lastname = lastname),
      (this.dateOfBirth = DOB);
  }

  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  //this age method can find month or day to output
  getAge() {
    //returns the number of milliseconds
    const currentDateMilli = Date.now();
    const birthDateMilli = this.dateOfBirth.getTime();
    //different time millisec
    const diffMilli = currentDateMilli - birthDateMilli;
    console.log(currentDateMilli, birthDateMilli, diffMilli);
    //create date with diffMilli (difference millisec)
    const diffDate = new Date(diffMilli);
    //decrease with 1970 (start time millisecond)
    return diffDate.getFullYear() - 1970;
  }

  //this age method can find just year output
  getAge() {
    return new Date().getFullYear() - this.dateOfBirth.getFullYear();
  }

  isEqual(anotherPerson) {
    return (
      this.firstname.toLowerCase() === anotherPerson.firstname.toLowerCase() &&
      this.lastname.toLowerCase() === anotherPerson.lastname.toLowerCase()
    );
  }
  toString() {
    return `${this.firstname} ${this.lastname} \ndate Of Birth: ${this.dateOfBirth}\n`;
  }
}
const p1 = new Person('john', 'smith', new Date(2004, 2, 20));
console.log(p1);
console.log(p1.getAge());
console.log(p1.toString());
