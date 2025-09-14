import { Home, Calendar, Users, DollarSign, Smile, BarChart } from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="h-16 flex items-center justify-center font-bold text-xl text-indigo-600">
          ✨ Logo
        </div>
        <nav className="flex-1 px-4 py-6 space-y-3 text-gray-700">
          <NavItem icon={<Home size={18} />} label="Dashboard" />
          <NavItem icon={<Calendar size={18} />} label="Habit Tracker" active />
          <NavItem icon={<Users size={18} />} label="RoomMates" />
          <NavItem icon={<DollarSign size={18} />} label="Expenses" />
          <NavItem icon={<Smile size={18} />} label="Mood Mirror" />
          <NavItem icon={<Users size={18} />} label="SecretCircle" />
          <NavItem icon={<BarChart size={18} />} label="Analytics" />
        </nav>
        <div className="p-4 text-sm text-gray-500">⚙ Settings</div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
          <h1 className="text-lg font-semibold">Your Habits & Streaks</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search habits, expenses, posts..."
              className="border rounded-lg px-3 py-1.5 w-80 text-sm focus:ring-2 focus:ring-indigo-500"
            />
            <div className="w-8 h-8 rounded-full bg-indigo-200"></div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
        active ? "bg-indigo-100 text-indigo-600 font-medium" : "hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
