import React from 'react';

const Bar = () => {
  return (
    <div className='grid grid-cols-3 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-full justify-between items-center my-10 mx-auto p-10 font-bold '>
      <div className='text-center'>
        <h2 className='text-6xl'>50K+</h2>
        <p className='text-xl'>Active Users</p>
      </div>

      
      <div className='text-center'>
        <h2 className='text-6xl'>200+</h2>
        <p className='text-xl'>Premium Tools</p>
      </div>

      
      <div className='text-center'>
        <h2 className='text-6xl'>4.9</h2>
        <p className='text-xl'>Rating</p>
      </div>
    </div>
  );
};

export default Bar;