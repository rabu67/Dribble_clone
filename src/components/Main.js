import React from 'react'
//import img1 from '../assets/img1.jpg'
import landing from '../assets/landing.mp4'
function Main() {
  return (
    <div className='relative h-[480px]'>
      
      <div className='absolute flex w-full flex-row justify-center mt-20'>
      <div className='absolute z-20 flex h-full flex-col space-y-8 text-white font-bold w-[600px]'>
        <h2 className='text-4xl text-center'>Explore the world’s leading design portfolios</h2>
        <p className='text-1xl font-normal text-center'>Millions of designers and agencies around the world showcase their portfolio work 
            on Dribbble - the home to the world’s best design and creative professionals.</p>
        <input type='text' className='bg-white-500
                px-[14px] py-[15px] 
                text-[15px] font-bold
                rounded-3xl 
                hover:bg-white-100 text-black' placeholder='Search...'/>

     
        
      </div>
      </div>

      {/* <div className='bg-black absolute opacity-70 w-full h-full'></div> */}
      {/* <img className='w-full h-full object-cover' src={img1} alt="" /> */}
      <video className='w-full h-full object-cover' autoPlay muted loop>
        <source src={landing} type='video/mp4' />
      </video>
    </div>
  )
}

export default Main
