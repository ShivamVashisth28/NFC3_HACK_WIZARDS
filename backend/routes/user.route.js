import { Router } from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { tokenDecoder, tokenGenerator } from "../utils/tokenGenerator.js";

const router = Router()

router.get('/signup', async (req,res) => {
    
    const {name, username, password, email, avatar, pets} = req.body

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        username,
        email,
        hashedPassword,
        avatar,
        pets
    })

    if(!user) {
        return res.json({success: false, message:"user not created"});
    }

    const token = tokenGenerator(username)

    if(!token){
        return res.json({success: false, message: "Token generation Error"})
    }

    // upload avatar to cloudinary in frontend

    await user.save()

    return res.json({success: true, message:"User Signed Up successfully" , token})
})

router.get('/login', async (req, res) => {
    const {username, password} = req.body

    const user = await User.find({username});

    if(!user){
        return res.json({success:false, message:"User with the given username not found"})
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password)

    if(!isCorrectPassword){
        return res.json({success: false, message:"Wrong Password"})
    }

    // user is there and password is correct, generate token and make him login

    const token = tokenGenerator(username);

    if(!token){
        return res.json({success: false, message: "Token generation Error"})
    }

    return res.json({success: true, message:"User LoggedIn successfully" , token})
})





export default router