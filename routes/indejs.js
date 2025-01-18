const express = require('express');
const {isLoggedin} = require('../middlerware/isLoggedin')
const router = express.Router()
const productModel = require('../models/product-model')

router.get('/',(req,res)=>{
    let error = req.flash('error');
    res.render('index',{error})
})
router.get('/shop',isLoggedin,async(req,res)=>{
    let products = await productModel.find();
    res.render('shop',{products})
})


module.exports = router;

