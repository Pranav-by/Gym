import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PeopleAlt,
  HowToReg,
  CardMembership,
  FitnessCenter,
  Payment,
  EventNote,
  BarChart,
  Restaurant,
  Feedback
} from '@mui/icons-material';

const cards = [
  { title: 'Joined Members', icon: <PeopleAlt fontSize="large" />, path: '/members', color: "from-purple-500 via-indigo-500 to-blue-500" },
  { title: 'New Registrations', icon: <HowToReg fontSize="large" />, path: '/registrations', color: "from-green-400 via-emerald-500 to-teal-500" },
  { title: 'Membership Plans', icon: <CardMembership fontSize="large" />, path: '/plans', color: "from-yellow-400 via-orange-500 to-red-500" },
  { title: 'Trainers & Staff', icon: <FitnessCenter fontSize="large" />, path: '/trainers', color: "from-pink-500 via-fuchsia-500 to-purple-600" },
  { title: 'Gym Attendance', icon: <BarChart fontSize="large" />, path: '/attendance', color: "from-cyan-400 via-blue-500 to-indigo-500" },
  { title: 'Earnings & Payments', icon: <Payment fontSize="large" />, path: '/payments', color: "from-lime-400 via-green-500 to-emerald-500" },
  { title: 'Workout Schedules', icon: <EventNote fontSize="large" />, path: '/schedules', color: "from-orange-400 via-yellow-500 to-pink-500" },
  { title: 'Equipment Status', icon: <FitnessCenter fontSize="large" />, path: '/equipment', color: "from-sky-400 via-blue-500 to-indigo-600" },
  { title: 'Nutrition & Diet', icon: <Restaurant fontSize="large" />, path: '/nutrition', color: "from-red-400 via-pink-500 to-purple-600" },
  { title: 'Feedback & Queries', icon: <Feedback fontSize="large" />, path: '/feedback', color: "from-gray-400 via-gray-600 to-gray-800" }
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white p-6">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 text-center mb-12 drop-shadow-lg">
        💎 FITTRACK: Gym Management System
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            className="relative group cursor-pointer border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-xl shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 overflow-hidden"
          >
            {/* Reflective shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none mix-blend-soft-light rounded-3xl" />

            {/* Gradient top edge */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} rounded-t-3xl`} />

            {/* Glow ring */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-2xl opacity-10 pointer-events-none"></div>

            {/* Icon */}
            <div className="text-cyan-300 text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
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

export default Dashboard;
