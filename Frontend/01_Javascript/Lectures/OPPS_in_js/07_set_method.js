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
    setRoll(r)  //set the value for roll 
    {
     if(r>0)  //check the roll is +ve or not
        {
        this.roll=r;
         }
         else{
            console.log("Invalid Roll number");
         }
    }

}
//created an object student that refers to the constructor 
let student=new Student("Simran shah",64,"B.sc cs","last year");  //passing arguments to the constructor 
student.displayStudentDetails();  //display the details,prints Stuent Details:  Simran shah 64 B.sc cs last year
student.setRoll(10);
student.displayStudentDetails();  //prints Stuent Details:  Simran shah 10 B.sc cs last year,here roll is updated i.e 64 t0 10
student.setRoll(-1);   //prints invalid roll number

