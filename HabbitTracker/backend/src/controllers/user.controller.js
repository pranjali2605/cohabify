import  User  from "../models/user.model.js"
import jwt from "jsonwebtoken"

const generateToken = (id) => { return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" }); };
export const signup = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      const userExists = await User.findOne({ email });
      if (userExists) return res.status(400).json({ message: "User already exists" });
  
      const user = await User.create({ username, email, password });
  
      if (user) {
        const token = generateToken(user._id);
  
        // Store JWT in httpOnly cookie
        res.cookie("jwt", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // only https in prod
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
  
        res.status(201).json({
          _id: user._id,
          username: user.username,
          email: user.email,
        });
      } else {
        res.status(400).json({ message: "Invalid user data" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "User not found" });
  
      const isMatch = await user.matchPassword(password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = generateToken(user._id);
  
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
  
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const logout = async (req, res) => {
    try {
      res.clearCookie("jwt", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      res.json({ message: "User logged out successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
      