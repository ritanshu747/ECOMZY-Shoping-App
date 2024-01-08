import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between bg-slate-900'>
      <NavLink to='/'>
        <div>
          <img src={Logo} alt="Logo" className='h-14' />
        </div>
      </NavLink>
      <div className='flex  flex-row mt-2 ml-4 gap-x-4'>
        <NavLink to="/" className=' px-2 py-1 transition duration-300 hover:bg-blue-700'>
          <p className='text-white text-2xl'>Home</p>
        </NavLink>
        <div className="cursor-pointer hover:text-slate-120 transition duration-300 ease-in">
          <NavLink to='/cart'>
            <FaShoppingCart style={{ fontSize: '28px', color: 'blue', margin: '5px', padding: '5px', transition: 'color 0.3s ease-in-out' }} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
