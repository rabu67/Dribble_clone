import React from 'react'

function Menu() {
  return (
    <div className='flex items-center text-[15px] justify-evenly max-w-8xl mt-8 ml-30 text-gray-600'>
      <button className='border border-gray-400 rounded-md h-8 w-24'>Popular</button>
      <div className='w-[800px]'>
        <ul className='flex justify-between'>
            <li className='hover:text-black cursor-pointer'>Discover</li>
            <li className='hover:text-black cursor-pointer'>Animation</li>
            <li className='hover:text-black cursor-pointer'>Branding</li>
            <li className='hover:text-black cursor-pointer'>Illustration</li>
            <li className='hover:text-black cursor-pointer'>Mobile</li>
            <li className='hover:text-black cursor-pointer'>Print</li>
            <li className='hover:text-black cursor-pointer'>Product Design</li>
            <li className='hover:text-black cursor-pointer'>Typography</li>
            <li className='hover:text-black cursor-pointer'>WebDesign</li>
        </ul>
      </div>
      <button className='border border-gray-400 rounded-md h-8 w-24'>Filters</button>
    </div>
  )
}

export default Menu
