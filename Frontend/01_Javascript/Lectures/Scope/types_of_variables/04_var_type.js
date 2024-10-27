var teacher="simran shah";   
function fun(){   
    teacher="sony";
    content="js";    //js make autoglobal variable to store value of content
    console.log("wow",content,teacher);  //2nd prints wow js sony
}
console.log(teacher);   //1st prints simran shah
console.log(content);   //error because it is working as RHS
fun();
console.log(content); //no error prints js becaise it is working as LHS