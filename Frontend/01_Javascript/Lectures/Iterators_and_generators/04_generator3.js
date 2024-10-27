function* gen(){
    console.log("Inside Generator");
    const x=yield 10;
    const y=x+30;
    yield y;
}
const p=gen();
console.log(p.next());   //{ value: 10, done: false }
console.log(p.next(20));   //{ value: 50, done: false }
const x=p.next();
const y=it.next(x.value);

