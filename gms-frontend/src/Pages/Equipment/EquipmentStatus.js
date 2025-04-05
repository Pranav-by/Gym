import React, { useState } from 'react';

const EquipmentStatus = () => {
  const [equipmentList] = useState([
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

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">🛠️ Equipment Status</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentList.map((equip, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl hover:bg-gray-700 transition duration-300"
          >
            <h2 className="text-xl font-bold text-green-400 mb-2">{equip.name}</h2>
            <p className="text-gray-300">
              Status:{' '}
              <span className={
                equip.status === 'Working'
                  ? 'text-green-400 font-semibold'
                  : equip.status === 'Under Maintenance'
                  ? 'text-yellow-400 font-semibold'
                  : 'text-red-400 font-semibold'
              }>
                {equip.status}
              </span>
            </p>
            <p className="text-gray-400">🧰 Last Serviced: {equip.lastServiced}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentStatus;
