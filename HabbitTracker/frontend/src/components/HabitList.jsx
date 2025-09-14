import HabitCard from "./HabitCard";

const mockHabits = [
  { name: "Drink 8 glasses of water", progress: 70, streak: 5, badge: "Hydration Hero" },
  { name: "30 minutes exercise", progress: 40, streak: 3, badge: "" },
  { name: "Read 15 pages of book", progress: 90, streak: 10, badge: "Bookworm" },
  { name: "Daily meditation", progress: 20, streak: 1, badge: "" },
  { name: "Tidy up common area", progress: 60, streak: 7, badge: "" },
  { name: "Learn new language (Duolingo)", progress: 30, streak: 2, badge: "" },
];

export default function HabitList() {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-3">
      <h2 className="font-semibold mb-3">Your Habits</h2>
      {mockHabits.map((habit, i) => (
        <HabitCard key={i} habit={habit} />
      ))}
    </div>
  );
}
