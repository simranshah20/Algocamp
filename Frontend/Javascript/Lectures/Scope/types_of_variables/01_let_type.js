function let(){
    console.log(q);   //error because in a block scoped variable we cannot access the variable before the initialization.
    let q="simran";
    console.log("value od q is: ",q);
}
let();