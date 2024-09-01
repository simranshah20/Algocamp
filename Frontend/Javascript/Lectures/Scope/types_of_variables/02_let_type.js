function test(){
    // s is not visible here
    {
    console.log(s);   //temporal dead zone(tdz) i.e called before declaration
    let s;
    s=90;
   console.log(s);
    }
}
test();