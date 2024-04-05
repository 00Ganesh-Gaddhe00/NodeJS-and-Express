const fs = require('fs');

//console.log(fs);
//CRUD - Read, Write, Update and Delete a file using FS(File System) module;

//write into a file, if it exists overwrite else create new one and put data to it.
//fs.writeFileSync("file.text", 'Hey, I am data of file.txt and now updated again')

//read
//let filedata = fs.readFileSync("file.text");
//console.log(filedata)// comes in Binary Data
//console.log(filedata+"") //concatinated with string to convert buffer data into string

//update
// fs.appendFileSync("file.text", "appended data = aijdaijdiajdajdadkadsjlkasjdlkjsd")
// filedata = fs.readFileSync("file.text");
// console.log(filedata+"")

//Delete
// fs.unlinkSync('file.text')
//  filedata = fs.readFileSync("file.text");
const ifexist = fs.existsSync("myDirectory");
console.log(ifexist);
if(!fs.existsSync("myDirectory2"))
fs.mkdirSync("myDirectory2")

// if(fs.existsSync("myDirectory2"))
//  fs.rmdirSync('myDirectory2')

