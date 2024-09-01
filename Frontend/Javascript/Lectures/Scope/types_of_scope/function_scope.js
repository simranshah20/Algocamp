console.log("Function scope variables");
        function fun() {
            let x = 20; //local scope variable
            console.log(x);
        }
        function Gun() {
            for (let i = 0; i < x; i++)  //x is not visible here
                console.log(i);
        }
        fun();
        Gun();
        console.log("value of x is: ",x);  //x is not visible here also