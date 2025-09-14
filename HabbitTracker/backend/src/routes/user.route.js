import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { login, logout, signup } from "../controllers/user.controller.js";


const router=Router()

router.route("/login").post(login)
router.route("/signup").post(signup);
router.route("/logout").post(verifyJWT,logout);

export default router
