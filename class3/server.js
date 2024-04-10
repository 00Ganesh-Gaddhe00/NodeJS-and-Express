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

    if(!product)res.send("No product present with the given id")
    else res.send(product);
})

app.use(express.json())//parse incoming JSON requests

app.post('/products', (req, res)=>{
    //console.log(req.body)
    products.push(req.body)
    res.send("post")
})

app.delete('/products/:id', (req, res)=>{
    const id = req.params.id
    const productIndex = products.findIndex((ele)=> ele.id==id)
    products.splice(productIndex,1)
    res.send("product deleted")
})


app.listen(port,()=>{
    console.log(`server is listing at ${port}`)
})

