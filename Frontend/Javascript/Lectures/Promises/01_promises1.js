function download(url,callback){
console.log("Downloading from ",url);
setTimeout(()=>{
    console.log("Download is Done");
    let downloadedData="some data"
    callback?.(downloadedData);
},4000);
}
function writeFile(data,fileName,callback){
    //fileName tells the name of the file to be created in which data will be  written
    console.log("writing",data, "to file");
    setTimeout(()=>{
        console.log("Writing to file ",fileName," is done");
        let status="success";
        callback?.(status);
    },3000);
}
function upload(fileName,url,callback){
    //fileName tells the name of the file to be uploaded
    console.log("Uploading file ",fileName," to ",url);
    setTimeout(()=>{
        console.log("Upload is done");
        let uploadStatus="success";
        callback?.(uploadStatus);
    },4000);
}

function process(){
    download("https://example.com/file",function handleDownload(data){
        writeFile(data, "file.txt", function handleWrite(status) {
            upload("file.txt", "https://example.com/upload", function handleUpload(uploadStatus) {
                console.log("All done");
            });
        });
    });
}
process();




// output
// Downloading from  https://example.com/file
// Download is Done
// writing some data to file
// Writing to file  file.txt  is done
// Uploading file  file.txt  to  https://example.com/upload
// Upload is done
// All done

