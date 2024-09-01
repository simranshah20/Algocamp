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
    displayStudentDetails(){  
        console.log("Stuent Details: ",this.name,this.roll,this.branch,this.year);
    }
  getName(){   //to get or read values
    return this.name;
  }
 set roll(r){
    if(r>0 && typeof(r)=="Number")  //check the roll is +ve and number or not
        {
        this.roll=r;
         }
         else{
            console.log("Invalid Roll number");
         }
         this.roll=r;
     }
}
//created an object student that refers to the constructor 
let student=new Student("Simran shah",64,"B.sc cs","last year");  //passing arguments to the constructor 
student.displayStudentDetails();  //display the details,prints Stuent Details:  Simran shah 64 B.sc cs last year
console.log("Name: ",student.getName()); //prints Name:  Simran shah
console.log("Roll Number",student.roll=2);  //prints Roll Number 2
student.displayStudentDetails();  //roll number is updated i.e 62 to 2 and prints Stuent Details:  Simran shah 2 B.sc cs last year

