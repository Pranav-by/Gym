// App.js
import { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import Home from './Pages/Home/home';
import Member from './Pages/Home/Members/member';
import MembershipPlans from './Pages/Plans/MembershipPlans';
import Trainers from './Pages/Trainers/Trainers';
import GymAttendance from './Pages/Attendance/GymAttendance';
import EarningsPayments from './Pages/Payments/EarningsPayments';
import WorkoutSchedule from './Pages/Workout/WorkoutSchedule';
import EquipmentStatus from './Pages/Equipment/EquipmentStatus';
import DietNutritionPlans from './Pages/DietNutrition/DietNutritionPlans';
import MemberFeedback from './Pages/Feedback/MemberFeedback';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Members from './Pages/Members/Members';
import NewRegistration from './Pages/Registration/NewRegistration';

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLogin");
    if (isLoggedIn) {
      setIsLogin(true);
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen overflow-hidden bg-black">
      {isLogin && <Sidebar />}

      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/member" element={<Member />} />
          <Route path="/plans" element={<MembershipPlans />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/attendance" element={<GymAttendance />} />
          <Route path="/payments" element={<EarningsPayments />} />
          <Route path="/schedules" element={<WorkoutSchedule />} />
          <Route path="/equipment" element={<EquipmentStatus />} />
          <Route path="/nutrition" element={<DietNutritionPlans />} />
          <Route path="/feedback" element={<MemberFeedback />} />
          <Route path="/members" element={<Members />} />
          <Route path="/registrations" element={<NewRegistration />} />



        </Routes>
      </div>
    </div>
  );
}

export default App;
