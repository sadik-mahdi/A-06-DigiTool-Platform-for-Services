import React, { useState } from 'react';

const ToolsCard = ({tool,carts, setCart}) => {
  const [isBuyNow, setIsBuyNow] = useState(false);
  const handleBuyNow = () => {
    setIsBuyNow(true)
    setCart([...carts,tool]);
    console.log(carts);
  }

  return (
    <div className='border shadow-2xl p-4 rounded-2xl space-y-2' key={tool.id}>
      <div><p className='border bg-base-200 rounded-2xl p-2'>{tool.tag}</p></div>
      <h2 className='font-bold text-3xl text-left'>{tool.name}</h2>
      <p className='text-[#627382]'>{tool.description}</p>
      <div>
        <p><span className='font-bold text-2xl'>${tool.price}</span>/{tool.period}</p>
      </div>
      <div>
        {/* {tool.features?.map((feature, index) => (

        ))} */}
      </div>
      <button onClick={handleBuyNow} className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-full p-2 rounded-full'> {isBuyNow ? "Added to Cart" : "Buy Now"}</button>
</div>
  );
};

export default ToolsCard;