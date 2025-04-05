import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';

const Member = () => {
    const memberOptions = [
        { title: "All Members", icon: <ListIcon />, color: "from-blue-400 via-blue-600 to-indigo-600" },
        { title: "Add New Member", icon: <PersonAddIcon />, color: "from-green-400 via-green-600 to-emerald-600" },
        { title: "Search Members", icon: <SearchIcon />, color: "from-yellow-400 via-yellow-600 to-orange-600" },
        { title: "Member Profiles", icon: <PersonIcon />, color: "from-pink-400 via-pink-600 to-purple-600" },
    ];

    return (
        <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">Member Management</h2>
            <div className="grid grid-cols-2 gap-6">
                {memberOptions.map((option, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-800 rounded-xl shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-900 cursor-pointer"
                    >
                        <div className={`w-full h-12 rounded-t-xl bg-gradient-to-r ${option.color}`}></div>
                        <div className="flex flex-col items-center justify-center p-6">
                            <div className="text-4xl text-cyan-300">{option.icon}</div>
                            <p className="mt-4 font-semibold text-xl text-gray-300">{option.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Member;
