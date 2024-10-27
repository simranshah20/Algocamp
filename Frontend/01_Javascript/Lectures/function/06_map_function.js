const arr=[2,5,7,9,3,4,10];
arr.map(function s(element){   //we pass function as parameter in map
    console.log("Elements we received: ",element);    //map goes one by one to all elements of the array
    return element;
});
