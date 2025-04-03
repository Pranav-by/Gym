import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate =useNavigate();
    const handleLogin = ()=>{
        sessionStorage.setItem("isLogin",true);
        navigate('/Dashboard')
    }
    return (

        <div className='w-80 bg-white bg-opacity-30 p-5 rounded-3xl shadow-lg'>
            <h2 className='text-gray-900 text-center text-2xl font-semibold mb-4'>Login</h2>
            <input type="text" className='w-full mb-2 p-2 rounded-lg border text-sm' placeholder='Username' />
            <input type="password" className='w-full mb-2 p-2 rounded-lg border text-sm' placeholder='Password' />
            <button className='w-full p-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition' onClick={()=>{handleLogin()}}>Login</button>
        </div>

    )
}

export default Login
