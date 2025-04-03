import React, { useState } from 'react'


const ForgetPassword = () => {
    const [emailSubmit, setEmailSubmit] = useState(false)
    const [OtpValidate,setOtpValidate] = useState(false)
    const [contentVal,setContentValue] =useState("Submit Your Email")
    const handleSubmit = () => {
        if (!emailSubmit) {
            setEmailSubmit(true)
            setContentValue("Submit OTP")
        }else if(emailSubmit && !OtpValidate){
            setOtpValidate(true)
            setContentValue("Submit New Password")
        }

    }
    return (
        <div className='w-full'>
            <div className='w-full mb-5'>
                <div>Enter Your Email</div>
                <input type="text" className='w-1/2 mb-2 p-2 rounded-lg border-2 border-slate-400 text-sm' placeholder='Email' />
            </div>
            {
                emailSubmit && <div className='w-full mb-5'>
                    <div>Enter Your OTP</div>
                    <input type="text" className='w-1/2 mb-2 p-2 rounded-lg border-2 border-slate-400 text-sm' placeholder='Enter OTP' />
                </div>
            }
                        {
                OtpValidate && <div className='w-full mb-5'>
                    <div>Enter Your New Password</div>
                    <input type="text" className='w-1/2 mb-2 p-2 rounded-lg border-2 border-slate-400 text-sm' placeholder='Enter New Password' />
                </div>
            }
            <button className='bg-slate-800 text-white mx-auto w-2/3 p-3 rounded-lg text-center font-semibold border-2 cursor-pointer hover:bg-white hover:text-black' onClick={() => handleSubmit()}>{contentVal}</button>
        </div>
    )
}

export default ForgetPassword
