const express= require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const router = express.Router();

router.post('/', handleUserSignup);
router.post('/login', handleUserLogin);

router.get('/signup', (req,res)=>{
    res.render("signup.ejs");
})

router.get('/login', (req,res)=>{
    res.render('login.ejs');
});


module.exports = router;