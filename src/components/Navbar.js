import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

function Navbar() {
  return (
    <nav className="flex justify-between p-6 h-20">
        <div className='flex items-center w-[740px]'>
            <h2 className='font-bold text-xl'>Dribble</h2>
            <ul className='flex flex-1 justify-between ml-8 text-[14px] text-gray-600 font-bold'>
                <li>Inspiration</li>
                <li>Find Work</li>
                <li>Learn Design</li>
                <li>Go Pro</li>
                <li>Hire Designer</li>
            </ul>
        </div>
        <div className='flex items-center justify-evenly w-[12%] text-gray-700'>
            <SearchIcon className="h-4"/>
            <h3>Sign in</h3>
            <button className='bg-pink-500
                px-[12px] py-[9px] 
                text-[15px] font-bold
                text-white rounded-md 
                hover:bg-pink-400'>Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar
