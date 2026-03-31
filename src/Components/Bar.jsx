import React from 'react';

const Bar = () => {
  return (
    <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] mt-20 text-white flex justify-between p-10 font-bold px-80'>
      <div className='px-10'>
        <h2 className='text-6xl'>50K+</h2>
        <p className='text-xl'>Active Users</p>
      </div>
      <div className='border-r'></div>
      <div>
        <h2 className='text-6xl'>200+</h2>
        <p className='text-xl'>Premium Tools</p>
      </div>
      <div className='border-r'></div>
      <div className='px-10'>
        <h2 className='text-6xl'>4.9</h2>
        <p className='text-xl'>Rating</p>
      </div>
    </div>
  );
};

export default Bar;