//to make code maintainable and extendable we use design patterns

class product{
    constructor(builder){
        this.name=builder.name;
        if(builder.price && builder.price=="number"){  //validation for price
            this.price=builder.price;
        }
        else{
            return null;
        }
        this.description=builder.description;
        this.category=builder.category;
        this.rating=builder.rating;
    }
}

const p=new product({
    name:"product1",
    price:100,
    description:"product1 description",
    category:"product1 category",
    rating:4.5
});
console.log(p);
