class Product{  //class name Product

    //data members,we cannot define data members using let,var,const in class because it gives you compile time error
    name;
    category;
    description;
    price;
    rating;

    constructor(){  //default constructor
        console.log("constructor called......");   //it is first function to call automatically
    }
    //we can not write function addToCart(){}, it will give compile time error
    addToCart(){   //member Function  define the behaviour of the product
        console.log("Product added to cart");
    }

    removeFromCart(){    //member Function  define the behaviour of the product
        console.log("Product removed from cart");
    }

    displayProduct(){     //member Function  define the behaviour of the product
        console.log("Product details");
    }

    buyProduct(){    //member Function  define the behaviour of the product
        console.log("Product bought");
    }
}
//create an object a
let a=new Product();  //new is used to create an object
 console.log(a);   
//  prints Product {
//     name: undefined,
//     category: undefined,
//     description: undefined,
//     price: undefined,
//     rating: undefined
//   }
// //call the methods to display the output
