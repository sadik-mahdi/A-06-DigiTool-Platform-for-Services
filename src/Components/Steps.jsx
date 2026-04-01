import React from 'react';
import usericon from '../assets/user.png'
import packageIcon from '../assets/package.png'
import rocketIcon from '../assets/rocket.png'

const Steps = () => {
  return (
    <div className='container bg-[#f9fafc] py-10 space-y-10 mx-auto'>
      <div className='text-center'>
        <h2 className='font-bold text-4xl pb-4'>Get Started in 3 Steps</h2>
        <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-40 text-center mx-auto'>
        <div className='space-y-2 bg-white shadow-md px-10 pt-5 pb-15'>
          <div className='text-white w-6 border-none rounded-full bg-[#9514fa] text-'>01</div>
          <img className='mx-auto border-none rounded-full p-2 bg-blue-100' src={usericon}  />
          <h3 className='font-bold'>Create Account</h3>
          <p>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className='space-y-2 bg-white shadow-md pt-5 pb-15 px-10'>
          <p className='text-white w-6 border-none rounded-full bg-[#9514fa]'>02</p>
          <img className='mx-auto border-none rounded-full p-2 bg-blue-100' src={packageIcon}  />
          <h3 className='font-bold'>Choose Products</h3>
          <p>Browse our catalog and select the tools
            that fit your needs.</p>
        </div>
        <div className='space-y-2 bg-white shadow-md pt-5 pb-15 px-10'>
          <p className='text-white w-6 border-none rounded-full bg-[#9514fa]'>03</p>
          <img className='mx-auto border-none rounded-full p-2 bg-blue-100' src={rocketIcon}  />
          <h3 className='font-bold'>Start Creating</h3>
          <p>Download and start using your premium 
            tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;