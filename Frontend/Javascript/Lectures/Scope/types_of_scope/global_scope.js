        console.log("Global scope variables");
        let x = 10;   //global scope variable
        function global() {
            console.log(x);
        }
        function gun() {
            for (let i = 0; i < x; i++)
                console.log(i);
        }
        global();
        gun();
        console.log("value of x is:" ,x);
