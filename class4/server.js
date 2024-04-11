const express = require("express");
const fs = require("fs")

const {getallproducts, getsingleproduct,
       addproducts, deleteproducts,
        patchdata, putdata} = require("./controllers/productsctrl.js");


const port = 8081
const app = express();
const productrouter = require("./routes/productsRTS.js")





app.use(express.json())

app.use('/products', productrouter )


app.listen(port,()=>{
    console.log(`server is listing at ${port}`)
})

