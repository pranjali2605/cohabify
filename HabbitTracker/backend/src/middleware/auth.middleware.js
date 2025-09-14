import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import  User  from "../models/user.model.js";

export const verifyJWT=asyncHandler(async(req,_,next)=>{
   try {
    const token = req.cookies?.jwt ||
        req.header("Authorization")?.replace("Bearer ", "").trim();


    if(!token){
        throw new ApiError(401,"Unautorized request")
    }
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET)
    const user=await User.findById(decodedToken?._id).select(
        "-password"
    )
    if(!user){
        throw new ApiError(401,"Invalid Access Token")
    }
    req.user=user;
    next()
   } catch (error) {
    throw new ApiError(401,error?.message||"Invalid access token")
   }

})