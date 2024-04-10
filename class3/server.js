const express = require("express");
const fs = require("fs")


const port = 8082
const app = express();

const data = JSON.parse(fs.readFileSync("./data.json", 'utf-8'))
// console.log(data)
const products = data.products


console.log(products);
app.get('/', (req,res)=>{
    res.send("dummy jason data")
})

app.get('/products', (req, res)=>{
    res.send(products)
})

app.get('/products/:id', (req, res)=>{
    //console.log(req.params)//req.params is an object
     const id = req.params.id
    const product = products.find((ele)=>ele.id==id)
    res.send(product);
})


app.listen(port,()=>{
    console.log(`server is listing at ${port}`)
})

