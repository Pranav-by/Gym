import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonAdd, Search, FormatListBulleted } from '@mui/icons-material';

const memberCards = [
  {
    title: 'All Members',
    icon: <FormatListBulleted fontSize="large" />,
    path: '/members',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Add New Member',
    icon: <PersonAdd fontSize="large" />,
    path: '/registrations',
    color: 'from-green-500 to-teal-500'
  },
  
];

const MemberHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white p-6">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-center mb-10">
        👥 Member Management
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
        {memberCards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            className="w-full sm:w-80 cursor-pointer bg-glassWhite backdrop-blur-glass border border-white/10 rounded-3xl p-6 shadow-neo transform hover:scale-105 transition-all duration-300 relative"
          >
            {/* Top Gradient Border */}
            <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${card.color}`} />

            {/* Icon */}
            <div className="text-cyan-300 text-5xl mb-4">
              {card.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-white">{card.title}</h2>
            <p className="text-gray-400 text-sm mt-2">Access {card.title} →</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberHome;
