class Student{
    #name;   //# is use to make private
    #roll;
    branch;
    year;
    constructor(studentName,studentRoll,studentBranch,studentYear) //constructor with parameters
    {  
        this.#name=studentName;
        this.#roll=studentRoll;
        this.branch=studentBranch;
        this.year=studentYear;
    }
    displayStudentDetails(){
        console.log("Stuent Details: ",this.#name,this.#roll,this.branch,this.year);
    }
}
//created an object student that refers to the constructor 
let student=new Student("Simran shah",64,"B.sc cs","last year");  //passing arguments to the constructor 
console.log(student);   //prints Student { branch: 'B.sc cs', year: 'last year' }, here we can see private member i.e name and roll is not accessible outside the constructor

student.displayStudentDetails();  //prints Stuent Details:  Simran shah 64 B.sc cs last year
student.name="kavya";
console.log(student);   //prints Student { branch: 'B.sc cs', year: 'last year', name: 'kavya' } i.e new name kavya is added
console.log(student);   