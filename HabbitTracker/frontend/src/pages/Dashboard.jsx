import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CalendarWidget from "../components/CalendarWidget";
import WeeklyPerformance from "../components/WeeklyPerformance";
import QuickActions from "../components/QuickActions";
import HabitList from "../components/HabitList";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="grid grid-cols-3 gap-6 p-6 overflow-y-auto">
          {/* Left side */}
          <div className="col-span-2 space-y-6">
            <CalendarWidget />
            <HabitList />
          </div>

          {/* Right side */}
          <div className="space-y-6">
            <WeeklyPerformance />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}
