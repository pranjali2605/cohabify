import { useEffect } from "react";
import { useHabitStore } from "../store/habitStore";

export default function HabitList() {
  const { habits, fetchHabits, deleteHabit, loading } = useHabitStore();

  useEffect(() => {
    fetchHabits();
  }, [fetchHabits]);

  if (loading) return <p>Loading habits...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Habits</h2>
      <ul>
        {habits.map((habit) => (
          <li key={habit._id} className="flex justify-between items-center p-2 border-b">
            <span>{habit.name}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => deleteHabit(habit._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
