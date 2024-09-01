const product={namep:"iphone",price:1230000,category:{categoryName:"Mobile", categoryId:14}};
const{category}=product;
console.log(product);
// prints {
//     namep: 'iphone',
//     price: 1230000,
//     category: { name: 'Mobile', categroryId: 14 }
//   }
console.log(category);   //prints { name: 'Mobile', categroryId: 14 }
const{categoryName}=category;
console.log("Category Name: ",categoryName);  //prints Category Name:  Mobile

//another way
const{category:{categoryId}}=product;    //destructuring nested object
console.log("category Id: ",categoryId);   //prints category Id:  14



const product1={namep:"iphone",price:1230000,category:{categoryName:"Mobile", categoryId:14,type:{typeName:"electronics",typeId:1}}};
const{category:{type}}=product1;
console.log("Type: ",type);    //prints Type:  { typeName: 'electronics', typeId: 1 }
const{category:{type:{typeName,typeId}}}=product1;
console.log("Type Name: ",typeName);  //prints Type Name:  electronics
console.log("Type Id: ",typeId);   //prints Type Id: 1

