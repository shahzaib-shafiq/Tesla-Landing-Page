import React from 'react'
import logo from '../images/tesla.svg'
const Nav = () => {
  return (
    <div>
      <header 
      className='flex items-center
      justify-between z-10 h-[5.4rem]
      w-full fixed top 0 p-[3.2rem] 
      
      
      '>
        <img src={logo} alt="" 
        className='h-6'
        />

<div>
  <a href="#" className='text-2xl font-semibold text-black mx-[0.8rem] px-[0.8rem] bg-transparent hover:bg-slate-500 hover:bg-opacity-10 transition-all duration-300 rounded-2xl' >Model S</a>
  <a href="#" className='text-2xl font-semibold text-black mx-[0.8rem] px-[0.8rem] bg-transparent hover:bg-slate-500 hover:bg-opacity-10 transition-all duration-300 rounded-2xl' >Model 3</a>
  <a href="#" className='text-2xl font-semibold text-black mx-[0.8rem] px-[0.8rem] bg-transparent hover:bg-slate-500 hover:bg-opacity-10 transition-all duration-300 rounded-2xl' >Model X</a>
  <a href="#" className='text-2xl font-semibold text-black mx-[0.8rem] px-[0.8rem] bg-transparent hover:bg-slate-500 hover:bg-opacity-10 transition-all duration-300 rounded-2xl' >Model Y</a>
  <a href="#" className='text-2xl font-semibold text-black mx-[0.8rem] px-[0.8rem] bg-transparent hover:bg-slate-500 hover:bg-opacity-10 transition-all duration-300 rounded-2xl' >Soalr Roof</a>
  <a href="#" className='text-2xl font-semibold text-black mx-[0.8rem] px-[0.8rem] bg-transparent hover:bg-slate-500 hover:bg-opacity-10 transition-all duration-300 rounded-2xl' >Soalr Panel</a>


</div>
<div>
<a href="#" className='text-2xl font-semibold text-black mx-[0.8rem] px-[0.8rem] bg-transparent  hover:bg-slate-500 hover:bg-opacity-10 transition-all duration-300 rounded-2xl'>Shop</a>
<a href="#" className='text-2xl font-semibold text-black mx-[0.8rem] px-[0.8rem] bg-transparent  hover:bg-slate-500 hover:bg-opacity-10 transition-all duration-300 rounded-2xl'>Account</a>
<a href="#" className='text-2xl font-semibold text-black mx-[0.8rem] px-[0.8rem] bg-transparent  hover:bg-slate-500 hover:bg-opacity-10 transition-all duration-300 rounded-2xl'>Menu</a>


</div>

      </header>
    </div>
  )
}

export default Nav
