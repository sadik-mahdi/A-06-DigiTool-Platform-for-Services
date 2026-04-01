import React, { use } from 'react';
import ToolsCard from '../ToolsCard';

const Tools = ({toolsPromise}) => {
  const tools = use(toolsPromise);

  return (
    <div className='container mx-auto px-4 py-10'>
      
      <div className='text-center py-10 space-y-5'>
        <h2 className='font-bold text-3xl'>Premium Digital Tools</h2>
        <p>Choose from our curated collection of premium digital products designed<br></br>
        to boost your productivity and creativity.</p>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 '>
        {
          tools.map((tool) => (
            <ToolsCard key={tool.id} tool={tool} />
          ))
        }
      </div>
    </div>
  );
};

export default Tools;