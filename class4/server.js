const express = require("express");
const fs = require("fs")

const {getallproducts, getsingleproduct,
       addproducts, deleteproducts,
        patchdata, putdata} = require("./controllers/productsctrl.js");


const port = 8081
const app = express();




app.use(express.json())

app.get('/products',getallproducts)

app.get('/products/:id',getsingleproduct)


app.post('/products', addproducts)

app.delete('/products/:id', deleteproducts )

app.patch('/products/:id', patchdata)

app.put('/products/:id',putdata)



app.listen(port,()=>{
    console.log(`server is listing at ${port}`)
})

