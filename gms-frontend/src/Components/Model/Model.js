import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
const Model = ({handleClose,content,header}) => {
  return (
    <div className='w-full h-[100vh] fixed bg-black bg-opacity-50 text-black top-0 left-0 flex justify-center mt-32'>
        <div className='w-1/2 bg-white rounded-lg h-fit p-5'>
        
        <div className='flex justify-between '>
            <div className='text-3xl font-semibold' >{header}</div>
            <div onClick={()=>handleClose()}><ClearIcon sx={{fontSize:"32px"}} /></div>
        </div>
        <div className='mt-10'>
            {content}
        </div>
        </div>
    </div>
  )
}

export default Model
