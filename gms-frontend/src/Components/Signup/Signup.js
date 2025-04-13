import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popup, setPopup] = useState('');

  const handleSignup = () => {
    if (!username.trim() || !email.trim() || !password.trim()) {
      setPopup('⚠️ Please fill in all fields!');
      setTimeout(() => setPopup(''), 3000); // Hide after 3s
      return;
    }

    // ✅ Console logging before backend logic
    console.log('📝 Signup Form Submitted');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulate login after signup
    sessionStorage.setItem('isLogin', "true");
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] relative">

      {/* 🔥 Stylish Animated Popup */}
      {popup && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-red-600/90 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-2xl animate-fade-in-out z-50 backdrop-blur-sm border border-white/20">
          {popup}
        </div>
      )}

      {/* 💫 Signup Card */}
      <Tilt scale={1.05} glareEnable={true} glareMaxOpacity={0.2} className="rounded-3xl">
        <div className="w-[350px] p-8 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.15)] text-white relative overflow-hidden">

          <div className="flex flex-col items-center justify-center mb-6">
            <PersonAddAlt1Icon sx={{ fontSize: 60 }} className="text-yellow-400 drop-shadow-lg mb-2" />
            <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 text-transparent bg-clip-text drop-shadow-md">
              Member Signup
            </h2>
          </div>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 rounded-md bg-white/10 border border-white/10 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 rounded-md bg-white/10 border border-white/10 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-5 rounded-md bg-white/10 border border-white/10 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 text-white font-bold py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-yellow-500/40 transition-all duration-300"
          >
            Sign Up
          </button>
        </div>
      </Tilt>
    </div>
  );
};

export default Signup;
