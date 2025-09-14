import express from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  createChallenge,
  getChallenges,
  updateChallengeProgress,
} from "../controllers/challenge.controller.js";

const router = express.Router();
router.use(verifyJWT);

router.post("/", createChallenge);
router.get("/", getChallenges);
router.post("/:id/progress", updateChallengeProgress);

export default router;
