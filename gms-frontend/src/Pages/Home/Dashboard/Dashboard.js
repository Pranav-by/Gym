import React, { useState } from 'react';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import InfoIcon from '@mui/icons-material/Info';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PaymentIcon from '@mui/icons-material/Payment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BarChartIcon from '@mui/icons-material/BarChart';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FeedbackIcon from '@mui/icons-material/Feedback';

const Dashboard = () => {
    const [showWelcome, setShowWelcome] = useState(false);

    // Card details array for dynamic rendering
    const cards = [
        { title: "Joined Members", icon: <PeopleAltIcon />, color: "from-indigo-500 via-purple-500 to-pink-500" },
        { title: "New Registrations", icon: <HowToRegIcon />, color: "from-green-500 via-lime-500 to-yellow-500" },
        { title: "Membership Plans", icon: <CardMembershipIcon />, color: "from-blue-500 via-cyan-500 to-teal-500" },
        { title: "Trainers & Staff", icon: <FitnessCenterIcon />, color: "from-red-500 via-orange-500 to-yellow-500" },
        { title: "Gym Attendance", icon: <BarChartIcon />, color: "from-pink-500 via-rose-500 to-purple-500" },
        { title: "Earnings & Payments", icon: <PaymentIcon />, color: "from-yellow-500 via-amber-500 to-orange-500" },
        { title: "Workout Schedules", icon: <EventNoteIcon />, color: "from-purple-500 via-blue-500 to-green-500" },
        { title: "Equipment Status", icon: <FitnessCenterIcon />, color: "from-gray-500 via-gray-400 to-gray-300" },
        { title: "Diet & Nutrition Plans", icon: <RestaurantIcon />, color: "from-green-500 via-emerald-500 to-teal-500" },
        { title: "Member Feedback & Queries", icon: <FeedbackIcon />, color: "from-red-500 via-pink-500 to-purple-500" },
    ];

    return (
        <div className="w-3/4 text-white p-5 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
            {/* Top Banner */}
            <div className="w-full bg-gray-800 text-white rounded-lg p-3 flex items-center justify-between shadow-md relative">
                {/* Styled Info Icon with Hover Effect */}
                <div 
                    className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer relative"
                    onMouseEnter={() => setShowWelcome(true)}
                    onMouseLeave={() => setShowWelcome(false)}
                >
                    <InfoIcon className="text-white" sx={{ fontSize: 30 }} />
                    
                    {/* Welcome Message on Hover */}
                    {showWelcome && (
                        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg animate-fadeIn">
                            <span className="font-bold text-xl text-yellow-400 tracking-wide">Hi, welcome to</span>
                            <span className="text-green-400 text-xl font-extrabold ml-2">FITTRACK</span>
                        </div>
                    )}
                </div>

                {/* Logo */}
                <img src="/image.png" alt="FITTRACK Logo" className="h-16 w-16 rounded-full ml-3" />
            </div>

            {/* Cards Container */}
            <div className="mt-5 pt-3 bg-gray-900 bg-opacity-50 grid gap-5 grid-cols-3 w-full overflow-x-auto h-[80%] rounded-lg p-5">
                {cards.map((card, index) => (
                    <div 
                        key={index} 
                        className="w-full h-fit bg-gray-800 rounded-lg shadow-lg transition-all duration-300 cursor-pointer hover:bg-slate-900 hover:scale-105 hover:shadow-xl"
                    >
                        {/* Colored Top Section */}
                        <div className={`w-full h-12 bg-gradient-to-r ${card.color} rounded-t-lg`}></div>

                        {/* Icon & Text */}
                        <div className="flex flex-col items-center justify-center p-5 text-gray-300 hover:text-white transition-all duration-300">
                            <div className="text-green-400" style={{ fontSize: '50px' }}>
                                {card.icon}
                            </div>
                            <p className="mt-3 text-lg font-semibold">{card.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
