import mongoose from "mongoose";

const checkInSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  completed: { type: Boolean, default: false },
});

const habitSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["Study", "Health", "Wellness", "Productivity"],
      default: "Productivity",
    },
    frequency: { type: String, enum: ["daily", "weekly"], default: "daily" },
    streak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    checkIns: [checkInSchema],
  },
  { timestamps: true }
);

const Habit = mongoose.model("Habit", habitSchema);
export default Habit;
