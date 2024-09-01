const arr=[2,5,7,9,3,4,10];
function fun(arr,fn){
for(let i=0;i<=arr.length;i++){
    fn(arr[i]);
}
}
fun(arr,function(x){
    console.log(x);
});