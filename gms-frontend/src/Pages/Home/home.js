import React from 'react';
import Login from '../../Components/Login/Login';
import Signup from '../../Components/Signup/Signup';

const Home = () => {
    return (
        <div className='w-full h-screen flex flex-col'>
            {/* Header with Logo */}
            <div className='border-b-4 border-gray-900 bg-gray-900 text-white p-4 font-bold text-xl text-center shadow-lg flex items-center justify-center gap-3'>
                <img src='/image.png' alt='FITTRACK Logo' className='h-16 w-16 rounded-full' />
                FITTRACK - Streamline Fitness, Simplify Management
            </div>

            
            {/* Background Section */}
            <div className='w-full h-full flex justify-center items-center bg-cover bg-center bg-no-repeat' 
                 style={{ backgroundImage: "url('https://th.bing.com/th?id=OIP.R6Xe9YVAsYm3PN54tAW_OAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2')" }}>
                
                <div className='w-full flex flex-col lg:flex-row gap-8 p-4 justify-center items-center ml-[-50px]'>

                    {/* Login Section */}
                    <Login />
                    
                    {/* Registration Section */}
                    <Signup />
                </div>
            </div>
        </div>
    );
};

export default Home;
