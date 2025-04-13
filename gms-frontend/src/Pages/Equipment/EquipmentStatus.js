import React, { useState } from 'react';
import { Plus, Trash2, Edit } from 'lucide-react';

const EquipmentStatus = () => {
  const [equipmentList, setEquipmentList] = useState([
    { name: 'Treadmill', status: 'Working', lastServiced: '2025-03-20' },
    { name: 'Elliptical', status: 'Under Maintenance', lastServiced: '2025-03-30' },
    { name: 'Bench Press', status: 'Working', lastServiced: '2025-04-01' },
    { name: 'Leg Press', status: 'Needs Repair', lastServiced: '2025-03-15' },
    { name: 'Rowing Machine', status: 'Working', lastServiced: '2025-03-18' },
    { name: 'Dumbbells Rack', status: 'Working', lastServiced: '2025-04-02' },
    { name: 'Smith Machine', status: 'Under Maintenance', lastServiced: '2025-03-27' },
    { name: 'Cable Crossover', status: 'Needs Repair', lastServiced: '2025-03-10' },
    { name: 'Lat Pulldown', status: 'Working', lastServiced: '2025-04-03' },
    { name: 'Leg Curl Machine', status: 'Working', lastServiced: '2025-04-04' },
    { name: 'Chest Press', status: 'Under Maintenance', lastServiced: '2025-03-22' },
    { name: 'Stair Climber', status: 'Needs Repair', lastServiced: '2025-03-17' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newEquipment, setNewEquipment] = useState({ name: '', status: '', lastServiced: '' });
  const [editingStatus, setEditingStatus] = useState({ index: -1, status: '' });

  const addEquipment = () => {
    if (newEquipment.name && newEquipment.status && newEquipment.lastServiced) {
      const updatedList = [...equipmentList, newEquipment];
      setEquipmentList(updatedList);
      setNewEquipment({ name: '', status: '', lastServiced: '' });
      setShowForm(false);
    }
  };

  const handleStatusChange = (index) => {
    const updatedList = [...equipmentList];
    updatedList[index].status = editingStatus.status;
    setEquipmentList(updatedList);
    setEditingStatus({ index: -1, status: '' });
  };

  const handleDelete = (index) => {
    const updatedList = equipmentList.filter((_, i) => i !== index);
    setEquipmentList(updatedList);
  };

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">🛠️ Equipment Status</h1>

      {/* Add Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-xl transition"
        >
          <Plus /> Add Equipment
        </button>
      </div>

      {/* Modal for Adding Equipment */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-4 w-full max-w-md">
            <h2 className="text-2xl text-white font-bold">➕ Add Equipment</h2>
            <input
              type="text"
              placeholder="Equipment Name"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newEquipment.name}
              onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
            />
            <select
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newEquipment.status}
              onChange={(e) => setNewEquipment({ ...newEquipment, status: e.target.value })}
            >
              <option value="">Select Status</option>
              <option value="Working">Working</option>
              <option value="Under Maintenance">Under Maintenance</option>
              <option value="Needs Repair">Needs Repair</option>
            </select>
            <input
              type="date"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={newEquipment.lastServiced}
              onChange={(e) => setNewEquipment({ ...newEquipment, lastServiced: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowForm(false)} className="text-red-400">Cancel</button>
              <button onClick={addEquipment} className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700">Submit</button>
            </div>
          </div>
        </div>
      )}

      {/* Equipment List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentList.map((equip, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl hover:bg-gray-700 transition duration-300"
          >
            <h2 className="text-xl font-bold text-green-400 mb-2">{equip.name}</h2>
            <p className="text-gray-300">
              Status:{' '}
              <span
                className={
                  equip.status === 'Working'
                    ? 'text-green-400 font-semibold'
                    : equip.status === 'Under Maintenance'
                    ? 'text-yellow-400 font-semibold'
                    : 'text-red-400 font-semibold'
                }
              >
                {equip.status}
              </span>
            </p>
            <p className="text-gray-400">🧰 Last Serviced: {equip.lastServiced}</p>

            {/* Edit Status Button */}
            <button
              className="text-blue-400 hover:text-blue-600 mt-4"
              onClick={() => setEditingStatus({ index, status: equip.status })}
            >
              <Edit size={20} /> Edit Status
            </button>

            {/* Edit Status Modal */}
            {editingStatus.index === index && (
              <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-4 w-full max-w-md">
                  <h2 className="text-2xl text-white font-bold">📝 Edit Status</h2>
                  <select
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    value={editingStatus.status}
                    onChange={(e) => setEditingStatus({ ...editingStatus, status: e.target.value })}
                  >
                    <option value="Working">Working</option>
                    <option value="Under Maintenance">Under Maintenance</option>
                    <option value="Needs Repair">Needs Repair</option>
                  </select>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setEditingStatus({ index: -1, status: '' })}
                      className="text-red-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleStatusChange(index)}
                      className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700 mt-4"
            >
              <Trash2 size={20} /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentStatus;
