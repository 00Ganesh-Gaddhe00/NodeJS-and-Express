const express = require("express")
const products = require("./MOCK_DATA.json")
const fs = require("fs")


const app = express();
const port = 8024

app.use(express.urlencoded());
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("<h1>MainPage</h1>")
})

//Hybrid or global data sharing or API development
app.get("/api/products", (req, res)=>{
    res.json(products)
})

app.get("/products", (req,res)=>{
    res.send(`<ul> ${products.map((product)=>`<li>${product.Product_name}</li>`)}</ul>`)
})

//root parameters or params

app.get("/api/products/:id", (req, res)=>{
    const id  = Number(req.params.id)
    console.log(req.params)
    
    const product = products.find((product)=> product.id === id)

    console.log(product)

    res.json(product)
})

app.listen(port, ()=>{
    console.log("server is up and running on 8004")
})

//post method

app.post("/api/products", (req, res)=>{
   const newData = req.body;
   products.push({id:products.length+1, ...newData})

   fs.writeFile("./MOCK_DATA.json", JSON.stringify(products), (err, data)=>{
        return res.send({
            status: "successfully updated",
            id : products.length
        })
   })

   

})

//put

app.put("/api/products/:id", (req, res)=>{
   const id  = Number(req.params.id)
   console.log(id)

   const productIndex = products.findIndex((product)=>product.id===id)

   products[productIndex] = {id:id,...req.body}

   fs.writeFile("./MOCK_DATA.json", JSON.stringify(products), (err) => {
    if (err) {
      return res.status(500).json({ status: "error", message: "Failed to write productfile" });
    }
    return res.json({ status: "updated successfully", id: id });
  });

})

app.delete("/api/products/:id", (req, res)=>{
    const id  = Number(req.params.id)
     const index = products.findIndex((product)=>product.id===id)
     
     products.splice(index,1)


     fs.writeFile("./MOCK_DATA.json", JSON.stringify(products), (err) => {
        if (err) {
          return res.status(500).json({ status: "error", message: "Failed to write productfile" });
        }
        return res.json({ status: "DELETED successfully", id: id });
      });


})