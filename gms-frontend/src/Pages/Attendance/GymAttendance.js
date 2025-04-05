import React, { useState } from 'react';

const attendanceData = [
  { name: 'Aman Gupta', date: '2025-04-04', timeIn: '08:00' },
  { name: 'Meera Singh', date: '2025-04-04', timeIn: '09:30' },
  { name: 'Ravi Kumar', date: '2025-04-03', timeIn: '07:45' },
  { name: 'Simran Kaur', date: '2025-04-03', timeIn: '10:15' },
];

const attendanceByDate = attendanceData.reduce((acc, entry) => {
  acc[entry.date] = (acc[entry.date] || 0) + 1;
  return acc;
}, {});

const GymAttendance = () => {
  const [searchName, setSearchName] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const filtered = attendanceData.filter(entry =>
    entry.name.toLowerCase().includes(searchName.toLowerCase()) &&
    (filterDate === '' || entry.date === filterDate)
  );

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold text-pink-400 mb-6">📋 Gym Attendance</h1>

      {/* Search + Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          className="p-2 rounded bg-gray-800 text-white"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          type="date"
          className="p-2 rounded bg-gray-800 text-white"
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      {/* Attendance Table */}
      <div className="bg-gray-800 rounded-xl p-6 mb-6 shadow-lg overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Attendance Records</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-blue-300 border-b border-gray-600">
              <th className="py-2">Member Name</th>
              <th className="py-2">Date</th>
              <th className="py-2">Time In</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((entry, idx) => (
              <tr key={idx} className="hover:bg-gray-700 transition">
                <td className="py-2">{entry.name}</td>
                <td className="py-2">{entry.date}</td>
                <td className="py-2 text-green-400 font-semibold">{entry.timeIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Basic Bar Chart */}
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-yellow-300">📊 Attendance Summary</h2>
        <div className="flex items-end gap-6 h-48">
          {Object.entries(attendanceByDate).map(([date, count]) => (
            <div key={date} className="text-center">
              <div
                className="bg-green-400 w-12 mx-auto rounded-t"
                style={{ height: `${count * 40}px` }}
              ></div>
              <p className="mt-2 text-sm">{date}</p>
              <p className="text-xs text-gray-300">{count} visits</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GymAttendance;
