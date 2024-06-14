import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import LoginSignup from '../../Pages/LoginSignup';
const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  return (
    <div className='navbar flex justify-between items-center p-4 bg-gray-100 shadow-md'>
      {/* Logo and Brand Name */}
      <div className="nav-logo flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <p className='text-red-900 text-2xl font-semibold'>SHOPPER</p>
      </div>

      {/* Navigation Menu */}
      <ul className='nav-menu flex items-center gap-8'>
        <li  onClick={() => setMenu("Shop")} className={`flex justify-center gap-2 cursor-pointer text-gray-700 hover:text-indigo-600 hover:text-lg ${menu === "Shop" && "font-bold  underline decoration-indigo-500"}`}>
            <Link to='/'> Shop </Link> 
        </li>
        <li onClick={() => setMenu("Men")} className={`flex justify-center gap-2 cursor-pointer text-gray-700 hover:text-indigo-600 hover:text-lg ${menu === "Men" && "font-bold p-2  underline decoration-indigo-500"}`}>
        <Link to='/men'> Men</Link> 
        </li>
        <li onClick={() => setMenu("Women")} className={`flex justify-center gap-2 cursor-pointer text-gray-700 hover:text-indigo-600 hover:text-lg ${menu === "Women" && "font-bold  underline decoration-indigo-500"}`}>
        <Link to='/women'> Women </Link> 
        </li>
        <li onClick={() => setMenu("Kids")} className={`flex justify-center gap-2 cursor-pointer text-gray-700 hover:underline hover:text-lg hover:text-indigo-600 ${menu === "Kids" && "font-bold  underline decoration-indigo-500 "}`}>
        <Link to='/kids'> Kids </Link> 
        </li>
      </ul>

      {/* Login Button and Cart Icon */}
      <div className='nav-login-cart flex items-center gap-4'>
        <Link to='/login'> <button className='w-20 h-12 rounded-md bg-indigo-500 text-white font-semibold shadow-md hover:bg-indigo-600 transition-colors duration-300 focus:outline-none'>  Login</button></Link> 
        <div className="relative">
          <Link to='/cart'>          <img src={cart_icon} alt="Cart" className="w-10 h-10 cursor-pointer" />
          </Link>
          <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-semibold">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
