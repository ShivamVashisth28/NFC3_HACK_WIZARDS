import { Router } from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { tokenGenerator } from "../utils/tokenGenerator.js";

const router = Router()

// Signup Route
router.post('/signup', async (req, res) => {
    const { name, username, password, email, avatar, pets } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const user = await User.create({
            name,
            username,
            email,
            password: hashedPassword, 
            avatar,
            pets
        });

        if (!user) {
            return res.json({ success: false, message: "User not created" });
        }

        // Generate token
        const token = tokenGenerator(username);

        if (!token) {
            return res.json({ success: false, message: "Token generation error" });
        }

        // Save the user
        await user.save();

        return res.json({ success: true, message: "User signed up successfully", token });
    } catch (error) {
        return res.json({ success: false, message: "Error during signup", error });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.json({ success: false, message: "User with the given username not found" });
        }

        // Compare the password
        const isCorrectPassword = await bcrypt.compare(password, user.password);

        if (!isCorrectPassword) {
            return res.json({ success: false, message: "Wrong password" });
        }

        // Generate token
        const token = tokenGenerator(username);

        if (!token) {
            return res.json({ success: false, message: "Token generation error" });
        }

        return res.json({ success: true, message: "User logged in successfully", token });
    } catch (error) {
        return res.json({ success: false, message: "Error during login", error });
    }
});

export default router;
