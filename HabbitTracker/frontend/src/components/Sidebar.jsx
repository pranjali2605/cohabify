import { Home, Calendar, BarChart2, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white shadow-lg flex flex-col p-6">
      <h1 className="text-2xl font-bold text-indigo-600 mb-10">Habit Tracker</h1>

      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 font-medium">
          <Home size={20}/> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 font-medium">
          <Calendar size={20}/> Calendar
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 font-medium">
          <BarChart2 size={20}/> Performance
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 font-medium">
          <Settings size={20}/> Settings
        </a>
      </nav>

      <div className="mt-auto">
        <p className="text-sm text-gray-500">© 2025 Habit Tracker</p>
      </div>
    </div>
  );
}
