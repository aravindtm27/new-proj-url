const express = require("express");
const ShortUrl = require("../models/shorturl")
const staticRoute = require("../route/static")

const router = express.Router();

router.post('/shortUrls', async (req,res)=>{
    await ShortUrl.create({full:req.body.fullUrl,
                           createdBy: req.user._id,});
    res.redirect('/',staticRoute);
 });

 module.exports = router;