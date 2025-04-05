import React, { useState, useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) setGreeting('Good Morning ☀️');
    else if (hour >= 12 && hour < 17) setGreeting('Good Afternoon 🌤');
    else if (hour >= 17 && hour < 21) setGreeting('Good Evening 🌆');
    else setGreeting('Good Night 🌙');
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('isLogin');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="w-72 min-h-screen bg-glassWhite backdrop-blur-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/10 text-white flex flex-col items-center p-6 space-y-10">
      
      {/* Branding */}
      <div className="flex items-center gap-3">
        <img
          src="/image.png"
          alt="Logo"
          className="h-16 w-16 rounded-full border-2 border-purple-500 shadow-xl"
        />
        <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          FITTRACK
        </span>
      </div>

      {/* Greeting */}
      <div className="text-center text-lg font-semibold animate-pulse text-cyan-300">
        {greeting}
      </div>
      <div className="text-sm text-gray-400 tracking-wide">Admin Panel</div>

      {/* Navigation */}
      <div className="flex flex-col gap-6 w-full">
        <Link to="/dashboard">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-black/30 hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:text-black transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-lg">
            <HomeIcon />
            <span className="font-semibold">Dashboard</span>
          </div>
        </Link>

        <Link to="/member">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-black/30 hover:bg-gradient-to-r from-green-300 via-lime-400 to-yellow-300 hover:text-black transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-lg">
            <GroupIcon />
            <span className="font-semibold">Members</span>
          </div>
        </Link>

        <div
          onClick={handleLogout}
          className="flex items-center gap-4 p-4 rounded-xl bg-black/30 hover:bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 hover:text-black transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-lg"
        >
          <LogoutIcon />
          <span className="font-semibold">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
