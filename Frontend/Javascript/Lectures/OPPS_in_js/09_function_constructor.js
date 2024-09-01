function Product(n,p,d){
    this.name=n;
    this.price=p;
    this.description=d;

    this.displayProduct=function(){  // this function act as constructor and it takes few parameters  and uses this keyword to assign them 
      console.log("Name: ",this.name,"price: ",this.price,"Description: ",this.description)  
    }
}
let a=new Product("SamsungS24",299999,"Android");    //calling a constructor of Product with new keyword i.e a
console.log(a.displayProduct());  //prints Name:  SamsungS24 price:  299999 Description:  Android