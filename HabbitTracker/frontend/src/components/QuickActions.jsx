import Button from "./ui/Button";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-3">
      <h2 className="text-lg font-semibold">Quick Actions</h2>
      <Button variant="primary">+ Add New Habit</Button>
      <Button variant="secondary">Challenge a Roommate</Button>
    </div>
  );
}
