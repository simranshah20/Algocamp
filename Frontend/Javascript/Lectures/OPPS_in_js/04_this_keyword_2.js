let myName={
    first:"Simran",
    last:"Shah",
    a:function(){
        console.log(this.first,this.last);
    }
}
myName.a();   //myName became call site as it is calling the function a which has this and prints Simran Shah

let obj = {
    first: "Kavya",
    last: "Shah",
      b: function() {
        const arrow=()=>{
            console.log(this.first, this.last);  //this resolve laxically in arrow function
        }
       arrow();
      }
    }
  obj.b(); // Output: Kavya Shah