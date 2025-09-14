import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema(
  {
    habitId: { type: mongoose.Schema.Types.ObjectId, ref: "Habit", required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users in duel
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    progress: {
      type: Map,
      of: new mongoose.Schema({
        streak: { type: Number, default: 0 },
      }),
    },
    winner: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

const Challenge = mongoose.model("Challenge", challengeSchema);
export default Challenge;
