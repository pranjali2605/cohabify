import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import ChallengeForm from "./components/ChallengeForm";
import ChallengeList from "./components/ChallengeList";

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Habit Tracker</h1>

      <HabitForm />
      <HabitList />

      <hr className="my-6" />

      <ChallengeForm />
      <ChallengeList />
    </div>
  );
}

export default App;
