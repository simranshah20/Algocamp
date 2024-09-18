let str="Simran";
str[2]="a";
console.log(str);  //Simran  not able to update the value,hence strings are immutable

let a=[3,4,5,7,90,10];
a[4]=20;
console.log(a);  // [3, 4, 5, 7, 20,10] value is changed from 90 t0 20 at index 4,hence arrays are  mutable