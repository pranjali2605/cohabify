import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between bg-white shadow px-6 py-3">
      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-1/3">
        <Search size={18} className="text-gray-500"/>
        <input
          type="text"
          placeholder="Search habits..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <Bell size={20} className="text-gray-600 cursor-pointer"/>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </div>
  );
}
