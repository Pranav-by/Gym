import { useState,useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import Home from './Pages/Home/home';
import {Routes,Route,useNavigate} from 'react-router-dom'
function App() {
  const navigate = useNavigate();
  const [isLogin,setIsLogin] = useState(false);
  useEffect(()=>{
    let isLogedIn =sessionStorage.getItem("isLogin");
    if(isLogedIn){
      setIsLogin(true);
      navigate('/Dashboard')
    }
  },[sessionStorage.getItem("isLogin")])
  return (
    <div className="flex">
      {
        isLogin && <Sidebar />
      }
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
