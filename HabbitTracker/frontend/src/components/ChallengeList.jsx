import { useEffect } from "react";
import { useChallengeStore } from "../store/challengeStore";

export default function ChallengeList() {
  const { challenges, fetchChallenges, deleteChallenge, loading } = useChallengeStore();

  useEffect(() => {
    fetchChallenges();
  }, [fetchChallenges]);

  if (loading) return <p>Loading challenges...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Challenges</h2>
      <ul>
        {challenges.map((ch) => (
          <li key={ch._id} className="flex justify-between items-center p-2 border-b">
            <span>{ch.name}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => deleteChallenge(ch._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
