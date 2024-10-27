class Product{
    static x="77";   //static data member
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
}
let q=new Product("iphone",1200000);   
console.log(q.x);  //prints undefined,it means x is not accessible with object(q)
Product.x=100;
console.log(Product.x);   //prints 77,it means x is accessible with class(Product)
console.log("updated value of x is: ",Product.x);   //prints updated value of x is: 100

