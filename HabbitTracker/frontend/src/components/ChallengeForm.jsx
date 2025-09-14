import { useState } from "react";
import { useChallengeStore } from "../store/challengeStore";

export default function ChallengeForm() {
  const [name, setName] = useState("");
  const { addChallenge } = useChallengeStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;
    await addChallenge({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        type="text"
        placeholder="New challenge..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-2 py-1 rounded w-full"
      />
      <button className="bg-green-500 text-white px-4 py-1 rounded">
        Add
      </button>
    </form>
  );
}
