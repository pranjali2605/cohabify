import Challenge from "../models/challenge.model.js";
import Habit from "../models/habit.model.js";
import User from "../models/user.model.js";

// @desc    Create a new challenge (habit duel)
// @route   POST /api/challenges
// @access  Private
export const createChallenge = async (req, res) => {
  try {
    const { habitId, participants, startDate, endDate } = req.body;

    // Make sure the habit belongs to the requester
    const habit = await Habit.findOne({ _id: habitId, userId: req.user._id });
    if (!habit) return res.status(404).json({ message: "Habit not found" });

    // Ensure participants are valid users
    const validUsers = await User.find({ _id: { $in: participants } });
    if (validUsers.length !== participants.length) {
      return res.status(400).json({ message: "Some participants are invalid" });
    }

    const progress = {};
    participants.forEach(p => { progress[p] = { streak: 0 }; });
    progress[req.user._id] = { streak: habit.streak };

    const challenge = await Challenge.create({
      habitId,
      participants: [...participants, req.user._id],
      startDate,
      endDate,
      progress,
    });

    res.status(201).json(challenge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get challenges of logged-in user
// @route   GET /api/challenges
// @access  Private
export const getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find({ participants: req.user._id }).populate("habitId participants", "title username");
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update progress in a challenge (increment streak)
// @route   POST /api/challenges/:id/progress
// @access  Private
export const updateChallengeProgress = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) return res.status(404).json({ message: "Challenge not found" });

    if (!challenge.participants.includes(req.user._id)) {
      return res.status(403).json({ message: "Not a participant of this challenge" });
    }

    challenge.progress.set(req.user._id.toString(), { streak: (challenge.progress.get(req.user._id.toString())?.streak || 0) + 1 });
    await challenge.save();

    res.json(challenge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
