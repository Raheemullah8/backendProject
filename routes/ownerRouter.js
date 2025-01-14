const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let oners = await ownerModel.find();

    if (oners.length > 0) {
      return res.status(403).send("owner already exists")
      
    }
    let {fullname,email,password} = req.body
    let newOwner = await ownerModel.create({
        fullname,
        email,
        password,
    })
    res.status(201).send(newOwner)
  });
}

router.get("/admin", (req, res) => {
  let success = req.flash("success");
  res.render('createproduct',{success});
});

module.exports = router;
