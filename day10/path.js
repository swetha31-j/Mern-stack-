let path=require("path");
console.log(path.dirname("/user/test/file.txt"));

let fullPath=path.join("folder","file.txt");
console.log("fullPath");

// path.basename("/user/test/file.txt");
//path.extname("index.js");
// path.isAbsolute("/user/app");

let fs=require('fs');
fs.mkdir('./document',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Folder created successfully");
    }
    }
);
