//Given  a string,try to print the no. of occurance of each unique character of string

let str="simran shah";
let freqMap={};
for(const char of str){
    //if the character is not present,we have false
    if(freqMap[char]){   //fetch the data 
        freqMap[char]+=1;   //if present update it
    }else{
        freqMap[char]=1;   //if not present add it
    }
}
console.log(freqMap);