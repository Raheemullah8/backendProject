const express = require('express')

const router = express.Router()
router.get("/",(req,res)=>{
    res.send('product its working')
})
module.exports = router;