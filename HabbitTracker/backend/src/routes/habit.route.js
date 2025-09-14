import express from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  createHabit,
  getHabits,
  updateHabit,
  deleteHabit,
  checkInHabit,
} from "../controllers/habit.controller.js";

const router = express.Router();

router.use(verifyJWT);

router.post("/", createHabit);
router.get("/", getHabits);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);
router.post("/:id/checkin", checkInHabit);

export default router;
