import React from 'react';

const Cart = ({carts}) => {
  console.log(carts);
  return (
    <div className='p-10'>
      <h1 className='text-2xl font-bold'>Your Cart</h1>
      {
        carts.map((cart) => (
          <div className='flex justify-between items-center border border-none bg-blue-50 my-4 rounded-xl' key={cart.id}>
            <div className='w-1/7'>
              <img src="./" alt="" srcset="" />
            </div>
            <div className='flex-col gap-5 items-start w-5/7 '>
              <h3>{cart.name}</h3>
              <p>{cart.price}</p>
            </div>
            <div className='w-1/7 text-red-500'>
              <button >Remove</button>
            </div>
          </div>
        ))
      }
      <div className='space-y-5'>
        <div className='flex justify-between'>
        <p>Total :</p>
        <h2>$0</h2>
      </div>
        <div className='text-center border p-3 rounded-2xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'>
          <button >Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;