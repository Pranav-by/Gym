import React ,{useState}from 'react'
import Model from '../Model/Model'
import ForgetPassword from '../ForgetPassword/forgetPassword';

const Signup = () => {
    const [forgetPassword,setForgotPassword] = useState(false);

    const handleClose = ()=>{
        setForgotPassword(prev =>!prev);
    }
    
    return (
        <div className='w-80 bg-white bg-opacity-30 p-5 rounded-3xl shadow-lg'>
            <h2 className='text-gray-900 text-center text-2xl font-semibold mb-4'>Register</h2>
            <input type="text" className='w-full mb-2 p-2 rounded-lg border text-sm' placeholder='Email' />
            <input type="text" className='w-full mb-2 p-2 rounded-lg border text-sm' placeholder='Gym Name' />
            <input type="text" className='w-full mb-2 p-2 rounded-lg border text-sm' placeholder='Username' />
            <input type="password" className='w-full mb-2 p-2 rounded-lg border text-sm' placeholder='Password' />
            <input type="file" className='w-full mb-2 p-2 rounded-lg border text-sm' />
            <button className='w-full p-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition my-2'>Register</button>
            <button className='w-full p-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-500 transition' onClick={()=>handleClose()}>Forgot Password</button>
        {forgetPassword && <Model header="Forgot Password" handleClose={handleClose} content={<ForgetPassword /> } />}
        </div>

    )
}

export default Signup
