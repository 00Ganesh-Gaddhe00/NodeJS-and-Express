const FS = require("fs");
const path = require("path")

const srcPath = "/Users/ganeshg/Documents/frontend/NodeJS and Express/class1/myDirectory1/file.md"
const destPath = "/Users/ganeshg/Documents/frontend/NodeJS and Express/class1/myDirectory2"

const srcBSname = path.basename(srcPath)
console.log(srcBSname);

const movedPath = destPath +"/"+srcBSname

console.log(movedPath)

FS.copyFileSync(srcPath,movedPath)

FS.unlinkSync(srcPath);