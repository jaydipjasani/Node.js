// Send Response to the browser

const http = require('http');
http.createServer((req,res)=>{
    res.write("send response to the browser");
    res.end();
}).listen(4500)


// Create New File
const fs = require('fs');
fs.writeFileSync('first.html',"First file create using writeFileSync")

//Create file in specific folder


const path = require('path');
const dirPath = path.join(__dirname,'Components')
fs.writeFileSync(dirPath + '/first.js',"<h1>This is first file created into selected folder</h1>");


