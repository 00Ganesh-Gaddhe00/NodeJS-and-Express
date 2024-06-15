const http = require("http")
const fs = require("fs")
const url = require("url");



function serverhandler(req, res){
    // res.end("Hello from server")
    const log = req.url + " request recieved\n"
    
    const parsedUrl = url.parse(req.url, true)
    console.log(parsedUrl)
    
    fs.appendFileSync('log.txt', log)
    switch(parsedUrl.pathname){
        case '/': 
        res.end("This Home page Data")
        break;
        case '/about':
            res.end("This is About Route data")
        break;
        case '/contact':
            res.end("This is contact Route data")
        break;
        case '/products':
             
            res.end("This is products Route and as u the the shoeData : "+parsedUrl.query.shoe)
        break;
        default :
             res.end("Not found")
             break;
    }
}

const Gserver = http.createServer(serverhandler)

Gserver.listen(8003, ()=>{
    console.log("server is started and listening to 8003")
})