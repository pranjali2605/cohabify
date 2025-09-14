export default function CalendarWidget() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold mb-2">Calendar</h2>
      <p className="text-sm text-gray-500 mb-3">August 2025</p>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day => (
          <div key={day} className="font-medium">{day}</div>
        ))}
        {[...Array(31)].map((_, i) => (
          <div
            key={i}
            className={`p-2 rounded-full cursor-pointer ${
              i+1 === 19 ? "bg-indigo-500 text-white" : "hover:bg-gray-100"
            }`}
          >
            {i+1}
          </div>
        ))}
      </div>
    </div>
  );
}
