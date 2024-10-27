
const product={namep:"iphone",price:1230000,categrory:"Mobile"}
const{namep,price}=product;
console.log(product);    //prints { name: 'iphone', price: 1230000,categrory: 'Mobile' }
//console.log(categrory);   //error because we have not unpacked categrory
const purchasedProduct={orderId:"dhfgj234",orderdate:"16/8/2024",...product}   //here ... is a spread operator used to unpack one object's all key values pair inside another object 
console.log(purchasedProduct);   
const purchasedProduct1={price:1250000,orderId:"dhfgj234",orderdate:"16/8/2024",...product}
console.log(purchasedProduct1);
const purchasedProduct2={orderId:"dhfgj234",orderdate:"16/8/2024",...product,price:459900}
console.log(purchasedProduct2);