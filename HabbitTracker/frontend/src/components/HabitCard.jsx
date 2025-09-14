export default function HabitCard({ habit }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl shadow p-4">
      <div>
        <p className="font-medium">{habit.name}</p>
        <div className="w-40 h-2 bg-gray-200 rounded-full mt-2">
          <div
            className="h-2 bg-indigo-500 rounded-full"
            style={{ width: `${habit.progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">{habit.streak} Day Streak</span>
        {habit.badge && (
          <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
            {habit.badge}
          </span>
        )}
      </div>
    </div>
  );
}
