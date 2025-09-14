import { useState } from "react";
import HabitCard from "./HabitCard";

export default function HabitTracker() {
  const [habits, setHabits] = useState([
    { id: 1, name: "Drink 8 glasses of water", streak: 5, badge: "Hydration Hero" },
    { id: 2, name: "30 minutes exercise", streak: 3 },
    { id: 3, name: "Read 15 pages of book", streak: 10, badge: "Bookworm" },
    { id: 4, name: "Daily meditation", streak: 1 },
    { id: 5, name: "Tidy up common area", streak: 7 },
  ]);

  const [newHabit, setNewHabit] = useState("");
  const [editingHabit, setEditingHabit] = useState(null);

  // ✅ Add Habit
  const addHabit = () => {
    if (!newHabit.trim()) return;
    setHabits([
      ...habits,
      { id: Date.now(), name: newHabit, streak: 0 },
    ]);
    setNewHabit("");
  };

  // ✅ Edit Habit
  const updateHabit = (id, updatedName) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, name: updatedName } : habit
    ));
    setEditingHabit(null);
  };

  // ✅ Delete Habit
  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-6">
      <h1 className="text-2xl font-bold">Habit Tracker</h1>

      {/* Add Habit */}
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="New habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          className="flex-1 border p-2 rounded-lg"
        />
        <button
          onClick={addHabit}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      {/* Habit List */}
      <div className="space-y-4">
        <h2 className="font-semibold">Your Habits</h2>
        {habits.map(habit => (
          <HabitCard
            key={habit.id}
            habit={habit}
            editingHabit={editingHabit}
            setEditingHabit={setEditingHabit}
            updateHabit={updateHabit}
            deleteHabit={deleteHabit}
          />
        ))}
      </div>
    </div>
  );
}
