class Product{  //class name Product

    //data members,we cannot define data members using let,var,const in class because it gives you compile time error
    name;
    category;
    description;
    price;
    rating;
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
console.log(typeof(Product));    //prints function
console.log(Product);    //prints [class Product]

