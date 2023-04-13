import { EyeIcon, HeartIcon } from '@heroicons/react/solid'
import React from 'react'
import img2 from '../assets/img2.jpg'

function Project() {
  return (
    <div className='w-[340px] h-[270px] rounded-xl mb-5'>
      <img className='rounded-xl' src={img2} alt="" />
      <div className='flex justify-between p-2'>
        <div className='flex items-center'>
            <h3 className='font-bold text-black text-[15px]'>Name</h3>
            <h3 className='bg-gray-300 text-white p-[2px] text-xs font-bold rounded-md ml-2'>TEAM</h3>
        </div>
       <div className='flex space-x-2'>
            <div className='flex items-center'>
                <HeartIcon className='h-4 w-4 text-gray-500'/>
                <h2 className='text-sm'>100</h2>
            </div>
            <div className='flex items-center'>
                <EyeIcon className='h-4 w-4 text-gray-500'/>
                <h2 className='text-sm'>15.2k</h2>
            </div>
       </div>
      </div>
    </div>
  )
}

export default Project
