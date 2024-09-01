class Student{
    name;
    roll;
    branch;
    year;
}
//created an object student that refers to the constructor 
let student=new Student();  
student.name="Simran shah";
student.branch="B.sc CS";
student.year="Last";
console.log(student);
// prints Student {
//     name: 'Simran shah',
//     roll: undefined,  //prints roll:undefined because we have not defined the value of roll here
//     branch: 'B.sc CS',
//     year: 'Last'
//   }