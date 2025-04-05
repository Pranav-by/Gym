import { useState,useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import Home from './Pages/Home/home';
import {Routes,Route,useNavigate} from 'react-router-dom'
import Member from './Pages/Home/Members/member';
function App() {
  const navigate = useNavigate();
  const [isLogin,setIsLogin] = useState(false);
  useEffect(()=>{
    let isLogedIn =sessionStorage.getItem("isLogin");
    if(isLogedIn){
      setIsLogin(true);
      //navigate('/Dashboard')
    }else{
      navigate('/')
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
        <Route path='/member' element={<Member />} />
      </Routes>
    </div>
  );
}

export default App;
