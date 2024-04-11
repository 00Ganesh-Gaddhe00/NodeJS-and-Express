
const express = require("express");

const {getallproducts, getsingleproduct,
    addproducts, deleteproducts,
     patchdata, putdata} = require("../controllers/productsctrl.js");

     const router = express.Router();

     router.get('/',getallproducts)

router.get('/:id',getsingleproduct)


router.post('/', addproducts)

router.delete('/:id', deleteproducts )

router.patch('/:id', patchdata)

router.put('/:id',putdata)


module.exports = router


