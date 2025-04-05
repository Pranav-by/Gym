import React, { useState, useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 6 && currentHour < 12) {
            setGreeting("Good Morning ☀️");
        } else if (currentHour >= 12 && currentHour < 17) {
            setGreeting("Good Afternoon 🌤");
        } else if (currentHour >= 17 && currentHour < 21) {
            setGreeting("Good Evening 🌆");
        } else {
            setGreeting("Good Night 🌙");
        }
    }, []);

    return (
        <div className="w-1/4 min-h-screen border-r-4 bg-black text-white p-6 font-bold text-sm shadow-lg flex flex-col items-center gap-6 overflow-y-auto">
            {/* Logo & Title */}
            <div className="flex items-center gap-3 text-center">
                <img src="/image.png" alt="FITTRACK Logo" className="h-16 w-16 rounded-full" />
                <span className="text-lg">FITTRACK</span>
            </div>

            {/* Dynamic Greeting & Role */}
            <div className="text-xl font-medium">{greeting}</div>
            <div className="text-lg font-bold">Admin</div>

            {/* Options Section */}
            <div className="mt-10 py-10 border-t-2 border-gray-600 w-full">
                <div className="flex items-center gap-3 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black">
                    <span><HomeIcon /></span> 
                    <span>Dashboard</span>
                </div>
                <div className="flex items-center mt-10 gap-3 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black">
                    <span><GroupIcon /></span> 
                    <span>Members</span>
                </div>
                <div className="flex items-center mt-10 gap-3 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black">
                    <span><LogoutIcon /></span> 
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
