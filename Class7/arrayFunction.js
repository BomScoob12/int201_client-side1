const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function'];
const mails = [
  {
    id: 12323502,
    sender: {
      firstname: 'Umaporn',
      lastname: 'Sup',
    },
    subject: 'Welcome to SIT, KMUTT',
  },
  {
    id: 55588811,
    sender: {
      firstname: 'Tisanai',
      lastname: 'Chat',
    },
    subject: 'Reminder: INT201 Class',
  },
];

console.log(keywords);
console.log(mails);
console.log('------------------');
console.log('for each fn');
//last element is undefined
keywords.forEach((element) => console.log(element));
mails.forEach((element) => console.log(element));

console.log('----------d--------');
//require : first element of all arr in kerwords
let firstElement = '';
keywords.forEach((element) => (firstElement += element.charAt(0)));
console.log(firstElement);
//pls update every concat before next iterator
let secondElement = '';
keywords.forEach((element) => secondElement = secondElement.concat(element));
console.log(secondElement);

console.log('------------------');
//require : need id of mails
const mail_id = [];
mails.forEach((element) => mail_id.push(element.id));
console.log(mail_id);

console.log('------------------');
//filter will return all data that pass cordition of the callbackFn
//require : filter the word, that include keyword with es
console.log(keywords.filter((element) => element.includes('es')));

console.log('------------------');
//require : map sender firstname
const senderFirstname = mails.map((element) => element.sender.firstname);
console.log(senderFirstname);

console.log('------------------');
//require : map find id and output logId - id
const logMailsId = mails.map((element) => `logId - ${element.id}`);
console.log(logMailsId);
