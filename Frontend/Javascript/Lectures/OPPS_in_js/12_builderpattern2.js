class Student{ //class
    //made private to avoid irrelevant updates ouside the class
    #name;
    #roll;
    #branch;
    constructor(builder){ //constructor 
        console.log("Student constructor....")
        this.#name=builder.name;
        //validation before object creation
        if(builder.roll>0){  //validation for price
            this.#roll=builder.roll;
        }
        else{
            return {};
        }
        this.#branch=builder.branch;
    }
    displayStudentDetails(){  //member function 
        console.log("Student Name: ",this.#name,"Student Roll Number: ",this.#roll,"Branch: ",this.#branch);
    }
    static get Builder(){  //made static to associate with class not object.It is a function
       class Builder{    //class
        constructor(){    //constructor
            this.name="Sweta";   //default values,this name property belongs to the builder
            this.roll=123;
            this.branch="CSE";
        }
        setName(incomingname){
            this.name=incomingname;
            return this;   //to return builder object,this is uesed
        }
        setRoll(incomingroll){
            this.roll=incomingroll;
            return this;
        }
        setBranch(incomingbranch){
            this.branch=incomingbranch;
            return this;
        }
        build(){  //function which is calling constructor of Student and passing this is an argument
            return new Student(this);  //here this is a builder object
        }
       }
    return Builder;  //returnig the class builder from the Builder getter Function
    }
}
const s=new Student.Builder();   //here student is a class,student.Builder calls the Builder getter and returns class
console.log(s);  //prints Builder { name: 'Sweta', roll: 123, branch: 'CSE' }
const p=new Student.Builder()  //calls constructor of builder class
p.setName("Avigya").setRoll(56).setBranch("Bsc CS");
console.log(p);  //prints Builder { name: 'Avigya', roll: 56, branch: 'Bsc CS' }
const q= new Student.Builder()
                     .setName("Avigya")
                     .setRoll(56)
                     .setBranch("Bsc CS")
                     .build();
q.displayStudentDetails();   
// prints 
// Student constructor....
// Student Name:  Avigya Student Roll Number:  56 Branch:  Bsc CS