// const st1 = {  
//     studentId: 651000101,  
//     firstname: 'Somchai',  
//     lastname: 'Sookjai',  
//     studentId: 1
// }
// // console.log(typeof st1)
// // console.log(st1)
// // const st2 = {} //empty object {} === const st2=new Object()
// // console.log(Object.prototype.isPrototypeOf(st2))
// // console.log(typeof st2)
// console.log(Object.keys(st1)) //array of property key
// console.log(Object.values(st1)) //array of property value

const st3 = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651000102 }
console.log(st3)

const st4 = {  
    firstname: 'Pornchai', 
    lastname: 'Jaidee',  
    studentId: 651000103,  
    address: { province: 'Bangkok', country: 'Thailand' },  
    getFullname: function () {    
        return `${this.firstname} ${this.lastname}`  
    }
}

console.log(st4.firstname)
console.log(st4['lastname']) 
//dynamic key//dynamic property: add a new one, update or delete existing property
st4.email = 'pornchai.jai@kmutt.ac.th' //add a new property
st4.firstname = 'Pornsak' //edit property valuedelete 
delete st4.email //delete a property
st4.getAddress = function () {  //add a new property that stores function  
    return this.address
}

console.log(st4)
console.log(Object.prototype.isPrototypeOf(st4))
console.log(Date.prototype.isPrototypeOf(st4))
console.log(st4.getFullname()) //Pornchai Jaidee
//property value can store function

const st5 = {  
    firstname: 'Porntip', 
    lastname: 'Dee',  
    studentId: 651000105,  
    getFullname: function () {    
        return `${this.firstname} ${this.lastname}`  
    }
}
console.log(st5.getFullname()) //Porntip Dee