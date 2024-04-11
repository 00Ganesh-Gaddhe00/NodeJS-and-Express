const fs = require("fs");

const data = JSON.parse(fs.readFileSync('../class3/data.json', 'utf-8'))

const products = data.products
// console.log(products);

const getallproducts = (req, res)=>{
    res.send(products);
}

const getsingleproduct = (req, res)=>{
     const id = req.params.id
    const product = products.find((ele)=>ele.id==id)

    if(!product)res.send("No product present with the given id")
    else res.send(product);
}

const addproducts = (req, res)=>{
    products.push(req.body)
    res.send("post")
}

const deleteproducts = (req, res)=>{
    const id = req.params.id
    const productIndex = products.findIndex((ele)=> ele.id==id)
    products.splice(productIndex,1)
    res.send("product deleted")
}

const patchdata = (req, res)=>{
    const id = req.params.id
    const productIndex = products.findIndex((ele)=>ele.id==id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.send("updating the existing key")
}

const putdata = (req, res)=>{
    const id =req.params.id
    const productIndex = products.findIndex((ele)=>ele.id==id);
    products[productIndex] = req.body
    res.send("updating the exsiting key")

}


module.exports = { getallproducts, getsingleproduct, addproducts, deleteproducts, patchdata, putdata }

