const express = require("express");
const ShortUrl = require('../models/shorturl');

const router = express.Router();


router.get('/:shortUrls',async (req,res)=>{
    const shortUrl = await ShortUrl.findOne({short:req.params.shortUrls})
    if(shortUrl === null) return res.sendStatus(404);

    shortUrl.clicks++;
    shortUrl.save();

    res.redirect(shortUrl.full);
})

router.post('/shortUrls', async (req,res)=>{
    await ShortUrl.create({full:req.body.fullUrl});
    res.redirect('/');
 });


router.get('/', async (req,res)=>{
    const shortUrls = await ShortUrl.find();
    res.render('index', {shortUrls:shortUrls});
});


module.exports = router;