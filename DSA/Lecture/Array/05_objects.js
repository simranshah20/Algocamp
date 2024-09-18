let x={name:"simran",age:20}
let a={
    name:"sony",
    age:19
}

//access any  value using the key
//NOTE:from key you can access values but not vice-a-versa
console.log("Name: ",x.name);
console.log("Age: ",x.age);

console.log("Name: ",a["name"]);
console.log("Age: ",a["age"]);

//Are objects mutable?
a.name="Roshani";  //updated the name
console.log(a);
console.log("Updated Name: ",a.name);


//How to add a new property to an already created object
x.marks=90; //if marks key is it will update it otherwise  it adds it
console.log(x);
a["company"]="Google";
console.log(a);


//Delete a key value pair?
//we can use delete operator along with object.key
delete x.name;
console.log(x);