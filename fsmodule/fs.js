const fs = require("fs")
const path = require("path")


////read

// const f1data = fs.readFileSync("f1.txt");
// fs.readFile("f2.txt", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//          return ("file2 data =" + data)  
//       }
// })

///write
// fs.writeFileSync('f2.txt', "updated file2 data")

// fs.writeFile("f3.txt","created file3 data", (err)=>{
        
// })

///update

// fs.appendFileSync("f1.txt", "  appended data")

//delete

// fs.unlinkSync("f3.txt")

//createdirectory

// fs.mkdirSync("Directory 2")
// fs.mkdirSync("Directory 3")
// fs.mkdirSync("Directory 4")

//remove directory

// 

//exist
// const exist = fs.existsSync('f1.txt')

// console.log(exist)

////////moving file from one directory to another

// const sourcePath = "/Users/ganeshg/Documents/frontend/NodeJS and Express/fsmodule/Directory 2/Dir2file.txt"
// const destDirectory = "/Users/ganeshg/Documents/frontend/NodeJS and Express/fsmodule/Directory 1"


//  const baseName = path.basename(sourcePath);

// const finalPath = path.join(destDirectory, baseName)

// fs.copyFileSync(sourcePath, finalPath)

// fs.unlinkSync(sourcePath)

const filePath = "/Users/ganeshg/Documents/frontend/NodeJS and Express/fsmodule/Directory 1/Dir2file.txt"
const destDirectory = "/Users/ganeshg/Documents/frontend/NodeJS and Express/fsmodule/Directory 2"

const baseName = path.basename(filePath)

const destPath = path.join(destDirectory, baseName)

fs.copyFileSync(filePath, destPath)

fs.unlinkSync(filePath)
