import { useState } from "react";
import { useHabitStore } from "../store/habitStore";

export default function HabitForm() {
  const [name, setName] = useState("");
  const { addHabit } = useHabitStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;
    await addHabit({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        type="text"
        placeholder="New habit..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-2 py-1 rounded w-full"
      />
      <button className="bg-blue-500 text-white px-4 py-1 rounded">
        Add
      </button>
    </form>
  );
}
