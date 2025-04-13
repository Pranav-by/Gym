import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

const Members = () => {
  const [members, setMembers] = useState([
    { name: 'John Doe', email: 'john@example.com', membership: 'Premium', dateOfStart: '2022-01-15' },
    { name: 'Jane Smith', email: 'jane@example.com', membership: 'Basic', dateOfStart: '2021-08-23' },
    { name: 'Sam Wilson', email: 'sam@example.com', membership: 'Standard', dateOfStart: '2023-03-01' },
    { name: 'Sara Lee', email: 'sara@example.com', membership: 'Premium', dateOfStart: '2021-05-18' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showModal, setShowModal] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', email: '', membership: '', dateOfStart: '' });

  const handleDelete = (index) => {
    setMembers(prev => prev.filter((_, i) => i !== index));
  };

  const filtered = members
    .filter(m =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'membership') return a.membership.localeCompare(b.membership);
      return 0;
    });

  const handleAdd = () => {
    setMembers(prev => [...prev, newMember]);
    setShowModal(false);
    setNewMember({ name: '', email: '', membership: '', dateOfStart: '' });
  };

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-cyan-400">🏋️‍♂️ Members</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-xl font-bold transition hover:scale-105"
        >
          <Plus size={20} /> Add Member
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="p-2 rounded bg-gray-800 text-white"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 rounded bg-gray-800 text-white"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="membership">Sort by Membership</option>
        </select>
      </div>

      {/* Table of Members */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg shadow-md">
          <thead>
            <tr className="text-white text-left">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Membership</th>
              <th className="px-6 py-4">Joined</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((member, idx) => (
              <tr key={idx} className="text-white">
                <td className="px-6 py-4">{member.name}</td>
                <td className="px-6 py-4">{member.email}</td>
                <td className="px-6 py-4">{member.membership}</td>
                <td className="px-6 py-4">{member.dateOfStart}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleDelete(idx)}
                      className="text-red-400 hover:text-red-600 transition transform hover:scale-110"
                      title="Delete Member"
                    >
                      <Trash2 size={20} />
                    </button>
                    <button
                      onClick={() => alert("Edit functionality coming soon!")}
                      className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110"
                      title="Edit Member"
                    >
                      <Edit size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding new member */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-4 w-full max-w-md">
            <h2 className="text-2xl text-white font-bold">➕ Add New Member</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newMember.email}
              onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
            />
            <select
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newMember.membership}
              onChange={(e) => setNewMember({ ...newMember, membership: e.target.value })}
            >
              <option value="">Select Membership</option>
              <option value="Premium">Premium</option>
              <option value="Standard">Standard</option>
              <option value="Basic">Basic</option>
            </select>
            <input
              type="date"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newMember.dateOfStart}
              onChange={(e) => setNewMember({ ...newMember, dateOfStart: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="text-red-400">Cancel</button>
              <button onClick={handleAdd} className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
