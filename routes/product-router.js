const express = require('express')
const upload = require("../config/multer-config")
const product  = require("../models/product-model")
const router = express.Router()
router.post("/create",upload.single("image"),async(req,res)=>{
    let {name,price,description,discount,image,bgcolor,panelcolor,textcolor} = req.body
   let products = await product.create({
      name,
      price,
      description,
      discount,
      image:req.file.buffer,
      bgcolor,
      panelcolor,
      textcolor
   })
   req.flash("success","Product created successfully")
   res.redirect('/owner/admin')
})
module.exports = router;