function fun(a){
const arr=[4,6,9,"simran"];
a(arr);
}
fun(function gun(arr){
    console.trace("Call Stack");
});