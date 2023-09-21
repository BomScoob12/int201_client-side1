//constructor function
function Person(id, fn, ln) {
    this.id = id
    this.firstname = fn
    this.lastname = ln
  }
  //2. create object by using constructor function
  const p1 = new Person(1001, 'Adam', 'Jo')
  const p2 = new Person(1002, 'Henry', 'Moore')
  const p3 = new Person(1003, 'Mia', 'Anderson')
  console.log(p1)
  console.log(p2)
  console.log(p3)
  p1.email = 'adam@gamil.com'
  //Object prototype<-Person prototype<-p1
  console.log(Object.prototype.isPrototypeOf(p1))
  console.log(Person.prototype.isPrototypeOf(p1))