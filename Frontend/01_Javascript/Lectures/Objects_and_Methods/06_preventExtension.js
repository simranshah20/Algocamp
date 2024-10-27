console.log("\npreventExtension\n");
const student={
    name:"Sarthak",
    roll:1,
    branch:"CSE"
}
console.log(Object.preventExtensions(student));     //prints { name: 'Sarthak', roll: 1, branch: 'CSE' }    
student.year=4;    //insertion not allowed
console.log(student);   //this will steel print the same value as above i.e { name: 'Sarthak', roll: 1, branch: 'CSE' }
delete student.roll;   //deletion is allowed
console.log(student);   //prints { name: 'Sarthak', branch: 'CSE' }
student.name="simran";   //updation is allowed
console.log("\nstudent after updating name: ",student);    //prints student after updating name:  { name: 'simran', branch: 'CSE' }