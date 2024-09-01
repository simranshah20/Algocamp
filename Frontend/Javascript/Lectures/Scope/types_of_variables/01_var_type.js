
        //var variable
        var teacher = "simran shah";
        function fun() {
            var teacher = "Sony";
            console.log("Hello ", teacher);  //prints  hello sony
        }
        function gun() {
            var student = "simu";
            console.log(student); //prints simu
            console.log(student,teacher);   //prints simu simran shah
        }
        fun();
        gun();

        function num() {
            console.log("The value of x here is: ", x);  //here value of x=undefined
            var x = 10;
            console.log("The value of x here is: ", x);  //here value of x=10
        }
        num();
   