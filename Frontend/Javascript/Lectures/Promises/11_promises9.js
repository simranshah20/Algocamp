function download(url){
    return new Promise(function exec(res,rej){
     console.log("Started dowmloading data from",url);
     setTimeout(function(){
        let data="Some data from "+url;
        console.log("Downloaded data from ",url);
        res(data);
     },3000);
    })
}

function writeFile(data,fileName){
    return new Promise(function exec(res,rej){
        console.log("Writing ",data," to file");
        setTimeout(function(){
           console.log("Writing to file ",fileName);
           let status="Success";
           res(status);
        },2000);
       })
}

function upload(fileName,url){
    return new Promise(function exec(res,rej){
        console.log("Uploading File ",fileName," to ",url);
        setTimeout(function(){
            console.log("Upload is done");
           let uploadStatus="Success";
           res(uploadStatus);
        },2000);
       })
}

//this is parellel excution
// download("http://www.exp.com")
// .then(function f(value){
// console.log("Downloaded data is ",value);
// })

// writeFile("some data","file.txt")
// .then(function f(value){
//     console.log("Write status is ",value);
// })

// upload("File.txt","https://www.exp1.com")
// .then(function f(value){
//     console.log("Upload status is ",value);
// })

//this is sequential excution
 
// download -> waiting for downloading to complete -> we execute function f -> f calls writeFile -> 
// when file writing is done p2 is resolved -> the g is executed -> g calls upload -> when upload is done
// p3 is resolved -> then h is executed

// const p2=download("https://www.exp1.com")
// .then(function f(value){
//     console.log("Download data is ",value);
//     return writeFile(value,"file.txt");
// })

// const p3=p2.then(function g(value){
//     console.log("File written",value);
//     return upload(value,"https://www.exp1.com");
// })

// p3.then(function h(value){
//     console.log("File uploaded",value);
// });

//another way of doing same thing
//this is also called as .then chaining 
console.log("start");
download("https://www.exp1.com")
.then(function f(value){
    console.log("Download data is ",value);
    return writeFile(value,"file.txt");
})
.then(function g(value){
    console.log("File written",value);
    return upload(value,"https://www.exp1.com");
})
.then(function h(value){
    console.log("File uploaded",value);
})
.catch (function i(value){   //for error handling
    console.log("Error occured ",value);
})

