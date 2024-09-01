const a={b:99};
console.log(Object.freeze(a));
a.x=77;
console.log(a);

console.log("\nimmutability using freeze\n");
const student={
    name:"Sarthak",
    roll:1,
    branch:"CSE"
}
console.log(Object.freeze(student));
student.year=4;    //insertion not allowed
console.log(student);   //this will steel print the same value as above
delete student.name;   //deletion not allowed
console.log(student);   //this will steel print the same value as above
student.name="simran";   //updation not allowed
console.log(student);    ///this will steel print the same value as above


console.log(Object.isFrozen(student));  //isFrozen check whether the object is freeze or not is yes the prints true and if not than false
const s={m:"hari"};
console.log(Object.isFrozen(s));    //output false
console.log(Object.isSealed(student));   //prints true because all property of freeze comes under sealed
console.log(Object.isFrozen(student));
