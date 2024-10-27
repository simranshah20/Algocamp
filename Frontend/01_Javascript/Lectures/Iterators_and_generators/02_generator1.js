function* myGenerator(){    //generator function
console.log("Inside generator");
yield 100;
console.log("line 4");
yield 99;
console.log("line 6");
yield -1;
console.log("line 8");
yield "simran";
console.log("line 10");
}
const a=myGenerator();
console.log(a.next());
console.log("Out");
console.log(a.next());
console.log("Out");
console.log(a.next());
console.log("Out");
console.log(a.next());
console.log("Out");