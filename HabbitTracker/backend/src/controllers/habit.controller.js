import Habit from "../models/habit.model.js";
import User from "../models/user.model.js";

// @desc    Create a new habit
// @route   POST /api/habits
// @access  Private
export const createHabit = async (req, res) => {
  try {
    const { title, category, frequency } = req.body;

    const habit = await Habit.create({
      userId: req.user._id,
      title,
      category,
      frequency,
      streak: 0,
      longestStreak: 0,
      checkIns: [],
    });

    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all habits of logged-in user
// @route   GET /api/habits
// @access  Private
export const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.user._id });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a habit
// @route   PUT /api/habits/:id
// @access  Private
export const updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findOne({ _id: req.params.id, userId: req.user._id });
    if (!habit) return res.status(404).json({ message: "Habit not found" });

    Object.assign(habit, req.body);
    await habit.save();
    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a habit
// @route   DELETE /api/habits/:id
// @access  Private
export const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!habit) return res.status(404).json({ message: "Habit not found" });
    res.json({ message: "Habit deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Check-in a habit
// @route   POST /api/habits/:id/checkin
// @access  Private
export const checkInHabit = async (req, res) => {
  try {
    const habit = await Habit.findOne({ _id: req.params.id, userId: req.user._id });
    if (!habit) return res.status(404).json({ message: "Habit not found" });

    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const alreadyChecked = habit.checkIns.find(c => c.date.toISOString().split("T")[0] === today);

    if (alreadyChecked) return res.status(400).json({ message: "Already checked in today" });

    habit.checkIns.push({ date: new Date(), completed: true });
    habit.streak += 1;
    habit.longestStreak = Math.max(habit.streak, habit.longestStreak);
    await habit.save();

    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
