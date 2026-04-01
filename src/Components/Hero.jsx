import React from 'react';
import Logo from '../assets/banner.png';
import { FaRegDotCircle } from 'react-icons/fa';
import { CiPlay1 } from 'react-icons/ci';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full bg-base-200 mx-auto gap-10 pt-20 px-6 md:px-12">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-2xl">
        <button className="border rounded-2xl p-1 px-3 text-sm text-[#9514fa] font-semibold bg-blue-100 flex items-center gap-1">
          <span><FaRegDotCircle /></span>
          New: AI-Powered Tools Available
        </button>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-lg">
          Access premium AI tools, design assets, templates, and productivity 
          software—all in one place. Start creating faster today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
          <button className="btn p-4 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold shadow-md hover:opacity-90 transition-opacity">
            Explore Products
          </button>
          <button className="btn p-4 bg-white text-[#9514fa] border border-[#9514fa] rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <CiPlay1 /> Watch Demo
          </button>
        </div>
      </div>
      <div className="max-h-140 w-full max-w-md md:max-w-xl">
        <img src={Logo} alt="Hero Logo" className="w-full h-140 object-contain" />
      </div>
    </div>
  );
};

export default Hero;