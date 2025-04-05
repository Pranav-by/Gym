import React, { useState } from 'react';

const MemberFeedback = () => {
  const [feedbacks] = useState([
    {
      id: 1,
      name: 'Aman Gupta',
      date: '2025-04-01',
      type: 'Feedback',
      message: 'Great gym facilities! The new machines are amazing.',
    },
    {
      id: 2,
      name: 'Meera Singh',
      date: '2025-04-02',
      type: 'Query',
      message: 'What are the timings for Zumba classes?',
    },
    {
      id: 3,
      name: 'Ravi Kumar',
      date: '2025-04-03',
      type: 'Feedback',
      message: 'Trainers are really helpful. Loved the workout guidance!',
    },
    {
      id: 4,
      name: 'Simran Kaur',
      date: '2025-04-03',
      type: 'Query',
      message: 'Can I freeze my membership for a month?',
    },
  ]);

  return (
    <div className="p-10 min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">💬 Member Feedback & Queries</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((item) => (
          <div
            key={item.id}
            className={`bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 ${
              item.type === 'Feedback' ? 'border-l-4 border-green-500' : 'border-l-4 border-blue-500'
            }`}
          >
            <h2 className="text-lg font-semibold mb-1">
              {item.name} <span className="text-sm text-gray-400">({item.date})</span>
            </h2>
            <p className="text-sm text-pink-400 mb-2">Type: {item.type}</p>
            <p className="text-gray-300">📝 {item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberFeedback;
