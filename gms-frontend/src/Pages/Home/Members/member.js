import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';

const Member = () => {
  const memberOptions = [
    { title: "All Members", icon: <ListIcon fontSize="large" />, color: "from-blue-400 via-blue-600 to-indigo-600" },
    { title: "Add New Member", icon: <PersonAddIcon fontSize="large" />, color: "from-green-400 via-green-600 to-emerald-600" },
    { title: "Search Members", icon: <SearchIcon fontSize="large" />, color: "from-yellow-400 via-yellow-600 to-orange-600" },
    { title: "Member Profiles", icon: <PersonIcon fontSize="large" />, color: "from-pink-400 via-pink-600 to-purple-600" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white min-h-screen p-8">
      <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text drop-shadow-lg">
        Member Management
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10">
        {memberOptions.map((option, idx) => (
          <div
            key={idx}
            className="relative rounded-3xl p-6 bg-glassWhite backdrop-blur-glass border border-white/10 shadow-neo hover:scale-105 transition-all duration-500 group cursor-pointer"
          >
            {/* Gradient Top Border */}
            <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${option.color}`} />

            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="text-cyan-300 group-hover:text-white transition duration-300">
                {option.icon}
              </div>
              <p className="text-xl font-semibold text-gray-300 group-hover:text-white tracking-wide">
                {option.title}
              </p>
            </div>

            {/* Neon Border on Hover */}
            <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400 transition-all duration-500 pointer-events-none`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
