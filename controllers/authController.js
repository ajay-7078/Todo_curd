const User = require("../models/User");
const bcrypt = require("bcryptjs");

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

exports.register = asyncHandler(async (req,res)=>{

    const {name,email,password} = req.body;

    // Validation
    if (!name || !email || !password) {
        return res.redirect("/register?error=All fields are required");
    }

    if (password.length < 6) {
        return res.redirect("/register?error=Password must be at least 6 characters");
    }

    // Check if email already exists
    const existingUser = await User.findOne({email});
    if (existingUser) {
        return res.redirect("/register?error=Email already registered");
    }

    const hash = await bcrypt.hash(password,10);

    await User.create({
        name,
        email,
        password: hash
    });

    res.redirect("/login?success=Registration successful! Please login.");
});

exports.login = asyncHandler(async (req,res)=>{

    const {email,password} = req.body;

    if (!email || !password) {
        return res.redirect("/login?error=Email and password are required");
    }

    const user = await User.findOne({email});

    if(!user){
        return res.redirect("/login?error=Invalid Email or Password");
    }

    const match = await bcrypt.compare(
        password,
        user.password
    );

    if(!match){
        return res.redirect("/login?error=Invalid Email or Password");
    }

    req.session.userId = user._id;

    res.redirect("/");
});

exports.logout = (req,res)=>{

    req.session.destroy((err)=>{
        if (err) {
            return res.status(500).render("error", { message: "Error logging out" });
        }
        res.redirect("/login");
    });
}