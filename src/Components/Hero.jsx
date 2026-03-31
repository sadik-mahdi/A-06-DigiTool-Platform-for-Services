import React from 'react';
import Logo from '../assets/banner.png';
import { FaRegDotCircle } from 'react-icons/fa';
import { CiPlay1 } from 'react-icons/ci';

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row ">
        <div className='w-160'>
          <button className='border rounded-2xl p-1 text-sm text-[#9514fa] font-semibold bg-blue-100 flex items-center gap-1'><span><FaRegDotCircle /></span>New: AI-Powered Tools Available</button>
          <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
          <p className="py-6">
            Access premium AI tools, design assets, templates, 
            and productivity software—all in one place. 
            Start creating faster today.Explore Products
          </p>
          <div>
            <button className="btn p-4 rounded-4xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white mr-3"> Explore Products </button>
            <button className="bg-white text-[#9514fa] border-[#9514fa] btn rounded-4xl"><CiPlay1 />Watch Demo</button>
          </div>
        </div>
        <div className='max-h-140'>
          <img src={Logo} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;