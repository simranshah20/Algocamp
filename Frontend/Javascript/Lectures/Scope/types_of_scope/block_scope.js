console.log("block scope variables");

        {
            let x = 50;  //block scope variable
            console.log(x);
        }
        console.log(x);  //error,we can not access x here because in this case x is a block scope variable and can be only access within the block 