import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
  return (
    <div className="fixed w-full flex p-4 mx-auto bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" >
            <h1 className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent font-bold text-3xl h-10">Digitools</h1>
          </div>
        </div>
      </div>
      <div className="navbar-center gap-2 md:gap-4 ">
        <a className="text-sm font-bold text-[#101727]">Products</a>
        <a className="text-sm font-bold text-[#101727]">Features</a>
        <a className="text-sm font-bold text-[#101727]">Pricing</a>
        <a className="text-sm font-bold text-[#101727]">Testimonials</a>
        <a className="text-sm font-bold text-[#101727]">FAQ</a>
      </div>
      <div className="navbar-end gap-2">
        <button ><CiShoppingCart /></button>
        <button><a href='#'>Login</a></button>
        <button className="btn p-4 rounded-4xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
          <div className='flex'>
            <span>Get</span> 
            <span>Started</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;