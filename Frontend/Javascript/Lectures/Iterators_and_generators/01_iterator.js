//simple iterator design pattern in js
function fetchNextElement(arr){
    let index=0;
    function next(){
        if(index>=arr.length){
            return {value: undefined,done: true};
        }    
     const newElement=arr[index];
     index++;
     return {value: newElement,done: false};
    }
    return {next};
}

// arr=[1,2,3,4,5]
// fetchNextElement(arr)=>1
// fetchNextElement(arr)=>2
// fetchNextElement(arr)=>3
// fetchNextElement(arr)=>4
// fetchNextElement(arr)=>5
// fetchNextElement(arr)=>undefined

const iterator=fetchNextElement([1,2,3,4,5]);
console.log(iterator.next());  
console.log(iterator.next());  
console.log(iterator.next());  
console.log(iterator.next());  
console.log(iterator.next());  
console.log(iterator.next());  