const router = require("express").Router();

const auth =
require("../controllers/authController");

router.get("/register",(req,res)=>{
    res.render("register", { error: req.query.error });
});

router.post("/register",auth.register);

router.get("/login",(req,res)=>{
    res.render("login", { error: req.query.error, success: req.query.success });
});

router.post("/login",auth.login);

router.get("/logout",auth.logout);

module.exports = router;