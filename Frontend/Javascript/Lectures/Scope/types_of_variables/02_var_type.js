
        //var variable
        var teacher = "simran shah";
        function fun() {
            var teacher = "Sony";
            console.log("Hello ", teacher);  //prints  hello sony
       
            function gun() {
                var student = "simu";
                console.log(student); //prints simu
                console.log(student,teacher);  //prints simu sony
        }
         gun();
       }
        fun();
        