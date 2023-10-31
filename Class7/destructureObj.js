student1 = {
  id: 10,
  name: "Somsak",
  gpax: 2,
  hobby: {
    sports: ["football", "batminton"],
    freetime: "Reading",
  },
  address: "12 prachauthit 33",
  tel: "0877457844",
};

student2 = {
  id: 11,
  name: "Tories",
  gpax: 2,
  hobby: {
    sports: ["ping-pong", "tennis"],
    freetime: "Reading",
  },
  address: "12 prachauthit 33",
  tel: "0877457844",
};

const arrayOfStd = [student1, student2];

for (const std of arrayOfStd) {
  //destructuring [careful index order]
  let { id, name, gpax, hobby: {sports, ...hobbyNotused} , ...notused } = std;
  console.log(std);
  console.log(`id : ${id}`);
  console.log(`name : ${name}`);
  console.log(`sports : ${sports}`)
  console.log(`not used [hobby] for display: `, hobbyNotused);
  console.log(`not used [properties] for display: `, notused);
  console.log("-------------");
}
