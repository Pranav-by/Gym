import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const Trainers = () => {
  const [trainers, setTrainers] = useState([
    { name: 'Rahul Sharma', role: 'Trainer', experience: 5 },
    { name: 'Anjali Mehta', role: 'Nutritionist', experience: 3 },
    { name: 'Karan Patel', role: 'Physiotherapist', experience: 4 },
    { name: 'Priya Singh', role: 'Trainer', experience: 6 },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showModal, setShowModal] = useState(false);
  const [newTrainer, setNewTrainer] = useState({ name: '', role: '', experience: '' });

  // 🆕 Delete handler
  const handleDelete = (index) => {
    setTrainers(prev => prev.filter((_, i) => i !== index));
  };

  const filtered = trainers
    .filter(t =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'experience') return b.experience - a.experience;
      return 0;
    });

  const handleAdd = () => {
    setTrainers(prev => [...prev, newTrainer]);
    setShowModal(false);
    setNewTrainer({ name: '', role: '', experience: '' });
  };

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-cyan-400">💪 Trainers & Staff</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-xl font-bold transition hover:scale-105"
        >
          <Plus size={20} /> Add Trainer
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 rounded bg-gray-800 text-white"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
          <div key={idx} className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition relative">
            <h2 className="text-xl font-bold text-green-400">{trainer.name}</h2>
            <p className="text-gray-300">🧑‍💼 Role: {trainer.role}</p>
            <p className="text-yellow-400">🏆 Experience: {trainer.experience} years</p>
            
            {/* 🆕 Delete Button */}
            <button
              onClick={() => handleDelete(idx)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition"
              title="Delete Trainer"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-4 w-full max-w-md">
            <h2 className="text-2xl text-white font-bold">➕ Add New Trainer</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newTrainer.name}
              onChange={(e) => setNewTrainer({ ...newTrainer, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Role"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newTrainer.role}
              onChange={(e) => setNewTrainer({ ...newTrainer, role: e.target.value })}
            />
            <input
              type="number"
              placeholder="Experience (years)"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newTrainer.experience}
              onChange={(e) => setNewTrainer({ ...newTrainer, experience: Number(e.target.value) })}
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

export default Trainers;
