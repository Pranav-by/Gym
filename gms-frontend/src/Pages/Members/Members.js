import React, { useState } from 'react';

const Members = () => {
  const originalMembers = [
    { id: '001', name: 'John Doe', email: 'john@example.com', joined: '2025-04-01', plan: 'Gold' },
    { id: '002', name: 'Aman Gupta', email: 'aman@gymmail.com', joined: '2025-04-03', plan: 'Platinum' },
    { id: '003', name: 'Meera Singh', email: 'meera.singh@gymmail.com', joined: '2025-04-04', plan: 'Standard' },
    { id: '004', name: 'Ravi Kumar', email: 'ravi.kumar@gymmail.com', joined: '2025-04-02', plan: 'Basic' },
  ];

  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [planFilter, setPlanFilter] = useState('');

  const filteredMembers = originalMembers
    .filter(member =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.email.toLowerCase().includes(search.toLowerCase())
    )
    .filter(member => (planFilter ? member.plan === planFilter : true))
    .sort((a, b) =>
      sortAsc
        ? new Date(a.joined) - new Date(b.joined)
        : new Date(b.joined) - new Date(a.joined)
    );

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">👥 Joined Members</h1>
      <p className="mb-4 text-lg text-gray-300">Manage and view gym members with filters and sorting.</p>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search by name/email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-800 px-4 py-2 rounded-md border border-gray-600 text-white focus:outline-none"
        />
        <select
          value={planFilter}
          onChange={(e) => setPlanFilter(e.target.value)}
          className="bg-gray-800 px-4 py-2 rounded-md border border-gray-600 text-white"
        >
          <option value="">All Plans</option>
          <option value="Basic">Basic</option>
          <option value="Standard">Standard</option>
          <option value="Gold">Gold</option>
          <option value="Platinum">Platinum</option>
        </select>
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Sort by Date {sortAsc ? '⬆️' : '⬇️'}
        </button>
      </div>

      {/* Count */}
      <div className="mb-4 text-green-300 font-semibold">
        Total Members: {filteredMembers.length}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-xl shadow-lg">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-700 text-green-300">
              <th className="py-3 px-4">Member ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Joined Date</th>
              <th className="py-3 px-4">Membership Plan</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member, index) => (
              <tr key={index} className="hover:bg-gray-700 transition">
                <td className="py-2 px-4">#{member.id}</td>
                <td className="py-2 px-4">{member.name}</td>
                <td className="py-2 px-4">{member.email}</td>
                <td className="py-2 px-4">{member.joined}</td>
                <td className="py-2 px-4 text-yellow-400 font-semibold">{member.plan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
