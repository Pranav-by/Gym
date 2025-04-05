import React, { useState } from 'react';

const trainersData = [
  { name: 'Rahul Sharma', role: 'Trainer', experience: 5 },
  { name: 'Anjali Mehta', role: 'Nutritionist', experience: 3 },
  { name: 'Karan Patel', role: 'Physiotherapist', experience: 4 },
  { name: 'Priya Singh', role: 'Trainer', experience: 6 },
];

const Trainers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filtered = trainersData
    .filter(trainer =>
      trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (roleFilter === '' || trainer.role === roleFilter)
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'experience') return b.experience - a.experience;
      return 0;
    });

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">💪 Trainers & Staff</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 rounded bg-gray-800 text-white"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 rounded bg-gray-800 text-white"
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="Trainer">Trainer</option>
          <option value="Nutritionist">Nutritionist</option>
          <option value="Physiotherapist">Physiotherapist</option>
        </select>
        <select
          className="p-2 rounded bg-gray-800 text-white"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="experience">Sort by Experience</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((trainer, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-green-400">{trainer.name}</h2>
            <p className="text-gray-300">🧑‍💼 Role: {trainer.role}</p>
            <p className="text-yellow-400">🏆 Experience: {trainer.experience} years</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
