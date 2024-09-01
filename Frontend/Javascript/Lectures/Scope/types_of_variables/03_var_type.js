var teacher="simran shah";   
function fun(){   
    teacher="sony";
    content="js";    //js make autoglobal variable to store value of content
    console.log("wow",content,teacher);   //prints wow js sony
}
fun();
console.log(teacher);   //prints sony
console.log(content);   //prints js
