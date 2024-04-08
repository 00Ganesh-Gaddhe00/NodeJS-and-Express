const http = require('http');
const data = {name:"ajay",
              age: "30" }
const server = http.createServer((req,res)=>{
    // console.log("Server has been started");
    res.setHeader('Content-Type','Stringyfied JSON');
res.end(JSON.stringify(data));

})

server.listen(8080)