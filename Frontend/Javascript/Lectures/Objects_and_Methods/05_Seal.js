console.log("\nimmutability using Seal\n");
const student={
    name:"Sarthak",
    roll:1,
    branch:"CSE"
}
console.log(Object.seal(student));
student.year=4;    //insertion not allowed
console.log(student);   //this will steel print the same value as above
delete student.name;   //deletion not allowed
console.log(student);   //this will steel print the same value as above
student.name="simran";   //updation is allowed
console.log("\nstudent after updating name: ",student);    //prints student after updating name:  { name: 'simran', branch: 'CSE' }