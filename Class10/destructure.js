const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const obj = {
    isbn : 12345,
    title : 'JavaScript',
    price : 450,
    author : {
        firstname: 'Gog',
        lastname : 'Kok',
        getFullName : function(){
            return `${this.firstname} ${this.lastname}`
        }
    }
}

const [num1, num2] = nums;
console.log(num1, num2); // 1 , 2

//destruct and rename
const {isbn: Bookid}  = obj;
console.log(Bookid); // 12345

//destruct and rename
const {author: {getFullName: getAuthorName}}  = obj;
console.log(getAuthorName()); // Mr. Gog Kok

const {author : {firstname: fname, lastname: lname}} = obj;
console.log(fname, lname); // Gog Kok
console.assert(fname === 'player1', 'fname is not Gog');