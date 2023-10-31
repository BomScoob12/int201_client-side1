const mail = {
  sender: 'SIT, KMUTT',
  recipent: {
    firstname: 'Sarawit',
    lastname: 'Kraukham',
  },
  title: 'Welcome to KMUTT',
  sentDetail: {
    sentDate: new Date(Date.now()),
    host: {
      name: '@sit.kmutt',
    },
  },
};

//firstname, lastname
let {
  recipent: { firstname, lastname },
} = mail;
console.log(firstname);
console.log(lastname);
//host name
let {
  sentDetail: {
    host: { name },
  },
} = mail;
console.log(name);
