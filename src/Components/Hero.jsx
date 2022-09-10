import React from 'react'
import modelS from '../images/ModelS.jfif'
const Hero = () => {
  return (
    <>
    <section className='w-full h-screen'>
      <img src={modelS} alt="" className='w-full h-full object-cover'/>
    </section>
    
    <div className='absolute top-[20%]  left-[50%] text-center transform'>
      <h1 className='text-4xl font-semibold'>Model S</h1>
      <h2 className='text-gray-800 text-2xl'>Car Details <span className='underline cursor-pointer'>TouchLess Delivery</span> </h2>
    </div>

    <div className='flex mx-auto align-middle justify-center  absolute top-[85%] left-[50%] transform-50'>
      <button className='text-2xl text-white bg-black font-medium uppercase my-2 py-[0.4rem] px-[2.4rem] rounded-[3.2rem] w-[25.5rem] h-16 bg-opacity-80'  >Custom Order</button>
      <button className='text-2xl text-black bg-white font-medium uppercase my-2 py-[0.4rem] px-[2.4rem] rounded-[3.2rem] w-[25.5rem] h-16 bg-opacity-80 mx-8'  >Existing Inventory</button>
      
    </div>
    </>
  )
}

export default Hero
