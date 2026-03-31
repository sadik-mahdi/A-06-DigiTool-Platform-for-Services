import React from 'react';
import { FaCheck } from 'react-icons/fa';

const pricing = () => {
  return (
    <div className=' py-40 space-y-10'>
          <div className='text-center'>
            <h2 className='font-bold text-4xl pb-4'>Simple, Transparent Pricing</h2>
            <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:items-center flex-wrap lg:grid-cols-3 gap-40 w-300 text-left mx-auto'>
            <div className='space-y-2 bg-white shadow-md px-10 pt-5 pb-15 rounded-2xl'>
              <h3 className='text-2xl font-bold'>Starter</h3>
              <p className='text-gray-500'>Perfect for getting started</p>
              <div>
                <span className='text-4xl font-bold'>$0</span>
                <span className='text-gray-500'>/month</span>
              </div>
              <div>
                <ul className='text-left'>
                  <li className='flex items-center gap-1 text-gray-500'><FaCheck color='green'/>Access to 10 free tools</li>
                  <li className='flex items-center gap-1 text-gray-500'><FaCheck color='green'/>Basic templates</li>
                  <li className='flex items-center gap-1 text-gray-500'><FaCheck color='green'/>Community support</li>
                  <li className='flex items-center gap-1 text-gray-500'><FaCheck color='green'/>1 project per month</li>
                </ul>
              </div>
              <button className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white px-10 py-2 rounded-full mt-10'>Get Started Free</button>
            </div>
            <div className='space-y-2 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-md px-10 pt-5 pb-15 rounded-2xl '>
              <h3 className='text-2xl font-bold '>Pro</h3>
              <p className='text-white-50'>Best for professionals</p>
              <div>
                <span className='text-4xl font-bold'>$29</span>
                <span className='text-white-500'>/month</span>
              </div>
              <div>
                <ul className='text-left'>
                  <li className='flex items-center gap-1 text-white-500'><FaCheck color='white'/>Access to all premium tools</li>
                  <li className='flex items-center gap-1 text-white-500'><FaCheck color='white'/>Unlimited templates</li>
                  <li className='flex items-center gap-1 text-white-500'><FaCheck color='white'/>Priority support</li>
                  <li className='flex items-center gap-1 text-white-500'><FaCheck color='white'/>Unlimited projects</li>
                  <li className='flex items-center gap-1 text-white-500'><FaCheck color='white'/>Cloud sync</li>
                  <li className='flex items-center gap-1 text-white-500'><FaCheck color='white'/>Advanced analytics</li>
                </ul>
              </div>
              <button className=' text-[#9514fa] bg-white font-bold px-10 py-2 border rounded-full mt-10'>Start Pro Trial</button>
            </div>
            <div className='space-y-2 bg-white shadow-md px-10 pt-5 pb-15 rounded-2xl'>
              <h3 className='text-2xl font-bold'>Starter</h3>
              <p className='text-gray-500'>Perfect for getting started</p>
              <div>
                <span className='text-4xl font-bold'>$0</span>
                <span className='text-gray-500'>/month</span>
              </div>
              <div>
                <ul className='text-left'>
                  <li className='flex items-center gap-1 text-gray-500'><FaCheck color='green'/>Access to 10 free tools</li>
                  <li className='flex items-center gap-1 text-gray-500'><FaCheck color='green'/>Basic templates</li>
                  <li className='flex items-center gap-1 text-gray-500'><FaCheck color='green'/>Community support</li>
                  <li className='flex items-center gap-1 text-gray-500'><FaCheck color='green'/>1 project per month</li>
                </ul>
              </div>
              <button className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white px-10 py-2 rounded-full mt-10'>Get Started Free</button>
            </div>
          </div>
    </div>
  );
};

export default pricing;