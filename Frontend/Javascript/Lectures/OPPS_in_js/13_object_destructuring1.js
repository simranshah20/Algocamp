const Student={name1:"Somya",branch:"CSE",roll:23}
const {name1,branch,roll}=Student;
console.log(Student);    //prints { name: 'Somya', branch: 'CSE', roll: 23 }
console.log("Name: ",name1);    //prints Name:  Somya
console.log("Branch: ",branch);    //prints Branch:  CSE
console.log("Roll number: ",roll);  //prints 23
const{name1:studentName,brach:studentBranch,roll:studentRoll}=Student;    //provided alias(2nd name to name)
console.log(studentName);


