class Student{
    name;
    roll;
    branch;
    year;
    constructor(studentName,studentRoll,studentBranch,studentYear) //constructor with parameters
    {  
        this.name=studentName;
        this.roll=studentRoll;
        this.branch=studentBranch;
        this.year=studentYear;
    }
}
//created an object student that refers to the constructor 
let student=new Student("Simran shah",64,"B.sc cs","last year");  //passing arguments to the constructor 
console.log(student);
// prints Student {
//     name: 'Simran shah',
//     roll: 64,
//     branch: 'B.sc cs',
//     year: 'last year'
//   }